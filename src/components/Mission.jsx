import missionImg from "../assets/mission.jpeg";
import mission from "../assets/mission.mp4";
import { MISSION } from "../constants";
import { motion } from "framer-motion";
const Mission = () => {
  return (
    <section id="mission">
      <div className=" mx-auto text-center">
        <h2 className="mb-6 text-3xl lg:text-4xl ">Our Mission</h2>
        <div className=" relative flex justify-center items-center px-4">
          <motion.video
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full rounded-3xl"
            autoPlay
            muted
            loop
            playsInline
            poster={missionImg}
            // src={mission}
          >
            <source src={mission} type="video/mp4" />
          </motion.video>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5,delay:0.5 }}
            className="absolute h-full w-full rounded-3xl bg-black/40 "
          ></motion.div>
          <motion.p 
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:1,delay:0.5}}
          className="absolute text-sm max-w-lg tracking-tighter lg:text-3xl">
            {MISSION}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
