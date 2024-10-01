import React from "react";
import heroImg from "../assets/hero.webp";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from "../Utilitis/animationVariants";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-heroBg text-white
     flex items-center pt-28 md:h-screen"
    >
      <div className=" container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full ">
        {/* left side */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <h1 className="text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug">
            Strat Your Journey to Mental Wellness
          </h1>
          <p className="text-lg mb-12 md:pr-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            quo possimus, suscipit saepe recusandae impedit autem, aperiam,
            libero asperiores nisi voluptas! Sit, aliquid dolores mollitia
            libero culpa cum corporis assumenda!
          </p>
          <button className="bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90 ">
            <a href="#contact" className="flex gap-1 items-center ">
              <span>Get started</span>
              <IoArrowBackCircleSharp />
            </a>
          </button>
        </motion.div>

        {/* right side */}

        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2 h-full"
        >
          <img src={heroImg} alt="hero image" className="w-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
