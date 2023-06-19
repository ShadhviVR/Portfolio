// This file contains the data for the projects and navbarbar items.
import { TypeMyData, TypeNavbar } from "./Models";
import Movie from "../assets/project-1.png";
import Social from "../assets/project-2.png";
import Resto from "../assets/project-3.png";
import Error from "../assets/project-4.png";
import Hangman from "../assets/project-5.png";
import Cookie from "../assets/project-6.png";
import Issue from "../assets/project7.png";
import Budget from "../assets/project8.png";

export const data: TypeMyData[] = [
  {
    id: 1,
    title: "Budgeted Expense App",
    img_url: `${Budget}`,
    link: "https://budget-buddy-shadhvivr.vercel.app/",
  },
  {
    id: 2,
    title: "Movie-Streaming App",
    img_url: `${Movie}`,
    link: "https://net-vibe-shadhvivr.vercel.app/",
  },
  {
    id: 3,
    title: "Social App",
    img_url: `${Social}`,
    link: "https://flip-flop-shadhvivr.vercel.app/",
  },

  {
    id: 4,
    title: "Restaurant App",
    img_url: `${Resto}`,
    link: "https://shadhvivr.github.io/resto_NT.github.io/",
  },
  {
    id: 5,
    title: "Issue Tracker",
    img_url: `${Issue}`,
    link: "https://bye-bug-shadhvivr.vercel.app/issues",
  },
  {
    id: 6,
    title: "Error Page",
    img_url: `${Error}`,
    link: "https://shadhvivr.github.io/Error404/",
  },
  {
    id: 7,
    title: "Hangman",
    img_url: `${Hangman}`,
    link: "https://shadhvivr.github.io/Hangman/",
  },
  {
    id: 8,
    title: "Cookie-Clicker Game",
    img_url: `${Cookie}`,
    link: "https://cookie-clicker-shadhvivr.vercel.app/",
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
