function Team() {
  return (
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
            <h5 className="fw-bold mb-1">Rafi Ramadhan</h5>
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
  );
}

export default Team;