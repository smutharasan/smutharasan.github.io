import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [Loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      "service_jl68i15",
      "template_v6rftl7",
      {
        from_name: form.name,
        to_name: "Supriya Mutharasan",
        from_email: form.email,
        to_email: "supriyamutharasan@gmail.com",
        message: form.message,
      },
      "tGZYvekWCYElUIy5N"
    ).then((response) => {
      setLoading(false);
      alert('Thanks for your message!')
      setForm({ name: "", email: "", message: "" });

    }).catch((err) => {setLoading(false);
    console.error(err)}
  };

  //tGZYvekWCYElUIy5N
  // template_v6rftl7
  //service_jl68i15
  return (
    <div>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="rounded-2xl flex-[0.75] bg-black-100 p-8"
        >
          <p className={styles.sectionSubText}>Get In Touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label htmlFor="name" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name?"
                className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <label htmlFor="email" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email?"
                className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <label htmlFor="message" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                row="8"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <button
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
              type="submit"
            >
              {Loading ? "Sending ..." : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
          variants={slideIn("right", "tween", 0.2, 1)}
        >
          <EarthCanvas></EarthCanvas>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
