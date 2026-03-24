export default function Footer() {
  return (
    <footer className="pb-16 pt-4 text-sm text-slate lg:pb-0 lg:pt-0">
      <p>
        Coded in {' '}
        <a
          href="https://code.visualstudio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate-light transition-colors duration-200 hover:text-teal"
        >
          Visual Studio Code
        </a>
        &nbsp;by yours truly. Built with&nbsp;
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate-light transition-colors duration-200 hover:text-teal"
        >
          Next.js
        </a> and&nbsp;
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate-light transition-colors duration-200 hover:text-teal"
        >
          Tailwind CSS
        </a>, deployed with <a
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate-light transition-colors duration-200 hover:text-teal"
        >
          Vercel
        </a>
        .
      </p>
    </footer>
  )
}
