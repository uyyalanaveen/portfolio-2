import { BsCodeSlash } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaPython,
  FaNodeJs,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaJs,
} from "react-icons/fa";
import { FaC } from "react-icons/fa6";

export const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  export const socialLinks = [
    { href: "https://github.com/uyyalanaveen", icon: FaGithub},
    { href: "https://www.linkedin.com/in/uyyalanaveen", icon: FaLinkedin},
    {href:"https://www.instagram.com/uyyalanavin",icon:FaInstagram},

  ];
  
  export const interestsData = [
    {
      interest: "Web Development",
      icon: BsCodeSlash,
    },
    {
      interest: "App Development",
      icon: BsCodeSlash,
    },
    {
      interest: "IoT",
      icon: BsCodeSlash,
    },
    
    
  ];

  export const skills = [
    {
      icon : FaHtml5,
      title : "Html5"
    },
    {
      icon : FaCss3,
      title : "Css"
    },
    {
      icon : FaJs,
      title : "Java script"
    },
    {
      icon : FaReact,
      title : "React js"
    },
    {
      icon : FaC,
      title : "C lang"
    },
    {
      icon : TbBrandCpp,
      title : "Cpp"
    },
    {
      icon : FaPython,
      title : "Python"
    },
    {
      icon : FaHtml5,
      title : "Html5"
    },
    {
      icon : FaCss3,
      title : "Css"
    },
    {
      icon : FaJs,
      title : "Java script"
    },
    {
      icon : FaReact,
      title : "React js"
    },
    {
      icon : FaC,
      title : "C lang"
    },
    {
      icon : TbBrandCpp,
      title : "Cpp"
    },
    {
      icon : FaPython,
      title : "Python"
    }
  ]

import gfinder from '../assets/gfinder.png'
import portfolio from '../assets/portfolio.png'
export const projects = [
    {
      title: "GFinderr",
      img: gfinder,
      Github_url: "https://github.com/uyyalanaveen/GFinderr",
      Project_url: "https://g-finder.vercel.app/",
    },
    {
      title: "Portfolio",
      img: portfolio,
      Github_url: "https://github.com/uyyalanaveen/portfolio-2",
      Project_url: "https://portfolio-chi-snowy-31.vercel.app/",
    },
    {
      title: "GFinderr",
      img: gfinder,
      Github_url: "https://github.com/uyyalanaveen/GFinderr",
      Project_url: "https://g-finder.vercel.app/",
    },

  ]