import './App.css';
import Cubes from './components/Cubes';
import TargetCursor from './components/TargetCursor';

function App() {
  return (
    <div className="App">
      <div className="cubes-background">
        <Cubes 
          gridSize={20}
          maxAngle={45}
          radius={3}
          faceColor="#060010"
          borderStyle="1px dashed #6442f0ff"
          cellGap={30}
          autoAnimate={true}
          rippleOnClick={false}
          rippleColor="#61dafb"
        />
      </div>

      {/* Header */}
      <header className="header">
        <nav className="nav-container">
          <a href="#about" className="nav-link cursor-target">About Me</a>
          <a href="#tech" className="nav-link cursor-target">Tech Stack</a>
          <a href="#projects" className="nav-link cursor-target">Projects</a>
          <a href="#contact" className="nav-link cursor-target">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <p className="greeting">Hi there</p>
          <h1 className="hero-title">
            I'm <span className="name-highlight">Aayan Altaf</span>
          </h1>
          <p className="hero-subtitle">I am a Full Stack Developer</p>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon cursor-target">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/aayan-altaf-248657279/" target="_blank" rel="noopener noreferrer" className="social-icon cursor-target">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
              </svg>
            </a>
            <a href="aayanaltafx@gmail.com" className="social-icon cursor-target">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="about-section">
          <h2 className="section-title">About me</h2>
          <p className="about-text">
            I'm passionate about building <span className="highlight">intuitive</span> and <span className="highlight">efficient</span> web experiences. 
            I thrive on <span className="highlight">solving problems</span> with a blend of <span className="highlight">logic</span> and <span className="highlight">creativity</span>, 
            always pushing myself to <span className="highlight">improve</span> and <span className="highlight">learn</span> more. 
            When I'm not coding, you'll find me listening to music, playing piano, or reading. 
            Got an <span className="highlight">exciting project</span> in mind? Let's connect and create something amazing together!
          </p>
        </section>

        {/* Tech Stack Section */}
        <section id="tech" className="tech-section">
          <h2 className="section-title">Tech Stack</h2>
          
          <div className="tech-grid">
            {/* Frontend */}
            <div className="tech-category cursor-target">
              <div className="category-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" fill="currentColor"/>
                </svg>
                <h3>Frontend</h3>
              </div>
              <div className="tech-items">
                <div className="tech-item cursor-target">
                  <span className="tech-icon">🔥</span>
                  <span>HTML</span>
                </div>
                <div className="tech-item cursor-target">
                  <span className="tech-icon">🎨</span>
                  <span>CSS</span>
                </div>
                <div className="tech-item cursor-target">
                  <span className="tech-icon">⚡</span>
                  <span>JavaScript</span>
                </div>
                <div className="tech-item cursor-target">
                  <span className="tech-icon">⚛️</span>
                  <span>React.js</span>
                </div>
                <div className="tech-item cursor-target">
                  <span className="tech-icon">🔷</span>
                  <span>Axios</span>
                </div>
                <div className="tech-item cursor-target">
                  <span className="tech-icon">🌈</span>
                  <span>Vite</span>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="tech-category cursor-target">
              <div className="category-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" fill="currentColor"/>
                </svg>
                <h3>Backend</h3>
              </div>
              <div className="tech-items">
                <div className="tech-item cursor-target">
                  <span className="tech-icon">🟢</span>
                  <span>Node.js</span>
                </div>
                <div className="tech-item cursor-target">
                  <span className="tech-icon">🚀</span>
                  <span>Express.js</span>
                </div>
                <div className="tech-item cursor-target">
                  <span className="tech-icon">🔑</span>
                  <span>Passport.js</span>
                </div>
                <div className="tech-item cursor-target">
                  <span className="tech-icon">🔐</span>
                  <span>JWT</span>
                </div>
                <div className="tech-item cursor-target">
                  <span className="tech-icon">🐘</span>
                  <span>PostgreSQL</span>
                </div>
                <div className="tech-item cursor-target">
                  <span className="tech-icon">💎</span>
                  <span>Prisma ORM</span>
                </div>
              </div>
            </div>

            {/* Dev Tools */}
            <div className="tech-category cursor-target">
              <div className="category-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" fill="currentColor"/>
                </svg>
                <h3>Dev.Tools</h3>
              </div>
              <div className="tech-items">
                <div className="tech-item cursor-target">
                  <span className="tech-icon">🐙</span>
                  <span>GitHub</span>
                </div>
                <div className="tech-item cursor-target">
                  <span className="tech-icon">📦</span>
                  <span>Git</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <h2 className="section-title">
            <span className="title-icon">&lt;/&gt;</span>
            Projects
          </h2>
          
          <div className="projects-container">
            {/* Project 1 - Instago */}
            <div className="project-card cursor-target">
              <div className="project-image">
                <img src="https://via.placeholder.com/600x400/1a1a2e/6dabf5?text=Instago" alt="Instago Project" />
                <div className="project-overlay">
                  <div className="project-buttons">
                    <a href="#" className="project-btn cursor-target">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" fill="currentColor"/>
                      </svg>
                      Code
                    </a>
                    <a href="#" className="project-btn cursor-target">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
                      </svg>
                      Preview
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Instago – A Full Stack Social Media</h3>
                <p className="project-description">
                  Instago is a full stack social media platform with Google and guest sign-in, interactive posts with image uploads, and two dynamic feeds. 
                  One personalized and one general. Users can follow others, engage through likes and comments, and manage their profiles seamlessly.
                </p>
                <div className="project-tech">
                  <span className="tech-badge">⚛️ React.js</span>
                  <span className="tech-badge">🟢 Node.js</span>
                  <span className="tech-badge">🚀 Express.js</span>
                  <span className="tech-badge">🐘 PostgreSQL</span>
                  <span className="tech-badge">💎 Prisma ORM</span>
                </div>
              </div>
            </div>

            {/* Project 2 - SnapTalk */}
            <div className="project-card project-card-reverse cursor-target">
              <div className="project-image">
                <img src="https://via.placeholder.com/600x400/1a1a2e/6dabf5?text=SnapTalk" alt="SnapTalk Project" />
                <div className="project-overlay">
                  <div className="project-buttons">
                    <a href="#" className="project-btn cursor-target">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" fill="currentColor"/>
                      </svg>
                      Code
                    </a>
                    <a href="#" className="project-btn cursor-target">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
                      </svg>
                      Preview
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">SnapTalk – Real Time Messaging App</h3>
                <p className="project-description">
                  SnapTalk is a full stack real time messaging app with secure authentication, a friend system, and instant chat powered by Socket.io. 
                  Users can share images, send GIFs, customize chats, and even generate AI powered images for a personalized experience.
                </p>
                <div className="project-tech">
                  <span className="tech-badge">⚛️ React.js</span>
                  <span className="tech-badge">🟢 Node.js</span>
                  <span className="tech-badge">🚀 Express.js</span>
                  <span className="tech-badge">🔌 Socket.io</span>
                  <span className="tech-badge">🐘 PostgreSQL</span>
                  <span className="tech-badge">💎 Prisma ORM</span>
                </div>
              </div>
            </div>

            {/* Project 3 - MovieSpot */}
            <div className="project-card cursor-target">
              <div className="project-image">
                <img src="https://via.placeholder.com/600x400/1a1a2e/6dabf5?text=MovieSpot" alt="MovieSpot Project" />
                <div className="project-overlay">
                  <div className="project-buttons">
                    <a href="#" className="project-btn cursor-target">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" fill="currentColor"/>
                      </svg>
                      Code
                    </a>
                    <a href="#" className="project-btn cursor-target">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
                      </svg>
                      Preview
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">MovieSpot – Explore Movies & Series</h3>
                <p className="project-description">
                  MovieSpot is a movie and series explorer that lets you browse trending, popular, and top-rated titles. View detailed movie pages with 
                  cast information, trailers, and similar recommendations. Search by genre, filter top-rated content, and explore actor filmographies. 
                  The UI is sleek, responsive, and supports multiple languages.
                </p>
                <div className="project-tech">
                  <span className="tech-badge">⚛️ React.js</span>
                  <span className="tech-badge">📘 TypeScript</span>
                  <span className="tech-badge">🎬 TMDb API</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <h2 className="section-title">Contact</h2>
          <p className="contact-subtitle">Got a project? Reach out!</p>
          
          <div className="contact-grid">
            <a href="mailto:aayanaltafx@gmail.com" className="contact-card cursor-target">
              <div className="contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                </svg>
              </div>
              <div className="contact-info">
                <h3>Email</h3>
                <p>aayanaltafx@gmail.com</p>
              </div>
            </a>

            <a href="#" className="contact-card cursor-target">
              <div className="contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" fill="currentColor"/>
                </svg>
              </div>
              <div className="contact-info">
                <h3>CV</h3>
                <p>Download</p>
              </div>
            </a>

            <a href="https://github.com/aayanaltaf" target="_blank" rel="noopener noreferrer" className="contact-card cursor-target">
              <div className="contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor"/>
                </svg>
              </div>
              <div className="contact-info">
                <h3>GitHub</h3>
                <p>aayanaltaf</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/aayan-altaf-248657279/" target="_blank" rel="noopener noreferrer" className="contact-card cursor-target">
              <div className="contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
                </svg>
              </div>
              <div className="contact-info">
                <h3>LinkedIn</h3>
                <p>Aayan Altaf</p>
              </div>
            </a>
          </div>
        </section>
      </main>

      <TargetCursor />
    </div>
  );
}

export default App;