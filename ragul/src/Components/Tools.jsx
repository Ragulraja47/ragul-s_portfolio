import {
  SiDocker,
  SiKubernetes,
  SiGithub,
  SiXampp,
  SiPostman,
} from "react-icons/si";
import { motion } from "framer-motion";

  const iconVariants = (duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        }
    }
  })


function Tools() {
    return (
        <div className="pb-24">
             <motion.h2
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}} className="my-20 text-center text-4xl">Tools</motion.h2>
            <motion.div
             whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}} 
             className="flex flex-wrap items-center justify-center gap-8">
                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2)}
                >
                      <SiDocker className="text-blue-500 text-7xl" />  
                </motion.div>

                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(5)}
                >
                    <SiKubernetes className="text-blue-600 text-7xl" /> 
                </motion.div>

                <motion.div
                                initial="initial"
                                animate="animate"
                                variants={iconVariants(7)}
                                >
                    <SiGithub className="text-gray-800 text-7xl" />  
                </motion.div>

                <motion.div
                         initial="initial"
                         animate="animate"
                         variants={iconVariants(5)}
                           >
                    <SiXampp className="text-orange-500 text-7xl" /> 
                </motion.div>

                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2)}
                >
                <SiPostman className="text-orange-500 text-7xl" />
                </motion.div>

            </motion.div>
        </div>
    )
}
export default Tools;