/* eslint-disable */
function Hero() {
  return (
    <section className="fm-hero">
      <div className="fm-hero-photo" aria-hidden="true">
        <div className="fm-hero-photo-overlay"></div>
      </div>
      <div className="fm-hero-content">
        <div className="fm-eyebrow">عدد هذا الأسبوع · شوّال ١٤٤٧</div>
        <h1 className="fm-hero-title">
          اكتشف ما<br/>
          تفعله اليوم<br/>
          <em>في مكة.</em>
        </h1>
        <p className="fm-hero-lead">
          من مقاهٍ هادئة في العزيزية، إلى مسارات الفجر في وادي إبراهيم، وورش الحرف اليدوية. دليل مختار بعناية لكل ما يستحق وقتك.
        </p>
        <div className="fm-hero-search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="11" cy="11" r="7"/><path d="m20 20-3-3"/></svg>
          <input type="text" placeholder="ابحث عن مكان أو فعالية…" />
          <button className="fm-btn fm-btn-primary">ابحث</button>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
