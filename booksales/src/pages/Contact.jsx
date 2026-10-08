function Contact() {
  return (
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
  );
}

export default Contact;