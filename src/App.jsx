
import './App.css';

const projects = [
  {
    number: '01',
    title: 'To-Do App',
    category: 'HTML / CSS / JavaScript',
    description:
      'A modern and responsive task management application for organizing daily activities.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=900',
    demo: 'https://to-doapp-rho-blond.vercel.app/',
  },

  {
    number: '02',
    title: 'Age Validation App',
    category: 'HTML / CSS / JavaScript',
    description:
      'A responsive age validation application with interactive user feedback.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900',
    demo: 'https://agevalidation.vercel.app/',
  },

  {
    number: '03',
    title: 'Weather App',
    category: 'HTML / CSS / JavaScript',
    description:
      'A weather application providing weather information through a clean interface.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=900',
    demo: 'https://weather1-two-xi.vercel.app/',
  },

  {
    number: '04',
    title: 'Temu Clone',
    category: 'React.js / CSS / API',
    description:
      'A responsive e-commerce application inspired by Temu, featuring product browsing, search, categories and a shopping cart.',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=900',
    demo: 'https://clericatemu.vercel.app/',
  },

  {
    number: '05',
    title: 'DTA Education Clone',
    category: 'HTML / CSS / JavaScript',
    description:
      'A responsive recreation of the Digital Training Academy website, featuring a modern landing page, navigation, educational programs and digital skills information.',
    image: '/dta-preview.PNG',
    demo: 'https://dta-n.vercel.app/',
  },
  {
  number: "06",
  title: "Counter App",
  category: "React / CSS",
  description:
    "A modern and responsive counter application built with React, featuring increment, decrement, and reset functionality.",
  image: "/counter.png",
  demo: "https://count-jq9i.vercel.app/",
},
{
  number: "07",
  title: "FAQ App",
  category: "React / CSS",
  description:
    "A modern and responsive FAQ application featuring interactive accordion questions, search functionality, and category filtering.",
  image: "/faq-app.PNG",
  demo: "https://faq-zeta-ten.vercel.app/",
},

{
  number: '08',
  title: 'Facebook Clone',
  category: 'React / JavaScript / CSS',
  description:
    'A responsive social media interface inspired by Facebook, featuring a news feed, stories, interactive posts, likes, comments, and search functionality.',
  image: '/facebook-preview.PNG',
  demo: 'https://faceclone-sand.vercel.app/',
}
];

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React.js',
  'Git',
  'GitHub',
  'Responsive Design',
  'VS Code',
];

function App() {
  return (
    <div className="portfolio">

      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="logo">
          H<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Resume</a>
        </div>

        <a href="#contact" className="nav-button">
          Resume ↗
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot"></span>
            Welcome to my portfolio
          </div>

          <p className="intro">HELLO, I'M</p>

          <h1>
            Habeeb<span>.</span>
            <br />
            <span className="gradient-text">
              Frontend Developer
            </span>
          </h1>

          <p className="hero-description">
            I build modern, responsive and user-friendly
            websites using HTML, CSS, JavaScript and React.
            I enjoy turning creative ideas into beautiful
            digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work ↗
            </a>

            <a href="#about" className="secondary-button">
              About Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/DevHabeeby"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/habeeb-tech-831147429/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-circle">
            <img
              src="/profile.png"
              alt="Habeeb - Frontend Developer"
              className="profile-image"
            />
          </div>

          <div className="floating-card card-one">
            <span>✦</span> HTML & CSS
          </div>

          <div className="floating-card card-two">
            <span>✦</span> React.js
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about section" id="about">
        <div className="section-label">
          01 — ABOUT ME
        </div>

        <div className="about-content">
          <h2>
            Passionate about building
            <span className="gradient-text">
              {' '}digital experiences.
            </span>
          </h2>

          <p>
            I'm a frontend developer passionate about web
            development and technology. I enjoy creating
            clean, accessible and responsive websites.

            My journey involves continuously learning new
            technologies, improving my coding skills and
            building projects that solve real problems.
          </p>

          <a href="#contact" className="text-link">
            Let's work together ↗
          </a>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="skills section" id="skills">
        <div className="section-label">
          02 — MY SKILLS
        </div>

        <h2 className="section-heading">
          Technologies I work with.
        </h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <span>0{index + 1}</span>
              <h3>{skill}</h3>
              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects section" id="projects">
        <div className="section-label">
          03 — SELECTED WORK
        </div>

        <div className="projects-heading">
          <div>
            <h2 className="section-heading">
              Things I've{' '}
              <span className="gradient-text">
                built.
              </span>
            </h2>

            <p>
              A collection of projects I've worked on.
            </p>
          </div>

          <span className="project-count">
            {String(projects.length).padStart(2, '0')} PROJECTS
          </span>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  loading="lazy"
                />

                <span className="project-number">
                  {project.number}
                </span>
              </div>

              <div className="project-info">
                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-links">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT / RESUME SECTION */}
      <section className="contact section" id="contact">
        <div className="section-label">
          04 — RESUME
        </div>

        <h2>
          Have a project in mind?
          <br />
          <span className="gradient-text">
            Let's create something great.
          </span>
        </h2>

        <p>
          I'm always interested in learning, creating
          and working on exciting web projects.
        </p>

        <div className="resume-actions">

          {/* DOWNLOAD RESUME */}
          <a
            href="/Resume Habeeb.pdf"
            download="Habeeb-Resume.pdf"
            className="resume-btn"
          >
            Download My Resume <span>↓</span>
          </a>

          {/* VIEW CERTIFICATE */}
          <a
            href="https://www.freecodecamp.org/certification/devhabeeby/responsive-web-design-v9"
            target="_blank"
            rel="noreferrer"
            className="certificate-btn"
          >
            View My Certificate ↗
          </a>

          {/* WHATSAPP CONTACT */}
          <a
            href="https://wa.me/2348142342969"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            Message Me on WhatsApp ↗
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          H<span>.</span>
        </a>

        <p>Designed & Built with React.js</p>

        <p>© 2026 Habeeb. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
