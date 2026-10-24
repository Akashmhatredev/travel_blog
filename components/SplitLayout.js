import Footer from "./Footer";

/* Fixed photo panel on the left (top on mobile), scrolling column on the right. */
export default function SplitLayout({ hero, heroLabel, children }) {
  return (
    <main className="page">
      <div className="layout">
        <aside className="hero" aria-label={heroLabel}>
          {hero}
        </aside>
        <div className="layout-spacer" />
        <div className="content">
          {children}
          <Footer />
        </div>
      </div>
    </main>
  );
}
