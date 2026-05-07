/* eslint-disable */
const { useState: useStateHeader } = React;

function Header() {
  const [open, setOpen] = useStateHeader(false);
  return (
    <header className="fm-header">
      <div className="fm-header-inner">
        <button className="fm-icon-btn fm-burger" aria-label="القائمة" onClick={() => setOpen(true)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
        <a className="fm-logo" href="#">
          <span className="fm-logo-ar">فعاليات مكة</span>
        </a>
        <nav className="fm-nav">
          <a href="#">استكشاف</a>
          <a href="#">تجارب وحرف</a>
          <a href="#">طعام ومقاهٍ</a>
          <a href="#">تراث ومواقع</a>
          <a href="#">فعاليات</a>
          <a href="#">عائلة وحياة</a>
        </nav>
        <div className="fm-header-actions">
          <button className="fm-icon-btn" aria-label="بحث">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="11" cy="11" r="7"/><path d="m20 20-3-3"/></svg>
          </button>
        </div>
      </div>
      {open && ReactDOM.createPortal(
        <div className="fm-mobile-nav" onClick={() => setOpen(false)}>
          <div className="fm-mobile-panel" onClick={(e) => e.stopPropagation()}>
            <div className="fm-mobile-head">
              <span className="fm-logo-ar">فعاليات مكة</span>
              <button className="fm-icon-btn" onClick={() => setOpen(false)} aria-label="إغلاق">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <nav className="fm-mobile-links">
              <a href="#">استكشاف</a>
              <a href="#">تجارب وحرف</a>
              <a href="#">طعام ومقاهٍ</a>
              <a href="#">تراث ومواقع</a>
              <a href="#">فعاليات</a>
              <a href="#">عائلة وحياة</a>
              <a href="#">جميع الفئات</a>
            </nav>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}

window.Header = Header;
