import React from "react";
import { FaUserPlus, FaBuilding, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
    {
        icon: <FaUserPlus className="text-white text-2xl" />,
        title: "Step 1: Register",
        description: "Create your account and complete your profile to get started.",
        bg: "bg-blue-600"
    },
    {
        icon: <FaBuilding className="text-white text-2xl" />,
        title: "Step 2: View Companies & Jobs",
        description: "Browse companies and see all the jobs they are currently offering.",
        bg: "bg-indigo-600"
    },
    {
        icon: <FaPaperPlane className="text-white text-2xl" />,
        title: "Step 3: Apply Easily",
        description: "Click the Apply button to submit your application directly.",
        bg: "bg-green-600"
    },
];

const HowItWorks = () => {
    return (
        <section className="py-20 px-6 md:px-12 bg-white">
            <div className="max-w-5xl mx-auto text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-20"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    How It Works
                </motion.h2>

                <div className="grid gap-10 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col mx-1 items-center text-center px-2 pb-4 pt-6 bg-blue-50 border rounded-lg shadow-md"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                        >
                            <div className={`w-16 h-16 flex items-center justify-center rounded-full ${step.bg} mb-4 shadow-lg`}>
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-600">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
