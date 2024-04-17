import { content } from "../content";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-bg_light_primary mb-28">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="items-center ">
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-2xl
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />

            <div class="relative inline-block">
              <a href={Hireme.link} class="group rounded-md inline-flex items-center px-8 py-5 border-2 border-black bg-transparent text-black font-bold text-xs uppercase tracking-wider cursor-pointer hover:bg-black hover:text-white transition-colors duration-300">
                <span class="absolute bottom-0 right-4 h-0.5 w-4 bg-gray-300 group-hover:w-0 transition-all duration-500"></span>
                {Hireme.btnText}
              </a>
            </div>

          </div>
        </div >
      </div>
    </section>
  );
};

export default Hireme;
