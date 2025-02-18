import Image, { StaticImageData } from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  altImage: string;
}

const Project = ({ title, description, imageUrl, altImage }: ProjectProps) => {
  return (
    <div>
      <div className="border-t border-t-lightGrey py-10 px-5">
        <div>
          <h3 className="text-xl">{title}</h3>
          <p className="py-3">{description}</p>
        </div>
      </div>
      <div>
        <Image src={imageUrl} alt={altImage} />
      </div>
    </div>
  );
};

export default Project;
