import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = ({onExploreClick}) => {
  return (
    <section className="bg-gradient-to-b mx-auto max-w-full from-white to-blue-50 py-12 px-4 md:px-10 lg:px-24 rounded-lg">
      <div className="max-w-7xl mx-auto hidden lg:grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Find Your <span className="text-blue-600">Dream Job</span> Today
          </h1>
          <p className="mt-6 text-base text-gray-600">
            JobTrack helps you explore job opportunities, connect with top
            companies, and land the job you deserve — fast and easily.
          </p>
          <button onClick={()=>onExploreClick()} className="mt-8 inline-flex items-center gap-2 btn-primary text-white font-semibold px-6 py-3 rounded-lg btn">
            <FaBriefcase />
            Explore Jobs
          </button>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <img
            src="https://i.ibb.co.com/tTRnnrPk/Screenshot-2025-05-05-164433.png"
            alt="Job search illustration"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto lg:hidden flex flex-col items-center gap-12">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Find Your <span className="text-blue-600">Dream Job</span> Today
          </h1>
          <p className="mt-6 text-base text-gray-600">
            JobTrack helps you explore job opportunities, connect with top
            companies, and land the job you deserve — fast and easily.
          </p>
          <button onClick={()=>onExploreClick()} className="mt-8 inline-flex items-center gap-2 btn-primary text-white font-semibold px-6 py-3 rounded-lg btn">
            <FaBriefcase />
            Explore Jobs
          </button>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <img
            src="https://i.ibb.co.com/tTRnnrPk/Screenshot-2025-05-05-164433.png"
            alt="Job search illustration"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
