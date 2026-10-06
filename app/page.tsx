'use client';
import { useState } from 'react';
import { ArrowRight, Check, Clock3, Hammer, Heart, MapPin, Menu, Phone, Scissors, Sparkles, X } from 'lucide-react';

const services = [
  [Scissors, 'Furniture upholstery', 'Thoughtful fabric selection and skilled reupholstery for sofas, chairs, ottomans, and more.'],
  [Hammer, 'Repair & restoration', 'Give heirlooms and well-built furniture new life with frame, cushion, and finish restoration.'],
  [Sparkles, 'Custom interiors', 'Custom cushions, pillows, draperies, seating, and design guidance for a room that feels like you.'],
] as const;

const projects = [
  ['Heirloom revival', 'A 1970s sofa, reimagined', 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=88'],
  ['Custom comfort', 'A chair worth keeping', 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=88'],
  ['Room refresh', 'Textiles that tie it together', 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=88'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  return <main>
    <div className="announcement"><span>Serving Carrollton and West Georgia</span><a href="tel:+17708327536">Call (770) 832-7536</a></div>
    <header className="site-header">
      <a className="brand" href="#top"><span className="brand-mark">FU</span><span><strong>Family Upholstery</strong><small>Carrollton, Georgia</small></span></a>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#work" onClick={() => setMenuOpen(false)}>Our work</a><a href="#about" onClick={() => setMenuOpen(false)}>Our story</a><a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Get an estimate</a>
      </nav>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
    </header>
    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow">Furniture with a future</p><h1>Keep the piece.<br/><em>Love it all over again.</em></h1><p className="hero-lede">We restore the furniture that matters to you—with time-honored craftsmanship, beautiful textiles, and a fresh point of view.</p><div className="hero-actions"><a className="button primary" href="#contact">Request an estimate <ArrowRight size={18}/></a><a className="button text-button" href="#work">See our transformations</a></div><div className="trust-row"><span><Check size={16}/> Family-owned</span><span><Check size={16}/> Local craftsmanship</span><span><Check size={16}/> Residential & commercial</span></div></div>
      <div className="hero-visual"><img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=90" alt="A beautifully upholstered green sofa in a warm room"/><div className="hero-note"><Heart size={20} fill="currentColor"/><span><strong>Made to be lived with.</strong><small>And loved for years.</small></span></div></div>
    </section>
    <section className="intro" id="services"><div><p className="eyebrow">What we do</p><h2>Old-world skill.<br/>Fresh possibilities.</h2></div><p>From a single sentimental chair to a complete room refresh, we help you see what your furniture can become—and make it happen with care.</p></section>
    <section className="services-grid">{services.map(([Icon,title,copy],i)=><article className="service-card" key={title}><span className="card-number">0{i+1}</span><Icon size={28}/><h3>{title}</h3><p>{copy}</p><a href="#contact">Tell us about your piece <ArrowRight size={16}/></a></article>)}</section>
    <section className="work-section" id="work"><div className="section-heading"><div><p className="eyebrow light">Recent inspiration</p><h2>Worth keeping.<br/><em>Beautifully renewed.</em></h2></div><p>Every piece has a history. Our job is to help write its next chapter.</p></div><div className="project-grid">{projects.map(([label,title,image])=><article className="project-card" key={title}><img src={image} alt={title}/><div><small>{label}</small><h3>{title}</h3></div></article>)}</div><p className="photo-note">Draft imagery shown for layout direction. Replace with Family Upholstery project photos.</p></section>
    <section className="story" id="about"><div className="story-image"><img src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=88" alt="Crafted wooden seating in a furniture workshop"/><span className="experience-badge"><strong>30+</strong> years of craft</span></div><div className="story-copy"><p className="eyebrow">The family difference</p><h2>We treat your furniture like it has a story—because it does.</h2><p>Great furniture deserves more than a trip to the landfill. We pair hands-on knowledge with a designer’s eye to preserve what you love and make it work beautifully in your home today.</p><blockquote>“They took two of my grandmother’s 1970s sofas and transformed them into velvet green masterpieces.”</blockquote><div className="rating"><span>★★★★★</span> Customer review</div></div></section>
    <section className="process"><p className="eyebrow">How it works</p><h2>A simpler path to something beautiful.</h2><div className="process-grid">{[['01','Share your piece','Send a few photos, measurements, and what you have in mind.'],['02','Choose your direction','We’ll talk through fabrics, details, timeline, and your estimate.'],['03','We get to work','Our team rebuilds, restores, and finishes your piece with care.'],['04','Fall in love again','Bring home furniture that feels familiar—and completely new.']].map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div></section>
    <section className="contact" id="contact"><div className="contact-copy"><p className="eyebrow light">Start your project</p><h2>What piece are you dreaming about?</h2><p>Tell us a little about it. We’ll follow up to discuss options and next steps.</p><div className="contact-details"><a href="tel:+17708327536"><Phone/><span><small>Call the shop</small>(770) 832-7536</span></a><a href="https://maps.google.com/?q=534+Newnan+Rd+Carrollton+GA+30117"><MapPin/><span><small>Visit us</small>534 Newnan Rd, Carrollton, GA</span></a><span><Clock3/><span><small>Shop hours</small>Hours to be confirmed</span></span></div></div>
      <form className="estimate-form" onSubmit={e=>{e.preventDefault();setSent(true)}}>{sent?<div className="success-message"><span><Check/></span><h3>Thanks—we’ve got your project.</h3><p>This is a draft confirmation. The final site can send requests directly to the shop.</p><button type="button" onClick={()=>setSent(false)}>Send another</button></div>:<><div className="field-row"><label>Name<input required placeholder="Your name"/></label><label>Phone<input required type="tel" placeholder="(770) 555-0123"/></label></div><label>Email<input required type="email" placeholder="you@example.com"/></label><label>What can we help with?<select defaultValue=""><option value="" disabled>Select a service</option><option>Furniture upholstery</option><option>Repair or restoration</option><option>Custom cushions or soft goods</option><option>Interior design</option></select></label><label>Tell us about your piece<textarea rows={4} placeholder="What is it, what condition is it in, and what would you love to change?"/></label><button className="button primary" type="submit">Send my request <ArrowRight size={18}/></button><small className="form-note">Photo upload can be connected in the final version.</small></>}</form>
    </section>
    <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">FU</span><span><strong>Family Upholstery</strong><small>Furniture with a future.</small></span></a><div><a href="#services">Services</a><a href="#work">Our work</a><a href="#about">Our story</a><a href="#contact">Contact</a></div><p>© 2026 Family Upholstery. Carrollton, Georgia.</p></footer>
  </main>;
}
