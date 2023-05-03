import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech, index) => (
        <div className="w-29 h-29" key={tech.name}>
          <BallCanvas icon={tech.icon}></BallCanvas>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
