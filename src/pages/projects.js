import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import SEO from "../components/seo"

const ProjectsFlexpulse = () => {

  const projects_flexpulse = [
    // twee-weekse roosters
    // vertalingssysteem
    // standaard tekst onder emails
    // factuur splits standaard
    // intake overzicht
    // leerlingbron
    // regios
    // dagboeken
    // firma-gegevens aanpassen
    // herinnering keuring, sms saldo
    // voortgangskaarten aanpasbaar
    // customizable invoice
    // /leerling contactformulier
    // email afzender
    // standaard notities
    // mails per categorie
    // mailen naar werknemers en bedrijven
    // priomelding
    // factuuradres, afhaaladres
    // inplannen bij alle instr
    // facturen achteraf bewerken
    // franchises
    // resellers
    // live Google, iOS, Outlook calendar subscription to the user's calendar
    // email statussen aflever-, verzend- en open-status
    // dynamische agenda
    // notitiecategorien
    // ical with appt email
    // overigetypes
    // bedrijven aan leerlingen
    // geocode koppeling
    // emails x days before/after y
    // concept facturen autom. versturen
    // urenoverzicht aflettering
    // cbr aan lestypes
    {
      name: "",
      description: "[Coming soon]",
      path: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    },
  ]

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
              {projects_flexpulse.reverse().map(({ name, description, path, i }) => (
                <li
                  className="mt-5 first:mt-0 lg:mt-0 flex items-start lg:col-span-1"
                  key="project_flexpulse_{i}"
                >
                  <div className="flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-8 h-8"
                    >
                      <path d={path}></path>
                    </svg>
                  </div>
                  <div className="ml-3 text-sm leading-5 text-gray-700">
                    <p>
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 text-base text-gray-900 text-center">
            Because I'm a sucker for statistics, here are some cool quantative numbers about my time at Flexpulse:
          </div>

          <div className="relative mt-6">
            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="rounded-lg bg-white shadow-lg lg:grid-cols-4 sm:grid sm:grid-cols-2">
                  <div className="border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <p className="text-5xl leading-none font-extrabold text-blue-900">
                      2600
                      {/* see stats.odt */}
                    </p>
                    <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
                      Person hours
                    </p>
                  </div>
                  <div className="border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <p className="text-5xl leading-none font-extrabold text-blue-900">
                      1450
                      {/* git shortlog -sn --no-merges */}
                    </p>
                    <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
                      Commits
                    </p>
                  </div>
                  {/* git log --shortstat --author="XXX" | grep -E "fil(e|es) changed" | awk '{files+=$1; inserted+=$4; deleted+=$6} END {print "files changed: ", files, "lines inserted: ", inserted, "lines deleted: ", deleted }' */}
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

          <p className='text-center text-xs text-gray-500'>(Last updated: 31 August 2020)</p>

        </div>
      </div>
    </div>
  )
}

const ProjectsUniversity = () => {

  const groupBadge = [
    <p className="rounded-lg bg-pink-200 p-1 pl-2 pr-2 text-xs" key="group_badge">
      Group project
    </p>
  ]

  const projects_uni = [
    {
      name: "Scientific programming",
      description: "Programmed several practical physics applications such as calculating the path and energy of projectiles under drag and damped harmoic oscillators.",
      grade: 100,
      course: "Programming and Data Analysis",
      language: "Python",
      deadline: "2017-11-02",
    },
    {
      name: "Data analysis",
      description: "Performed extensive data analysis to determine the fractal dimension of compressed aluminium foil.",
      grade: 94,
      course: "Programming and Data Analysis",
      language: "VBA",
      deadline: "2017-11-30",
    },
    {
      name: "Neural networks",
      description: "Examined and analysed data using perceptrons and neural networks.",
      grade: 100,
      course: "Cognitive Science",
      language: "Python",
      deadline: "2018-02-26",
    },
    {
      name: "Clustering and categorization",
      description: "Examined and analysed data using clustering and categorization algorithms.",
      grade: 100,
      course: "Cognitive Science",
      language: "Python",
      deadline: "2018-03-14",
    },
    {
      name: "Substitution and interpolation",
      description: "Implemented and evaluated interpolation methods and forward and backward substitution algorithms.",
      grade: 97,
      course: "Computing and Numerics",
      language: "MATLAB",
      deadline: "2018-03-19",
    },
    {
      name: "Differentiation, integration and root finding",
      description: "Implemented and evaluated several numerical methods of approximating derivatives, integrals and roots.",
      grade: 95,
      course: "Computing and Numerics",
      language: "MATLAB",
      deadline: "2018-04-16",
    },
    {
      name: "Spell and punctuation checker",
      description: "Implemented a spell and punctuation checker in C and MIPS Assembly Language.",
      grade: 100,
      course: "Computer Systems",
      language: "C, MIPS",
      deadline: "2018-10-24",
    },
    {
      name: "Formal language processing pipeline",
      description: "Implemented the stages of the language processing pipeline for a subset of the Haskell programming language.",
      grade: 99,
      course: "Processing Formal and Natural Languages",
      language: "Java, Haskell",
      deadline: "2018-10-30",
    },
    {
      name: "Auction house system",
      description: "Specified, designed and developed a simplified computer system for managing auctions at an auction house.",
      grade: 91,
      course: "Software Engineering",
      language: "Java",
      deadline: "2018-11-27",
      group: groupBadge,
    },
    {
      name: "Cache simulator",
      description: "Designed and developed a cache simulator.",
      grade: 99,
      course: "Computer Systems",
      language: "C",
      deadline: "2018-11-28",
    },
    {
      name: "Natural language query system",
      description: "Developed a natural language query system.",
      grade: 99,
      course: "Processing Formal and Natural Languages",
      language: "Python",
      deadline: "2018-11-30",
    },
    {
      name: "String matching",
      description: "Performed analysis on several string matching algorithms and used Java to implement them.",
      grade: 97,
      course: "Algorithms and Data Structures",
      language: "Java",
      deadline: "2019-02-25",
    },
    {
      name: "Search and optimisation",
      description: "Implemented several search and optimisation algorithms in the functional programming language Haskell.",
      grade: 99,
      course: "Reasoning and Agents",
      language: "Haskell",
      deadline: "2019-03-12",
    },
    {
      name: "Planning with PDDL",
      description: "Used the Planning Domain Definition Language to model, implement and extend the domain of a robotic waiter.",
      grade: 94,
      course: "Reasoning and Agents",
      language: "PDDL",
      deadline: "2019-03-28",
    },
    {
      name: "Clustering and classification",
      description: "Implemented clustering and classification algorithms and analysed them using data visualisation.",
      grade: 95,
      course: "Machine Learning",
      language: "MATLAB",
      deadline: "2019-04-05",
    },
    {
      name: "Learning models",
      description: "Explored various learning models such as K-means clustering, PCA, and logistic, linear, KNN and decision tree regressors.",
      grade: 81,
      course: "Applied Machine Learning",
      language: "Python",
      deadline: "2019-11-15",
    },
    {
      name: "Location-based strategy game",
      description: "Specified, designed, implemented and evaluated a large-scale software system involving an autonomous drone competing with a human player.",
      grade: 100,
      course: "Informatics Large Practical",
      language: "Java",
      deadline: "2019-12-06",
    },
    {
      name: "Corpora analysis and language identification",
      description: "Built a character-level language model and performed analysis on several corpora using NLTK.",
      grade: 94,
      course: "Foundations of Natural Language Processing",
      language: "Python",
      deadline: "2020-02-13",
    },
    {
      name: "Cryptography",
      description: "Utilised asymmetric encryption, email spoofing and password cracking techniques and mounted a MitM attack.",
      grade: 100,
      course: "Computer Security",
      language: "Bash, Python",
      deadline: "2020-03-06",
    },
    {
      name: "Part-of-speech tagging",
      description: "Implemented a Hidden Markov Model and the Viterbi algorithm to perform part-of-speech tagging.",
      grade: 98,
      course: "Foundations of Natural Language Processing",
      language: "Python",
      deadline: "2020-03-12",
    },
    {
      name: "Software security",
      description: "Exploited several software vulnerabilities using GDB and shellcode.",
      grade: 100,
      course: "Computer Security",
      language: "Bash, C",
      deadline: "2020-04-17",
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
              {projects_uni.reverse().map(({ name, description, grade, course, language, group }) => (
                <div className="mt-5 ml-2.5 mr-2.5 p-5 rounded-lg bg-white" key={"project_uni_" + name}>
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
