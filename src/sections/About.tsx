export default function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 lg:mb-36 lg:scroll-mt-24">
      {/* Mobile sticky section label */}
      <div className="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-navy/90 px-6 py-4 backdrop-blur-sm lg:hidden">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-lightest">
          About
        </h2>
      </div>

      <div className="space-y-4 text-slate">
        <p>
          Hi! I&apos;m a full-stack developer specializing in front-end development
          with <span className="text-slate-lightest font-medium">React</span>. I love
          building clean, user-friendly web apps and crafting smooth, intuitive UI/UX
          experiences that feel effortless to use.
        </p>
        <p>
          Most recently, I worked at{' '}
          <span className="text-slate-lightest font-medium">Rakuten Kobo</span>, where I helped relaunch their e-commerce platform by building a modern storefront experience used by millions of readers worldwide.
          Working closely with UX designers, I translated wireframes and design systems into pixel-perfect React components, while also optimizing the <span className="text-slate-lightest font-medium">Next.js</span> application through server-side rendering and static site generation to achieve faster page loads and improved SEO. It was a rewarding challenge to build and maintain frontend architecture that could hold up under peak traffic during major promotional events and new release launches.
        </p>
        <p>
          Before that, I spent over two years at{' '}
          <span className="text-slate-lightest font-medium">Bank of Montreal (BMO) </span>
          building scalable, high-traffic features for their digital banking platform, serving over 8 million daily active users. I partnered closely with UX researchers to run usability testing and iterate on interface designs, which helped improve task completion rates meaningfully. I also led the development of a reusable component library of 50+ components, with a strong focus on WCAG 2.1 accessibility compliance and UI consistency across the platform.
        </p>
        <p>
          Outside of work, you can usually find me playing tennis, exploring new technologies, or looking for ways to push the boundaries of what&apos;s possible on the web.
        </p>
      </div>
    </section>
  )
}
