import { createElement, useRef } from "react";
import { content } from "../content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_96zfet8', 'template_aup5jxx', form.current, 'ob5Qrh-EfwOljYYID'
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="bg-red-200 text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-blue" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 flex flex-col gap-5"
          >
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
              data-aos="fade-right"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded"
              data-aos="fade-left"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required
              data-aos="fade-right"
            ></textarea>

            <div class="relative inline-block">
              <button type="submit" class="group rounded-md inline-flex items-center px-8 py-5 border-2 border-black bg-transparent text-white font-bold text-xs uppercase tracking-wider cursor-pointer hover:bg-white hover:text-black transition-colors duration-300">
                <span class="absolute bottom-0 right-4 h-0.5 w-4 bg-gray-300 group-hover:w-0 transition-all duration-500"></span>
                Submit
              </button>
            </div>

          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-blue">{createElement(content.icon)}</h4>
                <a className="font-Poppins text-white" href={content.link} target="_blank">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
