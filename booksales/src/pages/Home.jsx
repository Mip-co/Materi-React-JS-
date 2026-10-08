function Home() {
  return (
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
  );
}

export default Home;