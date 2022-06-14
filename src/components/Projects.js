import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="mb-32">
      <h1 className="font-press-start-2P mb-8 text-red-600 text-xl md:text-3xl">
        Projects.
      </h1>
      <p className="font-press-start-2P text-xs md:text-base mb-16">
        A few of my projects are displayed here. For more please visit my GitHub
        Profile.
      </p>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4 items-center justify-center">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/anilog_img.png"
                  alt="anilog_img"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Anilog: Blogging Site for Otakus
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Anilog is a blogging site for Otakus built using NextJS and
                    Strapi headlessCMS.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <button className="btn px-3 mx-1 rounded-md bg-red-600 border-2 border-red-600 text-white hover:bg-white hover:text-red-600 transition-all">
                      <a
                        href="https://anime-fullstack-blog-frontend.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className=" inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Visit Site
                      </a>
                    </button>
                    <button className="btn px-3 mx-1 rounded-md bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all">
                      <a
                        href="https://github.com/SayanMunshi-blank36/Anime_Blog_FullStack"
                        target="_blank"
                        rel="noreferrer"
                        className=" inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Visit Github
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/pokedex_img.png"
                  alt="pokedex_img"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Pokedex: Database for Pokemon
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Pokedex is an app for pokemon database made using React and
                    the PokeAPI.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <button className="btn px-3 mx-1 rounded-md bg-red-600 border-2 border-red-600 text-white hover:bg-white hover:text-red-600 transition-all">
                      <a
                        href="https://pokedex-by-blank.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                        className=" inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Visit Site
                      </a>
                    </button>
                    <button className="btn px-3 mx-1 rounded-md bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all">
                      <a
                        href="https://github.com/SayanMunshi-blank36/PokeDex"
                        target="_blank"
                        rel="noreferrer"
                        className=" inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Visit Github
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/goalsApp_img.png"
                  alt="goalsApp_img"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Goals App: An App to keep track of your Goals.
                  </h1>
                  <p className="leading-relaxed mb-3">
                    It is an webapp make using the MERN Stack which keeps a
                    track of user's Goals.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <button className="btn px-3 mx-1 rounded-md bg-red-600 border-2 border-red-600 text-white hover:bg-white hover:text-red-600 transition-all">
                      <a
                        href="https://anime-fullstack-blog-frontend.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className=" inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Visit Site
                      </a>
                    </button>
                    <button className="btn px-3 mx-1 rounded-md bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all">
                      <a
                        href="https://github.com/SayanMunshi-blank36/Anime_Blog_FullStack"
                        target="_blank"
                        rel="noreferrer"
                        className=" inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Visit Github
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <a
        href="https://github.com/SayanMunshi-blank36"
        target="_blank"
        rel="noreferrer"
      >
        <button className="btn font-press-start-2P text-sm mt-8 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded-lg">
          View More
        </button>
      </a>
    </div>
  );
};

export default Projects;
