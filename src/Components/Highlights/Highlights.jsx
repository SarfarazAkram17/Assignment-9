import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Highlights = () => {
  const cards = [
    {
      img: "https://www.interreg-central.eu/wp-content/uploads/2022/11/library-website.jpg",
      count: 87,
      label: "Total Available Jobs",
    },
    {
      img: "https://i.ibb.co.com/FkxvJ69m/Screenshot-2025-05-07-181004-removebg-preview.png",
      count: 1465,
      label: "Total Available Vacancy",
    },
    {
      img: "https://i.ibb.co.com/xS4Hm0sY/success-doctor.png",
      count: 5000,
      label: "Successful Job Getters",
    },
    {
      img: "https://i.ibb.co.com/wFTLbm82/success-review.png",
      count: 25,
      label: "Reviews",
    },
  ];

  return (
    <div className="mb-20 mt-8 px-4">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="text-primary">JobTrack</span> Highlights
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-[#E5E7EB] rounded-md px-4 py-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <div className="flex justify-center mb-4">
              <img src={card.img} alt="" className="h-20 w-24 rounded-md" />
            </div>
            <CountUp
              className="font-bold text-2xl md:text-4xl"
              end={card.count}
              suffix="+"
              enableScrollSpy={true}
            />
            <h3 className="font-semibold text-[#959699] mt-4">{card.label}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
