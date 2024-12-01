import AboutMe from "@/components/AboutMe";
import Project from "@/components/project";

const Page = () => {
  return (
    <div>
      <AboutMe
        name="Hello, I'm Josiah."
        jobTitle="Frontend Developer"
        description="I specialize in React and React Native, and enjoy solving tricky problems with creative solutions. 
        When I'm not coding, you'll probably find me geeking out over anime, Marvel, or the latest tech."
      />
      <Project />
    </div>
  );
};

export default Page;