<script>
  import { reveal } from '$lib/actions/reveal.js';
</script>

<svelte:head>
  <title>Layanan â€” Klinik Bidan Sri Deby Utari</title>
  <meta name="description" content="Layanan lengkap Klinik Bidan Sri Deby Utari: persalinan normal, pemeriksaan kehamilan, baby spa, senam yoga ibu hamil, pelayanan KB, tindik bayi, home care, dan pijat nifas." />
</svelte:head>

<!-- Hero -->
<section class="min-h-screen bg-white flex items-center px-6 md:px-20 lg:px-32 py-20 md:py-28 relative overflow-hidden">
  <div class="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] bg-pink-50 rounded-full opacity-60"></div>
  <div class="absolute bottom-[-80px] left-[-80px] w-[260px] h-[260px] bg-pink-50 rounded-full opacity-40"></div>
  <div class="max-w-4xl w-full text-left relative z-10">

    <span class="inline-block text-pink-500 text-xs font-montserrat font-semibold uppercase tracking-widest mb-6">
      Pelayanan Profesional & Penuh Kasih
    </span>

    <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-8 font-merriweather">
      Layanan Kasih <br/><span class="text-pink-500">Ibu & Buah Hati</span>
    </h1>

    <p class="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mb-12 font-montserrat">
      Mendampingi setiap langkah perjalanan berharga Anda mulai dari masa kehamilan hingga tumbuh kembang si kecil dengan sentuhan profesional yang hangat.
    </p>

    <div class="flex flex-col sm:flex-row gap-4 items-start">
      <a href="https://wa.me/6285266761076" class="inline-block text-center bg-pink-500 text-white font-semibold text-base px-8 py-3 rounded-full hover:bg-pink-600 transition-all duration-300 font-montserrat">
        Jadwalkan Konsultasi
      </a>

      <a href="#layanan" class="inline-block text-center bg-white text-gray-700 border border-gray-200 font-semibold text-base px-8 py-3 rounded-full hover:border-pink-200 hover:text-pink-500 transition-all duration-300 font-montserrat">
        Lihat Galeri
      </a>
    </div>

  </div>
</section>

<!-- Services Grid -->
<section id="layanan" class="py-20 md:py-28 px-6 md:px-12 lg:px-24 bg-pink-50">
  <div class="max-w-6xl mx-auto">

    <div class="text-center mb-16" use:reveal={{ y: 30 }}>
      <span class="text-pink-500 text-xs font-montserrat font-semibold uppercase tracking-widest">Layanan Kami</span>
      <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-4 font-merriweather">
        Pelayanan <span class="text-pink-500">Unggulan</span> Kami
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto text-lg mt-4 font-montserrat">
        Dirancang untuk memberikan kenyamanan maksimal bagi kesehatan fisik dan mental ibu serta si buah hati.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

      <!-- Persalinan Normal (wide card) -->
      <div class="md:col-span-2 bg-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-10 items-center justify-between border border-pink-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" use:reveal={{ y: 40, duration: 800 }}>
        <div class="w-full md:w-1/2 order-2 md:order-1">
          <img src="/image/ruang_persalinan_m.webp" alt="Persalinan Normal" class="w-full h-64 object-cover rounded-2xl" width="600" height="400" loading="lazy" />
        </div>
        <div class="w-full md:w-1/2 order-1 md:order-2 flex flex-col items-start">
          <div class="w-12 h-12 bg-pink-50 text-pink-400 rounded-2xl flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-pink-500 mb-4 font-merriweather">Persalinan Normal</h3>
          <p class="text-gray-600 text-sm leading-relaxed font-montserrat">
            Menghadirkan kenyamanan dan dukungan penuh dalam proses persalinan alami yang aman dan minim trauma. Kami mengutamakan kedekatan emosional dan kesehatan optimal bagi ibu dan bayi.
          </p>
        </div>
      </div>

      <!-- Pemeriksaan Kehamilan -->
      <div class="bg-white rounded-2xl p-8 md:p-10 flex flex-col justify-between border border-pink-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" use:reveal={{ y: 40, duration: 800, delay: 100 }}>
        <div>
          <div class="w-12 h-12 bg-pink-50 text-pink-400 rounded-2xl flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4 font-merriweather">Pemeriksaan Kehamilan</h3>
          <p class="text-gray-600 text-sm leading-relaxed mb-8 font-montserrat">
            Pemantauan rutin tumbuh kembang janin yang sehat serta kesiapan ibu.
          </p>
        </div>
        <div class="border-t border-pink-50 pt-6">
          <span class="text-xs font-semibold uppercase tracking-widest text-pink-500 font-montserrat">Pemeriksaan Terintegrasi</span>
        </div>
      </div>

      <!-- Baby Spa -->
      <div class="bg-white rounded-2xl p-8 md:p-10 flex flex-col justify-between gap-8 border border-pink-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" use:reveal={{ y: 40, duration: 800, delay: 200 }}>
        <div>
          <div class="w-12 h-12 bg-pink-50 text-pink-400 rounded-2xl flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4 font-merriweather">Baby Spa</h3>
          <p class="text-gray-600 text-sm leading-relaxed font-montserrat">
            Relaksasi menyeluruh melalui terapi renang (hydrotherapy) dan pijat bayi untuk mendukung motorik dan kualitas tidur.
          </p>
        </div>
        <div>
          <img src="/image/baby_spa_ok.webp" alt="Baby Spa" class="w-full h-44 object-cover rounded-2xl" width="600" height="400" loading="lazy" />
        </div>
      </div>

      <!-- Senam Yoga (wide dark card) -->
      <div class="md:col-span-2 bg-pink-500 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-10 items-center justify-between relative overflow-hidden" use:reveal={{ y: 50, duration: 800 }}>
        <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div class="w-full md:w-1/2 flex flex-col items-start relative z-10">
          <div class="w-12 h-12 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-6 border border-white/20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-4 font-merriweather">Senam Yoga Ibu Hamil</h3>
          <p class="text-pink-100 text-sm leading-relaxed font-montserrat">
            Latihan fisik yang dirancang khusus untuk melatih pernapasan, kelenturan, dan ketenangan mental guna mempersiapkan tubuh ibu menghadapi proses persalinan.
          </p>
        </div>
        <div class="w-full md:w-1/2 relative z-10">
          <img src="/image/wanita_yoga.webp" alt="Senam Yoga" class="w-full h-64 object-cover rounded-2xl border border-white/20" width="600" height="400" loading="lazy" />
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Additional Services -->
<section class="bg-white py-20 md:py-28 px-6 md:px-12 relative overflow-hidden">
  <div class="max-w-6xl mx-auto">

    <div class="text-center mb-16" use:reveal={{ y: 30 }}>
      <span class="text-pink-500 text-xs font-montserrat font-semibold uppercase tracking-widest">Layanan Tambahan</span>
      <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-4 font-merriweather">
        Perawatan <span class="text-pink-500">Lengkap</span> untuk Anda
      </h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      <!-- Pelayanan KB -->
      <div class="bg-white rounded-2xl p-8 border border-pink-100 flex flex-col justify-start min-h-[250px] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" use:reveal={{ y: 30, duration: 600 }}>
        <div class="text-pink-400 mb-6 w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M12 5.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7.5 9a1.5 1.5 0 0 0-1.5 1.5v4.75a.75.75 0 0 0 1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5h.5v3.5a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0 .75-.75V10.5A1.5 1.5 0 0 0 10.25 9H7.5ZM16.5 7.75a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0ZM13.5 10a1 1 0 0 0-1 1v3.25a.5.5 0 0 0 1 0v2.5a.5.5 0 0 0 1 0v-2.5h.5v2.5a.5.5 0 0 0 1 0v-2.5a.5.5 0 0 0 .5-.5V11a1 1 0 0 0-1-1h-2Z"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-3 font-merriweather">Pelayanan KB</h3>
        <p class="text-sm text-gray-600 leading-relaxed font-montserrat">IUD, Implan, Suntik, dan Konsultasi Perencanaan Keluarga yang komprehensif.</p>
      </div>

      <!-- Tindik Bayi -->
      <div class="bg-white rounded-2xl p-8 border border-pink-100 flex flex-col justify-start min-h-[250px] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" use:reveal={{ y: 30, duration: 600, delay: 100 }}>
        <div class="text-pink-400 mb-6 w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-3 font-merriweather">Tindik Bayi</h3>
        <p class="text-sm text-gray-600 leading-relaxed font-montserrat">Higenis, cepat, dan minim rasa sakit oleh tenaga medis profesional berpengalaman.</p>
      </div>

      <!-- Home Care -->
      <div class="bg-white rounded-2xl p-8 border border-pink-100 flex flex-col justify-start min-h-[250px] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" use:reveal={{ y: 30, duration: 600, delay: 200 }}>
        <div class="text-pink-400 mb-6 w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-3 font-merriweather">Home Care</h3>
        <p class="text-sm text-gray-600 leading-relaxed font-montserrat">Layanan kunjungan rumah untuk perawatan nifas, laktasi, dan kesehatan bayi.</p>
      </div>

      <!-- Pijat Nifas -->
      <div class="bg-white rounded-2xl p-8 border border-pink-100 flex flex-col justify-start min-h-[250px] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" use:reveal={{ y: 30, duration: 600, delay: 300 }}>
        <div class="text-pink-400 mb-6 w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-3 font-merriweather">Pijat Nifas</h3>
        <p class="text-sm text-gray-600 leading-relaxed font-montserrat">Relaksasi mendalam untuk pemulihan stamina dan sirkulasi tubuh pasca bersalin.</p>
      </div>

    </div>
  </div>
</section>

<!-- Profile -->
<section class="w-full max-w-6xl mx-auto py-20 md:py-28 px-6">
  <div class="bg-white rounded-2xl p-8 md:p-16 border border-pink-100 flex flex-col lg:flex-row items-center gap-16 hover:shadow-lg transition-all duration-300" use:reveal={{ y: 50, duration: 800 }}>

    <div class="w-full lg:w-1/2 flex justify-center">
      <div class="relative group">
        <div class="absolute -inset-4 bg-pink-50 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
        <div class="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden z-10">
          <img
            src="/image/PROFILE_1.webp"
            alt="Bidan Sri Deby Utari"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            width="400"
            height="533"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <div class="w-full lg:w-1/2 flex flex-col justify-center">
      <span class="text-pink-500 text-xs font-montserrat font-semibold uppercase tracking-widest mb-4 block">
        Keahlian & Dedikasi
      </span>

      <h2 class="text-2xl md:text-4xl font-bold text-gray-900 mb-8 font-merriweather leading-tight">
        Bidan Sri Deby Utari <br/><span class="text-sm font-semibold text-gray-400 block mt-2 font-montserrat uppercase tracking-widest">S.Tr, S.Keb</span>
      </h2>

      <p class="text-gray-600 text-lg leading-relaxed mb-10 font-montserrat lg:text-left">
        Dengan pengalaman lebih dari 12 tahun dan komitmen penuh pada kesehatan ibu dan anak,
        Bidan Sri Deby Utari memadukan keahlian medis modern dengan pendekatan personal yang
        menenangkan. Kami percaya bahwa setiap ibu layak mendapatkan pelayanan yang
        menghargai martabat dan kenyamanannya di setiap detik perjuangannya.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="flex items-center gap-4 text-sm font-semibold text-gray-700 font-montserrat bg-pink-50 p-4 rounded-2xl border border-pink-100">
          <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-pink-400">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6.267 3.455a.75.75 0 00-.708.522L4.62 6.75H1.75a.75.75 0 000 1.5h3.25a.75.75 0 00.708-.522L6.647 4.97l1.417 5.666a.75.75 0 001.448.04l2.122-5.305 1.137 2.843a.75.75 0 00.696.472h4.534a.75.75 0 000-1.5h-4.043l-1.637-4.09a.75.75 0 00-1.393-.05l-2.073 5.181-1.581-6.326a.75.75 0 00-.706-.522z" clip-rule="evenodd"/>
            </svg>
          </div>
          <span>Sertifikasi Resmi</span>
        </div>

        <div class="flex items-center gap-4 text-sm font-semibold text-gray-700 font-montserrat bg-pink-50 p-4 rounded-2xl border border-pink-100">
          <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-pink-400">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 2a6 6 0 00-6 6c0 4.956 5.545 10.555 5.742 10.75a.375.375 0 00.516 0C10.455 17.555 16 11.956 16 8a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" clip-rule="evenodd"/>
            </svg>
          </div>
          <span>Higienitas Terjamin</span>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- CTA -->
<!-- CTA -->
<section class="w-full px-6 py-12 mb-12">
  <div class="max-w-4xl mx-auto bg-pink-500 rounded-3xl p-12 md:p-16 relative overflow-hidden text-center" use:reveal={{ y: 50, duration: 800 }}>
    <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
    <div class="relative z-10">
      <span class="text-pink-100 text-xs font-montserrat font-semibold uppercase tracking-widest">Hubungi Kami</span>
      <h2 class="font-merriweather text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
        Siap Memulai Perjalanan <br/><span class="text-white">Sehat Anda?</span>
      </h2>

      <p class="font-montserrat text-pink-100 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
        Jangan ragu untuk berkonsultasi mengenai kebutuhan kesehatan kehamilan dan buah hati Anda bersama kami di Klinik Bidan Tari.
      </p>

      <a href="https://wa.me/6285266761076" class="inline-flex items-center gap-3 bg-white text-pink-500 font-semibold px-8 py-3.5 rounded-full hover:bg-pink-50 transition-all duration-300 font-montserrat shadow-lg shadow-black/5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>
        <span>Jadwalkan Konsultasi</span>
      </a>
    </div>
  </div>
</section>