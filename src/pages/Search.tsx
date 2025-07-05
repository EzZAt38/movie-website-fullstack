import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import InputFiled from "../ui/InputField";
import { Button } from "@headlessui/react";
import ButtonComponent from "../ui/ButtonComponent";
import { styles } from "../interfaces/interface";
import { IoIosSearch } from "react-icons/io";
import ProductCard from "../components/ProductCard";
interface dataSearch {
  Poster: string;
  Title: string;
  Writer: string;
  Actors: string;
  Plot: string;
  imdbRating?: string;
}
const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");
  const [dataSearch, setDataSearch] = useState<dataSearch>({
    Actors: "",
    Plot: "",
    Poster: "",
    Title: "",
    Writer: "",
    imdbRating: "",
  });
  const url = `http://www.omdbapi.com/?apikey=51e00c09&t=${search}`;
  useEffect(() => {
    (async () => {
      const featchData = await fetch(url);
      const data = await featchData.json();
      console.log(data.Poster);
      setDataSearch(data);
    })();
  }, [search]);
  return (
    <div>
      <Header>
        <label htmlFor="search" className="z-10 font-semibold text-lg">
          search for whatever you want
        </label>
        <div className="z-10 flex items-center space-x-3">
          <input
            type="text"
            className="mt-3 block w-full z-10 rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white"
            id="search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <ButtonComponent
            color="bg-red-300"
            className={`${styles.submit} z-10 bg-[#0A400C] p-2 rounded-full `}
            onClick={() => {
              setSearch(inputValue);
            }}
          >
            <IoIosSearch className="text-xl" />
          </ButtonComponent>
        </div>
      </Header>
      <div className={`${styles.responsiveScreen} container mx-auto pt-2`}>
        <ProductCard
          adult={false}
          poster_path={dataSearch.Poster}
          overview={dataSearch.Plot}
          title={dataSearch.Title}
          poster_Base=""
        />
      </div>
    </div>
  );
};

export default Search;
