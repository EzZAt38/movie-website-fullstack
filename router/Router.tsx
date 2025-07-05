import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from "react-router-dom";
import {default as Home} from "../src/pages/Home";
import Navbar from "../src/ui/Navbar";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Search from "../src/pages/Search";

export const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/react-product-porject/" element={<><Navbar/> <Outlet/></>}>
    <Route index element={<Home/>}/>
    <Route path="About" element={<About/>}/>
    <Route path="Contact" element={<Contact/>}/>
    <Route path="search" element={<Search/>}/>
    </Route>
    </>
))