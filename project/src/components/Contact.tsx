import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-xl text-gray-300 mb-12">
          I'm currently available for freelance work and full-time positions.
        </p>
        <div className="flex justify-center space-x-8">
          <a href="https://github.com/yourusername" className="text-3xl hover:text-primary transition-colors">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" className="text-3xl hover:text-primary transition-colors">
            <FaLinkedin />
          </a>
          <a href="mailto:your.email@example.com" className="text-3xl hover:text-primary transition-colors">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}