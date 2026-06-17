export default function Home() {
  const ctaLumaspaceUrl = "https://wa.me/6285194191828?text=Halo%20Lumaspace%2C%20saya%20mau%20buat%20web%20seperti%20ini";

  return (
    <>
      <header className="header">
        <div className="container header-content">
          <div className="logo">Luma Furniture</div>
          <nav className="nav-links">
            <a href="#about" className="nav-link">Tentang</a>
            <a href="#products" className="nav-link">Produk</a>
            <a href="#advantages" className="nav-link">Keunggulan</a>
            <a href="#contact" className="nav-link">Kontak</a>
          </nav>
        </div>
      </header>

      <main>
        {/* 1. Hero */}
        <section className="hero">
          <div className="container hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Furniture Nyaman untuk Rumah dan Ruang Usaha Anda</h1>
              <p className="hero-subtitle">
                Luma Furniture menghadirkan pilihan furniture untuk rumah, kantor, cafe, dan ruang usaha dengan desain modern, rapi, dan fungsional.
              </p>
              <div className="hero-buttons">
                <a href="#products" className="btn btn-primary">Lihat Produk</a>
                <a href="#contact" className="btn btn-secondary">Hubungi Toko</a>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1920&q=80" 
                alt="Showroom Luma Furniture" 
                className="hero-image" 
              />
            </div>
          </div>
        </section>

        {/* 2. Tentang Toko */}
        <section id="about" className="section section-bg-white">
          <div className="container">
            <h2 className="section-title">Tentang Luma Furniture</h2>
            <div className="about-content">
              <p className="about-text">
                Luma Furniture adalah toko furniture yang menyediakan berbagai pilihan produk untuk kebutuhan rumah dan ruang usaha. Kami membantu pelanggan menemukan furniture yang sesuai dengan gaya ruangan, kebutuhan fungsi, dan kenyamanan penggunaan.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <strong>⭐ Ramah & Mudah Dihubungi</strong>
                </div>
                <div className="highlight-item">
                  <strong>🏠 Cocok untuk Rumah & Usaha</strong>
                </div>
                <div className="highlight-item">
                  <strong>💡 Konsultasi Pilihan Furniture</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Produk yang Tersedia */}
        <section id="products" className="section section-bg-cream">
          <div className="container">
            <h2 className="section-title">Produk yang Kami Sediakan</h2>
            <div className="products-grid">
              <div className="product-card">
                <div className="product-img-wrapper">
                  <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80" alt="Sofa" className="product-img" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Sofa</h3>
                  <p className="product-desc">Pilihan sofa nyaman dengan desain modern untuk ruang tamu dan ruang tunggu.</p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-img-wrapper">
                  <img src="https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=600&q=80" alt="Meja dan Kursi" className="product-img" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Meja dan Kursi</h3>
                  <p className="product-desc">Set meja makan, meja tamu, dan kursi kerja dengan material berkualitas tinggi.</p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-img-wrapper">
                  <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80" alt="Lemari" className="product-img" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Lemari</h3>
                  <p className="product-desc">Lemari pakaian dan penyimpanan fungsional yang hemat ruang.</p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-img-wrapper">
                  <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80" alt="Rak TV" className="product-img" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Rak TV</h3>
                  <p className="product-desc">Rak TV elegan yang mempercantik tampilan ruang keluarga Anda.</p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-img-wrapper">
                  <img src="https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=600&q=80" alt="Tempat Tidur" className="product-img" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Tempat Tidur</h3>
                  <p className="product-desc">Rangka tempat tidur kokoh untuk kualitas tidur yang maksimal.</p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-img-wrapper">
                  <img src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=600&q=80" alt="Furniture Custom" className="product-img" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Furniture Custom</h3>
                  <p className="product-desc">Pembuatan furniture sesuai ukuran dan kebutuhan spesifik ruangan Anda.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Keunggulan Toko */}
        <section id="advantages" className="section section-bg-white">
          <div className="container">
            <h2 className="section-title">Kenapa Memilih Luma Furniture?</h2>
            <div className="advantages-grid">
              <div className="advantage-card">
                <div className="advantage-icon">✔️</div>
                <div>Pilihan furniture beragam</div>
              </div>
              <div className="advantage-card">
                <div className="advantage-icon">✔️</div>
                <div>Cocok untuk rumah, kantor, cafe, dan usaha</div>
              </div>
              <div className="advantage-card">
                <div className="advantage-icon">✔️</div>
                <div>Desain modern dan mudah dipadukan</div>
              </div>
              <div className="advantage-card">
                <div className="advantage-icon">✔️</div>
                <div>Bisa konsultasi kebutuhan ruangan</div>
              </div>
              <div className="advantage-card">
                <div className="advantage-icon">✔️</div>
                <div>Pemesanan mudah</div>
              </div>
              <div className="advantage-card">
                <div className="advantage-icon">✔️</div>
                <div>Pelayanan ramah</div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Furniture Custom */}
        <section className="section section-bg-cream">
          <div className="container custom-furniture">
            <div className="custom-text">
              <h2 className="section-title" style={{ textAlign: 'left' }}>Furniture Sesuai Kebutuhan Ruangan</h2>
              <p className="about-text" style={{ textAlign: 'left' }}>
                Untuk kebutuhan tertentu, pelanggan dapat berkonsultasi mengenai furniture custom seperti lemari, rak, meja kerja, meja display, atau furniture untuk ruang usaha.
              </p>
              <a href="#contact" className="btn btn-primary">Konsultasi Furniture</a>
            </div>
            <img src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80" alt="Custom Furniture" className="custom-image" style={{ maxWidth: '500px', width: '100%' }} />
          </div>
        </section>

        {/* 6. Galeri */}
        <section className="section section-bg-white">
          <div className="container">
            <h2 className="section-title">Galeri Furniture</h2>
            <div className="gallery-grid">
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80" alt="Gallery 1" /></div>
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80" alt="Gallery 2" /></div>
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80" alt="Gallery 3" /></div>
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=400&q=80" alt="Gallery 4" /></div>
            </div>
          </div>
        </section>

        {/* 7. Kontak Toko */}
        <section id="contact" className="section section-bg-cream">
          <div className="container">
            <div className="contact-wrapper">
              <h2 className="section-title" style={{ paddingBottom: '15px' }}>Kunjungi dan Hubungi Luma Furniture</h2>
              <div className="contact-info">
                <p>📍 <strong>Area layanan:</strong> Bekasi dan sekitarnya</p>
                <p>📞 <strong>WhatsApp:</strong> +62 851-9419-1828</p>
                <p>📷 <strong>Instagram:</strong> @lumaspace.web.id</p>
              </div>
              <a href="https://wa.me/6285194191828" className="btn btn-primary">Hubungi Toko</a>
            </div>
            
            {/* 8. CTA Halus untuk Jasa Website */}
            <div className="cta-service">
              <h2>Ingin Website Toko Seperti Ini?</h2>
              <p>Website demo ini dibuat oleh Lumaspace untuk menunjukkan bagaimana toko furniture bisa tampil lebih rapi, profesional, dan mudah dihubungi secara online.</p>
              <a href={ctaLumaspaceUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent">Saya Mau Buat Web Seperti Ini</a>
            </div>
          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo">Luma Furniture</div>
          <p className="footer-desc">Furniture untuk rumah, kantor, cafe, dan ruang usaha.</p>
          <div className="footer-credits">
            <p>Demo website by Lumaspace</p>
            <p>Instagram: <a href="https://www.instagram.com/lumaspace.web.id" target="_blank" rel="noopener noreferrer">@lumaspace.web.id</a></p>
            <p>WhatsApp: <a href={ctaLumaspaceUrl} target="_blank" rel="noopener noreferrer">+62 851-9419-1828</a></p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp for Web Design Service */}
      <a href={ctaLumaspaceUrl} target="_blank" rel="noopener noreferrer" className="sticky-wa">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Buat Web Seperti Ini
      </a>
    </>
  );
}
