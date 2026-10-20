import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Check, Clapperboard, Download, Film, Globe2, Instagram, Mail, Menu, Play, Scissors, Sparkles, X } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects, services } from './data'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [activeFilter, setActiveFilter] = useState('All work')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [showReel, setShowReel] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-copy > *', { y: 28, opacity: 0, duration: 0.85, stagger: 0.11, ease: 'power3.out', delay: 0.12 })
      gsap.from('.hero-art', { x: 45, opacity: 0, duration: 1.1, ease: 'power3.out', delay: 0.25 })
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, { y: 34, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 86%', once: true } })
      })
      gsap.to('.scribble', { rotate: 9, y: -9, duration: 2.4, yoyo: true, repeat: -1, ease: 'sine.inOut' })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  const visibleProjects = activeFilter === 'All work' ? projects : projects.filter(p => p.category === activeFilter)
  const activeProject = selectedProject === null ? null : projects[selectedProject]

  const closeMenu = () => setMenuOpen(false)

  return (
    <div ref={rootRef} className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Balasagar home"><span className="brand-mark">B.</span><span>BALASAGAR<span className="brand-dot">®</span></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#work" onClick={closeMenu}>Work <span>01</span></a>
          <a href="#about" onClick={closeMenu}>About <span>02</span></a>
          <a href="#process" onClick={closeMenu}>Process <span>03</span></a>
          <a href="#contact" onClick={closeMenu}>Contact <span>04</span></a>
        </nav>
        <a className="availability" href="#contact"><span className="availability-dot" /> AVAILABLE FOR PROJECTS</a>
      </header>

      <main id="home">
        <section className="hero section-pad">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-icon"><Play size={13} fill="currentColor" /></span><span>CREATIVE DIRECTOR / VIDEO EDITOR</span></div>
            <p className="hero-kicker">CUT WITH INTENTION.<br/>BUILT TO <span>FEEL.</span></p>
            <h1>VIDEO<br/><span className="outline-text">EDITOR</span><span className="title-sticker"><Film size={25} /></span></h1>
            <p className="hero-description">Sculpting cinematic narratives through <strong>rhythmic editing</strong> and advanced post-production choreography for the digital age.</p>
            <div className="hero-features">
              <div><span className="mini-dot" /> <strong>NARRATIVE FLOW</strong><p>Finding the pulse and rhythm that keeps an audience locked in.</p></div>
              <div><span className="mini-dot blue-dot" /> <strong>VISUAL FIDELITY</strong><p>High-end color grading and VFX integration for a polished cinematic look.</p></div>
            </div>
            <div className="hero-actions">
              <a className="button button-dark" href="#contact">Initiate project <ArrowUpRight size={16}/></a>
              <a className="text-link" href="#about">Curriculum Vitae <Download size={15}/></a>
            </div>
          </div>
          <div className="hero-art">
            <div className="art-topline"><span>INDEPENDENT CREATIVE</span><span>BASED IN INDIA · AVAILABLE WORLDWIDE</span></div>
            <div className="hero-image-wrap">
              <div className="art-shape shape-orange" />
              <div className="art-shape shape-blue" />
              <div className="art-shape shape-lime" />
              <div className="brush-stroke" />
              <img className="editor-photo" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=90" alt="Creative professional portrait" />
              <div className="floating-icon clapper"><Clapperboard size={43}/></div>
              <div className="floating-icon scissors"><Scissors size={40}/></div>
              <div className="floating-icon premiere">Pr</div>
              <div className="floating-icon aftereffects">Ae</div>
              <div className="floating-icon timeline"><span/><span/><span/><span/><span/></div>
              <div className="scribble">MAKE<br/>IT MOVE ↗</div>
              <div className="image-caption"><span className="caption-dot"/> CUTTING ROOM / 001</div>
            </div>
            <div className="hero-art-footer"><span>FRAME BY FRAME</span><span>SCROLL TO EXPLORE <ArrowDown size={13}/></span></div>
          </div>
        </section>

        <section className="stats-band" aria-label="Selected stats">
          <div className="stat"><span className="stat-icon"><Film size={18}/></span><strong>50K<span>+</span></strong><small>MINUTES OF<br/>CONTENT EDITED</small></div>
          <div className="stat"><span className="stat-icon"><Sparkles size={18}/></span><strong>98<span>%</span></strong><small>CLIENT<br/>SATISFACTION</small></div>
          <div className="stat"><span className="stat-icon"><Clapperboard size={18}/></span><strong>200<span>+</span></strong><small>COMMERCIALS<br/>DELIVERED</small></div>
          <div className="stat"><span className="stat-icon"><Globe2 size={18}/></span><strong>10B<span>+</span></strong><small>VIEWS GENERATED<br/>FOR CLIENTS</small></div>
        </section>

        <div className="social-strip">
          <div className="social-links"><a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={13}/> INSTAGRAM</a><a href="#work">YOUTUBE ↗</a><a href="#contact">VIMEO ↗</a></div>
          <a className="email-link" href="mailto:hello@balasagar.studio"><Mail size={13}/> HELLO@BALASAGAR.STUDIO</a>
        </div>

        <section className="intro-section section-pad" id="about">
          <div className="section-label" data-reveal>01 / THE POINT OF VIEW</div>
          <div className="intro-grid">
            <div data-reveal><p className="micro-label">LESS FOOTAGE. MORE FEELING.</p><h2>NARRATIVE<br/><span>PRECISION.</span></h2><div className="color-bar"><i/><i/><i/><i/></div></div>
            <div className="intro-copy" data-reveal><p className="large-copy">Editing is where the story truly begins.</p><p>I find the soul of a project within the raw footage, crafting experiences that resonate long after the screen goes black. The goal isn't just to make something look good — it's to make people feel something.</p><button className="button button-dark" onClick={() => setShowReel(true)}>Explore full showreel <ArrowRight size={16}/></button></div>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="work-heading" data-reveal><div><div className="section-label">02 / SELECTED WORK</div><h2>SELECTED<br/><span>REELS.</span></h2></div><p>A collection of stories, campaigns<br/>and experiments shaped in the edit.</p></div>
          <div className="filter-row" data-reveal>
            {['All work', 'Brand films', 'Motion', 'Documentary', 'Commercials'].map(filter => <button key={filter} className={activeFilter === filter ? 'filter active' : 'filter'} onClick={() => setActiveFilter(filter)}>{filter}<span>{filter === 'All work' ? '04' : String(projects.filter(p => p.category === filter).length).padStart(2, '0')}</span></button>)}
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) => {
              const index = projects.findIndex(p => p.number === project.number)
              return <button key={project.number} className={`project-card ${project.color}`} onClick={() => setSelectedProject(index)} data-reveal>
                <div className="project-image"><img src={project.image} alt={project.title} loading="lazy"/><span className="project-number">{project.number} / 04</span><span className="project-play"><Play fill="currentColor" size={18}/></span><span className="project-type">{project.type}</span></div>
                <div className="project-meta"><div><h3>{project.title}</h3><p>{project.category}</p></div><span className="project-arrow"><ArrowUpRight size={20}/></span></div>
              </button>
            })}
          </div>
          <div className="work-bottom" data-reveal><span>MORE FRAMES. MORE STORIES.</span><a href="#contact">Have a project in mind? <ArrowUpRight size={15}/></a></div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="services-top" data-reveal><div><div className="section-label">03 / WHAT I BRING</div><h2>CRAFT WITH<br/><span>INTENTION.</span></h2></div><p>From the first assembly to the final frame, every decision serves the story.</p></div>
          <div className="service-list">
            {services.map(service => <div className="service-row" key={service.number} data-reveal><span className="service-number">{service.number}</span><div className="service-main"><h3>{service.title}</h3><p>{service.text}</p></div><span className="service-tag">{service.tag}</span><ArrowUpRight className="service-arrow" size={23}/></div>)}
          </div>
        </section>

        <section className="quote-section">
          <div className="quote-mark">“</div><p data-reveal>Great editing is invisible.<br/><span>Great storytelling stays with you.</span></p><div className="quote-bottom"><span>THE EDITOR'S RULE / 001</span><span>RHYTHM · RESTRAINT · RESONANCE</span></div>
        </section>

        <section className="process-section section-pad" id="process">
          <div className="section-label" data-reveal>04 / HOW WE GET THERE</div><div className="process-heading" data-reveal><h2>GOOD WORK.<br/><span>GOOD PROCESS.</span></h2><p>Clear communication. Thoughtful craft.<br/>No mystery in the middle.</p></div>
          <div className="process-grid">
            <div data-reveal><span className="process-number">01</span><h3>Listen & align</h3><p>We define the audience, goal, feeling and the one thing the film must leave behind.</p></div>
            <div data-reveal><span className="process-number">02</span><h3>Shape the story</h3><p>Footage becomes a story through selects, pacing, structure and a strong first cut.</p></div>
            <div data-reveal><span className="process-number">03</span><h3>Polish & deliver</h3><p>Sound, grade, motion and finishing — then exports built for every destination.</p></div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-sticker"><Sparkles size={19}/><span>LET'S MAKE<br/>SOMETHING<br/>MATTER.</span></div>
          <div className="section-label" data-reveal>05 / YOUR TURN</div><h2 data-reveal>START A<br/><span>DIALOGUE.</span></h2>
          <div className="contact-bottom" data-reveal><p>Have a story worth telling?<br/>Let's give it the edit it deserves.</p><form onSubmit={(e) => { e.preventDefault(); setSent(true); window.location.href = 'mailto:hello@balasagar.studio?subject=New%20project%20inquiry'; }}><label htmlFor="email">YOUR EMAIL ADDRESS</label><div className="email-input"><input id="email" type="email" placeholder="you@yourstudio.com" required/><button aria-label="Send project inquiry"><ArrowUpRight size={21}/></button></div>{sent && <small className="sent-note"><Check size={13}/> Opening your email app…</small>}</form></div>
        </section>
      </main>

      <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">B.</span><span>BALASAGAR®</span></a><span>INDEPENDENT EDITOR / CREATIVE PARTNER</span><a href="#home">BACK TO TOP <ArrowUpRight size={14}/></a><small>© 2026 BALASAGAR STUDIO. MADE FRAME BY FRAME.</small></footer>

      {showReel && <div className="modal-backdrop" role="presentation" onClick={() => setShowReel(false)}><div className="reel-modal" role="dialog" aria-modal="true" aria-label="Showreel" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setShowReel(false)} aria-label="Close showreel"><X/></button><div className="reel-placeholder"><button className="reel-play" onClick={() => setShowReel(false)}><Play fill="currentColor" size={28}/></button><span>SHOWREEL 2026</span><p>Replace this panel with your Vimeo or YouTube embed.</p></div></div></div>}
      {activeProject && <div className="modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}><div className="project-modal" role="dialog" aria-modal="true" aria-label={activeProject.title} onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project"><X/></button><img src={activeProject.image} alt={activeProject.title}/><div className="project-modal-copy"><span className="section-label">{activeProject.type}</span><h2>{activeProject.title}</h2><p>{activeProject.description}</p><a className="button button-dark" href="#contact" onClick={() => setSelectedProject(null)}>Discuss a similar project <ArrowUpRight size={16}/></a></div></div></div>}
    </div>
  )
}

export default App
