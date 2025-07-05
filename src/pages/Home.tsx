import { useEffect, useState, useRef } from "react";
import ProductCard from "../components/ProductCard";
import { Imovie, styles } from "../interfaces/interface";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ButtonComponent from "../ui/ButtonComponent";
import { FaChevronUp } from "react-icons/fa";

type MovieList = Imovie[];

const Home = () => {
  // State for current page, loaded movies, loading status, and scroll helpers
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<MovieList>([]);
  const [loading, setLoading] = useState(false);
  const isFetching = useRef(false); // Prevents duplicate fetches
  const [showTop, setShowTop] = useState(false); // Controls "Back to Top" button

  // Infinite scroll: load more movies when near bottom, show "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (nearBottom && !isFetching.current) {
        setPage((prev) => prev + 1);
        isFetching.current = true;
      }
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch movies from TMDb API when page changes
  useEffect(() => {
    setLoading(true);
    (async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=b8f25495ba5b55fcaf89370d400e4250&language=en-US&page=${page}`
      );
      const data = await response.json();
      setMovies((prev) => [...prev, ...data.results]);
      setLoading(false);
      isFetching.current = false;
    })();
  }, [page]);

  // Scroll to top smoothly when "Back to Top" button is clicked
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      {/* Show "Back to Top" button when user scrolls down */}
      {showTop && (
        <ButtonComponent
          color="bg-indigo-600"
          className="fixed bottom-8 right-8 z-50 px-4 py-2 rounded-md text-white bg-red-600"
          onClick={handleBackToTop}
        >
          <FaChevronUp />
        </ButtonComponent>
      )}

      {/* Header section with a tagline */}
      <Header>
        <p className="text-white z-30 text-2xl">Watch and enjoy</p>
      </Header>

      {/* Movie cards grid */}
      <div className={`${styles.responsiveScreen} container mx-auto pt-2`}>
        {movies.map((movie, idx) => (
          <ProductCard
            key={movie.id || idx}
            poster_Base="https://image.tmdb.org/t/p/w500"
            adult={movie.adult}
            id={movie.id}
            overview={movie.overview}
            poster_path={movie.poster_path}
            title={movie.title}
          />
        ))}
        {/* Loading indicator while fetching more movies */}
        {loading && (
          <div className="text-center py-4 text-white">Loading...</div>
        )}
      </div>

      {/* Toast notifications and nested routes */}
      <Toaster />
      <Outlet />
    </main>
  );
};

export default Home;