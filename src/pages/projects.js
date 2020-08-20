import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import SEO from "../components/seo"

const ProjectsFlexpulse = () => {
  return (
    <div className="mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
      <div className="max-w-lg mx-auto lg:max-w-none">
        <div className="rounded-lg bg-blue-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
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
              </a>, a Dutch ICT company for which I worked in my gap year and during university.
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                  <div className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
                    <div className="border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                      <p className="text-5xl leading-none font-extrabold text-blue-900">
                        K+
                      </p>
                      <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
                        Person hours
                      </p>
                    </div>
                    <div className="border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                      <p className="text-5xl leading-none font-extrabold text-blue-900">
                        K+
                      </p>
                      <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
                        Lines of code
                      </p>
                    </div>
                    <div className="border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                      <p className="text-5xl leading-none font-extrabold text-blue-900">
                        K+
                      </p>
                      <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
                        Code additions
                      </p>
                    </div>
                    <div className="border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                      <p className="text-5xl leading-none font-extrabold text-blue-900">
                        K+
                      </p>
                      <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
                        Code deletions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {

  const data = useStaticQuery(graphql`
    query {
      Nina: file(relativePath: { eq: "Nina.png" }) {
        childImageSharp {
          fluid(maxWidth: 96) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const projects_uni = [
    {
      name: "[Coming soon]",
      description: "[Coming soon]",
      image: data.Nina.childImageSharp,
    }
  ]

  return (
    <>
      <SEO title="Projects" />
      <div className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Projects
            </h3>
            <p className="mt-6 text-base leading-6">
              <ProjectsFlexpulse />
            </p>
          </div>

          <div className="mt-10">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              {projects_uni.map(({ name, description, image }) => (
                <div className="mt-10 lg:mt-0 first:mt-0">
                  <Image fluid={image.fluid} className="h-24 w-24 rounded-lg" />
                  <div className="mt-5">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      {name}
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
