<script>
  import { reveal } from '$lib/actions/reveal.js';
  // Svelte 5 props
  const { data } = $props();
  const { featuredArticle, articles, dbError } = $derived(data);
  
  // Helper to optimize Unsplash images
  function optimizeImageUrl(url, width = 800) {
    if (!url || !url.includes('unsplash.com')) return url;
    try {
      const u = new URL(url);
      u.searchParams.set('w', width);
      u.searchParams.set('q', '75');
      u.searchParams.set('auto', 'format');
      return u.toString();
    } catch {
      return url;
    }
  }

  function getSrcset(url, sizes = [400, 800, 1200]) {
    if (!url || !url.includes('unsplash.com')) return null;
    return sizes.map(w => `${optimizeImageUrl(url, w)} ${w}w`).join(', ');
  }
</script>

<svelte:head>
  <title>Informasi — Klinik Bidan Sri Deby Utari</title>
  <meta name="description" content="Sumber terpercaya untuk kesehatan ibu dan buah hati. Temukan panduan profesional, tips kehamilan, dan berita terbaru dari dunia kebidanan di Klinik Bidan Sri Deby Utari." />
  <link rel="preload" href={optimizeImageUrl("https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?auto=format&fit=crop&ixlib=rb-4.1.0", 400)} as="image" media="(max-width: 767px)" fetchpriority="high" />
  <link rel="preload" href={optimizeImageUrl("https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?auto=format&fit=crop&ixlib=rb-4.1.0", 800)} as="image" media="(min-width: 768px)" fetchpriority="high" />
</svelte:head>

<!-- Hero -->
<section class="bg-white min-h-[600px] flex items-center py-20 md:py-28 px-6 md:px-12 lg:px-24 relative overflow-hidden">
  <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-50 rounded-full -mr-48 -mt-48 opacity-70"></div>
  <div class="absolute bottom-0 left-0 w-80 h-80 bg-pink-50 rounded-full -ml-40 -mb-40 opacity-50"></div>

  <div data-reveal="hidden" style="--rev-y: 30px; --rev-dur: 800ms;" class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10" use:reveal={{ y: 30, duration: 800 }}>

    <div class="lg:col-span-7 space-y-8">
      <div class="space-y-5">
        <span class="text-xs font-bold tracking-widest text-pink-500 uppercase font-montserrat">
          Journal & Edukasi
        </span>
        <h1 class="text-4xl md:text-7xl font-black leading-[1.1] font-merriweather text-gray-900">
          Informasi & <span class="text-pink-500">Berita</span> <br/> Kebidanan
        </h1>
      </div>

      <p class="text-gray-600 text-lg md:text-xl max-w-xl leading-relaxed font-montserrat">
        Sumber terpercaya untuk kesehatan ibu dan buah hati. Temukan panduan profesional, tips kehamilan, dan berita terbaru dari dunia kebidanan.
      </p>

      <div class="flex items-center gap-4 pt-4">
        <div class="flex -space-x-3 overflow-hidden">
          <img class="inline-block h-11 w-11 rounded-full ring-[3px] ring-white object-cover" src={optimizeImageUrl("https://images.unsplash.com/photo-1580489944761-15a19d654956", 88)} alt="Avatar ibu" width="44" height="44" loading="lazy">
          <img class="inline-block h-11 w-11 rounded-full ring-[3px] ring-white object-cover" src={optimizeImageUrl("https://images.unsplash.com/photo-1544005313-94ddf0286df2", 88)} alt="Avatar bidan" width="44" height="44" loading="lazy">
          <div class="flex h-11 w-11 items-center justify-center rounded-full bg-pink-500 text-xs font-bold text-white ring-[3px] ring-white">
            +1k
          </div>
        </div>
        <p class="text-sm text-gray-400 font-montserrat">
          Bergabung dengan ribuan ibu yang teredukasi
        </p>
      </div>
    </div>

    <div data-reveal="hidden" style="--rev-y: 30px; --rev-dur: 800ms; --rev-del: 200ms;" class="lg:col-span-5 flex justify-center lg:justify-end w-full" use:reveal={{ y: 30, duration: 800, delay: 200 }}>
      <div class="bg-white p-5 rounded-3xl border border-pink-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500 max-w-md w-full">
        <div class="overflow-hidden rounded-2xl">
          <img
            src={optimizeImageUrl("https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?auto=format&fit=crop&ixlib=rb-4.1.0", 800)}
            srcset={getSrcset("https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?auto=format&fit=crop&ixlib=rb-4.1.0", [400, 800])}
            sizes="(max-width: 768px) 100vw, 400px"
            alt="Ilustrasi interior kamar bayi"
            class="w-full h-[400px] object-cover transition-transform duration-700 hover:scale-105"
            width="408"
            height="400"
            loading="eager"
            fetchpriority="high"
          />
        </div>
      </div>
    </div>

  </div>
</section>

<!-- Category Bar -->
<section class="w-full bg-white py-5 sticky top-20 z-40 border-b border-gray-100">
  <div class="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto no-scrollbar px-6 justify-start md:justify-center">

    <a
      href="?category=all"
      class="whitespace-nowrap rounded-full px-8 py-3 text-sm font-bold transition-all font-montserrat
        {data.selectedCategory === 'all' ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-pink-50 hover:text-pink-500'}"
    >
      Semua Artikel
    </a>

    {#each ['Kehamilan', 'Persalinan', 'Perawatan Bayi', 'Kesehatan Ibu', 'Nutrisi'] as cat}
      <a
        href="?category={cat}"
        class="whitespace-nowrap rounded-full px-8 py-3 text-sm font-bold transition-all font-montserrat
          {data.selectedCategory === cat ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-pink-50 hover:text-pink-500'}"
      >
        {cat}
      </a>
    {/each}

  </div>
</section>
<!-- Articles Grid -->
<section class="w-full bg-pink-50/40 font-montserrat antialiased">
  <div class="max-w-7xl mx-auto px-6 py-20 md:py-28">
    <div data-reveal="hidden" style="--rev-y: 40px; --rev-dur: 800ms; --rev-del: 100ms;" class="grid grid-cols-1 lg:grid-cols-3 gap-8" use:reveal={{ y: 40, duration: 800, delay: 100 }}>

      {#if !featuredArticle && articles.length === 0}
        <div class="col-span-full py-24 text-center bg-white rounded-3xl border border-pink-100/60 p-8 shadow-sm">
          <svg class="w-16 h-16 text-pink-300 mx-auto mb-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h.008v.008H12V7.5zM12 12h.008v.008H12V12zm0 4.5h.008v.008H12v-.008zm0-9a9 9 0 110 18 9 9 0 010-18z"></path></svg>
          <h3 class="text-xl font-bold font-merriweather text-gray-800">Belum Ada Artikel</h3>
          <p class="text-gray-500 text-sm mt-2 max-w-md mx-auto">Kami sedang mempersiapkan informasi & panduan kesehatan terbaik untuk Anda. Silakan kembali lagi nanti!</p>
        </div>
      {:else}
        <!-- Featured Article -->
        {#if featuredArticle}
          <div class="lg:col-span-2 flex flex-col justify-between bg-white rounded-2xl overflow-hidden p-8 md:p-10 border border-pink-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            <div>
              <div class="w-full h-72 md:h-96 rounded-2xl overflow-hidden mb-8 group">
                <img src={optimizeImageUrl(featuredArticle.image, 800)} srcset={getSrcset(featuredArticle.image, [400, 800])} sizes="(max-width: 768px) 100vw, 800px" alt={featuredArticle.title} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" width="800" height="450" loading="lazy">
              </div>
              <div class="flex items-center gap-4 text-xs font-bold mb-5 uppercase tracking-widest">
                <span class="bg-pink-50 text-pink-500 px-4 py-1.5 rounded-full">{featuredArticle.category}</span>
                <span class="text-gray-400 flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  {new Date(featuredArticle.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                </span>
                {#if featuredArticle.authorName}
                  <span class="text-gray-400">Oleh: {featuredArticle.authorName}</span>
                {/if}
              </div>
              <h2 class="text-3xl md:text-4xl font-black text-gray-900 font-merriweather leading-tight mb-5">
                {featuredArticle.title}
              </h2>
              <p class="text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-montserrat line-clamp-4">
                {featuredArticle.summary}
              </p>
            </div>
            <a href="/informasi/{featuredArticle.slug}" class="inline-flex items-center text-pink-500 font-bold text-base hover:gap-3 transition-all duration-300 group">
              Baca Selengkapnya
              <svg class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
        {/if}

        <!-- Sidebar -->
        <div class="space-y-8 flex flex-col">
          <!-- Tips Mingguan -->
          <div class="bg-pink-500 rounded-2xl p-8 relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full -mr-14 -mt-14 transition-transform group-hover:scale-125"></div>
            <h3 class="text-xl font-black text-white mb-3 font-merriweather relative z-10">Tips Mingguan</h3>
            <p class="text-pink-100 text-sm mb-6 font-montserrat relative z-10">Dapatkan edukasi kesehatan premium langsung ke WhatsApp Anda.</p>
            <a href="https://wa.me/6285266761076" target="_blank" rel="noopener noreferrer" class="block w-full bg-white hover:bg-pink-50 text-pink-500 font-bold py-3.5 px-6 rounded-full transition-all duration-300 relative z-10 uppercase tracking-widest text-xs text-center">
              Langganan Gratis
            </a>
          </div>

          <!-- Sidebar Article (First Standard Article) -->
          {#if articles.length > 0}
            {@const sidebarArticle = articles[0]}
            <div class="bg-white rounded-2xl overflow-hidden p-6 border border-pink-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex-1 flex flex-col justify-between">
              <div>
                <div class="w-full h-48 rounded-xl overflow-hidden mb-5 group">
                  <img src={optimizeImageUrl(sidebarArticle.image, 400)} srcset={getSrcset(sidebarArticle.image, [200, 400])} sizes="(max-width: 768px) 100vw, 400px" alt={sidebarArticle.title} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" width="360" height="192" loading="lazy">
                </div>
                <div class="flex items-center gap-2 mb-3">
                  <span class="text-xs text-pink-500 font-bold uppercase tracking-widest block font-montserrat">{sidebarArticle.category}</span>
                  <span class="text-xs text-gray-400">• {sidebarArticle.readingTime}</span>
                </div>
                <h3 class="text-lg font-black text-gray-900 font-merriweather leading-snug mb-3">
                  {sidebarArticle.title}
                </h3>
                <p class="text-gray-500 text-xs line-clamp-3 mb-5 font-montserrat">{sidebarArticle.summary}</p>
              </div>
              <a href="/informasi/{sidebarArticle.slug}" class="inline-flex items-center text-pink-500 font-bold text-xs hover:gap-2 transition-all duration-300 group">
                Baca Selengkapnya
                <svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          {/if}
        </div>

        <!-- Remaining Articles Grid (Index 1 and beyond) -->
        {#each articles.slice(1) as article (article.id)}
          <div class="bg-white rounded-2xl overflow-hidden p-6 border border-pink-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between h-full">
            <div>
              <div class="w-full h-56 rounded-xl overflow-hidden mb-5 group">
                <img src={optimizeImageUrl(article.image, 400)} srcset={getSrcset(article.image, [200, 400])} sizes="(max-width: 768px) 100vw, 400px" alt={article.title} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" width="360" height="224" loading="lazy">
              </div>
              <div class="flex items-center justify-between mb-4">
                <span class="bg-pink-50 text-pink-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-block font-montserrat">{article.category}</span>
                <span class="text-[10px] text-gray-400">{new Date(article.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}</span>
              </div>
              <h3 class="text-lg font-black text-gray-900 font-merriweather leading-snug mb-3 line-clamp-2">
                {article.title}
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-6 font-montserrat line-clamp-3">
                {article.summary}
              </p>
            </div>
            <div class="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
              <span class="text-xs font-bold text-gray-400 uppercase tracking-wider font-montserrat">{article.readingTime}</span>
              <a href="/informasi/{article.slug}" class="text-pink-500 hover:text-pink-600 font-bold text-xs flex items-center gap-1 group">
                Baca Selengkapnya
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          </div>
        {/each}
      {/if}

    </div>
  </div>
</section>

<!-- CTA / Newsletter -->
<section class="w-full px-6 py-12 mb-12">
  <div class="max-w-6xl w-full mx-auto" use:reveal={{ y: 40, duration: 800 }}>
    <div class="bg-white shadow-xl shadow-pink-500/5 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-14 justify-between border border-gray-100">

      <div class="w-full md:w-1/2 flex flex-col justify-center">
        <span class="text-xs font-bold tracking-widest text-pink-500 uppercase font-montserrat mb-4">Newsletter</span>
        <h2 class="text-gray-900 text-3xl md:text-4xl font-black leading-tight mb-5 font-merriweather">
          Pantau <span class="text-pink-500">Tumbuh Kembang</span> Buah Hati
        </h2>
        <p class="text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-montserrat">
          Dapatkan panduan personal yang disesuaikan dengan usia kehamilan atau perkembangan buah hati Anda setiap minggunya.
        </p>

        <form class="flex flex-col sm:flex-row gap-3 w-full">
          <div class="relative flex-grow">
            <input
              type="email"
              placeholder="Alamat Email Anda"
              class="w-full px-6 py-4 rounded-full border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all font-montserrat text-sm"
              required
            />
          </div>
          <button
            type="submit"
            class="bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 whitespace-nowrap active:scale-95 font-montserrat uppercase tracking-widest text-xs"
          >
            Daftar Sekarang
          </button>
        </form>
      </div>

      <div class="w-full md:w-[420px] bg-pink-50 rounded-2xl p-8 md:p-10 border border-pink-100 relative overflow-hidden">
        <div class="flex justify-between items-center mb-8">
          <h3 class="text-pink-500 text-xl font-black tracking-tight font-merriweather">
            Milestone Kami
          </h3>
          <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-pink-100">
            <svg class="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
        </div>

        <div class="relative pl-10 space-y-8">
          <div class="absolute left-[15px] top-2 bottom-2 w-px bg-pink-200 rounded-full"></div>

          <div class="relative group">
            <div class="absolute -left-[33px] top-1 w-7 h-7 rounded-full bg-pink-600 border-[3px] border-white shadow-sm transition-transform group-hover:scale-110"></div>
            <div>
              <h4 class="font-black text-gray-900 text-sm font-merriweather">Bulan 1–3</h4>
              <p class="text-sm text-gray-400 mt-1 font-montserrat">Pembentukan Organ Vital Utama</p>
            </div>
          </div>

          <div class="relative group">
            <div class="absolute -left-[33px] top-1 w-7 h-7 rounded-full bg-pink-500 border-[3px] border-white shadow-sm transition-transform group-hover:scale-110"></div>
            <div>
              <h4 class="font-black text-gray-900 text-sm font-merriweather">Bulan 4–6</h4>
              <p class="text-sm text-gray-400 mt-1 font-montserrat">Merasakan Gerakan Pertama Si Kecil</p>
            </div>
          </div>

          <div class="relative group">
            <div class="absolute -left-[33px] top-1 w-7 h-7 rounded-full bg-gray-300 border-[3px] border-white shadow-sm transition-transform group-hover:scale-110"></div>
            <div>
              <h4 class="font-black text-gray-900 text-sm font-merriweather">Bulan 7–9</h4>
              <p class="text-sm text-gray-400 mt-1 font-montserrat">Persiapan Matang Menuju Persalinan</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>