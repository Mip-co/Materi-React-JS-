import { useState } from 'react'

function App() {
  // State untuk menyimpan halaman mana yang sedang aktif ('home', 'team', atau 'contact')
  const [activePage, setActivePage] = useState('home')

  return (
    <>
      <div className="container">
        {/* Header */}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          {/* Brand / Logo */}
          <div className="col-md-3 mb-2 mb-md-0">
            <a 
              href="#" 
              onClick={() => setActivePage('home')}
              className="d-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <i 
                className="fa-solid fa-book fa-2x me-2" 
                style={{ color: "rgb(116, 192, 252)" }}
              ></i>
              <span className="fs-4 text-dark" style={{ fontWeight: "400", letterSpacing: "-0.5px" }}>
                bookstore
              </span>
            </a>
          </div>

          {/* Navigation Links */}
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 nav-pills">
            <li className="nav-item">
              <button 
                className={`nav-link px-3 ${activePage === 'home' ? 'active' : ''}`}
                onClick={() => setActivePage('home')}
              >
                Home
              </button>
            </li>
            {/* Menu Book (Belum Ada State Navigasi) */}
            <li className="nav-item">
              <button 
                type="button"
                className={`nav-link px-3 ${activePage === 'book' ? 'active' : ''}`}
                onClick={() => setActivePage('book')}
              >
                Book
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link px-3 ${activePage === 'team' ? 'active' : ''}`}
                onClick={() => setActivePage('team')}
              >
                Team
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link px-3 ${activePage === 'contact' ? 'active' : ''}`}
                onClick={() => setActivePage('contact')}
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>


        {/* Home */}
        {activePage === 'home' && (
          <div>
            {/* Hero Section */}
            <div className="container my-5">
              <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                  <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                    Atomic Habits
                  </h1>
                  <p className="lead">
                    Perubahan kecil yang memberikan hasil luar biasa. Cara mudah dan terbukti untuk membangun kebiasaan baik dan menghilangkan kebiasaan buruk.
                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                      Buy Now
                    </button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                      Detail
                    </button>
                  </div>
                </div>

                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg mb-4 mb-lg-0">
                  <img 
                    className="rounded-lg-3 img-fluid" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZOLof-8iYsYC1wlpBR1xL4lQ3UN0DctXxgoS5ipluvw&s=10" 
                    alt="Atomic Habits Cover" 
                    width="720" 
                  />
                </div>
              </div>
            </div>        

            {/* Product Section */}
            <main>
              <section className="py-5 text-center container">
                <div className="row py-lg-5">
                  <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Best Seller</h1>
                    <p className="lead text-body-secondary">
                      Koleksi buku-buku terbaik pilihan pembaca minggu ini. Temukan inspirasi dan pengetahuan baru dari para penulis ternama.
                    </p>
                    <p>
                      <a href="#" className="btn btn-primary my-2 me-2">View Books</a>
                      <a href="#" className="btn btn-secondary my-2">Add Book</a>
                    </p>
                  </div>
                </div>
              </section>

              {/* Grid Produk Buku */}
              <div className="album py-5 bg-body-tertiary">
                <div className="container">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                    {/* Card 1 */}
                    <div className="col">
                      <div className="card shadow-sm">
                        <img
                          src="https://picsum.photos/seed/book1/300/225"
                          className="card-img-top"
                          alt="Book Cover"
                        />
                        <div className="card-body">
                          <p className="card-text">
                            Buku pengembangan diri terbaik yang membahas tentang pembentukan kebiasaan kecil untuk hasil besar.
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                              <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-body-secondary">9 mins</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col">
                      <div className="card shadow-sm">
                        <img
                          src="https://picsum.photos/seed/book2/300/225"
                          className="card-img-top"
                          alt="Book Cover"
                        />
                        <div className="card-body">
                          <p className="card-text">
                            Panduan praktis stoisisme dalam menghadapi tantangan hidup modern dengan tenang.
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                              <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-body-secondary">15 mins</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col">
                      <div className="card shadow-sm">
                        <img
                          src="https://picsum.photos/seed/book3/300/225"
                          className="card-img-top"
                          alt="Book Cover"
                        />
                        <div className="card-body">
                          <p className="card-text">
                            Memahami psikologi keuangan dan cara mengelola kekayaan secara bijak untuk jangka panjang.
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                              <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-body-secondary">20 mins</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 4 */}
                    <div className="col">
                      <div className="card shadow-sm">
                        <img
                          src="https://picsum.photos/seed/book4/300/225"
                          className="card-img-top"
                          alt="Book Cover"
                        />
                        <div className="card-body">
                          <p className="card-text">
                            Pendekatan unik untuk memprioritaskan hal-hal yang benar-benar penting dalam kehidupan.
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                              <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-body-secondary">30 mins</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 5 */}
                    <div className="col">
                      <div className="card shadow-sm">
                        <img
                          src="https://picsum.photos/seed/book5/300/225"
                          className="card-img-top"
                          alt="Book Cover"
                        />
                        <div className="card-body">
                          <p className="card-text">
                            Panduan lengkap belajar pemrograman modern dan arsitektur perangkat lunak untuk pemula.
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                              <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-body-secondary">45 mins</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 6 */}
                    <div className="col">
                      <div className="card shadow-sm">
                        <img
                          src="https://picsum.photos/seed/book6/300/225"
                          className="card-img-top"
                          alt="Book Cover"
                        />
                        <div className="card-body">
                          <p className="card-text">
                            Kisah inspiratif tentang perjalanan membangun bisnis startup dari nol hingga sukses.
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                              <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-body-secondary">1 hour</small>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </main>
          </div>
        )}


        {/* Team */}
        {activePage === 'team' && (
          <div className="container py-5">
            <div className="text-center mb-5">
              <h1 className="fw-bold">Tim Pengembang Proyek</h1>
              <p className="lead text-muted">Orang-orang di balik pembuatan website Bookstore ini.</p>
            </div>

            <div className="row justify-content-center g-4">
              <div className="col-md-4">
                <div className="card border-0 shadow-sm p-4 text-center h-100">
                  <img
                    src="https://media1.tenor.com/m/uSmKs-ulGewAAAAC/eat-cat-cat-eat.gif"
                    alt="Ahmad Miftahuddin A"
                    className="rounded-circle mx-auto mb-3"
                    width="120"
                    height="120"
                  />
                  <h5 className="fw-bold mb-1">Ahmad Miftahuddin</h5>
                  <p className="text-primary fw-medium mb-2">Chief Product Officer</p>
                  <p className="text-muted small">Fokus pada manajemen produk dan pengembangan UI/UX yang intuitif.</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-0 shadow-sm p-4 text-center h-100">
                  <img
                    src="https://media.tenor.com/iALgQGVcpz4AAAAi/scemer-staring-cat.gif"
                    alt="Rafi"
                    className="rounded-circle mx-auto mb-3"
                    width="120"
                    height="120"
                  />
                  <h5 className="fw-bold mb-1">Rafi Muhammad</h5>
                  <p className="text-primary fw-medium mb-2">Lead Developer</p>
                  <p className="text-muted small">Mengelola arsitektur utama frontend dan integrasi komponen.</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-0 shadow-sm p-4 text-center h-100">
                  <img
                    src="https://media1.tenor.com/m/FWYFkElU8UIAAAAC/7tv-cat-meme.gif"
                    alt="Muhammad Wildan"
                    className="rounded-circle mx-auto mb-3"
                    width="120"
                    height="120"
                  />
                  <h5 className="fw-bold mb-1">Muhammad Wildan</h5>
                  <p className="text-primary fw-medium mb-2">UI/UX Designer</p>
                  <p className="text-muted small">Merancang konsistensi layout dan estetika tampilan Bootstrap.</p>
                </div>
              </div>
            </div>
          </div>
        )}


        {/* Contact */}
        {activePage === 'contact' && (
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-md-5">
                <h2 className="fw-bold mb-3">Hubungi Kami</h2>
                <p className="text-muted mb-4">
                  Punya pertanyaan seputar buku atau pemesanan? Silakan hubungi tim kami melalui info di bawah atau isi formulir.
                </p>
                <p className="mb-2"><i className="fa-solid fa-location-dot text-primary me-3"></i>Jl. Lenteng Agung Raya No. 20, Jakarta</p>
                <p className="mb-2"><i className="fa-solid fa-envelope text-primary me-3"></i>support@bookstore.com</p>
                <p className="mb-2"><i className="fa-solid fa-phone text-primary me-3"></i>+62 812-3456-7890</p>
              </div>

              <div className="col-md-7">
                <div className="card p-4 shadow-sm border-0">
                  <h4 className="fw-bold mb-3">Kirim Pesan</h4>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3">
                      <label className="form-label fw-medium">Nama Lengkap</label>
                      <input type="text" className="form-control" placeholder="Masukkan nama Anda" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-medium">Email</label>
                      <input type="email" className="form-control" placeholder="nama@email.com" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-medium">Pesan</label>
                      <textarea className="form-control" rows="4" placeholder="Tuliskan pesan Anda..."></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 fw-bold">Kirim Pesan</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}


        {/* Footer */}
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <button 
                onClick={() => setActivePage('home')}
                className="nav-link px-2 text-body-secondary btn btn-link text-decoration-none"
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button 
                onClick={() => setActivePage('team')}
                className="nav-link px-2 text-body-secondary btn btn-link text-decoration-none"
              >
                Team
              </button>
            </li>
            <li className="nav-item">
              <button 
                onClick={() => setActivePage('contact')}
                className="nav-link px-2 text-body-secondary btn btn-link text-decoration-none"
              >
                Contact
              </button>
            </li>
          </ul>

          <p className="text-center text-body-secondary">
            © 2026 Bookstore, Inc. All rights reserved.
          </p>
        </footer>

      </div>
    </>
  )
}

export default App