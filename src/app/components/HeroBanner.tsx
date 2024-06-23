const HeroBanner = () => {
  return (
    <section
      className="hero-section home-page set-bg"
      data-setbg="img/bg.jpg.webp"
      style={{ backgroundImage: "url(img/bg.jpg.webp)" }}
    >
      <div className="container hero-text text-white">
        <h2>Find your next</h2>
        <h1>dream home.</h1>
      </div>
    </section>
  );
};

export default HeroBanner;