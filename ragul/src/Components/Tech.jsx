import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb,  SiMysql,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiJavascript,
 } from "react-icons/si"

  import { DiJava } from "react-icons/di";
function Tech() {
    return (
        <div className="pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
                <div>
                    <SiMongodb className="text-7xl text-green-500" />
                </div>

                <div>
                    <SiMysql className="text-7xl text-blue-500" />
                </div>

                <div>
                    <SiExpress className="text-7xl text-gray-400" />
                </div>

                <div>
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>

                <div>
                    <SiNodedotjs className="text-7xl text-green-600" />
                </div>

                <div>
                    <SiJavascript className="text-7xl text-yellow-400" />
                </div>

                <div>
                    <SiPhp className="text-7xl text-indigo-600" />
                </div>

                <div>
                    <DiJava className="text-7xl text-red-600" />
                </div>
            </div>
        </div>
    )
}
export default Tech;