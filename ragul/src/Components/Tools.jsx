import {
  SiDocker,
  SiKubernetes,
  SiGithub,
  SiXampp,
} from "react-icons/si";
function Tools() {
    return (
        <div className="pb-24">
            <h2 className="my-20 text-center text-4xl">Tools</h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
                <div>
                      <SiDocker className="text-blue-500 text-7xl" />  
                </div>

                <div>
                    <SiKubernetes className="text-blue-600 text-7xl" /> 
                </div>

                <div>
                    <SiGithub className="text-gray-800 text-7xl" />  
                </div>

                <div>
                    <SiXampp className="text-orange-500 text-7xl" /> 
                </div>

            </div>
        </div>
    )
}
export default Tools;