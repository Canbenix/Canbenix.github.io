import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import SEO from "../components/seo"

const ProjectsFlexpulse = () => {
  return (
    <div className="mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
      <div className="rounded-lg bg-blue-200 px-6 py-8 sm:p-10 lg:flex lg:items-center">
        <div className="flex-1">
          <div>
            <h3 className="text-xl leading-8 font-extrabold text-blue-900 sm:text-2xl sm:leading-9">
              Projects at Flexpulse
            </h3>
          </div>
          <div className="mt-4 text-base text-gray-900">
            The biggest projects I've undertaken were for
            {" "}
            <a
              href="https://www.flexpulse.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Flexpulse
            </a>, a Dutch IT company for which I worked in my gap year and during university.
            The company offers a comprehensive administration software package for driving schools,
            including pupil and employee management, accountancy, invoice tools and personal schedules and calendars.
            Some of the projects where I was the lead developer include:
            <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
              <li
                className="mt-5 first:mt-0 lg:mt-0 flex items-start lg:col-span-1"
                key="todo1"
              >
                <div className="flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-8 h-8"
                  >
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <div className="ml-3 text-sm leading-5 text-gray-700">
                  <p>
                    [Coming soon]
                  </p>
                </div>
              </li>
              <li
                className="mt-5 first:mt-0 lg:mt-0 flex items-start lg:col-span-1"
                key="todo2"
              >
                <div className="flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-8 h-8"
                  >
                    <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                  </svg>
                </div>
                <div className="ml-3 text-sm leading-5 text-gray-700">
                  <p>
                    [Coming soon]
                  </p>
                </div>
              </li>
              <li
                className="mt-5 first:mt-0 lg:mt-0 flex items-start lg:col-span-1"
                key="todo3"
              >
                <div className="flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-8 h-8"
                  >
                    <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div className="ml-3 text-sm leading-5 text-gray-700">
                  <p>
                    [Coming soon]
                  </p>
                </div>
              </li>
              <li
                className="mt-5 first:mt-0 lg:mt-0 flex items-start lg:col-span-1"
                key="todo4"
              >
                <div className="flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-8 h-8"
                  >
                    <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div className="ml-3 text-sm leading-5 text-gray-700">
                  <p>
                    [Coming soon]
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-10 text-base text-gray-900">
            Because I'm a sucker for statistics, here are some cool quantative numbers about my time at Flexpulse:
          </div>

          <div className="relative mt-6">
            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="rounded-lg bg-white shadow-lg lg:grid-cols-4 sm:grid sm:grid-cols-2">
                  <div className="border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <p className="text-5xl leading-none font-extrabold text-blue-900">
                      2600
                    </p>
                    <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
                      Person hours
                    </p>
                  </div>
                  <div className="border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <p className="text-5xl leading-none font-extrabold text-blue-900">
                      1450
                    </p>
                    <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
                      Commits
                    </p>
                  </div>
                  <div className="border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <p className="text-5xl leading-none font-extrabold text-green-900">
                      176K
                    </p>
                    <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
                      Code additions
                    </p>
                  </div>
                  <div className="border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <p className="text-5xl leading-none font-extrabold text-red-900">
                      125K
                    </p>
                    <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
                      Code deletions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className='text-center text-xs text-gray-500'>(Last updated: 1 September 2020)</p>

        </div>
      </div>
    </div>
  )
}

const ProjectsUniversity = () => {

  const groupBadge = [
    <p className="rounded-lg bg-pink-200 p-1 pl-2 pr-2">
      Group project
    </p>
  ]

  const projects_uni = [
    {
      name: "Neural networks",
      description: "Examined and analysed data using perceptrons and neural networks.",
      grade: 100,
      course: "Cognitive Science",
      language: "Python",
    },
    {
      name: "Clustering and categorization",
      description: "Examined and analysed data using clustering and categorization algorithms.",
      grade: 100,
      course: "Cognitive Science",
      language: "Python",
    },
    {
      name: "Substitution and interpolation",
      description: "Implemented and evaluated interpolation methods and forward and backward substitution algorithms.",
      grade: 97,
      course: "Computing and Numerics",
      language: "MATLAB",
    },
    {
      name: "Differentiation, integration and root finding",
      description: "Implemented and evaluated several numerical methods of approximating derivatives, integrals and roots.",
      grade: 95,
      course: "Computing and Numerics",
      language: "MATLAB",
    },
    {
      name: "Formal language processing pipeline",
      description: "Implemented the stages of the language processing pipeline for a subset of the Haskell programming language.",
      grade: 99,
      course: "Processing Formal and Natural Languages",
      language: "Java",
    },
    {
      name: "Natural language query system",
      description: "Developed a natural language query system.",
      grade: 99,
      course: "Processing Formal and Natural Languages",
      language: "Python",
    },
    {
      name: "Spell and punctuation checker",
      description: "Implemented a spell and punctuation checker in C and MIPS Assembly Language.",
      grade: 100,
      course: "Computer Systems",
      language: "C, MIPS",
    },
    {
      name: "Cache simulator",
      description: "Designed and developed a cache simulator.",
      grade: 99,
      course: "Computer Systems",
      language: "C",
    },
    {
      name: "Auction house system",
      description: "Specified, designed and developed a simplified computer system for managing auctions at an auction house.",
      grade: 92,
      course: "Software Engineering",
      language: "Java",
      group: groupBadge,
    },
    {
      name: "String matching",
      description: "Performed analysis on several string matching algorithms and used Java to implement them.",
      grade: 97,
      course: "Algorithms and Data Structures",
      language: "Java",
    },
    {
      name: "Search and optimisation",
      description: "Implemented several search and optimisation algorithms in the functional programming language Haskell.",
      grade: 99,
      course: "Reasoning and Agents",
      language: "Haskell",
    },
    {
      name: "Clustering and classification",
      description: "Implemented clustering and classification algorithms and analysed them using data visualisation.",
      grade: 95,
      course: "Machine Learning",
      language: "MATLAB",
    },
  ]

  return (
    <div className="mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
      <div className="rounded-lg bg-blue-50 px-6 py-8 sm:p-10 lg:flex lg:items-center">
        <div className="flex-1">
          <div>
            <h3 className="text-xl leading-8 font-extrabold text-blue-900 sm:text-2xl sm:leading-9">
              Projects at University
            </h3>
          </div>
          <div className="mt-10">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8 sm:grid sm:grid-cols-2">
              {projects_uni.map(({ name, description, grade, course, language, group }) => (
                <div className="mt-5 ml-2.5 mr-2.5 rounded-lg bg-white">
                  <div className="p-5">
                    <div className="flex justify-between flex-initial">
                      <p className="rounded-lg bg-blue-300 p-1 pl-2 pr-2">
                        {language}
                      </p>
                      {group}
                      <p className="rounded-lg bg-green-200 p-1 pl-2 pr-2" title="Grade">
                        {grade}%
                      </p>
                    </div>
                    <h5 className="mt-3 text-lg leading-6 font-medium text-gray-900">
                      {name}
                    </h5>
                    <div className="mt-2 text-base leading-6 text-gray-500">
                      <p>
                        {description}
                      </p>
                      <p className="mt-2">
                        <i>Course: {course}</i>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {

  return (
    <>
      <SEO title="Projects" />
      <div className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Projects
          </h3>
          <div className="mt-6 text-base leading-6">
            <ProjectsFlexpulse />
          </div>
          <div className="mt-6 text-base leading-6">
            <ProjectsUniversity />
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
