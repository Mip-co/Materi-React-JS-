import { useState } from "react";
import booksData from "../utils/books";

function Home() {
  const [books, setBooks] = useState(booksData);

  // Fungsi nilai tambah untuk menambahkan buku baru secara interaktif
  const handleAddBook = () => {
    const newId = books.length + 1;
    const newBook = {
      id: newId,
      title: `Buku Baru ${newId}`,
      author: "Penulis Baru",
      year: 2024,
      description: "Deskripsi singkat untuk buku baru yang berhasil ditambahkan.",
      image: `https://picsum.photos/seed/book${newId}/300/225`
    };

    setBooks([...books, newBook]);
  };

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
                <a href="#book-list" className="btn btn-primary my-2 me-2">View Books</a>
                <button onClick={handleAddBook} className="btn btn-secondary my-2">
                  Add Book 
                </button>
              </p>
            </div>
          </div>
        </section>

        {/* Grid Produk Buku */}
        <div id="book-list" className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              
              {/* Loop rendering menggunakan map() */}
              {books.map((book) => (
                <div className="col" key={book.id}>
                  <div className="card shadow-sm h-100">
                    <img
                      src={book.image}
                      className="card-img-top"
                      alt={book.title}
                      style={{ height: "225px", objectFit: "cover" }}
                    />
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h5 className="card-title fw-bold">{book.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{book.author} ({book.year})</h6>
                        <p className="card-text">{book.description}</p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">ID: {book.id}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;