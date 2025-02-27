# Lemari Buku Digital: API Manajemen Buku Pribadi

"Lemari Buku Digital" adalah sebuah API RESTful yang dirancang untuk mengelola koleksi buku pribadi Anda secara efisien dan menyenangkan. Dengan antarmuka yang intuitif, API ini memungkinkan Anda untuk **MENYIMPAN**, **MENAMPILKAN**, **MEMPERBARUI**, dan **MENGHAPUS** data buku dengan mudah. Bayangkan sebuah lemari buku digital yang selalu siap sedia, memungkinkan Anda mengakses informasi buku kapan saja dan di mana saja.

## Fitur Utama

* **PENYIMPANAN BUKU YANG MUDAH**: Tambahkan buku baru ke koleksi Anda dengan detail lengkap, termasuk judul, penulis, tahun terbit, ringkasan, dan status baca.
* **PENJELAJAHAN KOLEKSI YANG CEPAT**: Temukan buku yang Anda cari dengan fitur pencarian dan filter yang cerdas.
* **DETAIL BUKU YANG KOMPREHENSIF**: Dapatkan informasi lengkap tentang setiap buku, termasuk status baca dan tanggal penambahan atau pembaruan.
* **MANAJEMEN BUKU YANG FLEKSIBEL**: Perbarui informasi buku atau hapus buku yang tidak lagi Anda butuhkan dengan mudah.
* **FILTERISASI BUKU YANG CERDAS**: Cari buku berdasarkan nama, status sedang dibaca, atau status selesai dibaca.
* **VALIDASI DATA YANG KUAT**: Memastikan data yang disimpan selalu valid dan konsisten.
* **RESPONS API YANG JELAS**: Setiap permintaan API direspons dengan format JSON yang terstruktur dan informatif.

## Teknologi

* Node.js
* Hapi.js
* nanoid
* ESLint
* joi

## Tujuan

Proyek ini bertujuan untuk menyediakan solusi digital untuk manajemen koleksi buku pribadi, memungkinkan pengguna untuk mengatur dan mengakses informasi buku mereka dengan cara yang efisien dan menyenangkan. Dengan antarmuka yang ramah pengguna dan fitur-fitur yang lengkap, "Lemari Buku Digital" siap menjadi asisten pribadi Anda dalam mengelola dunia literasi Anda.

## Target Pengguna

* Pembaca buku yang ingin mengelola koleksi buku mereka secara digital.
* Pengembang yang ingin mempelajari cara membuat API RESTful dengan Node.js dan Hapi.js.
* Siapa saja yang tertarik dengan manajemen data dan pengembangan API.

## Cara Menjalankan Proyek

1.  Clone repositori ini:

    ```bash
    git clone <URL_repositori_Anda>
    ```

2.  Masuk ke direktori proyek:

    ```bash
    cd bookshelf-api
    ```

3.  Instal dependensi:

    ```bash
    npm install
    ```

4.  Jalankan server:

    ```bash
    npm run start
    ```

## Endpoint API

* **POST /books**: Menambahkan buku baru.
* **GET /books**: Mendapatkan semua buku.
* **GET /books/{bookId}**: Mendapatkan detail buku berdasarkan ID.
* **PUT /books/{bookId}**: Memperbarui buku berdasarkan ID.
* **DELETE /books/{bookId}**: Menghapus buku berdasarkan ID.

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan buat pull request.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT.
