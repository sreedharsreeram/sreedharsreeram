import { MailIcon, GithubIcon, LinkedinIcon } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Get in Touch</h2>
        <p className="text-lg mb-8 font-light">
          I'm always open to new opportunities and collaborations. Feel free to
          reach out!
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:ssreedh9@asu.edu"
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="Email"
          >
            <MailIcon className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/sreedharsreeram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com/in/sreeram-sreedhar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  )
}

