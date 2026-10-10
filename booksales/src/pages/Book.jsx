import { useState } from "react";
import booksData from "../utils/books";

function Book() {
  const [books, setBooks] = useState(booksData);
  const [searchTerm, setSearchTerm] = useState("");

  // Handler untuk menambahkan data buku baru (Fitur Nilai Tambah)
  const handleAddBook = () => {
    const newId = books.length + 1;
    const newBook = {
      id: newId,
      title: `Buku Baru ${newId}`,
      author: "Penulis Baru",
      year: 2024,
      description: "Deskripsi singkat mengenai buku baru yang berhasil ditambahkan ke dalam katalog.",
      image: `https://picsum.photos/seed/book${newId}/300/225`
    };

    setBooks([...books, newBook]);
  };

  // Filter buku berdasarkan pencarian judul atau penulis
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-primary">Katalog Buku</h1>
          <p className="lead text-muted">
            Jelajahi seluruh koleksi buku yang tersedia dan temukan bacaan terbaik untuk Anda.
          </p>
        </div>

        {/* Toolbar: Search Input & Add Book Button */}
        <div className="row justify-content-between align-items-center mb-4 g-3">
          <div className="col-md-6 col-lg-5">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0" id="search-addon">
                🔍
              </span>
              <input
                type="text"
                className="form-control border-start-0 ps-0"
                placeholder="Cari berdasarkan judul atau penulis..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="col-auto">
            <button 
              onClick={handleAddBook} 
              className="btn btn-success fw-bold shadow-sm"
            >
              + Tambah Buku
            </button>
          </div>
        </div>

        {/* Info Jumlah Buku */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="badge bg-secondary">
            Total Buku: {filteredBooks.length}
          </span>
        </div>

        {/* Grid List Buku menggunakan map() */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div className="col" key={book.id}>
                <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
                  <img
                    src={book.image}
                    className="card-img-top"
                    alt={book.title}
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="card-title fw-bold mb-0 text-dark">{book.title}</h5>
                        <span className="badge bg-info text-dark ms-2">{book.year}</span>
                      </div>
                      <h6 className="card-subtitle text-muted mb-3 fs-6">
                        ✍️ {book.author}
                      </h6>
                      <p className="card-text text-secondary small">
                        {book.description}
                      </p>
                    </div>

                    <div className="pt-3 border-top mt-3 d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-primary">
                          Detail
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-warning">
                          Edit
                        </button>
                      </div>
                      <small className="text-muted fw-semibold">ID: #{book.id}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className="fs-5 text-muted">Buku tidak ditemukan.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Book;