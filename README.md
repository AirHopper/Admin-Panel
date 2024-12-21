
# 🎛️ AirHopper Admin Panel

AirHopper Admin Panel adalah aplikasi web yang dirancang untuk membantu administrator dalam mengelola data dan fitur sistem pemesanan tiket pesawat AirHopper. Panel ini memberikan antarmuka yang intuitif untuk mengelola maskapai penerbangan, rute, pengguna, dan laporan transaksi.

## 🌟 Fitur Utama

- **Manajemen Maskapai Penerbangan**: Tambah, ubah, dan hapus data maskapai penerbangan dengan mudah.
- **Manajemen Penerbangan**: Kelola rute dan jadwal penerbangan.
- **Manajemen Pengguna**: Atur pengguna, termasuk otorisasi dan peran.
- **Laporan dan Statistik**: Pantau performa dan statistik melalui laporan interaktif.
- **Media Upload**: Dukungan untuk mengunggah gambar maskapai dengan integrasi ImageKit.
- **Autentikasi Aman**: Menggunakan JWT untuk akses dan manajemen keamanan.

## 🛠️ Teknologi yang Digunakan

- **Frontend Framework**: TailwindCSS untuk styling.
- **View Engine**: Edge.js untuk rendering halaman dinamis.
- **JavaScript**: Menggunakan Alpine.js untuk interaktivitas ringan.
- **Express.js**: Framework backend untuk mendukung API dan server-side rendering.
- **DataTable.js**: Membuat tabel data yang responsif dan interaktif.
- **Axios dan jQuery**: Untuk konsumsi API dan interaksi DOM.
- **Multer & ImageKit**: Mendukung upload file dan manajemen media.

## 🚀 Cara Menggunakan

### Prasyarat

1. Node.js (minimal versi 18.x).
2. Server backend API sudah berjalan (lihat [AirHopper Backend](https://github.com/AirHopper/BackEnd)).
3. Alat manajemen API (Postman atau browser).

### Langkah Instalasi

1. Clone repositori ini:
   ```bash
   git clone https://github.com/AirHopper/AdminPanel.git
   ```
2. Masuk ke direktori proyek:
   ```bash
   cd AdminPanel
   ```
3. Instal dependensi:
   ```bash
   npm install
   ```
4. Konfigurasikan file lingkungan `.env`:
   ```env
   API_URL="your-backend-api-url"
    PORT=333
    HOST="0.0.0.0"
    NODE_ENV=development
   ```
5. Jalankan server:
   ```bash
   npm start
   ```
6. Akses Admin Panel di:
   ```bash
   http://localhost:3333
   ```
## 📄 Dokumentasi API

Admin Panel ini bergantung pada API backend untuk pengelolaan data. Pastikan API backend Anda sudah tersedia dan berjalan. Dokumentasi API tersedia di:

1. **Postman**: [Link Postman Collection](https://documenter.getpostman.com/view/33280373/2sAYBbf9a7)
2. **Swagger**: [Swagger API Docs](https://air-hopper-api.padek.tech/api-docs)

## 👥 Tim Pengembang

Admin Panel ini dikembangkan oleh tim AirHopper dari program Studi Independen Kampus Merdeka - Binar Academy.

- **Backend**:
  - **Juan Verrel Tanuwijaya**
  - **Muhamad Royhan Fadhli**
  - **Ahmad Subhan Daryhadi**
  - **Bima Rizqy Ramadhan**
- **Frontend dan Admin Panel**:
  - **Ridhwan Tsalasah Putra**
  - **Ryan Nicholas Purba**
  - **M. Zaky Pria Maulana**
  - **Joe Ferdinan**
