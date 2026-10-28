import Link from "next/link";

const collections = [
  { number: "01", name: "Core", descriptor: "Quiet by design.", note: "Everyday pieces, considered." },
  { number: "02", name: "Performance", descriptor: "Made to keep moving.", note: "For the work in front of you." },
  { number: "03", name: "Street", descriptor: "A little more room to speak.", note: "Expression, with intention." },
];

export default function HomePage() {
  return (
    <main className="storefront">
      <div className="announcement"><span>AN AFRICAN-FOUNDED LIFESTYLE BRAND</span><span>LUSAKA · ZAMBIA</span></div>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> A quieter kind of confidence</p>
          <h1 id="hero-title">Carried<br />by <em>Grace.</em></h1>
          <p className="hero-intro">For every road that asks something of you. Thoughtful apparel, grounded in the belief that you never walk alone.</p>
          <a className="text-link" href="#collections">Discover the three expressions <span aria-hidden="true">↘</span></a>
          <div className="hero-index"><span>EST. WITH INTENTION</span><span>01 — 03</span></div>
        </div>
        <div className="hero-image-wrap">
          <div className="hero-image" role="img" aria-label="Close-up of gold GRACELIFE embroidery with palm and airplane on black fabric" />
          <div className="image-caption"><span>THE MARK</span><span>Grace in motion, wherever life leads.</span></div>
          <span className="image-coordinate">GL / 001</span>
        </div>
        <div className="hero-side-note">FORM, PURPOSE<br />&amp; THE JOURNEY</div>
      </section>

      <section className="manifesto" aria-label="Brand philosophy">
        <span className="section-kicker">A NOTE ON GRACE</span>
        <p>Not because the road is easy.<br />But because <em>we are carried.</em></p>
        <span className="manifesto-signature">GRACELIFE — CARRIED BY GRACE</span>
      </section>

      <section className="collections" id="collections">
        <div className="section-heading"><div><span className="section-kicker">ONE IDENTITY. THREE EXPRESSIONS.</span><h2>Find your way<br /><em>through it.</em></h2></div><p>Different rhythms. One reason to keep going. Explore the GRACELIFE point of view.</p></div>
        <div className="collection-grid">
          {collections.map((item, i) => <a className={`collection-card collection-card-${i + 1}`} href="#about" key={item.name}>
            <span className="collection-number">{item.number} / COLLECTION</span>
            <div><span className="collection-descriptor">{item.descriptor}</span><h3>{item.name}</h3><span className="collection-note">{item.note}</span></div>
            <span className="collection-arrow" aria-hidden="true">↗</span>
          </a>)}
        </div>
        <p className="concept-note">A first look at the GRACELIFE collections. Product releases and details will be shared when confirmed.</p>
      </section>

      <section className="story" id="about">
        <div className="story-mark"><span>G</span><i>✳</i></div>
        <div className="story-copy"><span className="section-kicker">BUILT FOR THE JOURNEY</span><h2>Wear what<br />reminds you.</h2><p>Grace is strength under control. Hope for the uncertain stretch. Courage to begin again. GRACELIFE gives that feeling a form you can carry into the everyday.</p><Link className="text-link" href="/signup">Be part of the story <span aria-hidden="true">↗</span></Link></div>
        <div className="story-side">ROOTED IN FAITH.<br />OPEN TO EVERY JOURNEY.</div>
      </section>
      <section className="closing"><p>Move with purpose.<br /><em>You are not alone.</em></p><span>GRACELIFE · LUSAKA, ZAMBIA</span></section>
    </main>
  );
}
