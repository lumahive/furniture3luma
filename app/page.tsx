export default function Home() {
  const ctaDfsUrl = "https://wa.me/27604791417?text=Hello%20DFS%2C%20I%20want%20to%20build%20a%20website%20like%20this";

  return (
    <>
      <header className="header">
        <div className="container header-content">
          <div className="logo">DFS Furniture</div>
          <nav className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#advantages" className="nav-link">Advantages</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* 1. Hero */}
        <section className="hero">
          <div className="container hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Comfortable Furniture for Your Home and Business</h1>
              <p className="hero-subtitle">
                DFS Furniture offers a selection of furniture for homes, offices, cafes, and business spaces with modern, neat, and functional designs.
              </p>
              <div className="hero-buttons">
                <a href="#products" className="btn btn-primary">View Products</a>
                <a href="#contact" className="btn btn-secondary">Contact Store</a>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <img 
                src="/img/1.jpeg" 
                alt="DFS Furniture Showroom" 
                className="hero-image" 
              />
            </div>
          </div>
        </section>

        {/* 2. About Store */}
        <section id="about" className="section section-bg-white">
          <div className="container">
            <h2 className="section-title">About DFS Furniture</h2>
            <div className="about-content">
              <p className="about-text">
                DFS Furniture is a furniture store that provides a wide selection of products for home and business needs. We help customers find furniture that suits their room style, functional needs, and usage comfort.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <strong>⭐ Friendly & Easy to Contact</strong>
                </div>
                <div className="highlight-item">
                  <strong>🏠 Suitable for Home & Business</strong>
                </div>
                <div className="highlight-item">
                  <strong>💡 Furniture Selection Consultation</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Available Products */}
        <section id="products" className="section section-bg-cream">
          <div className="container">
            <h2 className="section-title">Products We Offer</h2>
            <div className="products-grid">
              <div className="product-card">
                <div className="product-img-wrapper">
                  <img src="/img/2.jpeg" alt="Sofa" className="product-img" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Sofa</h3>
                  <p className="product-desc">Comfortable sofa choices with modern design for living rooms and waiting areas.</p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-img-wrapper">
                  <img src="/img/3.jpeg" alt="Table and Chairs" className="product-img" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Table and Chairs</h3>
                  <p className="product-desc">Dining table sets, coffee tables, and office chairs with high-quality materials.</p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-img-wrapper">
                  <img src="/img/4.jpeg" alt="Wardrobe" className="product-img" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Wardrobe</h3>
                  <p className="product-desc">Functional and space-saving wardrobes and storage.</p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-img-wrapper">
                  <img src="/img/5.jpeg" alt="TV Stand" className="product-img" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">TV Stand</h3>
                  <p className="product-desc">Elegant TV stands that beautify the look of your family room.</p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-img-wrapper">
                  <img src="/img/6.jpeg" alt="Bed" className="product-img" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Bed</h3>
                  <p className="product-desc">Sturdy bed frames for maximum sleep quality.</p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-img-wrapper">
                  <img src="/img/7.jpeg" alt="Custom Furniture" className="product-img" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Custom Furniture</h3>
                  <p className="product-desc">Furniture manufacturing according to the specific size and needs of your room.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Store Advantages */}
        <section id="advantages" className="section section-bg-white">
          <div className="container">
            <h2 className="section-title">Why Choose DFS Furniture?</h2>
            <div className="advantages-grid">
              <div className="advantage-card">
                <div className="advantage-icon">✔️</div>
                <div>Various furniture choices</div>
              </div>
              <div className="advantage-card">
                <div className="advantage-icon">✔️</div>
                <div>Suitable for home, office, cafe, and business</div>
              </div>
              <div className="advantage-card">
                <div className="advantage-icon">✔️</div>
                <div>Modern design and easy to mix and match</div>
              </div>
              <div className="advantage-card">
                <div className="advantage-icon">✔️</div>
                <div>Consultation for room needs available</div>
              </div>
              <div className="advantage-card">
                <div className="advantage-icon">✔️</div>
                <div>Easy ordering</div>
              </div>
              <div className="advantage-card">
                <div className="advantage-icon">✔️</div>
                <div>Friendly service</div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Custom Furniture */}
        <section className="section section-bg-cream">
          <div className="container custom-furniture">
            <div className="custom-text">
              <h2 className="section-title" style={{ textAlign: 'left' }}>Furniture Tailored to Your Room Needs</h2>
              <p className="about-text" style={{ textAlign: 'left' }}>
                For specific needs, customers can consult regarding custom furniture such as wardrobes, shelves, office desks, display tables, or furniture for business spaces.
              </p>
              <a href="#contact" className="btn btn-primary">Furniture Consultation</a>
            </div>
            <img src="/img/8.jpeg" alt="Custom Furniture" className="custom-image" style={{ maxWidth: '500px', width: '100%' }} />
          </div>
        </section>

        {/* 6. Gallery */}
        <section className="section section-bg-white">
          <div className="container">
            <h2 className="section-title">Furniture Gallery</h2>
            <div className="gallery-grid">
              <div className="gallery-item"><img src="/img/1.jpeg" alt="Gallery 1" /></div>
              <div className="gallery-item"><img src="/img/2.jpeg" alt="Gallery 2" /></div>
              <div className="gallery-item"><img src="/img/9.jpeg" alt="Gallery 3" /></div>
              <div className="gallery-item"><img src="/img/10.jpeg" alt="Gallery 4" /></div>
            </div>
          </div>
        </section>

        {/* 7. Store Contact */}
        <section id="contact" className="section section-bg-cream">
          <div className="container">
            <div className="contact-wrapper">
              <h2 className="section-title" style={{ paddingBottom: '15px' }}>Visit and Contact DFS Furniture</h2>
              <div className="contact-info">
                <p>📍 <strong>Service area:</strong> Bekasi and surrounding areas</p>
                <p>📞 <strong>WhatsApp:</strong> +27 604 791 417</p>
              </div>
              <a href="https://wa.me/27604791417" className="btn btn-primary">Contact Store</a>
            </div>
            
            {/* 8. Soft CTA for Website Services */}
            <div className="cta-service">
              <h2>Want a Store Website Like This?</h2>
              <p>This demo website was created by DFS to show how a furniture store can appear neater, more professional, and easier to reach online.</p>
              <a href={ctaDfsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent">I Want to Build a Website Like This</a>
            </div>
          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo">DFS Furniture</div>
          <p className="footer-desc">Furniture for homes, offices, cafes, and business spaces.</p>
          <div className="footer-credits">
            <p>Demo website by DFS</p>
            <p>WhatsApp: <a href={ctaDfsUrl} target="_blank" rel="noopener noreferrer">+27 604 791 417</a></p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp for Web Design Service */}
      <a href={ctaDfsUrl} target="_blank" rel="noopener noreferrer" className="sticky-wa">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Build a Website Like This
      </a>
    </>
  );
}
