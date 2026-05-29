<svelte:head>
  <title>Galeri — Klinik Bidan Sri Deby Utari</title>
  <meta name="description" content="Galeri foto Klinik Bidan Sri Deby Utari — momen kebahagiaan ibu dan buah hati, fasilitas klinik, baby spa, dan aktivitas kami." />
</svelte:head>

<script>
  import { reveal } from '$lib/actions/reveal.js';
  let activeFilter = $state('Semua');

  const categories = ['Semua', 'Klinik', 'Baby Spa', 'Aktivitas'];

  const images = [
    { src: '/image/badung.webp', alt: 'Klinik Bidan Tari Badung', category: 'Klinik', span: 'md:col-span-2 md:row-span-2' },
    { src: '/image/baby_boy.webp', alt: 'Baby Boy Spa', category: 'Baby Spa', span: 'md:col-span-1 md:row-span-2', objectClass: 'object-left' },
    { src: '/image/ruang_persalinan_m.webp', alt: 'Ruang Persalinan', category: 'Klinik', span: 'md:col-span-1 md:row-span-1' },
    { src: '/image/baby_girl.webp', alt: 'Baby Girl Spa', category: 'Baby Spa', span: 'md:col-span-1 md:row-span-1' },
    { src: '/image/waiting_room.webp', alt: 'Ruang Tunggu', category: 'Klinik', span: 'md:col-span-1 md:row-span-1' },
    { src: '/image/room_and_office.webp', alt: 'Ruang dan Kantor', category: 'Klinik', span: 'md:col-span-1 md:row-span-1' },
    { src: '/image/yoga.webp', alt: 'Yoga Ibu Hamil', category: 'Aktivitas', span: 'md:col-span-2 md:row-span-1', objectClass: 'object-top' },
  ];

  let filteredImages = $derived(
    activeFilter === 'Semua'
      ? images
      : images.filter((img) => img.category === activeFilter)
  );
</script>

<!-- Hero Section -->
<section class="min-h-[600px] bg-white flex items-center px-6 md:px-20 lg:px-32 py-20 md:py-28 relative overflow-hidden">
  <div class="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] bg-pink-50 rounded-full opacity-60"></div>
  <div class="absolute bottom-[-80px] left-[-80px] w-[260px] h-[260px] bg-pink-50 rounded-full opacity-40"></div>
  <div class="max-w-4xl w-full text-left relative z-10">

    <span class="inline-block text-pink-500 text-xs font-montserrat font-semibold uppercase tracking-widest mb-6">
      Visual Story
    </span>

    <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-8 font-merriweather">
      Galeri <br/><span class="text-pink-500">Kebahagiaan</span>
    </h1>

    <p class="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl font-montserrat">
      Momen-momen berharga dan dedikasi kami dalam memberikan pelayanan terbaik untuk Ibu dan Buah Hati.
    </p>

  </div>
</section>

<!-- Photo Grid Section -->
<section class="w-full bg-pink-50/40">
  <div class="max-w-7xl mx-auto px-6 py-20 md:py-28">
    
    <!-- Filter Buttons -->
    <div class="flex flex-wrap justify-center gap-3 mb-14" use:reveal={{ y: 20, duration: 600 }}>
      {#each categories as category}
        <button
          onclick={() => activeFilter = category}
          class="px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 font-montserrat
            {activeFilter === category
              ? 'bg-pink-500 text-white shadow-sm'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-pink-200 hover:text-pink-500 hover:bg-pink-50'}"
        >
          {category}
        </button>
      {/each}
    </div>

    <!-- Image Grid -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px] md:auto-rows-[280px]">
      {#each filteredImages as image (image.src)}
        <div class="{image.span} relative overflow-hidden rounded-2xl group border border-pink-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500 bg-white" use:reveal={{ y: 30, duration: 600 }}>
          <img
            src={image.src}
            alt={image.alt}
            class="w-full h-full object-cover {image.objectClass || ''} transition-transform duration-700 group-hover:scale-105"
            width="400"
            height="300"
            loading="lazy"
            decoding="async"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-pink-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      {/each}
    </div>

    <!-- Load More Button -->
    <div class="flex justify-center mt-16">
      <button class="px-10 py-3.5 rounded-full text-sm font-bold border border-gray-200 text-gray-700 bg-white transition-all duration-300 hover:border-pink-200 hover:text-pink-500 font-montserrat">
        Lihat Lebih Banyak
      </button>
    </div>

  </div>
</section>

<!-- CTA Section -->
<section class="w-full px-6 py-12 mb-12">
  <div class="max-w-4xl mx-auto bg-pink-500 rounded-3xl p-12 md:p-16 relative overflow-hidden text-center" use:reveal={{ y: 50, duration: 800 }}>
    <div class="relative z-10">

      <span class="text-xs tracking-widest text-pink-100 uppercase mb-4 inline-block font-montserrat font-semibold">
        Hubungi Kami
      </span>

      <h2 class="font-merriweather text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-tight">
        Mulai Perjalanan Anda <br/><span class="text-white">Bersama Kami</span>
      </h2>

      <p class="font-montserrat text-pink-100 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
        Rasakan pengalaman kehamilan dan perawatan bayi yang penuh kehangatan, profesionalisme, dan kenyamanan di Klinik Bidan Tari.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a href="https://wa.me/6285266761076" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white text-pink-500 font-medium rounded-full hover:bg-pink-50 transition-all duration-300 font-montserrat shadow-lg shadow-black/5">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Hubungi Kami
        </a>

        <a href="/jadwal" class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-transparent text-white font-medium rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300 font-montserrat">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
          Cek Jadwal
        </a>
      </div>

    </div>
  </div>
</section>