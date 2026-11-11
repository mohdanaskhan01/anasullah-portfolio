import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MapPin,
  Menu, X, Cloud, Server, Network, ShieldCheck, Code2, Terminal,
  Boxes, GitBranch, Container, GraduationCap, CalendarDays, Target,
  ExternalLink, Download, CheckCircle2, Layers3, Workflow, Monitor,
  BookOpen, Send, Sparkles
} from 'lucide-react';
import './styles.css';

const PROFILE = {
  name: 'Mohammed Anasullah Khan',
  shortName: 'Anasullah',
  email: 'mohammedanaskhan97@gmail.com',
  location: 'Hyderabad, Telangana, India',
  github: 'https://github.com/mohdanaskhan01',
  linkedin:'https://www.linkedin.com/in/mohmmed-anasullah-khan/', 
  resume: './resume.pdf',
};

const navItems = [
  ['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'],
  ['Learning', 'learning'], ['Contact', 'contact']
];

const skillGroups = [
  { title: 'AWS Cloud', level: 'Foundational knowledge', icon: Cloud, items: ['EC2', 'S3', 'IAM', 'VPC', 'RDS', 'Route 53', 'CloudFront', 'CloudFormation', 'CloudWatch', 'Application Load Balancer', 'Auto Scaling Groups'] },
  { title: 'DevOps & Tools', level: 'Learning / fundamentals', icon: Workflow, items: ['Docker', 'CI/CD fundamentals', 'Git', 'GitHub', 'Infrastructure as Code'] },
  { title: 'Operating Systems', level: 'Foundational knowledge', icon: Monitor, items: ['Linux', 'Windows'] },
  { title: 'Programming', level: 'Fundamentals', icon: Code2, items: ['Python', 'HTML', 'CSS'] },
  { title: 'Networking', level: 'Foundational knowledge', icon: Network, items: ['IP addressing', 'DNS', 'TCP/IP', 'Subnets', 'Security Groups', 'Networking basics'] },
];

const learning = [
  { title: 'Docker & Containerization', detail: 'Learning images, containers, Dockerfiles and container workflows.', icon: Container },
  { title: 'Kubernetes Fundamentals', detail: 'Building an understanding of orchestration and core Kubernetes objects.', icon: Boxes },
  { title: 'AWS Architecture', detail: 'Strengthening knowledge of AWS services and cloud architecture patterns.', icon: Cloud },
  { title: 'CI/CD Pipelines', detail: 'Understanding automated build, test and deployment workflows.', icon: GitBranch },
  { title: 'Linux Administration', detail: 'Practising command-line usage, permissions and system basics.', icon: Terminal },
  { title: 'Python Programming', detail: 'Improving programming fundamentals and scripting skills.', icon: Code2 },
];

function SocialLink({ href, label, children }) {
  if (!href) return <span className="social-link unavailable" aria-label={`${label} link not added yet`} title={`${label} URL will be added later`}>{children}</span>;
  return <a className="social-link" href={href} target="_blank" rel="noreferrer" aria-label={label}>{children}</a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="container nav-wrap">
      <a className="brand" href="#home" onClick={() => setOpen(false)}><span className="brand-mark">A</span><span>anasullah<span className="brand-dot">.</span></span></a>
      <button className="menu-toggle" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={21}/> : <Menu size={21}/>}</button>
      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={15}/></a>
      </nav>
    </div>
  </header>;
}

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}

function Hero() {
  return <section className="hero section-shell" id="home">
    <div className="hero-grid container">
      <div className="hero-copy">
        <div className="availability"><span className="pulse-dot"/> Open to entry-level opportunities</div>
        <p className="hero-intro">HELLO, I'M</p>
        <h1>{PROFILE.name}<span className="gradient-text">.</span></h1>
        <h2>Aspiring Cloud <span>&</span> DevOps Engineer</h2>
        <p className="hero-description">Building reliable, scalable and highly available cloud infrastructure with AWS and DevOps technologies.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View my projects <ArrowRight size={17}/></a>
          {PROFILE.resume
            ? <a className="button button-secondary" href={PROFILE.resume} download><Download size={17}/> Download resume</a>
            : <span className="button button-secondary button-disabled" title="Add your resume PDF to the public folder and set its path in PROFILE"><Download size={17}/> Resume coming soon</span>}
        </div>
        <div className="hero-socials">
          <SocialLink href={PROFILE.github} label="GitHub"><Github size={18}/></SocialLink>
          <SocialLink href={PROFILE.linkedin} label="LinkedIn"><Linkedin size={18}/></SocialLink>
          <a className="social-link" href={`mailto:${PROFILE.email}`} aria-label="Email"><Mail size={18}/></a>
          <span className="social-note">Find me online</span>
        </div>
      </div>
      <div className="hero-visual" aria-label="Decorative cloud infrastructure illustration">
        <div className="visual-glow"/>
        <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
        <div className="visual-core"><Cloud size={68} strokeWidth={1.25}/><span> CLOUD<br/>INFRASTRUCTURE</span></div>
        <div className="float-card card-ec2"><Server size={17}/><span><b>Compute</b><small>Amazon EC2</small></span><i/></div>
        <div className="float-card card-network"><Network size={17}/><span><b>Networking</b><small>Amazon VPC</small></span></div>
        <div className="float-card card-shield"><ShieldCheck size={17}/><span><b>Security</b><small>IAM · Security Groups</small></span></div>
        <div className="visual-caption"><span className="caption-line"/> Learning by building, one project at a time</div>
      </div>
    </div>
    <a href="#about" className="scroll-cue"><ArrowDown size={15}/> Scroll to explore</a>
  </section>;
}

function About() {
  const facts = [
    { icon: GraduationCap, label: 'Education', value: 'B.E. Information Technology' },
    { icon: CalendarDays, label: 'Graduation', value: '2025' },
    { icon: MapPin, label: 'Location', value: 'Hyderabad, India' },
    { icon: Target, label: 'Career focus', value: 'Cloud Engineering & DevOps' },
  ];
  return <section className="section-shell" id="about">
    <div className="container">
      <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curious by nature. Focused on the cloud." text="A quick introduction to my background, interests and career direction."/>
      <div className="about-layout">
        <div className="about-copy">
          <p className="lead">I am an Information Technology graduate interested in <span className="text-accent">Cloud Computing and DevOps.</span></p>
          <p>I have developed foundational knowledge of AWS services, Linux administration, networking, Python programming, Git and GitHub. I enjoy learning new technologies and implementing practical projects to understand how real-world applications are deployed, monitored and maintained.</p>
          <p>My career goal is to become a skilled Cloud/DevOps Engineer. I am looking for an entry-level opportunity where I can apply my technical knowledge, keep learning and contribute to a team.</p>
          <div className="about-signoff"><span className="signoff-line"/> Always learning. Always improving.</div>
        </div>
        <div className="fact-grid">
          {facts.map(({icon: Icon, label, value}) => <div className="fact-card" key={label}><span className="fact-icon"><Icon size={19}/></span><span className="fact-label">{label}</span><strong>{value}</strong></div>)}
        </div>
      </div>
    </div>
  </section>;
}

function Skills() {
  return <section className="section-shell section-alt" id="skills">
    <div className="container">
      <SectionHeading eyebrow="MY TOOLKIT" title="Technical skills" text="Technologies and concepts I have studied and practised. Skill levels are described honestly—no inflated percentages."/>
      <div className="skills-grid">
        {skillGroups.map(({title, level, icon: Icon, items}) => <article className="skill-card" key={title}>
          <div className="skill-card-top"><span className="skill-icon"><Icon size={21}/></span><span className="skill-level">{level}</span></div>
          <h3>{title}</h3>
          <div className="tag-list">{items.map(item => <span className="tag" key={item}>{item}</span>)}</div>
        </article>)}
      </div>
    </div>
  </section>;
}

function Projects() {
  const project = {
    title: 'Highly Available Web Application on AWS',
    type: 'CLOUD INFRASTRUCTURE PROJECT',
    description: 'Designed and practised a highly available web application architecture using AWS services. The project explores deploying an application across multiple Availability Zones to improve availability and reliability.',
    tags: ['Amazon EC2', 'Application Load Balancer', 'Auto Scaling Group', 'Amazon VPC', 'Public & Private Subnets', 'Internet Gateway', 'NAT Gateway', 'Security Groups'],
    learnings: ['Creating a custom VPC and subnet layout', 'Configuring routes and internet connectivity', 'Understanding load balancing and health checks', 'Exploring Auto Scaling and multi-AZ availability', 'Troubleshooting EC2 connectivity and unhealthy targets']
  };
  return <section className="section-shell" id="projects">
    <div className="container">
      <SectionHeading eyebrow="WHAT I'VE BUILT" title="Projects & practical learning" text="Hands-on work that helps me connect cloud concepts with real deployment scenarios."/>
      <article className="project-card">
        <div className="project-topline"><span className="project-index">01 / FEATURED PROJECT</span><span className="project-type"><Cloud size={14}/> AWS CLOUD</span></div>
        <div className="project-content">
          <div className="project-main">
            <div className="project-art">
              <div className="architecture-node node-user"><Monitor size={20}/><span>Users</span></div>
              <div className="architecture-connector"/>
              <div className="architecture-node node-alb"><Network size={21}/><span>Load Balancer</span></div>
              <div className="architecture-branches"><i/><i/></div>
              <div className="architecture-servers"><div><Server size={19}/><small>EC2 · AZ 1</small></div><div><Server size={19}/><small>EC2 · AZ 2</small></div></div>
              <div className="architecture-caption"><span/> Multi-AZ concept illustration</div>
            </div>
            <div className="project-info">
              <span className="eyebrow">{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list project-tags">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
              <div className="project-links">
                <span className="project-link-placeholder"><Github size={16}/> GitHub link to be added</span>
                <span className="project-link-placeholder"><ExternalLink size={16}/> Live demo not available</span>
              </div>
            </div>
          </div>
          <div className="learning-outcomes">
            <h4><CheckCircle2 size={17}/> Key learning outcomes</h4>
            <ul>{project.learnings.map(item => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
      </article>
      <p className="project-disclaimer">Project details describe practical learning and architecture practice; no production deployment or performance metrics are claimed.</p>
    </div>
  </section>;
}

function Certification() {
  return <section className="section-shell section-alt" id="certifications">
    <div className="container certification-row">
      <div><SectionHeading eyebrow="MILESTONES" title="Certification journey" text="Working toward a stronger foundation in cloud computing."/></div>
      <article className="cert-card">
        <div className="cert-icon"><Cloud size={25}/></div>
        <div className="cert-copy"><span className="cert-status"><span/> IN PROGRESS</span><h3>AWS Certified Cloud Practitioner</h3><p>Currently preparing and building foundational knowledge of AWS Cloud concepts and services.</p></div>
        <Sparkles className="cert-sparkle" size={22}/>
      </article>
    </div>
  </section>;
}

function Learning() {
  return <section className="section-shell" id="learning">
    <div className="container">
      <SectionHeading eyebrow="GROWTH MINDSET" title="Currently learning" text="The areas I am actively exploring to grow into a well-rounded Cloud and DevOps Engineer."/>
      <div className="learning-grid">
        {learning.map(({title, detail, icon: Icon}, i) => <article className="learning-card" key={title}><span className="learning-number">0{i+1}</span><span className="learning-icon"><Icon size={20}/></span><h3>{title}</h3><p>{detail}</p></article>)}
      </div>
    </div>
  </section>;
}

function Contact() {
  return <section className="section-shell contact-section" id="contact">
    <div className="container">
      <div className="contact-panel">
        <div className="contact-orb orb-a"/><div className="contact-orb orb-b"/>
        <div className="contact-content">
          <span className="eyebrow">HAVE AN OPPORTUNITY?</span>
          <h2>Let's build something <span className="gradient-text">reliable.</span></h2>
          <p>I am actively looking for entry-level opportunities in Cloud Engineering, AWS and DevOps. I'd be glad to connect and learn about opportunities where I can contribute and grow.</p>
          <a className="button button-primary" href={`mailto:${PROFILE.email}?subject=Cloud%20%2F%20DevOps%20Opportunity`}>Get in touch <ArrowUpRight size={17}/></a>
        </div>
        <div className="contact-details">
          <a href={`mailto:${PROFILE.email}`} className="contact-item"><span><Mail size={18}/></span><div><small>EMAIL</small><strong>{PROFILE.email}</strong></div><ArrowUpRight size={16}/></a>
          <div className="contact-item"><span><MapPin size={18}/></span><div><small>LOCATION</small><strong>{PROFILE.location}</strong></div></div>
          <SocialLink href={PROFILE.linkedin} label="LinkedIn"><span><Linkedin size={18}/></span><div><small>LINKEDIN</small><strong>{PROFILE.linkedin ? 'View LinkedIn profile' : 'Add profile URL'}</strong></div><ArrowUpRight size={16}/></SocialLink>
          <SocialLink href={PROFILE.github} label="GitHub"><span><Github size={18}/></span><div><small>GITHUB</small><strong>{PROFILE.github ? 'View GitHub profile' : 'Add profile URL'}</strong></div><ArrowUpRight size={16}/></SocialLink>
        </div>
      </div>
    </div>
  </section>;
}

function Footer() {
  return <footer className="footer"><div className="container footer-inner">
    <a className="brand" href="#home"><span className="brand-mark">A</span><span>anasullah<span className="brand-dot">.</span></span></a>
    <p>Designed and built with passion for Cloud & DevOps.</p>
    <div className="footer-right"><span>© {new Date().getFullYear()} {PROFILE.name}</span><a href="#home" aria-label="Back to top"><ArrowUpRight size={17}/></a></div>
  </div></footer>;
}

function App() {
  return <><Header/><main><Hero/><About/><Skills/><Projects/><Certification/><Learning/><Contact/></main><Footer/></>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);