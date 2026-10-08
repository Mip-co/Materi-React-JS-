# 📚 Tugas Studi Kasus: Bookstore Web Application

Proyek ini merupakan pengerjaan tugas aplikasi web toko buku berbasis **React JS** yang dibuat menggunakan **Vite**, **Bootstrap 5**, **Font Awesome**, dan **React Router**.

---

## 🚀 Fitur & Hal yang Dikerjakan

1. **Implementasi Routing Deklaratif (React Router)**
   - Mengintegrasikan `react-router-dom` (`BrowserRouter`, `Routes`, `Route`, `NavLink`, `Link`) untuk navigasi *Single Page Application* (SPA) tanpa *full reload*.
   - Menggunakan `NavLink` pada Navbar untuk memberikan gaya indikator *active page* secara otomatis saat halaman dibuka.

2. **Refactoring & Modularisasi Komponen**
   - Memecah komponen raksasa di `App.jsx` menjadi struktur folder yang teratur (pendekatan *Atomic Design*):
     - `src/organisms/`: Menyimpan `Navbar.jsx` dan `Footer.jsx`.
     - `src/pages/`: Menyimpan halaman `Home.jsx`, `Team.jsx`, dan `Contact.jsx`.
   - Menambahkan rute penanganan rute tak ditemukan (*fallback 404*).

3. **Pengembangan Halaman & Konten**
   - **Halaman Home**: Menyajikan *Hero Section* (Atomic Habits) dan *grid card* katalog buku *best seller*.
   - **Halaman Team**: Menampilkan kartu profil anggota tim pengembang lengkap dengan foto, nama, peran, dan deskripsi singkat.
   - **Halaman Contact**: Menyajikan info kontak lokasi/dukungan beserta formulir kirim pesan.

4. **Pengunggahan & Collaboration**
   - Mengunggah repositori proyek ke GitHub pada branch pengerjaan.
   - Mengundang mentor sebagai *collaborator* repositori.

---

## 🛠️ Cara Menjalankan Program

### 1. Prasyarat
Pastikan **Node.js** dan **npm** sudah terinstal di komputer Anda.

### 2. Instalasi Dependensi
Jalankan perintah berikut di terminal untuk memasang paket yang dibutuhkan (termasuk `react-router-dom`):

```bash
cd booksales
npm install
npm run dev