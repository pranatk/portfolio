import "./App.css";
import { useState, useEffect } from "react";
import ExperienceCard from "./Components/ExperienceCard";

function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  function getVisibleSection() {
    const scrollPosition = window.scrollY;
    const sections = document.getElementsByTagName("section");
    for (const section of sections) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;

      console.log(sectionTop, sectionBottom, section.id, pos.y);

      if (pos.y + 275 >= sectionTop && pos.y + 275 < sectionBottom) {
        return section.id;
      }
    }

    return null;
  }
  console.log(getVisibleSection());
  const experineces = [
    {
      time: "2023 - Present",
      link: "https://www.biworldwide.co.in/",
      title: "Software Engineer",
      company: "BI Worldwide",
      content:
        "I am Pranat Karode. I play guitar and code because i need to make moneeyyyyyy",
      skills: ["ReactJS", "Tailwind CSS", "CSS", "JavaScript", "NodeJS"],
    },
  ];
  const handleMouseMove = (event) => {
    setPos({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    // Attach the mouse move event listener
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="__variable_20b187 group/spotlight relative bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(600px at ${pos.x}px ${pos.y}px, rgba(29, 78, 216, 0.15), transparent, 80%)`,
        }}
      ></div>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="https://brittanychiang.com/">Pranat Karode</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Software Engineer at BI Worldwide India
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                I build pixel-perfect, accessible products for the web and
                beyond.
              </p>
              <nav
                className="nav hidden lg:block"
                aria-label="In-page jump links"
              >
                <ul className="mt-16 w-max">
                  <li>
                    <a
                      className={`group flex items-center py-3 ${
                        getVisibleSection() === null ||
                        getVisibleSection() === "about"
                          ? "active"
                          : ""
                      }`}
                      href="/#about"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        About
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className={`group flex items-center py-3 ${
                        getVisibleSection() === "experience" ? "active" : ""
                      }`}
                      href="/#experience"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Experience
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className={`group flex items-center py-3 ${
                        getVisibleSection() === "projects" ? "active" : ""
                      }`}
                      href="/#projects"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Projects
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <ul
              className="ml-1 mt-8 flex items-center"
              aria-label="Social media"
            >
              <li className="mr-6 text-xs">
                <a
                  className="block hover:text-slate-200"
                  href="https://github.com/bchiang7"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub (opens in a new tab)"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </li>
              <li className="mr-6 text-xs">
                <a
                  className="block hover:text-slate-200"
                  href="https://instagram.com/bchiang7"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Instagram (opens in a new tab)"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 1000"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
                  </svg>
                </a>
              </li>

              <li className="mr-6 text-xs">
                <a
                  className="block hover:text-slate-200"
                  href="https://www.linkedin.com/in/bchiang7/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn (opens in a new tab)"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </header>
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <section
              id="about"
              className="scroll-mt-0  lg:scroll-mt-0"
              aria-label="About me"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  About
                </h2>
              </div>
              <div>
                <p className="mb-4">
                  Back in 2018, I decided to try my hand at creating custom
                  Tumblr themes and tumbled head first into the rabbit hole of
                  coding and web development. Fast-forward to today, and I’ve
                  had the privilege of building software for an&nbsp;
                  <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.fcbkinnect.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="advertising agency (opens in a new tab)"
                  >
                    advertising agency
                  </a>
                  , a mid-sized&nbsp;
                  <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.biworldwide.co.in/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="start-up (opens in a new tab)"
                  >
                    product-based
                  </a>
                  &nbsp;organization, and a&nbsp;
                  <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.ltimindtree.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="huge corporation (opens in a new tab)"
                  >
                    huge corporation
                  </a>
                  .
                </p>
                <p className="mb-4">
                  My main focus these days is building products and leading
                  projects for our clients at&nbsp;
                  <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://upstatement.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Upstatement (opens in a new tab)"
                  >
                    Upstatement
                  </a>
                  . In my free time I've also released an&nbsp;
                  <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.newline.co/courses/build-a-spotify-connected-app"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="online video course (opens in a new tab)"
                  >
                    online video course
                  </a>
                  &nbsp;that covers everything you need to know to build a web
                  app with the Spotify API.
                </p>
                <p>
                  When I’m not at the computer, I’m usually rock climbing,
                  hanging out with my wife and two cats, or running around
                  Hyrule searching for.
                </p>
              </div>
            </section>
            <section
              id="experience"
              className="mt-16 scroll-mt-16 md:mb-24 lg:mt-36 lg:scroll-mt-24"
              aria-label="Work experience"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Experience
                </h2>
              </div>
              <div>
                <ol className="group/list">
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header
                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                        aria-label="July to December 2016"
                      >
                        Jan 2023 — Present
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                              href="https://www.biworldwide.co.in/"
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label="Software Engineer BI Worldwide  (opens in a new tab)"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Software Enginner · BI Worldwide India&nbsp;
                                <span className="inline-block">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Worked as a part of the core product development team
                          to develop a completely new product from scratch.
                        </p>

                        <ul
                          className="mt-2 flex flex-wrap"
                          aria-label="Technologies used"
                        >
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              ReactJS
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              NextJS
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              JavaScript
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              TailwindCSS
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              NodeJS
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              Fastify
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              PostgreSQL
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header
                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                        aria-label="July to December 2015"
                      >
                        Oct 2020 — Jan 2023
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                              href="https://us.mullenlowe.com/"
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label="Creative Technologist Co-op at MullenLowe U.S. (opens in a new tab)"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Software Enginner · LTIMindTree&nbsp;
                                <span className="inline-block">
                                  U.S.
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Part of team working on devloping tools and and
                          improving existing features for various internal
                          tools.
                        </p>
                        <ul
                          className="mt-2 flex flex-wrap"
                          aria-label="Technologies used"
                        >
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              HTML
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              CSS
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              JavaScript
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              React
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              NodeJS
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              MongoDB
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ol>
                <div className="mt-12">
                  <a
                    className="inline-flex items-baseline  leading-tight  hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
                    href="CV_Pranat_Karode.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="View Full Résumé (opens in a new tab)"
                  >
                    <span>
                      View Full&nbsp;
                      <span className="inline-block">
                        Résumé
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </section>
            <section
              id="projects"
              className="mt-16 scroll-mt-16 md:mt-24 lg:mt-36 lg:scroll-mt-24"
              aria-label="Selected projects"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Projects
                </h2>
              </div>
              <div>
                <ul className="group/list">
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                            href="https://www.newline.co/courses/build-a-spotify-connected-app"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Build a Spotify Connected App (opens in a new tab)"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Build a Spotify Connected&nbsp;
                              <span className="inline-block">
                                App
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Video course that teaches how to build a web app with
                          the Spotify Web API. Topics covered include the
                          principles of REST APIs, user auth flows, Node,
                          Express, React, Styled Components, and more.
                        </p>
                      </div>
                      {/* <img
                        alt="Build a Spotify Connected App Newline course marketing card"
                        loading="lazy"
                        width="200"
                        height="48"
                        decoding="async"
                        data-nimg="1"
                        className="rounded border-2 text-transparent border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        srcset="
                            /_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=256&amp;q=75 1x,
                            /_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75 2x
                          "
                        src="./Brittany Chiang_files/course-card.png"
                      /> */}
                    </div>
                  </li>
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                            href="https://spotify-profile.herokuapp.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Spotify Profile (opens in a new tab)"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Spotify&nbsp;
                              <span className="inline-block">
                                Profile
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Web app for visualizing personalized Spotify data.
                          View your top artists, top tracks, recently played
                          tracks, and detailed audio information about each
                          track. Create and save new playlists of recommended
                          tracks based on your existing playlists and more.
                        </p>
                        <a
                          className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                          href="https://github.com/bchiang7/spotify-profile"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="590 stars on GitHub (opens in a new tab)"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="mr-1 h-3 w-3"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span>590</span>
                        </a>
                        <ul
                          className="mt-2 flex flex-wrap"
                          aria-label="Technologies used:"
                        >
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              React
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              Express
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              Spotify API
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              Heroku
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* <img
                        alt="Spotify Profile app homepage"
                        loading="lazy"
                        width="200"
                        height="48"
                        decoding="async"
                        data-nimg="1"
                        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        style="color: transparent"
                        srcset="
                            /_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&amp;w=256&amp;q=75 1x,
                            /_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&amp;w=640&amp;q=75 2x
                          "
                        src="./Brittany Chiang_files/spotify-profile.png"
                      /> */}
                    </div>
                  </li>
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                            href="https://halcyon-theme.netlify.app/"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Halcyon Theme (opens in a new tab)"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Halcyon&nbsp;
                              <span className="inline-block">
                                Theme
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Minimal dark blue theme for VS Code, Sublime Text,
                          Atom, iTerm, and more.
                        </p>
                        <a
                          className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                          href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Over 100,000 installs on Visual Studio Code Marketplace (opens in a new tab)"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="mr-1 h-4 w-4"
                            aria-hidden="true"
                          >
                            <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"></path>
                            <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"></path>
                          </svg>
                          <span>100k+ Installs</span>
                        </a>
                      </div>
                      {/* <img
                        alt="Halcyon Theme homepage hero with screenshot of VS Code editor"
                        loading="lazy"
                        width="200"
                        height="48"
                        decoding="async"
                        data-nimg="1"
                        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        style="color: transparent"
                        src=""
                      /> */}
                    </div>
                  </li>
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                            href="https://v4.brittanychiang.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="brittanychiang.com (v4) (opens in a new tab)"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              brittanychiang.com&nbsp;
                              <span className="inline-block">
                                (v4)
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          An old portfolio site built with Gatsby with 6k+ stars
                          and 3k+ forks
                        </p>
                        <a
                          className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                          href="https://github.com/bchiang7/v4"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="6866 stars on GitHub (opens in a new tab)"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="mr-1 h-3 w-3"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span>6,866</span>
                        </a>
                        <ul
                          className="mt-2 flex flex-wrap"
                          aria-label="Technologies used:"
                        >
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              Gatsby
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              Styled Components
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              Netlify
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* <img
                        alt="brittanychiang.com version 4 hero section"
                        loading="lazy"
                        width="200"
                        height="48"
                        decoding="async"
                        data-nimg="1"
                        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        style="color: transparent"
                        srcset="
                            /_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=256&amp;q=75 1x,
                            /_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75 2x
                          "
                        src="./Brittany Chiang_files/v4.png"
                      /> */}
                    </div>
                  </li>
                </ul>
                <div className="mt-12">
                  <a
                    className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
                    aria-label="View Full Project Archive"
                    href="https://brittanychiang.com/archive"
                  >
                    <span>
                      <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                        View Full Project&nbsp;{" "}
                      </span>
                      <span className="whitespace-nowrap">
                        <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                          Archive
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </section>

            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <p>
                Loosely designed in&nbsp;
                <a
                  href="https://www.figma.com/"
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Figma (opens in a new tab)"
                >
                  Figma
                </a>
                &nbsp;and coded in&nbsp;
                <a
                  href="https://code.visualstudio.com/"
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Visual Studio Code (opens in a new tab)"
                >
                  Visual Studio Code
                </a>
                &nbsp;by yours truly. Built with&nbsp;
                <a
                  href="https://nextjs.org/"
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Next.js (opens in a new tab)"
                >
                  Next.js
                </a>
                &nbsp;and&nbsp;
                <a
                  href="https://tailwindcss.com/"
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Tailwind CSS (opens in a new tab)"
                >
                  Tailwind CSS
                </a>
                , deployed with&nbsp;
                <a
                  href="https://vercel.com/"
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Vercel (opens in a new tab)"
                >
                  Vercel
                </a>
                . All text is set in the&nbsp;
                <a
                  href="https://rsms.me/inter/"
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Inter (opens in a new tab)"
                >
                  Inter
                </a>
                &nbsp;typeface.
              </p>
            </footer>
          </main>
          <div>
            <button
              className="hover:-text-teal-300 absolute bottom-0 right-0 inline-flex items-center px-2 py-4 font-medium text-slate-400 hover:-translate-y-2 focus-visible:text-teal-300"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:R4l6:"
              data-state="closed"
            >
              <span className="sr-only">Click to time travel</span>
              {/* <img
                alt="Spinning Tardis from Doctor Who"
                loading="lazy"
                width="100"
                height="86"
                decoding="async"
                data-nimg="1"
                style="color: transparent"
                srcset="
                    /_next/image?url=%2Fimages%2Ftardis%2Frotate.gif&amp;w=128&amp;q=75 1x,
                    /_next/image?url=%2Fimages%2Ftardis%2Frotate.gif&amp;w=256&amp;q=75 2x
                  "
                src="./Brittany Chiang_files/rotate.gif"
              /> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
