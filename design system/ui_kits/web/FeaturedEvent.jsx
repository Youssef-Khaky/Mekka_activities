/* eslint-disable */
function FeaturedEvent() {
  return (
    <section className="fm-featured">
      <div className="fm-featured-photo" aria-hidden="true"></div>
      <div className="fm-featured-body">
        <div className="fm-eyebrow" style={{color:'var(--saffron-400)'}}>حدث اليوم</div>
        <h2 className="fm-featured-title">أمسية شعرية في<br/>مقهى البَنّ</h2>
        <p className="fm-featured-lead">
          أمسية مفتوحة لقراءة الشعر النبطي والفصيح، مع جلسة موسيقى عود قبل المغرب. تنظّمها مجموعة «أوتار شوّال».
        </p>
        <div className="fm-featured-meta">
          <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg> الجمعة ٢٠ شوال</span>
          <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ٤:٣٠ م</span>
          <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> العزيزية</span>
        </div>
        <div className="fm-featured-actions">
          <button className="fm-btn fm-btn-primary">احجز مقعدًا</button>
          <button className="fm-btn fm-btn-ghost">تفاصيل الفعالية</button>
        </div>
      </div>
    </section>
  );
}

window.FeaturedEvent = FeaturedEvent;
