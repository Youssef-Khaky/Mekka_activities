/* eslint-disable */
function App() {
  return (
    <div className="fm-app" data-screen-label="01 Home">
      <Header />
      <main>
        <Hero />
        <CategoryRail />
        <FeaturedEvent />
        <ListingGrid />
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
