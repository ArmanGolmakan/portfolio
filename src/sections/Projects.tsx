const projects = [
  {
    title: 'MindMap',
    description:
      'Full-stack to-do and note-taking application. Helps users efficiently create, organize, and manage tasks and reminders.',
    link: 'https://github.com/ArmanGolmakan/mindmap',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Medscan',
    description:
      'Mobile application that enables nurses and medical personnel to scan patient FOBs and instantly access their medical history.',
    link: 'https://github.com/ArmanGolmakan/HackTheNorth2019',
    technologies: ['React', 'JavaScript'],
  },
  {
    title: 'AMD EyeCare',
    description:
      'Prototype for detecting and monitoring Age-Related Macular Degeneration. Provides various tests for diagnosing and tracking the progression of AMD.',
    link: 'https://github.com/ArmanGolmakan/Age-Related-Macular-Degeneration-Detection',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Super Mario 2D',
    description:
      'Classic Mario game recreation featuring platformer mechanics, interactive gameplay, and nostalgic visuals.',
    link: 'https://github.com/ArmanGolmakan/Mario_Game',
    technologies: ['Java'],
  },
]

function FolderIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10 text-teal"
      aria-hidden="true"
    >
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 lg:mb-36 lg:scroll-mt-24">
      {/* Mobile sticky section label */}
      <div className="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-navy/90 px-6 py-4 backdrop-blur-sm lg:hidden">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-lightest">
          Projects
        </h2>
      </div>

      <div className="group/list flex flex-col gap-3">
        {projects.map(({ title, description, link, technologies }) => (
          <div
            key={title}
            className="group/item relative grid pb-1 transition-all duration-300 lg:grid-cols-8 lg:gap-8 lg:hover:opacity-100! lg:group-hover/list:opacity-50"
          >
            {/* Hover background */}
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all duration-300 lg:block lg:group-hover/item:bg-navy-light lg:group-hover/item:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />

            {/* Folder + GitHub icons column */}
            <div className="z-10 mb-3 flex items-center justify-between lg:col-span-2 lg:mb-0 lg:flex-col lg:items-start lg:justify-start lg:pt-1">
              <FolderIcon />
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} on GitHub`}
                className="text-slate transition-colors duration-200 hover:text-teal lg:mt-2"
              >
                <GitHubIcon />
              </a>
            </div>

            {/* Content */}
            <div className="z-10 lg:col-span-6">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="mb-2 flex items-center gap-1 font-medium leading-snug text-slate-lightest transition-colors duration-200 group-hover/item:text-teal">
                  {title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="ml-0.5 h-4 w-4 shrink-0 translate-y-px opacity-0 transition-all duration-200 group-hover/item:translate-x-1 group-hover/item:-translate-y-1 group-hover/item:opacity-100"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </h3>
              </a>

              <p className="text-sm leading-normal">{description}</p>

              <ul className="mt-3 flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <li key={tech}>
                    <span className="flex items-center rounded-full bg-teal/10 px-3 py-1 text-xs font-medium leading-5 text-teal">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
