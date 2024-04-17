// // import hero images
import Hero_person from "./assets/images/Hero/person.png";


//import skill images
import reactjs from "./assets/images/Skills/react.png";
import jquery from "./assets/images/Skills/jquery.jpg";
import js from "./assets/images/Skills/js.jpeg"
import bootstrap from "./assets/images/Skills/bootstrap.jpeg"
import css from "./assets/images/Skills/css.jpeg"
import html from "./assets/images/Skills/html.jpg"
import git from "./assets/images/Skills/git.jpeg"
import github from "./assets/images/Skills/github.png"




import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";



// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
    nav: [
        {
            link: "#home",
            icon: TbSmartHome,
        },
        {
            link: "#skills",
            icon: BiUser,
        },
        {
            link: "#projects",
            icon: RiProjectorLine,
        },
        {
            link: "#contact",
            icon: MdOutlinePermContactCalendar,
        },
    ],
    hero: {
        title: "Frontend Developer",
        firstName: "PRITESH",
        LastName: "SENJALIYA",
        btnText: "Resume",
        resumePdf: "./resume/Pritesh-Senjaliya.pdf",
        image: Hero_person,
        hero_content: [
            {
                text: "I'm a newly graduated front-end developer with skills in HTML, CSS, JavaScript, and React, passionate about building user-friendly websites and eager to learn and grow in the tech industry.",
            },
        ],
    },
    skills: {
        title: "Skills",
        subtitle: "MY TOP SKILLS",
        skills_content: [
            {
                name: "React js",

                logo: reactjs,
            },
            {
                name: "Jquery",

                logo: jquery,
            },
            {
                name: "Java Script",

                logo: js,
            },
            {
                name: "Bootstrap",

                logo: bootstrap,
            },
            ,
            {
                name: "Css",
                logo: css,
            },
            {
                name: "Html",

                logo: html,
            },
            {
                name: "Git",

                logo: git,
            },
            {
                name: "Git-Hub",

                logo: github,
            }
        ],
        icon: MdArrowForward,
    },
    Projects: {
        title: "Projects",
        subtitle: "MY CREATION",
        project_content: [
            {
                title: "real estatein",
                image: project1,
                readmore: "https://estatein-pritesh.netlify.app"

            },
            {
                title: "Random password generator",
                image: project2,
                readmore: "https://github.com/Prit0005/react_drive/tree/main/password-generator"
            },
        ],
    },
    Hireme: {
        title: "Hire Me",
        subtitle: "FOR YOUR PROJECTS",
        link: "mailto:senjaliyapritesh37@gmail.com",
        para: " As a fresh front-end developer, I bring innovative ideas and the latest coding practices to your team, coupled with a passionate eagerness to learn and adapt quickly to new challenges and technologies.",
        btnText: "Hire Me",
    },
    Contact: {
        title: "Contect Me",
        subtitle: "GET IN TOUCH",
        social_media: [
            {
                text: "senjaliyapritesh37@gmail.com",
                icon: GrMail,
                link: "mailto:senjaliyapritesh37@gmail.com",
            },
            {
                text: "+91 9586653146",
                icon: MdCall,
                link: "https://wa.me/9586653146",
            },
            {
                text: "silvr.shadez_",
                icon: BsInstagram,
                link: "https://www.instagram.com/silvr.shadez_/",
            },
            {
                text: "Pritesh Senjaliya",
                icon: BsLinkedin,
                link: "https://www.linkedin.com/in/pritesh-senjaliya/",
            }
        ],
    },
    Footer: {
        text: "All © Copy Right Reserved 2024",
    },
};
