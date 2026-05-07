/* eslint-disable */
const FM_CATEGORIES = [
  {
    ar: 'استكشاف', en: 'Outdoors', tone: 'brand',
    icon: 'M12 2L4 7l8 5 8-5-8-5zM4 17l8 5 8-5M4 12l8 5 8-5',
    subs: ['المسارات', 'المطلات', 'ركوب الخيل', 'الجبال والوديان', 'رحلات يوم'],
  },
  {
    ar: 'تجارب وحرف', en: 'Skills & Craft', tone: 'light',
    icon: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
    subs: ['نجارة', 'حدادة وفصالة', 'فخار وخزف', 'روبوتات للأطفال', 'فنون الخط', 'تصوير'],
  },
  {
    ar: 'طعام ومقاهٍ', en: 'Food & Coffee', tone: 'light',
    icon: 'M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z',
    subs: ['قهوة مختصة', 'مطاعم تراثية', 'حلويات', 'فطور', 'سفرة عائلية', 'مأكولات شعبية'],
  },
  {
    ar: 'تراث ومواقع', en: 'Heritage', tone: 'dark',
    icon: 'M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    subs: ['مواقع تاريخية', 'مساجد قديمة', 'متاحف', 'جولات مرشدة', 'العمرة والمناسك'],
  },
  {
    ar: 'فعاليات', en: 'Events', tone: 'light',
    icon: 'M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z',
    subs: ['أمسيات شعرية', 'موسيقى وعود', 'أسواق موسمية', 'مهرجانات', 'محاضرات', 'معارض'],
  },
  {
    ar: 'عائلة وحياة', en: 'Family & Life', tone: 'light',
    icon: 'M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM3 21v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2',
    subs: ['أنشطة الأطفال', 'صالات رياضية', 'مكتبات ومجالس', 'حدائق', 'تسوّق'],
  },
];

function CategoryRail() {
  const [open, setOpen] = React.useState(null);
  return (
    <section className="fm-categories">
      <div className="fm-section-head">
        <h2 className="fm-section-title">تصفّح حسب الفئة</h2>
        <a className="fm-link" href="#">جميع الفئات ←</a>
      </div>
      <div className="fm-cat-grid">
        {FM_CATEGORIES.map((c, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className={`fm-cat fm-cat-${c.tone} ${isOpen ? 'is-open' : ''}`}
              onMouseEnter={() => setOpen(i)}
              onMouseLeave={() => setOpen(null)}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <div className="fm-cat-head">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d={c.icon}/></svg>
                <div>
                  <div className="fm-cat-ar">{c.ar}</div>
                  <div className="fm-cat-en">{c.en}</div>
                </div>
              </div>
              <div className="fm-cat-subs">
                {c.subs.map((s, j) => (
                  <a key={j} href="#" className="fm-cat-sub">{s}</a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

window.CategoryRail = CategoryRail;
