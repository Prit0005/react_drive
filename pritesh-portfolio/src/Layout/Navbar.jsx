import { useState } from "react";
import { content } from "../content.js";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
    const { nav } = content;
    const [showMenu, setShowMenu] = useState(false);
    const [active, setActive] = useState(0);
    const menuIconStyle = {
        transform: showMenu ? 'rotate(90deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease',
        color: showMenu ? '#ff5722' : '#000',
    };
    return (
        <div className="w-full flex justify-center">
            <div data-aos="slide-right"

                className="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-white/40 p-2"
                onClick={() => setShowMenu(!showMenu)}
            >
                <HiMenuAlt2 size={34} style={menuIconStyle} />
            </div>
            <nav
                className={`fixed  z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full bg-orange-50 duration-300 ${showMenu ? "bottom-10" : "bottom-[-100%]"
                    }`}
            >
                {nav.map((item, i) => (
                    <a key={i}
                        href={item.link}
                        onClick={() => setActive(i)}
                        className={`text-xl p-2.5 rounded-full sm:cursor-pointer 
     ${i === active && "bg-red-600 text-white"} `}
                    >
                        {createElement(item.icon)}
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default Navbar;
