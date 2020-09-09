import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const Introduction = () => {
  const benefits = [
    "Main Controller Base",
    "Refreshable Braille Display Cell",
    "User Guide",
    "Software Developer Toolkit (SDK)",
  ]

  return (
    <div className="relative">
      <div className="absolute inset-0 h-1/2 bg-blue-900"></div>
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none">
          <div className="bg-white px-6 py-8 lg:flex-shrink-1 lg:p-12">
            <h3 className="text-2xl leading-8 font-extrabold text-blue-900 sm:text-3xl sm:leading-9">
              About me
            </h3>

            <p className="mt-6 text-base leading-6">
              Hi! I'm Nina Becx, a final year BSc Computer Science student at the University of Edinburgh.
              After graduating from secondary school, I took a gap year to explore my love for tech,
              working as a software developer for a Dutch IT company.
              I really enjoyed it and continued to take on programming projects within the company 
              and independent open source projects during my studies.
              After this final year of my Bachelor's, I plan on pursuing a Master's degree in Informatics.
              I can't wait to see where my passion for technology and programming will take me!
            </p>

            <div className="mt-8">
              <div className="flex items-center">
                <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-blue-800">
                  Achievements
                </h4>
                <div className="flex-1 border-t-2 border-gray-200"></div>
              </div>
              <br />
              <p>
                You can find out more about my current and previous projects
                {" "}
                <Link
                  to="/projects"
                  className="font-medium text-blue-500"
                >
                  here
                </Link>. In addition to developing my skills through projects,
                I've participated in several national Informatics and Mathematics Olympiads with multiple top-10 finishes.
                I've also been the recipient of a certificate of excellence and an Edinburgh Award for doing extra-curricular activities.
                To learn more about my achievements, academics and professional career, check out my
                {" "}
                <a
                  href="https://www.linkedin.com/in/nina-becx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  LinkedIn
                </a>.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex items-center">
                <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-blue-800">
                  Some more stuff about me
                </h4>
                <div className="flex-1 border-t-2 border-gray-200"></div>
              </div>
              <br />
              <p>
                Besides programming, I like to read, game, do puzzles and play sports.
                In particular, I've recently taken up basketball.
                I'd like to share the info I've collected on all the basketball spots I've discovered here :)
              </p>
              <br />
              <div><iframe title="Basketball spots" src="https://www.google.com/maps/d/u/1/embed?mid=14R2f7-a2W46WY5dFKB7_PWPS4GE7QdQT" width="100%" height="480"></iframe></div>
            </div>

            <div className="mt-8">
              <div className="flex items-center">
                <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-blue-800">
                  Contact
                </h4>
                <div className="flex-1 border-t-2 border-gray-200"></div>
              </div>
              <br />
              <p>
              I'm always happy to chat over
              {" "}
              <a
                href="mailto:cantbenix@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                email
              </a>, or feel free to check out my social links in the footer.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />

      <div className="bg-blue-900">
        <div className="pt-12 sm:pt-16 lg:pt-24">
          <div className="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto lg:max-w-none">
              <p className="mt-2 text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
                Welcome!
              </p>
              <p className="mt-2 text-xl leading-7 text-gray-300">
                To the personal website of Nina Becx
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pb-12 bg-white sm:mt-12 sm:pb-16 lg:pb-24">
          <Introduction />
        </div>
      </div>
    </>
  )
}

export default IndexPage