import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useEffect } from "react";

const Contact = () => {
  const handleOpenEmail = () => {
    const toEmail = "shivam10nanda@gmail.com";
    const mailtoUrl = `mailto:${toEmail}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div id="buttons">
          <a href="https://github.com/ShivamNanda-24">
            <div className="github button">
              <i className="icon">
                <i className="icon-github"></i>
              </i>
              <div className="slide">
                <p>GitHub</p>
              </div>
            </div>
          </a>

          <div className="google-mail button" onClick={handleOpenEmail}>
            <i className="icon">
              <i className="icon-mail fas fa-envelope"></i>
            </i>
            <div className="slide">
              <p>Gmail</p>
            </div>
          </div>

          <a href="https://www.linkedin.com/in/shivam-nanda-141573136/">
            <div className="linkedin button">
              <i className="icon">
                <i className="icon-linkedin"></i>
              </i>
              <div className="slide">
                <p>LinkedIn</p>
              </div>
            </div>
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1'
      >
        <EarthCanvas />
      </motion.div>

    </div>
  );
};

export default SectionWrapper(Contact, "contact");
