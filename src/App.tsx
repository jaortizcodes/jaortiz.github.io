import "./App.css";

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const skills = [
  "React",
  "Vue",
  "Flutter",
  "PHP",
  "WordPress",
  "Cloud integrations",
  "TensorFlow",
  "Business systems",
];

const stats = [
  { value: "10+", label: "years building products" },
  { value: "DXC", label: "currently a data analyst at DXC Technology" },
  { value: "4", label: "platforms: web, mobile, desktop, cloud" },
];

const featuredProjects = [
  {
    title: "Political Campaign Solutions",
    category: "Web and mobile platform",
    image: assetPath("portfolio/political-campaign-solutions.jpg"),
    description:
      "Voter monitoring, QR-based surveys, and campaign analytics designed for fast field operations.",
  },
  {
    title: "AI Classification App",
    category: "Mobile AI",
    image: assetPath("portfolio/tensorflow.png"),
    description:
      "A TensorFlow-powered mobile experience for classifying fish and plants from image input.",
  },
  {
    title: "City Services Platform",
    category: "Government services",
    image: assetPath("portfolio/city-services-platforms.jpg"),
    description:
      "A digital gateway for business permits, cedulas, and essential city services.",
  },
  {
    title: "E-Casino Agent System",
    category: "Operations dashboard",
    image: assetPath("portfolio/e-casino-agent-system.jpg"),
    description:
      "Agent, master agent, player, and commission management built for clear daily oversight.",
  },

  {
    title: "Community-Based Monitoring System (CBMS)",
    category: "Government services",
    image: assetPath("portfolio/cbms.jpg"),
    description:
      "An organized technology-based system to collect, process, and validate disaggregated data at the local level.",
  },

  {
    title: "Incidents and Reports (CBMS)",
    category: "Government services",
    image: assetPath("portfolio/incidents.jpg"),
    description:
      "A mapping tool to track, monitor, and report incidents at the local level with automatic identification of affected residents.",
  },
  {
    title: "CENTURY 21",
    category: "Real estate website",
    image: assetPath("portfolio/century21.jpg"),
    description:
      "A polished property-focused website experience built to make listings, inquiries, and brand trust easier to navigate.",
  },
  {
    title: "EAFP.AT",
    category: "Business website",
    image: assetPath("portfolio/eafp.jpg"),
    description:
      "A responsive company website that offers energy certificate in Austria",
  },
  {
    title: "CAMBRIDGEBICYCLE.COM",
    category: "Commerce website",
    image: assetPath("portfolio/cambridgebicycle.jpg"),
    description:
      "An e-commerce and retail web experience shaped for product browsing, local customer trust, and smooth buying intent.",
  },
  {
    title: "CLOVR.COM",
    category: "Landing page",
    image: assetPath("portfolio/clovr.jpg"),
    description:
      "A sharp landing page experience focused on cryptocurrency games and betting.",
  },
  {
    title: "SENIORCAREOFSACRAMENTO.COM",
    category: "Care services website",
    image: assetPath("portfolio/scos.jpg"),
    description:
      "A service website built for clarity, empathy, and easy contact paths for families researching senior care support.",
  },
];

const clientSites = [
  "CENTURY 21",
  "EAFP.AT",
  "CAMBRIDGEBICYCLE.COM",
  "CLOVR.COM",
  "SENIORCAREOFSACRAMENTO.COM",
];

const services = [
  {
    title: "Custom web apps",
    description:
      "Responsive dashboards, internal tools, public portals, and customer-facing products that feel fast and dependable.",
  },
  {
    title: "Mobile experiences",
    description:
      "Cross-platform Flutter apps with practical flows, clean interfaces, and integrations that support real operations.",
  },
  {
    title: "Commerce and landing pages",
    description:
      "Conversion-focused product pages, WordPress sites, and storefronts built around clarity, speed, and trust.",
  },
];

const emailAddress = "jaortiz.devph@gmail.com";
const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;

function App() {
  return (
    <main>
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#home">
          <strong>JONJIE ORTIZ</strong>
          <span>Web & Mobile App Developer</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Jonjie Ortiz / Web and mobile app developer</p>
          <h2>
            Practical digital products for teams that need software to move.
          </h2>
          <p className="hero-text">
            I build responsive websites, mobile apps, dashboards, commerce
            experiences, and custom business systems for clients who need clean
            execution from idea to launch. I am also currently a Data Analyst at
            DXC Technology, bringing a data-informed perspective to the products
            I build.
          </p>
          <div
            className="hero-actions"
            aria-label="Contact and portfolio links"
          >
            <a
              className="button primary"
              href={emailLink}
              target="_blank"
              rel="noreferrer"
            >
              Start a project
            </a>
            <a className="button secondary" href="#work">
              View work
            </a>
          </div>
          <div className="skill-strip" aria-label="Core technologies">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Portfolio preview">
          <img
            src={assetPath("portfolio/Ortiz_Jonjie_Andal.jpg")}
            alt="Jonjie Ortiz portfolio preview"
          />
          <div className="availability">
            <span></span>
            Available for selected builds
          </div>
        </div>
      </section>

      <section className="stats-grid" aria-label="Portfolio highlights">
        {stats.map((item) => (
          <div className="stat" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section split" id="about">
        <div>
          <p className="eyebrow">About</p>
          <h2>A developer who can handle the useful messy middle.</h2>
        </div>
        <div className="section-copy">
          <p>
            For the past 10 years, I have helped clients turn requirements,
            workflows, and business goals into web, mobile, and desktop
            applications. My work spans political campaign tools, government
            service platforms, AI-assisted apps, logistics systems, landing
            pages, and custom websites. Today, I also work as a Data Analyst at
            DXC Technology, where I stay close to reporting, operations, and
            practical business insight.
          </p>
          <p>
            I care about interfaces that are easy to understand, systems that
            scale with the team using them, and launches that do not leave the
            client guessing what happens next.
          </p>
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Featured projects</p>
          <h2>
            Selected work across operations, AI, government, and commerce.
          </h2>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={`${project.title} interface`} />
              <div>
                <p>{project.category}</p>
                <h3>{project.title}</h3>
                <span>{project.description}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section services" id="services">
        <div className="section-heading compact">
          <p className="eyebrow">What I build</p>
          <h2>From public pages to internal systems.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section client-section">
        <p className="eyebrow">Client website work</p>
        <div className="client-list" aria-label="Client websites">
          {clientSites.map((site) => (
            <span key={site}>{site}</span>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div>
          <p className="eyebrow">Let us build something useful</p>
          <h2>
            Have a project, product idea, or system that needs a sharper shape?
          </h2>
        </div>
        <div className="contact-panel">
          <a href={emailLink} target="_blank" rel="noreferrer">
            {emailAddress}
          </a>
          <div className="socials">
            <a
              href="https://github.com/jaortizcodes"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.facebook.com/iamadamant/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
