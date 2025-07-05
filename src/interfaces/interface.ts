import { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * Button component props interface.
 * Extends the default HTML button attributes and adds custom props.
 */
export interface IBtn extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;                // Tailwind color classes for button background
  children: ReactNode;          // Button display text or elements
  width?: "w-full" | "w-fit";   // Optional width utility class
}

/**
 * Movie object interface.
 */
export interface Imovie {
  adult: boolean;
  id?: number;
  title: string;
  overview: string;
  poster_path: string;
  poster_Base?: "https://image.tmdb.org/t/p/w500" | "";
}

/**
 * Centralized style/class name definitions for consistency across the app.
 */
export const styles = {
  submit: "bg-indigo-700 shadow-indigo-400 hover:bg-indigo-900",
  icardparents: "border border-dashed text-white border-[#80b1ff] rounded-md p-2 flex flex-col justify-between w-fit",
  responsiveScreen: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-3",
  icardHeader: "flex flex-col justify-around",
};