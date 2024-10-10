import { motion } from "framer-motion";
import Paragraph from "../Atoms/paragraph";
import SubHead from "../Atoms/subhead";
import Subtitle from "../Atoms/subtitle";
import FeatureItem from "./featureItem";

export default function Features() {
  const dataFeatures = [
    {
      id: 1,
      title: "Sub-Heading 1",
      logo: "",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec lorem non dolor fringilla consectetur. Nullam id feugiat mauris. Nulla facilisi. Vestibulum ante ipsum primis in faucibus ",
    },
    {
      id: 2,
      title: "Sub-Heading 2",
      logo: "",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec lorem non dolor fringilla consectetur. Nullam id feugiat mauris. Nulla facilisi. Vestibulum ante ipsum primis in faucibus .",
    },
    {
      id: 3,
      title: "Sub-Heading 3",
      logo: "",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec lorem non dolor fringilla consectetur. Nullam id feugiat mauris. Nulla facilisi. Vestibulum ante ipsum primis in faucibus ",
    },
  ];

  const content = {
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { y: -100, opacity: 0 },
  };

  return (
    <div className="container mx-auto max-w-[1344px]">
      <div className="px-5 py-16 flex flex-col gap-10 sm:pb-28 sm:px-10 md:pb-36">
        {/* Head Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={content}
          className="text-center flex flex-col items-center"
        >
          <Subtitle style="mb-2">Section 2</Subtitle>
          <SubHead style="mb-[18px] sm:w-8/12 md:w-9/12 lg:w-7/12">
            Title 1
          </SubHead>
          <Paragraph
            fontSize="text-sm"
            color="text-black-400"
            style="sm:w-3/5 md:w-7/12 lg:w-1/3"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
            lorem non dolor fringilla consectetur. Nullam id feugiat mauris.
            Nulla facilisi. Vestibulum ante ipsum primis in faucibus{" "}
          </Paragraph>
        </motion.div>

        {/* Feature Items */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
          {dataFeatures?.map((feature, index) => (
            <FeatureItem key={feature.id} feature={feature} i={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
