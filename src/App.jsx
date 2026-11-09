import { useEffect, useState } from 'react'
import sidePhoto from './assets/side_photo.png'
import webshoppImage from './assets/project/webshopp(website).png'
import vitaTrackImage from './assets/project/vitatrack(website).png'
import mrDevShopImage from './assets/project/mrdevshop.png'
import sudokuImage from './assets/project/sudoku(website).png'
import quizImage from './assets/project/quiz(website).png'
import portfolioOldImage from './assets/project/portofolio_old(website).png'
import portfolioHostingImage from './assets/project/portofolio_hosting(website).png'
import pengecekanNilaiImage from './assets/project/pengecekan_nilai(website).png'
import pengantaranBarangImage from './assets/project/pengantaran_barang(figma).png'
import pengaduanMasyarakatImage from './assets/project/pengaduan_masyarakat(website).png'
import peminjamanBukuImage from './assets/project/peminjaman_buku(website).png'
import peminjamanBarangImage from './assets/project/peminjaman_barang(website).png'
import noteflowImage from './assets/project/notefloww_pencatatan_tugas(website).png'
import kasirPhpImage from './assets/project/kasir_php(website).png'
import aksiImage from './assets/project/AKSI_aplikasi_karyawan_internal(Power Apps).png'
import './App.css'

const projects = [
  {
    title: 'AKSI — Aplikasi Karyawan Internal',
    type: 'Power Apps',
    category: 'Power Apps',
    description: 'An internal employee application built to support daily operations.',
    image: aksiImage,
    documentationUrl: 'https://lnkd.in/p/gi2cz26m',
  },
  {
    title: 'MrDev Shop',
    type: 'Website',
    category: 'Website',
    description: 'An online shop project designed for a simple and engaging shopping experience.',
    image: mrDevShopImage,
    documentationUrl: 'https://lnkd.in/p/gkZYabMm',
  },
  {
    title: 'Pengaduan Masyarakat',
    type: 'Website',
    category: 'Website',
    description: 'A public complaint platform that helps organize community reports.',
    image: pengaduanMasyarakatImage,
    documentationUrl: 'https://github.com/mrapiudin/pengaduan_masyarakat.git',
  },
  {
    title: 'Peminjaman Buku',
    type: 'Website',
    category: 'Website',
    description: 'A library borrowing system with a straightforward user flow.',
    image: peminjamanBukuImage,
    documentationUrl: '',
  },
  {
    title: 'Peminjaman Barang',
    type: 'Website',
    category: 'Website',
    description: 'A borrowing management interface for tracking shared equipment.',
    image: peminjamanBarangImage,
    documentationUrl: 'https://github.com/mrapiudin/Pinjamanku',
  },
  {
    title: 'Webshopp',
    type: 'Website',
    category: 'Website',
    description: 'Online shop interface built for a simple shopping experience.',
    image: webshoppImage,
    documentationUrl: 'https://github.com/mrapiudin/WebShop',
  },
  {
    title: 'VitaTrack',
    type: 'Website',
    category: 'Website',
    description: 'A web application project focused on tracking and presenting useful information.',
    image: vitaTrackImage,
    documentationUrl: 'https://github.com/mrapiudin/Project-DIcoding-Capstone',
  },
  {
    title: 'Sudoku',
    type: 'Website',
    category: 'Website',
    description: 'A focused browser game for practicing logic and problem solving.',
    image: sudokuImage,
    documentationUrl: '',
  },
  {
    title: 'Quiz',
    type: 'Website',
    category: 'Website',
    description: 'An interactive quiz experience with a clean and playful interface.',
    image: quizImage,
    documentationUrl: 'https://github.com/mrapiudin/Quizzz.git',
  },
  {
    title: 'Portofolio Old',
    type: 'Website',
    category: 'Website',
    description: 'An earlier personal portfolio exploring layout and visual direction.',
    image: portfolioOldImage,
    documentationUrl: 'https://github.com/mrapiudin/portofolio.git',
  },
  {
    title: 'Portofolio Hosting',
    type: 'Website',
    category: 'Website',
    description: 'A hosted portfolio project for sharing work and experience online.',
    image: portfolioHostingImage,
    documentationUrl: 'https://github.com/mrapiudin/MRDev-Portofolio.git',
  },
  {
    title: 'Pengecekan Nilai',
    type: 'Website',
    category: 'Website',
    description: 'A practical website for checking and presenting student grades.',
    image: pengecekanNilaiImage,
    documentationUrl: 'https://github.com/mrapiudin/PengecekanNilai.git',
  },
  {
    title: 'Pengantaran Barang',
    type: 'Figma',
    category: 'Figma',
    description: 'A delivery service concept designed from flow to final interface.',
    image: pengantaranBarangImage,
    documentationUrl: '',
  },
  {
    title: 'Notefloww — Pencatatan Tugas',
    type: 'Website',
    category: 'Website',
    description: 'A task note-taking website for keeping everyday work organized.',
    image: noteflowImage,
    documentationUrl: 'https://lnkd.in/p/gcUHptHf',
  },
  {
    title: 'Kasir PHP',
    type: 'Website',
    category: 'Website',
    description: 'A point-of-sale website for managing transactions and products.',
    image: kasirPhpImage,
    documentationUrl: '',
  },

]

const skillGroups = [
  {
    role: 'Web Developer',
    category: 'Programming Languages',
    skills: ['PHP', 'JavaScript', 'C#', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    role: 'Web Developer',
    category: 'Frameworks & Libraries',
    skills: ['Laravel', 'React.js', 'Tailwind CSS', 'ASP.NET MVC', 'Laravel Blade'],
  },
  {
    role: 'Web Developer',
    category: 'Database & API',
    skills: ['MySQL', 'PostgreSQL', 'RESTful API'],
  },
  {
    role: 'Web Developer',
    category: 'Tools & Version Control',
    skills: ['Git', 'GitHub', 'Visual Studio Code', 'Visual Studio', 'Postman'],
  },
  {
    role: 'Power Platform Developer',
    category: 'Microsoft Power Platform',
    skills: ['Microsoft Power Apps (Canvas Apps)', 'Microsoft Power Automate', 'Microsoft Dataverse'],
  },
  {
    role: 'Power Platform Developer',
    category: 'Microsoft 365 Ecosystem',
    skills: ['Microsoft SharePoint', 'SharePoint Lists', 'Microsoft Excel Online', 'Microsoft Outlook', 'Microsoft 365'],
  },
  {
    role: 'Power Platform Developer',
    category: 'Automation & Integration',
    skills: ['Workflow Automation', 'Approval Workflow', 'Automated Email Notifications', 'Data Migration', 'Application Integration'],
  },
]

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow-icon">↗</span>
}

function App() {
  const [activeFilter, setActiveFilter] = useState('All work')
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeSkillRole, setActiveSkillRole] = useState('Web Developer')

  useEffect(() => {
    if (!selectedProject) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedProject(null)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  const filters = ['All work', 'Website', 'Power Apps', 'Figma']
  const visibleProjects = projects.filter(
    (project) => activeFilter === 'All work' || project.category === activeFilter,
  )
  const skillRoles = ['Web Developer', 'Power Platform Developer']
  const filteredSkillGroups = skillGroups.filter((group) => group.role === activeSkillRole)

  return (
    <main>
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Nara Studio home">
          <span className="brand-mark">R</span>
          <span>Rafi<span className="brand-dot">.</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-links"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span>
        </button>
        <div id="primary-links" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Techincal Skills</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
            Let&apos;s talk <ArrowUpRight />
          </a>
        </div>
      </nav>

      <section id="top" className="hero container">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"></span>New Portfolio </div>
          <h2>Muhammad Rapiudin.<br /><em>Tecnology Enthusiast.</em></h2>
          <p className="hero-description">
            A showcase of my work experience and projects.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore my work <ArrowUpRight /></a>
            <a className="text-link" href="#about">More about me <span>↓</span></a>
          </div>
        </div>
        <img className="photo" src={sidePhoto} alt="Rapiudin sedang melihat koleksi manga" />
      </section>

      <section className="marquee" aria-label="Studio values">
        <div className="marquee-track">
          <span>PHP</span><i>✦</i>
          <span>JavaScript</span><i>✦</i>
          <span>C#</span><i>✦</i>
          <span>HTML</span><i>✦</i>
          <span>CSS</span><i>✦</i>
          <span>SQL</span><i>✦</i>
          <span>Laravel</span><i>✦</i>
          <span>React.js</span><i>✦</i>
          <span>Tailwind CSS</span><i>✦</i>
          <span>ASP.NET MVC</span><i>✦</i>
          <span>Power Apps</span><i>✦</i>
          <span>Power Automate</span><i>✦</i>
          <span>Microsoft SharePoint</span><i>✦</i>
          <span>Microsoft Dataverse</span><i>✦</i>
          <span>MySQL</span><i>✦</i>
          <span>PostgreSQL</span><i>✦</i>
          <span>REST API</span><i>✦</i>
          <span>Git</span><i>✦</i>
          <span>GitHub</span><i>✦</i>
          <span>Microsoft 365</span><i>✦</i>

          <span>PHP</span><i>✦</i>
          <span>JavaScript</span><i>✦</i>
          <span>C#</span><i>✦</i>
          <span>HTML</span><i>✦</i>
          <span>CSS</span><i>✦</i>
          <span>SQL</span><i>✦</i>
          <span>Laravel</span><i>✦</i>
          <span>React.js</span><i>✦</i>
          <span>Tailwind CSS</span><i>✦</i>
          <span>ASP.NET MVC</span><i>✦</i>
          <span>Power Apps</span><i>✦</i>
          <span>Power Automate</span><i>✦</i>
          <span>Microsoft SharePoint</span><i>✦</i>
          <span>Microsoft Dataverse</span><i>✦</i>
          <span>MySQL</span><i>✦</i>
          <span>PostgreSQL</span><i>✦</i>
          <span>REST API</span><i>✦</i>
          <span>Git</span><i>✦</i>
          <span>GitHub</span><i>✦</i>
          <span>Microsoft 365</span><i>✦</i>
        </div>
      </section>

      <section id="work" className="work-section container">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line"></span> Selected work</div>
            <h2>Created to enhance capabilities,<br /><em>Created for training.</em></h2>
          </div>
          <div className="filter-list">
            {filters.map((filter) => (
              <button
                type="button"
                key={filter}
                className={activeFilter === filter ? 'active' : ''}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <article className={`project-card ${index === 0 ? 'project-featured' : ''}`} key={project.title}>
              <button
                type="button"
                className="project-image project-image-button"
                onClick={() => setSelectedProject(project)}
                aria-label={`Lihat gambar penuh ${project.title}`}
              >
                <img src={project.image} alt={`${project.title} project preview`} />
                <span className="project-label">{project.category}</span>
                <span className="project-open"><ArrowUpRight /></span>
              </button>
              <div className="project-meta">
                <div>
                  <h3>{project.title}</h3>
                  <span>{project.type}</span>
                  {project.documentationUrl ? (
                    <a
                      className="documentation-link"
                      href={project.documentationUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Documentation <ArrowUpRight />
                    </a>
                  ) : (
                    <span className="documentation-link is-disabled" aria-disabled="true">
                      Documentation soon
                    </span>
                  )}
                </div>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
        <a href="#contact" className="view-all">View all projects <ArrowUpRight /></a>
      </section>

      {selectedProject && (
        <div
          className="image-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Full image ${selectedProject.title}`}
          onClick={() => setSelectedProject(null)}
        >
          <div className="image-modal-content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="image-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Tutup gambar"
            >
              ×
            </button>
            <img src={selectedProject.image} alt={`${selectedProject.title} full preview`} />
            <div className="image-modal-caption">
              <strong>{selectedProject.title}</strong>
              <span>{selectedProject.type}</span>
            </div>
          </div>
        </div>
      )}

      <section id="services" className="services-section">
        <div className="container services-layout">
          <div>
            <div className="eyebrow"><span className="eyebrow-line"></span> What i do</div>
            <h2>Technical skills did<br /> <em>I acquire</em></h2>
            <p className="section-intro">From the time I began my internship and throughout my studies at school.</p>
          </div>
          <div>
            <div className="skill-role-tabs" role="tablist" aria-label="Pilih kategori technical skills">
              {skillRoles.map((role) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeSkillRole === role}
                  key={role}
                  className={activeSkillRole === role ? 'active' : ''}
                  onClick={() => setActiveSkillRole(role)}
                >
                  {role}
                </button>
              ))}
            </div>
            <div className="skills-list">
              {filteredSkillGroups.map((group, index) => (
                <article className="skill-group" key={group.category}>
                  <div className="skill-group-heading">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <small>{group.role}</small>
                      <h3>{group.category}</h3>
                    </div>
                  </div>
                  <div className="skill-tags">
                    {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section container">
        <div className="about-note">A little about me <span></span></div>
        <blockquote>
          I&apos;m a passionate and curious developer with a background in Software and Game Development.
          I enjoy building web applications, solving problems, and turning ideas into functional and
          user-friendly digital experiences. I have hands-on experience in full-stack web development
          using PHP, Laravel, JavaScript, and SQL, as well as developing business applications and
          workflow automation using Microsoft Power Platform. I&apos;m always eager to learn new
          technologies, explore creative solutions, and improve my skills through real-world projects.
          I believe that great development comes from a combination of curiosity, continuous learning,
          and attention to detail.
        </blockquote>
        <div className="about-bottom"><span>Muhammad Rapiudin, 2026</span><span>Can work from anywhere.</span></div>
      </section>

      <footer id="contact" className="footer">
        <div className="container footer-inner">
          <div><div className="eyebrow"><span className="eyebrow-line"></span> Have a good feeling?</div><h2>Let&apos;s make<br /><em>something.</em></h2></div>
          <a className="email-link" href="mailto:hello@narastudio.co">muhammadrapiudinn@gmail.com <ArrowUpRight /></a>
          <div className="footer-bottom"><span>© Muhammad Rapiudin 2026</span><div><a href="https://www.tiktok.com/@suparapi">Tiktok</a><a href="https://www.linkedin.com/in/muhammad-rapiudin/">Likedin</a><a href="https://github.com/mrapiudin">Github</a><a href="#top">Back to top ↑</a></div></div>
        </div>
      </footer>
    </main>
  )
}

export default App
