import { motion } from "framer-motion";
import Paragraph from "../Atoms/paragraph";
import SubHead from "../Atoms/subhead";
import Subtitle from "../Atoms/subtitle";
import FeatureItem from "./featureItem";

export default function Features() {
  const dataFeatures = [
    {
      id: 1,
      title: "Poll Email Inbox (Python)",
      logo: "./python.png",
      content:
        "This step involves using a Python script to monitor and collect incoming emails for job applications.",
    },

    {
      id: 3,
      title: "HR Analyzer (WXi)",
      logo: "./hr-manager.png",
      content:
        "The HR Analyzer system, running on the WXi platform, processes the incoming data from Kafka. It analyzes resumes and extracts essential details for further processing.",
    },
    {
      id: 4,
      title: "Get Resume Details (RPA)",
      logo: "./cv.png",
      content:
        "This RPA step pulls specific information from the resumes, such as candidate skills, work history, and educational background, and structures it for the subsequent stages.",
    },
    {
      id: 5,
      title: "Get Matching Scores (WXi.ai)",
      logo: "./chatbot.png",
      content:
        "Using AI algorithms, this system calculates matching scores to determine how well each candidate fits the role based on the resume data.",
    },
    {
      id: 6,
      title: "Check Eligibility (ODM)",
      logo: "./file.png",
      content:
        "The eligibility check system (ODM) ensures the candidate meets the minimum requirements (e.g., qualifications, experience) before proceeding.",
    },
    {
      id: 7,
      title: "Schedule an Interview (WXi)",
      logo: "./kafka.png",
      content:
        "If the candidate passes the eligibility check, this system automatically schedules an interview by integrating with calendar systems.",
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
          <Subtitle style="mb-2">Interview Process</Subtitle>
          <SubHead style="mb-[18px] sm:w-8/12 md:w-9/12 lg:w-7/12">
            Automated HR Process
          </SubHead>
          <Paragraph
            fontSize="text-sm"
            color="text-black-400"
            style="sm:w-3/5 md:w-7/12 lg:w-1/3"
          >
            Our automated HR process streamlines the journey from application to interview, using advanced technology to ensure efficient and accurate candidate screening.
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
