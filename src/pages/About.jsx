const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-rose-600 via-black to-rose-950 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I create cutting-edge, responsive, and incredibly scalable web
          applications by utilizing tools like React, Redux, GraphQL, Next.js,
          and Tailwind CSS.As a React developer, I have a thorough understanding
          of the component-based architecture of the framework and am capable of
          creating complex applications while adhering to best practices. My
          ability to manage the state of my applications effectively as a result
          of learning Redux makes them more dependable and simple to maintain.
        </p>

        <br />

        <p className="text-xl">
          Last but not least, I have a sharp eye for design and I am
          knowledgeable about using Tailwind CSS to build beautiful and
          responsive user interfaces. I have access to a variety of pre-defined
          styles and tools thanks to this CSS framework, which makes it simple
          and quick for me to create stunning UI components. Overall, I will be
          a valuable asset to any team or project thanks to my experience and
          abilities as a web developer.
        </p>
      </div>
    </div>
  );
};

export default About;
