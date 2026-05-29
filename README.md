# Bidan Tari - Website Layanan Kesehatan Ibu & Anak

Website resmi Bidan Tari yang menyediakan informasi layanan kesehatan, edukasi (informasi), galeri kegiatan, dan fitur baby spa. Aplikasi ini dibangun menggunakan SvelteKit dengan fokus pada performa dan kemudahan pengelolaan konten melalui panel admin.

## 🚀 Teknologi Utama

- **Framework**: [SvelteKit 5](https://svelte.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Database**: [SQLite](https://www.sqlite.org/) / [Turso](https://turso.tech/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Fonts**: Montserrat & Merriweather (Self-hosted)
- **Icons**: Custom PNG/SVG Icons

## ✨ Fitur Utama

- **Landing Page**: Informasi umum mengenai layanan Bidan Tari.
- **Layanan**: Detail layanan kesehatan yang ditawarkan.
- **Baby Spa**: Informasi khusus mengenai fasilitas dan layanan baby spa.
- **Galeri**: Dokumentasi foto kegiatan dan fasilitas.
- **Informasi (Blog)**: Artikel edukasi kesehatan bagi ibu dan anak.
- **WhatsApp Widget**: Integrasi langsung untuk konsultasi via WhatsApp.
- **Panel Admin**:
    - Manajemen artikel/informasi (CRUD).
    - Manajemen user/admin.
    - Autentikasi aman.

## 🛠️ Persiapan Lingkungan (Setup)

### 1. Prasyarat
Pastikan Anda sudah menginstal:
- [Node.js](https://nodejs.org/) (versi terbaru direkomendasikan)
- NPM (bawaan Node.js)

### 2. Instalasi Dependensi
```sh
npm install
```

### 3. Konfigurasi Variabel Lingkungan
Salin file `.env.example` menjadi `.env` dan sesuaikan nilainya:
```sh
cp .env.example .env
```
Isi dasar `.env`:
```env
DATABASE_URL=file:local.db
# Jika menggunakan Turso:
# TURSO_CONNECTION_URL=libsql://...
# TURSO_AUTH_TOKEN=...
```

### 4. Setup Database
Jalankan migrasi untuk membuat tabel yang diperlukan:
```sh
# Menghasilkan file migrasi
npm run db:generate

# Mendorong skema ke database
npm run db:push
```

## 💻 Pengembangan

Jalankan server pengembangan:
```sh
npm run dev
```
Akses aplikasi di [http://localhost:5173](http://localhost:5173).

## 📜 Perintah Tersedia (Scripts)

- `npm run dev`: Menjalankan aplikasi dalam mode pengembangan.
- `npm run build`: Membangun aplikasi untuk produksi.
- `npm run preview`: Menjalankan aplikasi hasil build secara lokal.
- `npm run db:push`: Sinkronisasi skema Drizzle ke database.
- `npm run db:generate`: Membuat file migrasi database.
- `npm run db:migrate`: Menjalankan migrasi database.
- `npm run db:studio`: Membuka antarmuka GUI untuk mengelola database.

## 📂 Struktur Folder Utama

- `src/lib/components`: Komponen UI yang dapat digunakan kembali (Navbar, Footer, dll).
- `src/lib/server/db`: Konfigurasi database dan skema Drizzle.
- `src/routes`: Struktur halaman website (termasuk admin dan API).
- `static/`: Aset statis seperti gambar, ikon, dan font.

---

Dikembangkan untuk memberikan layanan informasi kesehatan terbaik bagi masyarakat.
