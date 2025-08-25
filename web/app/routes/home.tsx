import type { Route } from "./+types/home";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Richik Chanda - Product-minded Full Stack Engineer" },
    { name: "description", content: "Portfolio of Richik Chanda, a product-minded full stack engineer with experience in React, GraphQL, and blockchain technologies." },
    { name: "keywords", content: "Richik Chanda, Full Stack Engineer, React, TypeScript, GraphQL, Blockchain" },
  ];
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <main className="min-h-screen aged-paper">
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-6 right-6 z-50 opacity-0 animate-fade-in-delayed">
        <div className="paper-bg p-4 rounded-lg shadow-lg transform rotate-1">
          <div className="flex flex-col space-y-2">
            <a href="#about" className="handwritten text-sm text-amber-800 hover:hand-underline transition-colors">
              About
            </a>
            <a href="#experience" className="handwritten text-sm text-amber-800 hover:hand-underline transition-colors">
              Experience
            </a>
            <a href="#projects" className="handwritten text-sm text-amber-800 hover:hand-underline transition-colors">
              Projects
            </a>
            <a href="#skills" className="handwritten text-sm text-amber-800 hover:hand-underline transition-colors">
              Skills
            </a>
            <a href="#contact" className="handwritten text-sm text-amber-800 hover:hand-underline transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Floating Menu */}
      <div className="md:hidden fixed bottom-6 right-4 z-50 opacity-0 animate-fade-in-delayed">
        {/* Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="paper-bg w-14 h-14 rounded-full shadow-lg flex items-center justify-center transform rotate-1 transition-transform hover:scale-105"
          aria-label="Toggle menu"
        >
          <div className="relative">
            {isMenuOpen ? (
              <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </div>
        </button>

        {/* Floating Menu Items */}
        {isMenuOpen && (
          <div className="absolute bottom-16 right-0 space-y-2 animate-fade-in-up">
            <a 
              href="#contact" 
              onClick={handleMenuClick}
              className="block paper-bg px-4 py-2 rounded-lg shadow-lg handwritten text-sm text-amber-800 hover:hand-underline transition-colors transform rotate-[-0.5deg] whitespace-nowrap"
            >
              Contact
            </a>
            <a 
              href="#skills" 
              onClick={handleMenuClick}
              className="block paper-bg px-4 py-2 rounded-lg shadow-lg handwritten text-sm text-amber-800 hover:hand-underline transition-colors transform rotate-[0.3deg] whitespace-nowrap"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              onClick={handleMenuClick}
              className="block paper-bg px-4 py-2 rounded-lg shadow-lg handwritten text-sm text-amber-800 hover:hand-underline transition-colors transform rotate-[-0.2deg] whitespace-nowrap"
            >
              Projects
            </a>
            <a 
              href="#experience" 
              onClick={handleMenuClick}
              className="block paper-bg px-4 py-2 rounded-lg shadow-lg handwritten text-sm text-amber-800 hover:hand-underline transition-colors transform rotate-[0.4deg] whitespace-nowrap"
            >
              Experience
            </a>
            <a 
              href="#about" 
              onClick={handleMenuClick}
              className="block paper-bg px-4 py-2 rounded-lg shadow-lg handwritten text-sm text-amber-800 hover:hand-underline transition-colors transform rotate-[-0.3deg] whitespace-nowrap"
            >
              About
            </a>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Ink blot decoration */}
          <div className="ink-blot w-12 h-6 sm:w-16 sm:h-8 mx-auto mb-6 sm:mb-8 opacity-0 animate-blob-appear"></div>
          
          <h1 className="handwritten text-4xl sm:text-6xl md:text-8xl font-bold mb-4 text-ink opacity-0 animate-name-slide-in leading-tight">
            Richik Chanda
          </h1>
          
          <div className="script text-xl sm:text-2xl md:text-3xl mb-6 text-amber-800 opacity-0 animate-title-fade-in px-2">
            Product-minded full stack engineer
          </div>
          
          <div className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto text-ink-light opacity-0 animate-desc-fade-in px-4">
            Building scalable web applications and blockchain solutions that impact millions of users
          </div>
          
          {/* Contact links */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-6 text-sm sm:text-lg opacity-0 animate-links-fade-in px-4">
            <a href="mailto:richikchanda1999@gmail.com" className="handwritten hover:hand-underline text-amber-800 transition-colors break-all sm:break-normal">
              richikchanda1999@gmail.com
            </a>
            <a href="https://github.com/richikchanda1999" target="_blank" rel="noopener noreferrer" className="handwritten hover:hand-underline text-amber-800 transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/richikchanda1999" target="_blank" rel="noopener noreferrer" className="handwritten hover:hand-underline text-amber-800 transition-colors">
              LinkedIn
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform opacity-0 animate-scroll-bounce">
            <div className="handwritten text-amber-800 text-xs sm:text-sm mb-2">Scroll to explore</div>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-amber-800 rounded-full mx-auto">
              <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-amber-800 rounded-full mx-auto mt-1 sm:mt-2 animate-scroll-dot"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 animate-on-scroll">
        <div className="max-w-4xl mx-auto">
          <h2 className="script text-3xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12 text-center text-ink hand-underline">
            About Me
          </h2>
          
          <div className="paper-bg p-6 sm:p-8 md:p-12 rounded-lg shadow-lg transform rotate-[-0.5deg] mb-8">
            <p className="text-lg sm:text-xl mb-4 sm:mb-6 leading-relaxed">
              Hey there! I'm a <span className="handwritten text-base sm:text-lg md:text-xl text-amber-800 font-semibold">product-minded full stack engineer</span> passionate about building scalable web applications that make a real difference.
            </p>
            
            <p className="text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
              I've had the privilege of working with amazing teams at <span className="handwritten text-amber-800">Greyfinch</span> and <span className="handwritten text-amber-800">Questbook (YC 21)</span>, where I've helped build systems that serve millions of users and process significant transaction volumes.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed">
              I love the intersection of <span className="script text-base sm:text-lg md:text-xl text-amber-800">great engineering</span> and <span className="script text-base sm:text-lg md:text-xl text-amber-800">product thinking</span> — building not just what works, but what users actually need and love to use.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-20 px-4 sm:px-6 aged-paper animate-on-scroll">
        <div className="max-w-5xl mx-auto">
          <h2 className="script text-3xl sm:text-5xl md:text-6xl font-bold mb-12 sm:mb-16 text-center text-ink hand-underline">
            Experience
          </h2>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-3 sm:left-4 md:left-8 top-0 bottom-0 w-0.5 bg-amber-800 opacity-30"></div>
            
            {/* Greyfinch */}
            <div className="relative mb-12 sm:mb-16 ml-8 sm:ml-12 md:ml-20">
              <div className="absolute -left-8 sm:-left-12 md:-left-20 top-4 sm:top-6">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-amber-800 rounded-full border-2 sm:border-4 border-orange-50"></div>
              </div>
              
              <div className="paper-bg p-4 sm:p-6 md:p-8 rounded-lg shadow-lg transform rotate-[0.3deg]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="script text-2xl sm:text-3xl font-bold text-ink">Product Engineer</h3>
                  <div className="handwritten text-sm sm:text-lg text-amber-800 mt-1 md:mt-0">Nov 2023 – Apr 2025</div>
                </div>
                <div className="handwritten text-lg sm:text-xl text-amber-700 mb-4 sm:mb-6">@ Greyfinch (Remote)</div>
                
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg">
                  <li className="flex items-start">
                    <span className="handwritten text-amber-800 mr-2 sm:mr-3 text-lg sm:text-xl flex-shrink-0">•</span>
                    <span>Collaborated in a 3-person engineering team to overhaul payment infrastructure using <span className="font-semibold">React and Hasura GraphQL</span>, ensuring zero downtime during migration and reducing payment provider charges by <span className="handwritten text-amber-800 font-bold">over 50%</span> without breaking existing workflows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="handwritten text-amber-800 mr-2 sm:mr-3 text-lg sm:text-xl flex-shrink-0">•</span>
                    <span>Designed and delivered a standalone Pay App with <span className="font-semibold">React frontend and GraphQL backend</span>, implementing custom Hasura Actions for secure login and payment processing, impacting <span className="handwritten text-amber-800 font-bold">20M+ customers</span> across orthodontic practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="handwritten text-amber-800 mr-2 sm:mr-3 text-lg sm:text-xl flex-shrink-0">•</span>
                    <span>Launched the complete Pay App solution from concept to production within <span className="handwritten text-amber-800 font-bold">30 days</span>, enabling seamless adoption across <span className="handwritten text-amber-800 font-bold">15+ partner clinics</span> and processing <span className="handwritten text-amber-800 font-bold">$10K+ in transactions</span> through secure payment flows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="handwritten text-amber-800 mr-2 sm:mr-3 text-lg sm:text-xl flex-shrink-0">•</span>
                    <span>Contributed to the migration of legacy calendar modules to modern architecture with database optimization, implementing custom functions and indexes to improve appointment fetching performance by <span className="handwritten text-amber-800 font-bold">2x</span> while ensuring <span className="handwritten text-amber-800 font-bold">100% feature parity</span> with legacy system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="handwritten text-amber-800 mr-2 sm:mr-3 text-lg sm:text-xl flex-shrink-0">•</span>
                    <span>Developed responsive UI components using <span className="font-semibold">FullCalendar library and modern CSS</span>, implementing pixel-perfect designs from Figma mockups and enhancing user engagement by <span className="handwritten text-amber-800 font-bold">25%</span> across <span className="handwritten text-amber-800 font-bold">100+ clinics</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="handwritten text-amber-800 mr-2 sm:mr-3 text-lg sm:text-xl flex-shrink-0">•</span>
                    <span>Optimized application-wide search using <span className="font-semibold">GIN indexes and pg_trgm extension</span>, enabling faster fuzzy search capabilities across the entire Greyfinch platform and improving search response times by <span className="handwritten text-amber-800 font-bold">60%</span></span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Questbook */}
            <div className="relative mb-12 sm:mb-16 ml-8 sm:ml-12 md:ml-20">
              <div className="absolute -left-8 sm:-left-12 md:-left-20 top-4 sm:top-6">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-amber-800 rounded-full border-2 sm:border-4 border-orange-50"></div>
              </div>
              
              <div className="paper-bg p-4 sm:p-6 md:p-8 rounded-lg shadow-lg transform rotate-[-0.3deg]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="script text-xl sm:text-2xl md:text-3xl font-bold text-ink leading-tight">Full Stack Blockchain Developer</h3>
                  <div className="handwritten text-sm sm:text-lg text-amber-800 mt-1 md:mt-0">Jan 2022 – May 2023</div>
                </div>
                <div className="handwritten text-lg sm:text-xl text-amber-700 mb-4 sm:mb-6">@ Questbook (YC 21) (Remote)</div>
                
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg">
                  <li className="flex items-start">
                    <span className="handwritten text-amber-800 mr-2 sm:mr-3 text-lg sm:text-xl flex-shrink-0">•</span>
                    <span>Worked on the decentralised grants tool that was used by more than <span className="handwritten text-amber-800 font-bold">20,000 users</span>, and had disbursed around <span className="handwritten text-amber-800 font-bold">USD $2M</span> to builders across various Web3 projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="handwritten text-amber-800 mr-2 sm:mr-3 text-lg sm:text-xl flex-shrink-0">•</span>
                    <span>Maintained <span className="font-semibold">Solidity smart contracts, Next.JS frontend, and sub-graphs</span> that powered the Dapp through GraphQL queries, ensuring seamless blockchain interaction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="handwritten text-amber-800 mr-2 sm:mr-3 text-lg sm:text-xl flex-shrink-0">•</span>
                    <span>Created the notification system for the app from scratch. Designed an email notification system leveraging <span className="font-semibold">AWS Simple Email Service</span>. This system dispatched both event-driven and periodic emails to a roster of recipients, enhancing user engagement and reducing response times on the platform</span>
                  </li>
                  <li className="flex items-start">
                    <span className="handwritten text-amber-800 mr-2 sm:mr-3 text-lg sm:text-xl flex-shrink-0">•</span>
                    <span>Developed a <span className="font-semibold">Telegram bot</span> for user action notifications. It comprised a webhook, where the Telegram server sent new subscription requests and a cron job that sent out periodic notifications based on a pub-sub architecture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="handwritten text-amber-800 mr-2 sm:mr-3 text-lg sm:text-xl flex-shrink-0">•</span>
                    <span>Integrated <span className="font-semibold">Zapier</span> for clients to set up their own data pipelines. Created an API endpoint using the Serverless architecture, and used periodic polling of this endpoint to get new data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="handwritten text-amber-800 mr-2 sm:mr-3 text-lg sm:text-xl flex-shrink-0">•</span>
                    <span>Maintained the custom graph node that Questbook had for its subgraph on <span className="font-semibold">Optimism</span>. Acquired experience with <span className="font-semibold">AWS Lambda, AWS Elastic Beanstalk, and AWS CloudWatch</span> for debugging and deployment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-20 px-4 sm:px-6 animate-on-scroll">
        <div className="max-w-5xl mx-auto">
          <h2 className="script text-3xl sm:text-5xl md:text-6xl font-bold mb-12 sm:mb-16 text-center text-ink hand-underline">
            Featured Projects
          </h2>
          
          <div className="mb-12 sm:mb-16">
            <div className="paper-bg p-6 sm:p-8 md:p-12 rounded-lg shadow-lg transform rotate-[0.2deg] float-gently">
              <h3 className="script text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-ink">
                Chatterbugs Web App
              </h3>
              <div className="handwritten text-lg sm:text-xl text-amber-800 mb-4 sm:mb-6">
                Full-stack Educational Platform - Brainy Bug Resources
              </div>
              
              <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
                Built a comprehensive web application using <span className="font-semibold">Next.js, TypeScript, and Hasura</span> to complement physical educational card decks, serving <span className="handwritten text-amber-800 font-bold">100+ active users</span> and generating <span className="handwritten text-amber-800 font-bold">$10K+ in revenue</span> for the client.
              </p>
              
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div>
                  <h4 className="script text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-ink">Key Features</h4>
                  <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="handwritten text-amber-800 mr-2 flex-shrink-0 text-sm sm:text-base">•</span>
                      <span>Integrated QR code system allowing instant digital content access from physical cards, reducing user friction by <span className="handwritten text-amber-800 font-bold">40%</span></span>
                    </li>
                    <li className="flex items-start">
                      <span className="handwritten text-amber-800 mr-2 flex-shrink-0 text-sm sm:text-base">•</span>
                      <span>Implemented secure authentication system with <span className="font-semibold">Firebase Authentication and custom JWT claims</span> via Firebase Cloud Functions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="handwritten text-amber-800 mr-2 flex-shrink-0 text-sm sm:text-base">•</span>
                      <span>Created responsive components with modern CSS and TypeScript, delivering pixel-perfect UI that improved user experience scores by <span className="handwritten text-amber-800 font-bold">35%</span></span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="script text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-ink">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
                    {["Next.js", "TypeScript", "Hasura", "GraphQL", "Firebase", "Rust", "Axum"].map((tech) => (
                      <span key={tech} className="handwritten text-xs sm:text-sm bg-amber-50 px-2 sm:px-3 py-1 rounded-full text-amber-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm sm:text-base">
                    <span className="handwritten text-amber-800 font-semibold">Architecture:</span> Led complete technology stack selection and database design, choosing optimal solutions for performance and scalability
                  </div>
                </div>
              </div>
              
              <div className="text-sm sm:text-base md:text-lg">
                <span className="handwritten text-amber-800 font-semibold">Impact:</span> Developed high-performance backend services in Rust using Axum framework, achieving <span className="handwritten text-amber-800 font-bold">60% better memory efficiency</span> compared to Node.js alternatives while running on resource-constrained DigitalOcean infrastructure. Automated CI/CD pipelines using GitHub Actions, reducing deployment time by <span className="handwritten text-amber-800 font-bold">80%</span> and eliminating manual errors.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-20 px-4 sm:px-6 aged-paper animate-on-scroll">
        <div className="max-w-5xl mx-auto">
          <h2 className="script text-3xl sm:text-5xl md:text-6xl font-bold mb-12 sm:mb-16 text-center text-ink hand-underline">
            Skills & Technologies
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {/* Frontend */}
            <div className="paper-bg p-4 sm:p-6 rounded-lg shadow-lg transform rotate-[-0.5deg]">
              <h3 className="script text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-ink">Frontend</h3>
              <div className="grid grid-cols-2 gap-x-2 sm:gap-x-3 gap-y-1 sm:gap-y-2">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"].map((skill) => (
                  <div key={skill} className="handwritten text-sm sm:text-base md:text-lg text-amber-800">{skill}</div>
                ))}
              </div>
            </div>
            
            {/* Backend */}
            <div className="paper-bg p-4 sm:p-6 rounded-lg shadow-lg transform rotate-[0.3deg]">
              <h3 className="script text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-ink">Backend</h3>
              <div className="grid grid-cols-2 gap-x-2 sm:gap-x-3 gap-y-1 sm:gap-y-2">
                {["Node.js", "Rust", "Axum", "Hasura", "PostgreSQL"].map((skill) => (
                  <div key={skill} className="handwritten text-sm sm:text-base md:text-lg text-amber-800">{skill}</div>
                ))}
              </div>
            </div>
            
            {/* Cloud & DevOps */}
            <div className="paper-bg p-4 sm:p-6 rounded-lg shadow-lg transform rotate-[-0.2deg]">
              <h3 className="script text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-ink">Cloud & DevOps</h3>
              <div className="grid grid-cols-2 gap-x-2 sm:gap-x-3 gap-y-1 sm:gap-y-2">
                {["AWS", "Lambda", "GitHub Actions", "DigitalOcean", "Docker"].map((skill) => (
                  <div key={skill} className="handwritten text-sm sm:text-base md:text-lg text-amber-800">{skill}</div>
                ))}
              </div>
            </div>
            
            {/* Blockchain */}
            <div className="paper-bg p-4 sm:p-6 rounded-lg shadow-lg transform rotate-[0.4deg]">
              <h3 className="script text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-ink">Blockchain</h3>
              <div className="grid grid-cols-2 gap-x-2 sm:gap-x-3 gap-y-1 sm:gap-y-2">
                {["Solidity", "Web3.js", "Subgraphs", "Optimism", "Smart Contracts"].map((skill) => (
                  <div key={skill} className="handwritten text-sm sm:text-base md:text-lg text-amber-800">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 sm:py-20 px-4 sm:px-6 animate-on-scroll">
        <div className="max-w-4xl mx-auto">
          <h2 className="script text-3xl sm:text-5xl md:text-6xl font-bold mb-12 sm:mb-16 text-center text-ink hand-underline">
            Education
          </h2>
          
          <div className="space-y-6 sm:space-y-8">
            <div className="paper-bg p-6 sm:p-8 rounded-lg shadow-lg transform rotate-[0.2deg]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 sm:mb-4">
                <h3 className="script text-xl sm:text-2xl md:text-3xl font-bold text-ink leading-tight">
                  Indian Institute Of Information Technology
                </h3>
                <div className="handwritten text-sm sm:text-lg text-amber-800 mt-1 md:mt-0">Jul 2018 – May 2022</div>
              </div>
              <div className="text-lg sm:text-xl mb-2">Bachelor of Technology, Computer Science and Engineering</div>
              <div className="text-base sm:text-lg text-amber-700 mb-3 sm:mb-4">Guwahati, India</div>
              <div className="text-base sm:text-lg">
                <span className="font-semibold">CGPA:</span> 
                <span className="handwritten text-base sm:text-lg text-amber-800 font-semibold"> 8.98/10</span>
              </div>
            </div>
            
            <div className="paper-bg p-6 sm:p-8 rounded-lg shadow-lg transform rotate-[-0.3deg]">
              <h3 className="script text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-ink">Salt Lake School</h3>
              <div className="text-base sm:text-lg text-amber-700 mb-3 sm:mb-4">Kolkata, India</div>
              <div className="text-sm sm:text-base md:text-lg flex flex-col sm:flex-row sm:items-center">
                <span>
                  <span className="font-semibold">High School:</span> 
                  <span className="handwritten text-base sm:text-lg md:text-xl text-amber-800 font-bold"> 93.75%</span>
                </span>
                <span className="hidden sm:inline mx-4">•</span>
                <span className="mt-1 sm:mt-0">
                  <span className="font-semibold">Graduate School:</span> 
                  <span className="handwritten text-base sm:text-lg md:text-xl text-amber-800 font-bold"> 96.6%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 aged-paper animate-on-scroll">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="script text-3xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12 text-ink hand-underline">
            Let's Connect
          </h2>
          
          <div className="paper-bg p-6 sm:p-8 md:p-12 rounded-lg shadow-lg transform rotate-[-0.2deg] mb-6 sm:mb-8">
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">
              Always excited to discuss new opportunities, interesting projects, or just chat about technology!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="script text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-ink">Get in Touch</h3>
                <div className="space-y-2 sm:space-y-3">
                  <a href="mailto:richikchanda1999@gmail.com" className="block handwritten text-sm sm:text-base md:text-lg hover:hand-underline text-amber-800 break-all sm:break-normal">
                    richikchanda1999@gmail.com
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="script text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-ink">Follow Me</h3>
                <div className="space-y-2 sm:space-y-3">
                  <a href="https://github.com/richikchanda1999" target="_blank" rel="noopener noreferrer" className="block handwritten text-sm sm:text-base md:text-lg hover:hand-underline text-amber-800">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/richikchanda1999" target="_blank" rel="noopener noreferrer" className="block handwritten text-sm sm:text-base md:text-lg hover:hand-underline text-amber-800">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="script text-lg sm:text-xl md:text-2xl text-amber-800 opacity-80">
            Thanks for stopping by! ✨
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-6 sm:py-8 text-center">
        <div className="handwritten text-sm sm:text-base md:text-lg text-amber-800 opacity-60 px-4">
          Hand-crafted with love & code
        </div>
      </footer>
    </main>
  );
}
