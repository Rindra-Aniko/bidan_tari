<script>
  import { page } from '$app/stores';

  let mobileOpen = $state(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/babyspa', label: 'Baby Spa' },
    { href: '/layanan', label: 'Layanan' },
    { href: '/galeri', label: 'Galeri' },
    { href: '/informasi', label: 'Informasi' },
    { href: '/tentang', label: 'Tentang' }
  ];

  function toggleMobile() {
    mobileOpen = !mobileOpen;
  }

  function closeMobile() {
    mobileOpen = false;
  }
</script>

<!-- Navbar -->
<nav class="w-full bg-white/80 backdrop-blur-lg py-3 px-6 md:px-12 flex items-center justify-between font-montserrat sticky top-0 z-50 border-b border-gray-100">
    
  <!-- Logo -->
  <a href="/" class="flex items-center space-x-3 group">
    <div class="w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center overflow-hidden bg-pink-50 shadow-sm group-hover:shadow-md transition-shadow">
      <img src="/favicon-96x96.png" alt="Logo" class="w-full h-full object-cover" width="44" height="44" />
    </div>
    
    <div class="flex flex-col">
      <span class="text-sm md:text-base font-bold tracking-tight text-gray-900 leading-tight">
        Bdn. Sri Debi Utari
      </span>
      <span class="text-[10px] tracking-wide text-gray-400 font-medium">
        S.Tr, S.Keb — Profesional Midwife
      </span>
    </div>
  </a>

  <!-- Desktop Nav -->
  <div class="hidden md:flex items-center space-x-1">
    {#each navItems as item}
      {@const isActive = $page.url.pathname === item.href}
      <a 
        href={item.href} 
        class="px-3 py-2 rounded-lg text-sm font-medium transition-colors {isActive ? 'text-pink-600 bg-pink-50' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}"
      >
        {item.label}
      </a>
    {/each}
    
    <a href="https://wa.me/6285266761076" target="_blank" rel="noopener noreferrer"
       class="ml-4 px-5 py-2 bg-pink-500 text-white text-sm font-semibold rounded-full hover:bg-pink-600 active:scale-95 transition-all shadow-sm hover:shadow-md">
      Hubungi Kami
    </a>
  </div>

  <!-- Mobile Hamburger -->
  <button onclick={toggleMobile} class="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-50 transition-colors" aria-label="Toggle menu">
    {#if mobileOpen}
      <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    {:else}
      <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    {/if}
  </button>
</nav>

<!-- Mobile Menu Overlay -->
{#if mobileOpen}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="fixed inset-0 bg-black/40 z-40 md:hidden" onclick={closeMobile} onkeydown={(e) => e.key === 'Escape' && closeMobile()}></div>
  
  <div class="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 md:hidden p-6 flex flex-col animate-slide-in">
    
    <div class="flex items-center justify-between mb-8">
      <span class="text-sm font-bold text-gray-900 font-merriweather">Menu</span>
      <button onclick={closeMobile} aria-label="Close menu" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
        <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div class="flex flex-col space-y-1 flex-1">
      {#each navItems as item}
        {@const isActive = $page.url.pathname === item.href}
        <a 
          href={item.href}
          onclick={closeMobile}
          class="px-4 py-3 rounded-xl text-sm font-medium transition-colors {isActive ? 'text-pink-600 bg-pink-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}"
        >
          {item.label}
        </a>
      {/each}
    </div>

    <a href="https://wa.me/6285266761076" target="_blank" rel="noopener noreferrer"
       class="mt-6 w-full text-center px-5 py-3 bg-pink-500 text-white text-sm font-semibold rounded-xl hover:bg-pink-600 transition-colors shadow-sm">
      Hubungi via WhatsApp
    </a>
  </div>
{/if}

<style>
  @keyframes slide-in {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  .animate-slide-in {
    animation: slide-in 0.25s ease-out;
  }
</style>