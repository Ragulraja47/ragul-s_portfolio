import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
function Education(){
    return(
        <div className="pb-4">
                    <motion.h2
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}}className="my-20 text-center text-4xl">Experience</motion.h2> 
                    <div>
                        {EXPERIENCES.map( (exp,index) => (
                            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                                <motion.div
                                whileInView={{opacity:1,x:0}}
                                initial={{opacity:0,x:-100}}
                                transition={{duration:0.5}}
                                className="w-full lg:w-1/4">
                                    <p className="mb-2 text-sm text-stone-400">
                                        {exp.year}
                                    </p>
                                </motion.div>
        
                                <motion.div
                                whileInView={{opacity:1,x:0}}
                                initial={{opacity:0,x:-100}}
                                transition={{duration:0.5}} className="w-full max-w-xl lg:w-3/4">
                                <h3 className="mb-2 font-semibold">{exp.role} -{" "}

                                <span className="text-sm text-stone-500">
                                    {exp.company}
                                </span>
                               </h3>

                               <p className="mb-4 text-stone-400 ">
                                {exp.description}
                               </p>
                                </motion.div>
                            </div>
                        ))}
                    </div>           
                </div>
            )
}
export default Education;