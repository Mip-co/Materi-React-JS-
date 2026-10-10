# 📚 Tugas React JS Dasar - List Rendering & Hooks

Proyek ini merupakan pengerjaan **Tugas React JS Dasar - 3** pada aplikasi toko buku berbasis **React JS** yang dibangun menggunakan **Vite**, **Bootstrap 5**, dan **React Router**.

---

## 🚀 Pengerjaan & Fitur Utama

1. **Membuat Utility Data Terpusat (`src/Utils/books.js`)**
   - Membuat folder `Utils` di dalam direktori `src`.
   - Membuat file `books.js` yang berisi *array of objects* dengan minimal **9 data buku**.
   - Setiap objek buku memuat atribut: `id`, `title`, `author`, `year`, `description`, dan `image`.

2. **Rendering List Menggunakan `map()`**
   - Mengimpor data dari `src/Utils/books.js` dan menampilkan daftar buku secara dinamis menggunakan metode `.map()` pada **Halaman Home (`Home.jsx`)** dan **Halaman Book (`Book.jsx`)**.
   - Menggunakan atribut `key={book.id}` unik pada setiap elemen card untuk optimasi *re-rendering* React.

3. **Pengelolaan State & Nilai Tambah (Hooks `useState`)**
   - Menggunakan Hook `useState` untuk menyimpan dan mengelola data buku pada komponen.
   - **Fitur Tambah Buku**: Menambahkan tombol aksi untuk memasukkan data buku baru secara interaktif menggunakan *spread operator* (`...`).
   - **Fitur Pencarian**: Memfilter daftar buku berdasarkan kata kunci judul atau nama penulis secara *real-time*.

4. **Routing Navigation (React Router)**
   - Mengintegrasikan rute `/book` di `App.jsx` agar halaman katalog buku dapat diakses secara dinamis.

---

## 📂 File yang Dibuat & Terdampak

- **`src/Utils/books.js`** *(File Baru)*: Menyimpan array data dummy 9 buku yang di-export terpusat.
- **`src/pages/Home.jsx`** *(Modifikasi)*: Mengimpor `books.js`, merender daftar buku secara dinamis dengan `.map()`, serta menyediakan fungsi tambah buku (`useState`).
- **`src/pages/Book.jsx`** *(File Baru/Modifikasi)*: Menampilkan katalog buku dengan `.map()`, fitur pencarian, dan tombol tambah buku.
- **`src/App.jsx`** *(Modifikasi)*: Menambahkan impor `Book` dan pendaftaran route `<Route path="/book" element={<Book />} />`.

---

## 🛠️ Cara Menjalankan Program

### 1. Prasyarat
Pastikan **Node.js** dan **npm** sudah terinstal di komputer Anda.

### 2. Jalankan Perintah
Buka terminal dan jalankan perintah berikut:

```bash
cd booksales
npm install
npm run dev