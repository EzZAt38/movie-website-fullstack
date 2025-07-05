import { InputHTMLAttributes } from "react";
import { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * Button component props interface.
 * Extends the default HTML button attributes and adds custom props.
 */
export interface IBtn extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string; // Tailwind color classes for button background
  children: ReactNode; // Button display text
  width?: "w-full" | "w-fit"; // Optional width utility class
}
export interface Imovie {
  adult: boolean;
  id?: number;
  title: string;
  overview: string;
  poster_path: string
  poster_Base?:"https://image.tmdb.org/t/p/w500" | ""
}
/**
 * Centralized style/class name definitions for consistency across the app.
 */
export const styles = {
  submit: "bg-indigo-700 shadow-indigo-400 hover:bg-indigo-900", // Submit button style
  delete: "bg-[#c2344d] shadow-red-400 hover:bg-red-900", // Delete button style
  icardparents:
    "border  border-dashed  text-white border-[#80b1ff] rounded-md p-2 flex flex-col justify-between w-fit", // Card container style
  responsiveScreen:
    "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-3 ", // Responsive grid
  icardHeader: " flex flex-col justify-around", // Card header style
  ballsParent: "list-none flex max-w-[25%] justify-between my-2", // Decorative balls container
  majorBallStyle: "rounded-full w-5 h-5", // Decorative ball style
  categoryAndPrice: "flex items-center justify-between", // Category and price row
};
