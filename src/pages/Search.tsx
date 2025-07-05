import { useEffect, useState } from "react";
import Header from "../components/Header";
import ButtonComponent from "../ui/ButtonComponent";
import { styles } from "../interfaces/interface";
import { IoIosSearch } from "react-icons/io";
import ProductCard from "../components/ProductCard";

// Interface for OMDb API search result
interface DataSearch {
  Poster: string;
  Title: string;
  Plot: string;
}

const Search = () => {
  // State for input field, search trigger, and fetched movie data
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");
  const [dataSearch, setDataSearch] = useState<DataSearch>({
    Plot: "",
    Poster: "",
    Title: "",
  });

  // Fetch movie data from OMDb API when 'search' changes
  useEffect(() => {
    if (!search) return;
    const fetchData = async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=51e00c09&t=${search}`
      );
      const data = await response.json();
      setDataSearch(data);
    };
    fetchData();
  }, [search]);

  // Handle form submit: set search state to trigger API call
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(inputValue.trim());
  };

  return (
    <div>
      <Header>
        {/* Search label */}
        <label htmlFor="search" className="z-10 font-semibold text-lg">
          Search for any movie
        </label>
        {/* Search form with input and button */}
        <form
          onSubmit={handleSubmit}
          className="z-10 flex items-center space-x-3"
        >
          <input
            type="text"
            id="search"
            className="mt-3 block w-full z-10 rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white"
            placeholder="Enter movie title..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <ButtonComponent
            color="bg-red-300"
            className={`${styles.submit} z-10 p-2 rounded-full`}
            onClick={() => setSearch(inputValue.trim())}
          >
            <IoIosSearch className="text-xl" />
          </ButtonComponent>
        </form>
      </Header>
      {/* Display search result as a movie card if found */}
      <div className={`${styles.responsiveScreen} container mx-auto pt-2`}>
        {dataSearch.Title && (
          <ProductCard
            adult={false}
            poster_path={dataSearch.Poster}
            overview={dataSearch.Plot}
            title={dataSearch.Title}
            poster_Base=""
          />
        )}
      </div>
    </div>
  );
};

export default Search;