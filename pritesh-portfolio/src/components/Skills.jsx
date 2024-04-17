
import { content } from "../content";



const Skills = () => {
  const { skills } = content;

  return (
    <section className="min-h-fit  bg-blue-50" id="skills">

      <div className="md:container px-5  py-14">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <div className="flex flex-wrap gap-4 justify-center">

          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-down"
              data-aos-delay={i * 300}
              className="bg-white cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200 shadow-lg"
            >
              <img
                src={skill.logo}
                alt="..."
                className="w-10 group-hover:scale-125 duration-200"
              />
              <div>
                <h6>{skill.name}</h6>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
