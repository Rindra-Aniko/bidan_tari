<script>
  import { reveal } from '$lib/actions/reveal.js';
</script>

<svelte:head>
  <title>Baby Spa — Klinik Bidan Sri Deby Utari</title>
  <meta name="description" content="Layanan Baby Spa profesional oleh bidan bersertifikat. Pijat bayi lembut untuk melancarkan sirkulasi darah, meredakan kolik, dan mendukung tumbuh kembang optimal si kecil." />
</svelte:head>

<!-- Hero -->
<section class="relative min-h-[90vh] flex flex-col items-center justify-center bg-white px-6 py-20 md:py-28 text-center select-none overflow-hidden">
  <!-- Subtle decorative circles -->
  <div class="absolute top-20 left-10 w-64 h-64 bg-pink-50 rounded-full -z-0 opacity-60"></div>
  <div class="absolute bottom-10 right-10 w-48 h-48 bg-pink-50 rounded-full -z-0 opacity-60"></div>

  <div class="max-w-4xl mx-auto flex flex-col items-center relative z-10" use:reveal={{ duration: 800, y: 30 }}>

    <div class="inline-flex items-center gap-2 bg-pink-50 text-pink-500 text-xs font-semibold px-5 py-2 rounded-full mb-8 border border-pink-100 font-montserrat uppercase tracking-widest">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
      <span>Sanctuary for Little Ones</span>
    </div>

    <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-pink-500 tracking-tight leading-[1.1] mb-8 font-merriweather">
      Momen Tenang Si Kecil,<br class="hidden sm:inline" />
      <span class="text-gray-900">Sentuhan Penuh Kasih.</span>
    </h1>

    <p class="text-gray-600 text-lg lg:text-xl font-medium max-w-2xl leading-relaxed mb-12 px-2 md:px-6 font-montserrat">
      Hadirkan kenyamanan dan kebahagiaan bagi buah hati Anda melalui perawatan holistik yang dirancang khusus untuk mendukung tumbuh kembang yang optimal.
    </p>

    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
      <a href="/layanan" class="w-full sm:w-auto text-center bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 font-montserrat">
        Eksplor Layanan
      </a>

      <a href="/galeri"  rel="noopener noreferrer" class="w-full sm:w-auto text-center bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-3 rounded-full border border-gray-200 transition-all duration-300 font-montserrat">
        Lihat Galeri
      </a>
    </div>

  </div>
</section>

<!-- Penjelasan: Baby Massage -->
<section id="layanan" class="py-20 md:py-28 px-6 md:px-12 lg:px-24 bg-pink-50">
  <div class="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    <!-- Image -->
    <div class="relative w-full group" use:reveal={{ duration: 800, x: -40 }}>
      <div class="aspect-[4/5] md:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-pink-100 border border-pink-100 relative z-10">
        <img src="/image/baby_spa.webp" alt="Baby Spa" class="w-full h-full object-scale-down object-left md:object-center transition-transform duration-700 group-hover:scale-105">
      </div>
      <div class="absolute -bottom-8 -right-4 md:-right-8 bg-white p-5 rounded-2xl border border-pink-100 max-w-[220px] z-20 transition-transform duration-500 group-hover:-translate-y-1">
        <div class="flex items-center gap-2 text-pink-500 font-semibold text-sm mb-2 font-montserrat uppercase tracking-wider">
          <div class="w-8 h-8 bg-pink-50 rounded-xl flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </div>
          Nurturing
        </div>
        <p class="text-xs text-gray-400 leading-relaxed font-montserrat font-medium">
          Terapi yang lembut dan personal untuk kenyamanan maksimal si kecil.
        </p>
      </div>
      <div class="absolute -top-6 -left-6 w-32 h-32 bg-pink-100/50 rounded-full -z-0"></div>
    </div>

    <!-- Text Content -->
    <div class="flex flex-col space-y-8" use:reveal={{ duration: 800, x: 40 }}>
      <div>
        <span class="inline-block text-pink-500 text-xs font-semibold px-1 py-1 mb-4 tracking-widest font-montserrat uppercase">
          Signature Service
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 font-merriweather leading-tight">
          Pijat Bayi <br/><span class="text-pink-500">(Baby Massage)</span>
        </h2>
      </div>

      <div class="space-y-5">
        <!-- Prosedur Card -->
        <div class="bg-white p-8 rounded-2xl border border-pink-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
          <h3 class="text-xs font-semibold text-gray-400 tracking-[0.2em] uppercase mb-4 font-montserrat">
            Prosedur
          </h3>
          <p class="text-gray-600 text-base leading-relaxed font-montserrat">
            Terapis profesional akan melakukan pijatan lembut menggunakan minyak khusus bayi (baby oil atau lotion yang aman bagi kulit sensitif) dari area kaki, tangan, perut, dada, hingga punggung.
          </p>
        </div>

        <!-- Fungsi & Manfaat Card -->
        <div class="bg-white p-8 rounded-2xl border border-pink-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
          <h3 class="text-xs font-semibold text-gray-400 tracking-[0.2em] uppercase mb-4 font-montserrat">
            Fungsi & Manfaat
          </h3>
          <p class="text-gray-600 text-base leading-relaxed font-montserrat">
            Membantu melancarkan sirkulasi darah, mengurangi ketegangan otot, meredakan masalah pencernaan (seperti kembung atau kolik), serta membuat bayi lebih tenang dan tidur lebih nyenyak.
          </p>
        </div>
      </div>

      <div class="pt-2">
        <a href="https://wa.me/6285266761076" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 text-pink-500 font-semibold text-lg hover:gap-5 transition-all duration-300 font-montserrat">
          Jadwalkan Sesi Sekarang
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </div>

  </div>
</section>

<!-- Feature Cards -->
<section class="py-20 md:py-28 px-6 md:px-12 lg:px-24 bg-white">
  <div class="max-w-6xl mx-auto">

    <!-- Section Header -->
    <div class="text-center mb-16" use:reveal={{ y: 30 }}>
      <span class="text-pink-500 text-xs font-semibold tracking-widest uppercase font-montserrat">Mengapa Memilih Kami</span>
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 font-merriweather mt-3">Standar Terbaik untuk Si Kecil</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

      <!-- Higienis & Aman -->
      <div class="bg-white rounded-2xl p-10 flex flex-col justify-between min-h-[280px] border border-pink-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" use:reveal={{ y: 40, duration: 600 }}>
        <div class="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center mb-8">
          <svg class="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
        </div>
        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-3 font-merriweather">
            Higienis & Aman
          </h3>
          <p class="text-gray-600 text-base leading-relaxed font-montserrat">
            Kami menjamin kebersihan alat dan sterilitas ruangan untuk setiap sesi perawatan demi kesehatan buah hati Anda.
          </p>
        </div>
      </div>

      <!-- 100% Natural Ingredients -->
      <div class="bg-pink-500 rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-[280px] border border-pink-400 hover:-translate-y-0.5 transition-all duration-300" use:reveal={{ y: 40, duration: 600, delay: 100 }}>
        <span class="text-6xl md:text-7xl font-bold text-white tracking-tighter mb-4 font-merriweather">
          100%
        </span>
        <span class="text-xs font-semibold text-white/80 tracking-[0.3em] uppercase font-montserrat">
          Natural Ingredients
        </span>
      </div>

      <!-- Certified Midwife -->
      <div class="bg-pink-500 rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-[280px] border border-pink-400 hover:-translate-y-0.5 transition-all duration-300" use:reveal={{ y: 40, duration: 600, delay: 200 }}>
        <div class="text-white mb-6">
          <svg class="w-14 h-14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"></path>
          </svg>
        </div>
        <span class="text-xs font-semibold text-pink-100 tracking-[0.3em] uppercase font-montserrat">
          Certified Midwife
        </span>
      </div>

    </div>
  </div>
</section>