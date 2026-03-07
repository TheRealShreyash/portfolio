const ProjectCard = ({ imageUrl, title, desc }) => {
  return (
    <div className="flex bg-[#1A1A1A] rounded-lg p-10 hover:bg-[#242424] transition duration-500 ease-in-out gap-12 items-center">
      <img src={imageUrl} alt="" className="size-24 rounded-xl" />
      <div>
        <h3 className="text-xl">{title}</h3>
        <p className="text-[#898989]">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
