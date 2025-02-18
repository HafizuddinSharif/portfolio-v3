import { IconType } from "react-icons";
import { FaReact, FaAngular, FaPython, FaJava, FaJira, FaFigma } from "react-icons/fa";

const IconComponent = ({ Icon }: { Icon: IconType }) => {
  return (
    <div className="border-r border-lightGrey h-full flex items-center justify-center">
      <Icon size={50} color="white" />
    </div>
  );
};

const ReasonThreeDiagram = () => {
  return (
    <div className="w-full">
      <div className="h-24 border-y border-lightGrey grid grid-cols-3">
        <IconComponent Icon={FaAngular} />
        <IconComponent Icon={FaReact} />
        <IconComponent Icon={FaPython} />
      </div>
      <div className="h-24 border-y border-lightGrey grid grid-cols-3">
        <IconComponent Icon={FaJava} />
        <IconComponent Icon={FaJira} />
        <IconComponent Icon={FaFigma} />
      </div>
    </div>
  );
};

export default ReasonThreeDiagram;
