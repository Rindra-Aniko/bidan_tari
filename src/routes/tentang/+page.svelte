<script>
  import { reveal } from '$lib/actions/reveal.js';
</script>

<svelte:head>
  <title>Tentang Kami — Klinik Bidan Sri Deby Utari</title>
  <meta name="description" content="Kenali Bidan Sri Debi Utari, S.Tr.Keb — bidan profesional berpengalaman di Kerinci, Jambi. Melayani persalinan, pemeriksaan kehamilan, dan perawatan ibu & anak dengan penuh kehangatan." />
</svelte:head>

<!-- Hero Section -->
<section class="min-h-screen bg-white flex items-center justify-center px-6 py-20 md:py-28 md:px-16 lg:px-24">
  <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    <div class="space-y-8 max-w-xl">
      <span class="text-xs font-semibold tracking-widest text-pink-500 uppercase block font-montserrat">
        Dedikasi & Kasih Sayang
      </span>

      <h1 class="text-4xl md:text-5xl lg:text-6xl font-merriweather leading-tight font-bold text-gray-900">
        Menghadirkan Kehangatan dalam
        <span class="text-pink-500 italic font-normal">Setiap Kelahiran</span>
      </h1>

      <p class="text-gray-600 text-sm md:text-base leading-relaxed font-montserrat">
        Membangun kepercayaan melalui pelayanan kebidanan yang profesional, empatik, dan berpusat pada kenyamanan keluarga di setiap langkah perjalanan menjadi ibu.
      </p>

      <div class="pt-2">
        <a href="https://wa.me/6285266761076" target="_blank" rel="noopener noreferrer" class="inline-block bg-pink-500 text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-pink-600 transition-all duration-300 font-montserrat">
          Jadwalkan Konsultasi Sekarang
        </a>
      </div>
    </div>

    <div class="flex justify-center lg:justify-end">
      <div class="w-full max-w-[480px] aspect-[4/5] rounded-2xl overflow-hidden border border-pink-100">
        <img
          src="/image/PROFILE 2.webp"
          alt="Foto Profil Bidan"
          class="w-full h-full object-cover object-center"
          width="480"
          height="600"
          loading="eager"
          fetchpriority="high"
        />
      </div>
    </div>

  </div>
</section>

<!-- Profil & Pengalaman Section -->
<section class="w-full bg-pink-50 py-20 md:py-28 px-6">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-16" use:reveal={{ y: 30 }}>
      <span class="text-xs font-semibold tracking-widest text-pink-500 uppercase block font-montserrat mb-4">
        Tentang Kami
      </span>
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 font-merriweather">
        Profil & Pengalaman
      </h2>
      <div class="w-16 h-1 bg-pink-500 rounded-full mx-auto mt-4"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

      <!-- Bio Card -->
      <div class="md:col-span-2 bg-white border border-pink-100 rounded-2xl p-8 flex flex-col justify-between hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" use:reveal={{ y: 40, duration: 800 }}>
        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4 font-merriweather">Bdn. Sri Debi Utari, S.Tr.Keb</h3>
          <p class="text-gray-600 leading-relaxed text-justify text-sm md:text-base font-montserrat">
            Dengan pengalaman bertahun-tahun melayani ibu dan anak di wilayah Kerinci, Sri Debi Utari berkomitmen untuk memberikan standar perawatan medis yang tinggi tanpa mengesampingkan sisi humanis. Beliau percaya bahwa setiap ibu berhak mendapatkan pengalaman melahirkan yang tenang, aman, dan didukung penuh oleh tenaga profesional yang peduli.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-pink-400 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p class="text-xs text-gray-400 uppercase tracking-wider font-semibold font-montserrat">STR & SIPB</p>
              <p class="text-sm font-bold text-gray-900 font-montserrat">Aktif & Berlisensi</p>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-pink-400 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.5 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <div>
              <p class="text-xs text-gray-400 uppercase tracking-wider font-semibold font-montserrat">Fokus Pelayanan</p>
              <p class="text-sm font-bold text-gray-900 font-montserrat">Sayang Ibu & Bayi</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Pendidikan Card -->
      <div class="bg-white border border-pink-100 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" use:reveal={{ y: 40, duration: 800, delay: 100 }}>
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 font-merriweather">Pendidikan</h3>
        </div>

        <div class="space-y-5">
          <div class="relative pl-5">
            <span class="absolute left-0 top-2 w-2 h-2 rounded-full bg-pink-500"></span>
            <p class="text-sm font-semibold text-gray-900 font-montserrat">D3 Kebidanan – Universitas Adiwangsa Jambi (2016)</p>
            <p class="text-xs text-gray-400 mt-0.5 font-montserrat">Institusi Kesehatan Terakreditasi</p>
          </div>
          <div class="relative pl-5">
            <span class="absolute left-0 top-2 w-2 h-2 rounded-full bg-pink-500"></span>
            <p class="text-sm font-semibold text-gray-900 font-montserrat">D4 Kebidanan – Universitas Fort De Kock Bukittinggi (2024)</p>
            <p class="text-xs text-gray-400 mt-0.5 font-montserrat">Institusi Kesehatan Terakreditasi</p>
          </div>
          <div class="relative pl-5">
            <span class="absolute left-0 top-2 w-2 h-2 rounded-full bg-pink-500"></span>
            <p class="text-sm font-semibold text-gray-900 font-montserrat">Bidan Profesi – Universitas Fort De Kock Bukittinggi (2025)</p>
            <p class="text-xs text-gray-400 mt-0.5 font-montserrat">Peningkatan Kompetensi Berkelanjutan</p>
          </div>
        </div>
      </div>

      <!-- Pengalaman Kerja Card -->
      <div class="bg-white border border-pink-100 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" use:reveal={{ y: 40, duration: 800, delay: 200 }}>
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 font-merriweather">Pengalaman Kerja</h3>
        </div>

        <div class="relative border-l-2 border-pink-200 ml-2 space-y-6 py-2">
          <div class="relative pl-6">
            <span class="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-pink-500"></span>
            <p class="text-sm font-semibold text-gray-900 font-montserrat">Asisten Bidan Praktik Bidan Mandiri</p>
            <p class="text-xs text-gray-400 font-montserrat">2014 - 2019</p>
          </div>
          <div class="relative pl-6">
            <span class="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-pink-500"></span>
            <p class="text-sm font-semibold text-gray-900 font-montserrat">Bidan Puskesmas Semurup</p>
            <p class="text-xs text-gray-400 font-montserrat">2018 - Sekarang</p>
          </div>
          <div class="relative pl-6">
            <span class="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-pink-500"></span>
            <p class="text-sm font-semibold text-gray-900 font-montserrat">Praktik Mandiri Bidan Sri Debi Utari</p>
            <p class="text-xs text-gray-400 font-montserrat">2019 - Sekarang</p>
          </div>
        </div>
      </div>

      <!-- Lokasi & Kontak Card -->
      <div class="md:col-span-2 bg-white border border-pink-100 rounded-2xl p-8 flex flex-col md:flex-row gap-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" use:reveal={{ y: 40, duration: 800, delay: 100 }}>
        <div class="flex-1 flex flex-col justify-between space-y-6">
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 font-merriweather">Lokasi & Kontak</h3>

            <div class="space-y-4">
              <div class="flex gap-3 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-pink-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p class="text-sm text-gray-600 font-medium leading-relaxed font-montserrat">
                  Jl. Wisata Desa Hamparan pugu kecamatan Air Hangat Barat Kabupaten Kerinci Provinsi Jambi.
                </p>
              </div>

              <div class="flex gap-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-pink-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p class="text-sm text-gray-600 font-medium font-montserrat">085266761076</p>
              </div>
            </div>
          </div>

          <a href="https://maps.app.goo.gl/ZW17rpw7WJqbwUHm6" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm font-semibold text-pink-500 hover:text-pink-600 transition-colors group w-fit font-montserrat">
            Buka di Google Maps
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div class="w-full md:w-[320px] h-[220px] md:h-auto rounded-2xl overflow-hidden border border-pink-100 shrink-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7295284308127!2d101.45399669999999!3d-1.7909023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2d5c61a3c5ffb3%3A0x10fb3db1caba1e1e!2sBidan%20Deby!5e0!3m2!1sen!2sid!4v1747971606067!5m2!1sen!2sid"
            class="w-full h-full min-h-[200px]"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            title="Lokasi Praktik Bidan Sri Deby Utari"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="w-full px-6 py-12 mb-12">
  <div class="max-w-4xl mx-auto bg-pink-500 rounded-3xl p-12 md:p-16 relative overflow-hidden text-center" use:reveal={{ y: 50, duration: 800 }}>
    <!-- Decorative -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
    <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -ml-16 -mb-16"></div>

    <div class="relative z-10">

      <span class="text-xs font-semibold tracking-widest text-pink-100 uppercase block mb-4 font-montserrat">
        Hubungi Kami
      </span>

      <h2 class="text-3xl md:text-5xl font-bold font-merriweather text-white leading-tight mb-6">
        Siap Memulai Perjalanan Indah Anda?
      </h2>

      <p class="text-pink-100 text-base md:text-lg font-montserrat max-w-2xl mx-auto leading-relaxed mb-10">
        Kami di sini untuk mendengarkan, membimbing, dan memberikan perawatan terbaik bagi Anda dan buah hati tercinta.
      </p>

      <a
        href="https://wa.me/6285266761076"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 bg-white hover:bg-pink-50 text-pink-500 font-medium text-sm md:text-base px-8 py-3.5 rounded-full transition-all duration-300 font-montserrat shadow-lg shadow-black/5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.352 0-4.55-.752-6.338-2.032l-.442-.332-3.287 1.1 1.1-3.287-.332-.442A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
        Konsultasi via WhatsApp
      </a>

    </div>
  </div>
</section>