import Paragraph from "../Atoms/paragraph";
import { motion } from "framer-motion";

export default function FeatureItem({ feature, i }) {
  const featureItem = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: i * 0.1 },
    },
    hidden: { opacity: 0, x: 100 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={featureItem}
      viewport={{ amount: 0.1 }} // Adjusted to make it more responsive
      className="flex flex-col border border-gray-200 rounded-lg shadow-md" // Updated border color and added rounded corners and shadow
    >
      <div className="px-5 py-2.5 flex items-center justify-between border-b border-gray-200">
        <h4 className="text-black font-body font-medium text-lg flex-1">
          {feature?.title}
        </h4>
        {feature?.logo && (
          <img
            src={feature?.logo}
            alt="logo"
            className="w-12 h-12 object-contain ml-4" // Set size and ensure it fits well
          />
        )}
      </div>
      <div className="p-6 pb-10">
        <Paragraph>{feature?.content}</Paragraph>
      </div>
    </motion.section>
  );
}
