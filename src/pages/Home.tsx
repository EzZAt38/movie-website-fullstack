import { useEffect, useState, useRef } from "react";
import ProductCard from "../components/ProductCard";
import { Imovie, styles } from "../interfaces/interface";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

type movieLsit = Imovie[];

const Home = () => {
  const [page, setPage] = useState(1);
  const [addProduct, setAddProduct] = useState<movieLsit>([]);
  const [loading, setLoading] = useState(false);
  const isFetching = useRef(false);

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        !isFetching.current
      ) {
        setPage((prev) => prev + 1);
        isFetching.current = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch movies when page changes
  useEffect(() => {
    setLoading(true);
    (async () => {
      const featchData = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=b8f25495ba5b55fcaf89370d400e4250&language=en-US&page=${page}`
      );
      const data = await featchData.json();
      setAddProduct((prev) => [...prev, ...data["results"]]);
      setLoading(false);
      isFetching.current = false;
      const resp = await fetch("/api/v2/hianime/home");
const data2 = await resp.json();
console.log(data2);
    })();
  }, [page]);

  return (
    <main>
      <Header>
            <p className="text-white z-30 text-2xl">watch and enjoy</p>
      </Header>
      {/* Product List */}
      <div className={`${styles.responsiveScreen} container mx-auto pt-2`}>
        {addProduct.map((movie, idx) => (
          <ProductCard
            key={idx}
            poster_Base="https://image.tmdb.org/t/p/w500"
            adult={movie.adult}
            id={movie.id}
            overview={movie.overview}
            poster_path={movie.poster_path}
            title={movie.title}
          />
        ))}
        {loading && (
          <div className="text-center py-4 text-white">Loading...</div>
        )}
      </div>
      <Toaster />
      <Outlet />
    </main>
  );
};

export default Home;
