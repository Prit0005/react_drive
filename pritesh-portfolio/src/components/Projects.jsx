import React from "react";
import { content } from "../content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Projects = () => {
  const { Projects } = content;

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <Swiper

            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
            data-aos="fade-left"
          >
            {Projects.project_content.map((content, index) => (
              <SwiperSlide key={index} className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit">
                <img src={content.image} alt={content.title} />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <a href={content.readmore} className="font-bold text-gray self-end" target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
