<script>
  import { reveal } from '$lib/actions/reveal.js';
</script>

<svelte:head>
  <title>Klinik Bidan Sri Deby Utari — Layanan 24 Jam Persalinan & Kesehatan Ibu Anak</title>
  <meta name="description" content="Klinik Bidan Sri Deby Utari menyediakan layanan persalinan normal, baby spa, yoga ibu hamil, dan pemeriksaan kehamilan 24 jam. Menerima pasien BPJS & Umum di Kerinci, Jambi." />
  
  <!-- Preload LCP Hero Images specifically for the homepage -->
  <link rel="preload" href="/image/hero_tari.webp" as="image" media="(min-width: 768px)" fetchpriority="high" />
  <link rel="preload" href="/image/hero_tari_mobile.webp" as="image" media="(max-width: 767px)" fetchpriority="high" />
</svelte:head>

<!-- Hero Section -->
<section class="relative w-full min-h-[600px] md:min-h-[85vh] flex items-center overflow-hidden py-20">
  
  <!-- Background Image with Fade Mask -->
  <div class="absolute inset-0 z-0">
    <picture>
      <source srcset="/image/hero_tari_mobile.webp" media="(max-width: 767px)" />
      <img src="/image/hero_tari.webp" alt="Hero Background" class="w-full h-full object-cover object-top" width="1600" height="900" fetchpriority="high" loading="eager" />
    </picture>
    <!-- Horizontal fade: solid white on the left (for text), transparent on the right -->
    <div class="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10 md:to-transparent"></div>
    <!-- Bottom fade: blends into the next white section -->
    <div class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
    <!-- Subtle pink tint -->
    <div class="absolute inset-0 bg-pink-500 mix-blend-overlay opacity-10"></div>
  </div>

  <div class="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
    <div class="max-w-2xl">

      <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-white/60 backdrop-blur-md border border-pink-100/50 rounded-full mb-8 shadow-sm">
        <span class="w-2 h-2 bg-pink-500 rounded-full"></span>
        <span class="text-pink-600 text-xs font-semibold tracking-wide font-montserrat uppercase">Layanan Ibu & Anak</span>
      </div>

      <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1] mb-6 font-merriweather">
        Layanan Optimal<br />
        <span class="text-pink-500">24 JAM</span><br />
        BPJS & Umum
      </h1>

      <p class="text-gray-700 font-medium text-lg md:text-xl leading-relaxed mb-4 max-w-xl font-montserrat">
        Berpengalaman selama 12 tahun merawat ibu dan anak. Karena bagi kami, kesehatan Anda dan senyum si kecil adalah prioritas utama.
      </p>

      <p class="text-gray-500 text-sm mb-10 font-montserrat">
        Layanan Terpercaya & Berpengalaman
      </p>

      <div class="flex flex-wrap gap-4 items-center">
        <a href="https://wa.me/6285266761076" target="_blank" rel="noopener noreferrer" 
           class="inline-flex items-center gap-2 px-8 py-3.5 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all shadow-sm hover:shadow-lg hover:shadow-pink-500/20 text-sm font-semibold font-montserrat active:scale-95">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
          Konsultasi Sekarang
        </a>
        
        <a href="/layanan" 
           class="px-8 py-3.5 bg-white/80 backdrop-blur-sm border border-pink-200 text-gray-800 rounded-full hover:bg-white hover:text-pink-600 transition-all text-sm font-semibold font-montserrat shadow-sm">
          Lihat Layanan
        </a>
      </div>

    </div>
  </div>
</section>

<!-- Layanan Unggulan -->
<section class="max-w-6xl w-full mx-auto py-20 md:py-28 px-6">

  <div class="text-center mb-16">
    <span class="text-pink-500 text-xs font-bold tracking-widest uppercase font-montserrat">Layanan</span>
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mt-3 mb-4 font-merriweather">
      Layanan Unggulan Kami
    </h2>
    <p class="text-gray-400 text-base max-w-xl mx-auto leading-relaxed font-montserrat">
      Komitmen kami menyediakan perawatan maternal yang menyeluruh dengan sentuhan kasih sayang.
    </p>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    
    <!-- Persalinan Normal -->
    <div use:reveal={{ y: 50 }} class="bg-white rounded-2xl p-7 border border-pink-100/80 hover:border-pink-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full">
      <div class="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-pink-500 mb-5">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      </div>
      <h3 class="text-gray-900 font-bold text-base mb-2 font-merriweather">Persalinan Normal</h3>
      <p class="text-gray-400 text-sm leading-relaxed font-montserrat">
        Persalinan yang nyaman dan aman dengan pendampingan intensif 24 jam.
      </p>
    </div>

    <!-- Pemeriksaan Kehamilan -->
    <div use:reveal={{ y: 50}} class="bg-white rounded-2xl p-7 border border-pink-100/80 hover:border-pink-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full">
      <div class="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-pink-500 mb-5">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      </div>
      <h3 class="text-gray-900 font-bold text-base mb-2 font-merriweather">Pemeriksaan Kehamilan</h3>
      <p class="text-gray-400 text-sm leading-relaxed font-montserrat">
        Pemantauan rutin tumbuh kembang janin dan kesehatan ibu secara berkala.
      </p>
    </div>

    <!-- Pelayanan KB -->
    <div use:reveal={{ y: 50 }} class="bg-white rounded-2xl p-7 border border-pink-100/80 hover:border-pink-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full">
      <div class="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-pink-500 mb-5">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      </div>
      <h3 class="text-gray-900 font-bold text-base mb-2 font-merriweather">Pelayanan KB</h3>
      <p class="text-gray-400 text-sm leading-relaxed font-montserrat">
        Solusi berencana: Spiral (IUD), Implan, Suntik, dan konsultasi kontrasepsi.
      </p>
    </div>

    <!-- Baby Spa -->
    <div use:reveal={{ y: 40 }} class="bg-white rounded-2xl p-7 border border-pink-100/80 hover:border-pink-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full">
      <div class="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-pink-500 mb-5">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        </svg>
      </div>
      <h3 class="text-gray-900 font-bold text-base mb-2 font-merriweather">Baby Spa</h3>
      <p class="text-gray-400 text-sm leading-relaxed font-montserrat">
        Relaksasi si kecil untuk meningkatkan nafsu makan dan pola tidur baik.
      </p>
    </div>

    <!-- Yoga Ibu Hamil -->
    <div use:reveal={{ y: 40 }} class="bg-white rounded-2xl p-7 border border-pink-100/80 hover:border-pink-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full">
      <div class="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-pink-500 mb-5">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
        </svg>
      </div>
      <h3 class="text-gray-900 font-bold text-base mb-2 font-merriweather">Yoga Ibu Hamil</h3>
      <p class="text-gray-400 text-sm leading-relaxed font-montserrat">
        Senam yoga khusus untuk melenturkan otot dan persiapan persalinan.
      </p>
    </div>

    <!-- Home Care -->
    <div use:reveal={{ y: 40 }} class="bg-white rounded-2xl p-7 border border-pink-100/80 hover:border-pink-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full">
      <div class="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-pink-500 mb-5">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      </div>
      <h3 class="text-gray-900 font-bold text-base mb-2 font-merriweather">Home Care</h3>
      <p class="text-gray-400 text-sm leading-relaxed font-montserrat">
        Pelayanan kesehatan ibu dan anak langsung di kenyamanan rumah Anda.
      </p>
    </div>

    <!-- Pijat Nifas -->
    <div use:reveal={{ y: 40 }} class="bg-white rounded-2xl p-7 border border-pink-100/80 hover:border-pink-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full">
      <div class="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-pink-500 mb-5">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15" />
        </svg>
      </div>
      <h3 class="text-gray-900 font-bold text-base mb-2 font-merriweather">Pijat Nifas</h3>
      <p class="text-gray-400 text-sm leading-relaxed font-montserrat">
        Perawatan pemulihan pasca melahirkan untuk mengembalikan stamina.
      </p>
    </div>

    <!-- Tindik Bayi -->
    <div use:reveal={{ y: 40 }} class="bg-white rounded-2xl p-7 border border-pink-100/80 hover:border-pink-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full">
      <div class="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-pink-500 mb-5">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      </div>
      <h3 class="text-gray-900 font-bold text-base mb-2 font-merriweather">Tindik Bayi</h3>
      <p class="text-gray-400 text-sm leading-relaxed font-montserrat">
        Pelayanan tindik telinga bayi dengan prosedur medis steril dan aman.
      </p>
    </div>

  </div>
</section>

<!-- Kenapa Memilih Kami -->
<section class="w-full bg-pink-50/60 py-20 md:py-28 px-6">
  <div class="max-w-6xl mx-auto">

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      <!-- Left: Stats Bento Grid -->
      <div class="grid grid-cols-2 gap-4" use:reveal={{ y: 50, duration: 800 }}>
        <div class="bg-white rounded-2xl p-8 border border-pink-100 text-center col-span-1">
          <span class="font-merriweather text-4xl md:text-5xl font-black text-pink-500 block">12</span>
          <span class="text-xs font-semibold text-gray-400 tracking-wider mt-2 uppercase font-montserrat block">Tahun Pengalaman</span>
        </div>
        <div class="bg-white rounded-2xl p-8 border border-pink-100 text-center col-span-1">
          <span class="font-merriweather text-4xl md:text-5xl font-black text-pink-500 block">24/7</span>
          <span class="text-xs font-semibold text-gray-400 tracking-wider mt-2 uppercase font-montserrat block">Siaga Melayani</span>
        </div>
        <div class="bg-pink-500 rounded-2xl p-8 text-center text-white col-span-2">
          <h3 class="font-merriweather text-2xl font-bold tracking-tight">BPJS & UMUM</h3>
          <p class="text-sm text-white/80 font-medium mt-1 font-montserrat">Terima Pasien Semua Golongan</p>
        </div>
      </div>

      <!-- Right: Content -->
      <div class="space-y-8" use:reveal={{ y: 50, delay: 200, duration: 800 }}>
        <div class="space-y-4">
          <span class="text-pink-500 text-xs font-bold tracking-widest uppercase font-montserrat">Kenapa Kami</span>
          <h2 class="font-merriweather text-3xl md:text-4xl font-bold leading-tight tracking-tight text-gray-900">
            Mengapa Memilih Klinik Bidan Sri Deby Utari?
          </h2>
          <p class="text-gray-500 font-montserrat text-base leading-relaxed">
            Kami memahami bahwa setiap momen kehamilan dan kelahiran adalah perjalanan spiritual dan fisik yang luar biasa. Itulah sebabnya kami hadir dengan dedikasi penuh selama lebih dari satu dekade.
          </p>
        </div>

        <div class="space-y-5">
          <div class="flex items-start gap-4 group">
            <div class="mt-0.5 flex-shrink-0 w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center group-hover:bg-pink-500 transition-colors">
              <svg class="w-4 h-4 text-pink-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <div>
              <h4 class="font-bold text-gray-900 font-merriweather text-base">Keahlian Teruji</h4>
              <p class="text-gray-400 font-montserrat text-sm">12 tahun pengalaman menangani ribuan persalinan sukses.</p>
            </div>
          </div>

          <div class="flex items-start gap-4 group">
            <div class="mt-0.5 flex-shrink-0 w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center group-hover:bg-pink-500 transition-colors">
              <svg class="w-4 h-4 text-pink-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <div>
              <h4 class="font-bold text-gray-900 font-merriweather text-base">Fasilitas Modern</h4>
              <p class="text-gray-400 font-montserrat text-sm">Ruang bersalin yang bersih, tenang, dan bernuansa homey.</p>
            </div>
          </div>

          <div class="flex items-start gap-4 group">
            <div class="mt-0.5 flex-shrink-0 w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center group-hover:bg-pink-500 transition-colors">
              <svg class="w-4 h-4 text-pink-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <div>
              <h4 class="font-bold text-gray-900 font-merriweather text-base">Pendekatan Personal</h4>
              <p class="text-gray-400 font-montserrat text-sm">Konsultasi yang ramah, santai, dan penuh empati.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


<!-- Testimoni Pasien -->
<section class="py-20 md:py-28 px-6">
  <div class="max-w-6xl mx-auto w-full">

    <div class="text-center mb-16" use:reveal={{ y: 30 }}>
      <span class="text-pink-500 text-xs font-bold tracking-widest uppercase font-montserrat">Testimoni</span>
      <h2 class="text-3xl md:text-4xl font-merriweather font-bold text-gray-900 mt-3 mb-4 tracking-tight">
        Kisah Bahagia Bersama Kami
      </h2>
      <p class="text-gray-400 text-base max-w-lg mx-auto font-montserrat">
        Cerita langsung dari para ibu yang telah merasakan pelayanan kami.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6" use:reveal={{ y: 50, duration: 800 }}>

      <!-- Testimoni 1 -->
      <div class="bg-white rounded-2xl p-8 border border-pink-100/80 hover:border-pink-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
        <div>
          <!-- Stars -->
          <div class="flex items-center gap-0.5 mb-5">
            {#each Array(5) as _}
              <svg class="w-4 h-4 text-pink-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            {/each}
          </div>

          <!-- Border accent left -->
          <div class="border-l-2 border-pink-200 pl-4 mb-8">
            <p class="text-gray-600 font-montserrat leading-relaxed text-sm">
              "Pelayanan bidan Deby sangat ramah. Saya merasa tenang saat proses persalinan anak kedua saya. Tempatnya sangat bersih dan nyaman seperti di rumah sendiri."
            </p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150" alt="Ibu Sarah" width="40" height="40" loading="lazy">
          <div>
            <h4 class="text-gray-900 font-bold text-sm font-merriweather">Ibu Sarah</h4>
            <p class="text-pink-500 text-xs font-medium font-montserrat">Persalinan Normal</p>
          </div>
        </div>
      </div>

      <!-- Testimoni 2 -->
      <div class="bg-white rounded-2xl p-8 border border-pink-100/80 hover:border-pink-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-0.5 mb-5">
            {#each Array(5) as _}
              <svg class="w-4 h-4 text-pink-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            {/each}
          </div>

          <div class="border-l-2 border-pink-200 pl-4 mb-8">
            <p class="text-gray-600 font-montserrat leading-relaxed text-sm">
              "Baby Spa-nya mantap! Anak saya jadi tidur lebih nyenyak dan lebih nafsu makan setelah dipijat di sini. Bidan dan asistennya sangat sabar menangani bayi."
            </p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Ibu Ratna" width="40" height="40" loading="lazy">
          <div>
            <h4 class="text-gray-900 font-bold text-sm font-merriweather">Ibu Ratna</h4>
            <p class="text-pink-500 text-xs font-medium font-montserrat">Baby Spa</p>
          </div>
        </div>
      </div>

      <!-- Testimoni 3 -->
      <div class="bg-white rounded-2xl p-8 border border-pink-100/80 hover:border-pink-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-0.5 mb-5">
            {#each Array(5) as _}
              <svg class="w-4 h-4 text-pink-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            {/each}
          </div>

          <div class="border-l-2 border-pink-200 pl-4 mb-8">
            <p class="text-gray-600 font-montserrat leading-relaxed text-sm">
              "Pakai BPJS dilayani dengan sangat baik dan profesional. Tidak ada perbedaan sama sekali. Bidan Deby benar-benar mengutamakan keselamatan pasien."
            </p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150" alt="Ibu Dina" width="40" height="40" loading="lazy">
          <div>
            <h4 class="text-gray-900 font-bold text-sm font-merriweather">Ibu Dina</h4>
            <p class="text-pink-500 text-xs font-medium font-montserrat">Pasien BPJS</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


<!-- CTA Section -->
<section class="w-full px-6 py-12 mb-12">
  <div class="max-w-4xl mx-auto bg-pink-500 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden" use:reveal={{ y: 50, duration: 800 }}>
    <!-- Decorative -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
    <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -ml-16 -mb-16"></div>
    
    <div class="relative z-10">
      <h2 class="font-merriweather text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
        Ingin Berkonsultasi?
      </h2>
      <p class="text-pink-100 text-base md:text-lg font-montserrat mb-8 max-w-lg mx-auto leading-relaxed">
        Hubungi kami sekarang untuk jadwal pemeriksaan atau layanan darurat 24 jam nonstop.
      </p>

      <a href="https://wa.me/6285266761076" target="_blank" rel="noopener noreferrer" 
         class="inline-flex items-center gap-2 bg-white text-pink-500 font-montserrat text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-pink-50 transition-all shadow-lg shadow-black/5 hover:shadow-black/10 active:scale-95">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
        WhatsApp Sekarang
      </a>
    </div>
  </div>
</section>