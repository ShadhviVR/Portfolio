// This file contains the data for the projects and navbarbar items.
import { TypeMyData, TypeNavbar } from "./Models";
import Movie from "../assets/project-1.png";
import Social from "../assets/project-2.png";
import Resto from "../assets/project-3.png";
import Error from "../assets/project-4.png";
import StarWars from "../assets/project-5.png";
import Cookie from "../assets/project-6.png";

export const data: TypeMyData[] = [
  {
    id: 1,
    title: "Movie-Streaming App",
    img_url: `${Movie}`,
    link: "",
  },
  {
    id: 2,
    title: "Social App",
    img_url: `${Social}`,
    link: "",
  },

  {
    id: 3,
    title: "Restaurant App",
    img_url: `${Resto}`,
    link: "https://shadhvivr.github.io/resto_NT.github.io/",
  },

  {
    id: 4,
    title: "Error Page",
    img_url: `${Error}`,
    link: "https://shadhvivr.github.io/Error404/",
  },
  {
    id: 5,
    title: "Star Wars",
    img_url: `${StarWars}`,
    link: "",
  },
  {
    id: 6,
    title: "Cookie-Clicker Game",
    img_url: `${Cookie}`,
    link: "https://liolle.github.io/CookieClicker/",
  },
];

export const listNavBar: TypeNavbar[] = [
  {
    id: 1,
    item: "Home",
    icon: "uil uil-home",
    href: "home",
  },
  {
    id: 2,
    item: "About",
    icon: "uil uil-user",
    href: "about",
  },
  {
    id: 3,
    item: "Skills",
    icon: "uil uil-file-alt",
    href: "skills",
  },
  {
    id: 4,
    item: "Projects",
    icon: "uil uil-briefcase-alt",
    href: "projects",
  },
  {
    id: 5,
    item: "Contact",
    icon: "uil uil-envelope",
    href: "contact",
  },
];
