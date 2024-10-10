import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import MainButton from "../Atoms/button";

export default function Hero() {
  const salesRef = useRef(null);
  const inView = useInView(salesRef);

  useEffect(() => {
    let animationControl;
    if (inView) {
      animationControl = animate(0, 200, {
        duration: 1.5,
        onUpdate(value) {
          salesRef.current.textContent = `$${value.toFixed(2)}`;
        },
      });
    }
    return () => animationControl?.stop();
  }, [inView]);

  const imageMotion = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, x: 150 },
  };

  const textMotion = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hidden: { opacity: 0, y: 100 },
  };

  // const salesCardMotion = {
  //   visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  //   hidden: { opacity: 0, scale: 0.8 },
  // };

  return (
    <div className="container mx-auto max-w-screen-lg p-6">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 py-12">
        {/* Text Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textMotion}
          className="text-center lg:text-left space-y-6 lg:w-1/2"
        >
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-800">
            Streamline Your Interview Process
          </h1>
          <p className="text-lg lg:text-xl text-gray-600">
            Simplify your hiring with our intuitive interview management system.
            Schedule, track, and conduct interviews seamlessly, all in one
            place.
          </p>
          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            <MainButton primary={true}>Get Started</MainButton>
            <MainButton primary={false}>See Features</MainButton>
          </div>
        </motion.div>

        {/* Image & Card Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={imageMotion}
          className="relative w-full lg:w-1/2 flex justify-center"
        >
          <img
            src="./hero.avif"
            alt="image"
            className="w-100 lg:w-96 h-auto object-cover"
          />

          {/* Sales Card */}
          {/* <motion.div
                initial="hidden"
                whileInView="visible"
                variants={salesCardMotion}
                className="absolute top-8 right-8 p-4 bg-white rounded-lg shadow-md w-40 text-center"
              >
                <p className="text-sm text-gray-500">Interviews Completed</p>
                <h2 ref={salesRef} className="text-xl font-bold text-gray-800">
                  150
                </h2>
                <div className="text-xs text-gray-400 mt-1">View Analytics</div>
              </motion.div> */}
        </motion.div>
      </div>
    </div>
  );
}
