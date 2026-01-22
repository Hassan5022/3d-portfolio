import React from "react";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const ServiceCard = ({ index, title, icon }) => {
  const cardRef = useRef(null);

  // Mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth motion
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  // Map to rotation values
  const rotateX = useTransform(springY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();

    const posX = (e.clientX - rect.left) / rect.width - 0.5;
    const posY = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(posX);
    y.set(posY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div className="xs:w-[250px] w-full" style={{ perspective: 1000 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          style={{ transform: "translateZ(40px)" }}
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a Software Engineer with professional experience in building
        scalable, secure, and high-performing web applications. I specialize in
        creating modern, responsive user interfaces using React and related
        frontend technologies, with a strong emphasis on clean architecture,
        performance, and maintainability. Currently working in the fintech
        domain, I have hands-on experience integrating frontend applications
        with complex backend systems, RESTful APIs, and payment platforms. I
        collaborate closely with backend and DevOps teams to ensure reliable
        data flow, secure communication, and smooth deployments.
        <br />
        <br />
        In addition to enterprise application development, I enjoy enhancing
        user experiences through motion and interactivity, using tools like
        Framer Motion, GSAP, and Three.js where appropriate. This allows me to
        build interfaces that are not only functional and scalable, but also
        engaging and visually polished.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
