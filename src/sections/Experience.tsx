const experiences = [
  {
    dateRange: '2025 — 2026',
    role: 'Full Stack Developer',
    company: 'Rakuten Kobo',
    companyUrl: 'https://www.kobo.com',
    description:
      'Developed key features for Kobo\'s e-commerce platform relaunch using React.js, Next.js, and TypeScript, delivering a modern storefront for millions of global users. Leveraged AI-assisted tools including Cursor and GitHub Copilot to reduce implementation time by 50%. Optimized application performance through SSR and SSG, achieving 30% faster page load times and improved SEO rankings.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Figma', 'SSR', 'SSG'],
  },
  {
    dateRange: '2023 — 2025',
    role: 'React Developer',
    company: 'Bank of Montreal',
    companyUrl: 'https://www.bmo.com',
    description:
      'Developed responsive, user-centric web interfaces using React.js, with a strong focus on performance, accessibility, and clean UI/UX design.',
    technologies: ['React', 'TypeScript', 'JavaScript', 'CSS'],
  },
  {
    dateRange: '2022 — 2023',
    role: 'Front End Angular Developer',
    company: 'Caseware',
    companyUrl: 'https://www.caseware.com',
    description:
      'Built and maintained auditing web applications with Angular, proactively identifying and resolving functional issues by writing comprehensive tests to ensure consistent performance.',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'Jest'],
  },
  {
    dateRange: '2021 — 2022',
    role: 'Web Developer',
    company: 'BioSA Lab',
    companyUrl: '#',
    description:
      'Developed web applications using HTML, CSS, and JavaScript to support the diagnosis and monitoring of Age-Related Macular Degeneration (AMD), applying computer vision research to real-world healthcare solutions.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 lg:mb-36 lg:scroll-mt-24">
      {/* Mobile sticky section label */}
      <div className="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-navy/90 px-6 py-4 backdrop-blur-sm lg:hidden">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-lightest">
          Experience
        </h2>
      </div>

      <div className="group/list space-y-12">
        {experiences.map(({ dateRange, role, company, companyUrl, description, technologies }) => (
          <div
            key={`${role}-${company}`}
            className="group/item relative grid pb-1 transition-all duration-300 lg:grid-cols-8 lg:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            {/* Hover background */}
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all duration-300 lg:block lg:group-hover/item:bg-navy-light lg:group-hover/item:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />

            {/* Date */}
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate lg:col-span-2 lg:pt-1">
              {dateRange}
            </header>

            {/* Content */}
            <div className="z-10 lg:col-span-6">
              <h3 className="font-medium leading-snug text-slate-lightest">
                <a
                  href={companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-baseline gap-1 text-slate-lightest transition-colors duration-200 hover:text-teal focus-visible:text-teal"
                >
                  <span>{role}</span>
                  <span className="text-slate">·</span>
                  <span>{company}</span>
                  {/* External link arrow */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="ml-0.5 h-4 w-4 shrink-0 translate-y-px opacity-0 transition-all duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:opacity-100"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </h3>

              <p className="mt-2 text-sm leading-normal">{description}</p>

              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
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
