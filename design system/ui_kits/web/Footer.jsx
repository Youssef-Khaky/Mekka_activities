/* eslint-disable */
function Footer() {
  return (
    <footer className="fm-footer">
      <div className="fm-footer-inner">
        <div className="fm-footer-brand">
          <div className="fm-footer-logo">فعاليات مكة</div>
          <p className="fm-footer-mission">
            دليل مختار بعناية للأماكن، الفعاليات، والورش في مكة المكرمة وما حولها.
          </p>
        </div>
        <div className="fm-footer-cols">
          <div>
            <div className="fm-footer-h">استكشف</div>
            <a href="#">المقاهي</a>
            <a href="#">المسارات</a>
            <a href="#">ورش الحرفة</a>
            <a href="#">المواقع التاريخية</a>
          </div>
          <div>
            <div className="fm-footer-h">للأعمال</div>
            <a href="#">أضف بزنسك</a>
            <a href="#">أضف فعالية</a>
            <a href="#">شراكات</a>
          </div>
          <div>
            <div className="fm-footer-h">عنّا</div>
            <a href="#">القصة</a>
            <a href="#">سياسة الخصوصية</a>
            <a href="#">تواصل</a>
          </div>
        </div>
      </div>
      <div className="fm-footer-base">
        <div>© ١٤٤٧ هـ — فعاليات مكة. صُمّمت في مكة المكرمة.</div>
        <div className="fm-socials">
          <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"/></svg></a>
          <a href="#" aria-label="X"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h3l-7.5 8.6L22 22h-6.8l-5.3-6.9L4 22H1l8-9.2L1.5 2h7l4.8 6.3L18 2z"/></svg></a>
          <a href="#" aria-label="WhatsApp"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></a>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
