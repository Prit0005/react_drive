// import content
import { useState } from "react";
import { content } from "../content";
import "./Hero.css"
const Hero = () => {
    const { hero } = content;
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const toggleOverlay = () => {
        setIsOverlayOpen(!isOverlayOpen);
    };


    return (
        <section id="home" className="overflow-hidden">
            <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
                <div
                    data-aos="slide-left"
                    data-aos-delay="1200"
                    className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10">
                    <h1 className="rotate-90 absolute top-[30%]  md:top-[40%] right-[-15%] text-[#EAF2FA]">
                        {hero.firstName}{" "}
                        <span className="text-dark_primary">{hero.LastName}</span>
                    </h1>
                </div>

                <div className="pb-16 px-6 pt-5" data-aos="fade-down">
                    <h2>{hero.title}</h2>
                    <div className=" my-10">
                        {hero.hero_content.map((content, i) => (
                            <div
                                key={i}
                                data-aos="fade-down"
                                data-aos-delay={i * 300}
                                className={" w-80 "}>
                                <p>{content.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="">
                        {/* <button className="btn" onClick={toggleOverlay}></button> */}

                        <div class="relative inline-block">
                            <a href="#" onClick={toggleOverlay} class="group rounded-md inline-flex items-center px-8 py-5 border-2 border-black bg-transparent text-black font-bold text-xs uppercase tracking-wider cursor-pointer hover:bg-black hover:text-white transition-colors duration-300">
                                <span class="absolute bottom-0 right-4 h-0.5 w-4 bg-gray-300 group-hover:w-0 transition-all duration-500"></span>
                                {hero.btnText}
                            </a>
                        </div>

                    </div>
                </div>


                <div className="md:h-[37rem] h-96">
                    <img
                        src={hero.image}
                        data-aos="slide-up"
                        alt="..."
                        className="h-full object-cover hidden md:block"
                    />
                </div>
            </div>
            {isOverlayOpen && (
                <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-black bg-opacity-50">
                    <div data-aos="slide-left" className="bg-white p-4">
                        <button onClick={toggleOverlay}>Close</button>
                        <iframe
                            src={hero.resumePdf}
                            className="responsive-iframe"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Hero;
