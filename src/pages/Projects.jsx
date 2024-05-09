import tailwindCss from "../assets/portfolio/tailwind-css.png";
import installNode from "../assets/portfolio/installNode.jpg";
import ecommerceWebsite from "../assets/portfolio/ecommerceWebsite.png";

import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import windOasis from "../assets/portfolio/wildOasis.png";
import { Link } from "react-router-dom";

function Projects() {
  const portfolios = [
    {
      id: 1,
      src: tailwindCss,
      githubLink: "https://github.com/ushela/pizza-menu-css.git",
      liveDemoLink: "https://pizza-menu-css.vercel.app/",
    },
    {
      id: 2,
      src: windOasis,
      githubLink: "https://github.com/ushela/hotel-app-reactquery.git",
      liveDemoLink: "https://hotel-app-reactquery.vercel.app/",
    },
    {
      id: 3,
      src: ecommerceWebsite,
      githubLink: "https://github.com/ushela/sample-ecommerce.git",
      liveDemoLink: "https://sample-ecommerce-lake.vercel.app/",
    },
    {
      id: 4,
      src: reactSmooth,
      githubLink: "",
      liveDemoLink: "",
    },
    {
      id: 5,
      src: installNode,
      githubLink: "",
      liveDemoLink: "",
    },
    {
      id: 6,
      src: reactWeather,
      githubLink: "",
      liveDemoLink: "",
    },
  ];
  return (
    <div
      name="projects"
      className="w-full h-screen bg-gradient-to-b  from-rose-600 via-black to-rose-950 p-4 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="pb-6 pt-2">Check out some of my work right here</p>
        </div>

        <div className="grid-auto-flow: row grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, githubLink, liveDemoLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="w-30 h-48 stretch; rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <Link to={githubLink} target="_blank">
                    Code
                  </Link>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <Link to={liveDemoLink} target="_blank">
                    Demo
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
