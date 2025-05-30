import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb,  SiMysql,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiJavascript,
 } from "react-icons/si"

  import { DiJava } from "react-icons/di";

  import { animate, motion } from "framer-motion";

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

function Tech() {
    return (
        <div className="pb-24">
            <motion.h2
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}} 
            className="my-20 text-center text-4xl">Technologies</motion.h2>
            <motion.div
             whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}} 
             className="flex flex-wrap items-center justify-center gap-8">
                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}
                >
                    <SiMongodb className="text-7xl text-green-500" />
                </motion.div>

                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                >
                    <SiMysql className="text-7xl text-blue-500" />
                </motion.div>

                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(5)}
                >
                    <SiExpress className="text-7xl text-gray-400" />
                </motion.div>

                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2)}
                >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>

                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(6)}
                >
                    <SiNodedotjs className="text-7xl text-green-600" />
                </motion.div>

                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(4)}
                >
                    <SiJavascript className="text-7xl text-yellow-400" />
                </motion.div>

                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(5)}
                >
                    <SiPhp className="text-7xl text-indigo-600" />
                </motion.div>

                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                >
                    <DiJava className="text-7xl text-red-600" />
                </motion.div>
            </motion.div>
        </div>
    )
}
export default Tech;