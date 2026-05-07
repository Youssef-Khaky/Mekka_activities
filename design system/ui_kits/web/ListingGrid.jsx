/* eslint-disable */
const { useState: useStateLG } = React;

const FM_LISTINGS = [
  { cat:'ركوب الخيل', en:'HORSEBACK', title:'رحلة فجر · وادي إبراهيم', cut:'رحلات صباحية ومسائية لجميع المستويات. مرشد محلي، شاي، استراحة عند صخرة الفجر.', meta:['٢٢ كم من المركز','الجمعة ٥:٣٠ ص'], tone:'photo-1', badge:null, ig:'@wadi.ibrahim.rides' },
  { cat:'مقاهٍ', en:'COFFEE', title:'مقهى البَنّ', cut:'قهوة مختصة بحبوب يمنية. كتب، أمسيات شعرية، وحديقة داخلية.', meta:['العزيزية','مفتوح حتى ١٢ ص'], tone:'photo-2', badge:null, ig:'@al.bann' },
  { cat:'فعالية', en:'EVENT', title:'سوق الحرف الموسمي', cut:'حرفيون من مكة وما حولها يعرضون صناعات الجلد، الفخار، والخشب.', meta:['أم القرى','الخميس → الأحد'], tone:'photo-3', badge:'فعالية', ig:'@souq.alhiraf' },
  { cat:'ورش الحرفة', en:'SKILLS', title:'ورشة النجارة لأبيك وابنك', cut:'ورشة نهاية الأسبوع لتعلّم أساسيات النجارة. تصنعون كرسيًا صغيرًا معًا.', meta:['الششة','السبت ٩:٠٠ ص'], tone:'photo-4', badge:null, ig:'@khashab.studio' },
  { cat:'مواقع تاريخية', en:'HISTORIC', title:'بيت الأرقم — جولة مرشدة', cut:'جولة مع مؤرّخ محلي تتبع طريق الدعوة المبكرة في الحي القديم.', meta:['الحرم الشريف','يوميًا ٧ ص و ٤ م'], tone:'photo-5', badge:null, ig:null },
  { cat:'روبوتات أطفال', en:'KIDS', title:'نادي الروبوتيكس · مكة كود', cut:'حصص أسبوعية للأطفال ٨–١٤ سنة. بناء وبرمجة بـ Arduino، فرق وتحديات.', meta:['الزاهر','السبت + الأحد'], tone:'photo-6', badge:'جديد', ig:'@makkah.code' },
];

function ListingCard({ item }) {
  return (
    <article className={`fm-card`}>
      <div className={`fm-card-photo fm-${item.tone}`} aria-hidden="true">
        {item.badge && <span className="fm-badge fm-badge-event">{item.badge}</span>}
      </div>
      <div className="fm-card-body">
        <div className="fm-card-eyebrow">{item.cat}</div>
        <h3 className="fm-card-title">{item.title}</h3>
        <p className="fm-card-cut">{item.cut}</p>
        <div className="fm-card-meta">
          {item.meta.map((m,i)=> <span key={i}>{m}</span>).reduce((acc,curr,i)=>acc.concat(i?[<span key={'d'+i} className="fm-dot">·</span>,curr]:[curr]),[])}
        </div>
        {item.ig && (
          <a className="fm-card-ig" href="#">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"/></svg>
            <span>{item.ig}</span>
          </a>
        )}
      </div>
    </article>
  );
}

function ListingGrid() {
  const [filter, setFilter] = useStateLG('الكل');
  const filters = ['الكل','مقاهٍ','مسارات','ركوب الخيل','مواقع تاريخية','ورش الحرفة','روبوتات أطفال','فعاليات'];
  const items = filter === 'الكل' ? FM_LISTINGS : FM_LISTINGS.filter(i => i.cat.includes(filter) || filter.includes(i.cat));
  return (
    <section className="fm-grid-section">
      <div className="fm-section-head">
        <h2 className="fm-section-title">في مكة هذا الأسبوع</h2>
        <a className="fm-link" href="#">عرض الكل ←</a>
      </div>
      <div className="fm-filters">
        {filters.map(f => (
          <button key={f} className={`fm-chip ${filter===f?'is-active':''}`} onClick={()=>setFilter(f)}>{f}</button>
        ))}
      </div>
      <div className="fm-grid">
        {items.map((it, i) => (
          <ListingCard key={i} item={it} />
        ))}
      </div>
    </section>
  );
}

window.ListingCard = ListingCard;
window.ListingGrid = ListingGrid;
