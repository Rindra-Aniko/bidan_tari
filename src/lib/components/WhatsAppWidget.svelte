<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  let isOpen = $state(false);
  let hasOpened = $state(false);
  let timeString = $state('09:00');

  onMount(() => {
    // Generate actual current time for the chat bubble
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    timeString = `${hrs}:${mins}`;
  });

  function toggleOpen() {
    isOpen = !isOpen;
    if (isOpen) {
      hasOpened = true;
    }
  }
</script>

<!-- WhatsApp Popup Container -->
{#if isOpen}
  <div 
    transition:fly={{ y: 20, duration: 300 }}
    class="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[350px] bg-white rounded-2xl shadow-2xl border border-pink-100 overflow-hidden flex flex-col font-montserrat"
  >
    <!-- Header -->
    <div class="bg-pink-500 p-4 flex items-center justify-between text-white">
      <div class="flex items-center gap-3">
        <!-- Avatar with active online indicator -->
        <div class="relative w-10 h-10 rounded-full border border-white/20 overflow-hidden bg-pink-100 flex-shrink-0">
          <img src="/image/PROFILE_1.webp" alt="Bidan Tari" class="w-full h-full object-cover" />
          <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
        </div>
        <div>
          <h4 class="font-bold text-sm leading-tight text-white">Bdn. Sri Debi Utari</h4>
          <span class="text-[11px] text-pink-100 font-medium block">Aktif • Biasanya membalas cepat</span>
        </div>
      </div>
      <!-- Close Button -->
      <button 
        onclick={() => isOpen = false} 
        class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 active:scale-95 transition-all text-white/80 hover:text-white"
        aria-label="Tutup"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Chat Area -->
    <div class="p-5 bg-pink-50/20 flex-1 max-h-[300px] overflow-y-auto">
      <div class="text-center mb-4">
        <span class="text-[10px] bg-pink-100/50 text-pink-700 font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
          Konsultasi Layanan
        </span>
      </div>

      <!-- Chat Bubble -->
      <div class="flex gap-2 items-end max-w-[90%]">
        <div class="bg-white p-3 rounded-2xl rounded-bl-none border border-pink-100 shadow-sm relative">
          <p class="text-xs text-gray-700 leading-relaxed">
            Halo! Saya Bidan Tari. Ada yang bisa saya bantu? Silakan tanyakan seputar persalinan, baby spa, yoga hamil, atau layanan kebidanan lainnya di sini. 😊
          </p>
          <span class="text-[9px] text-gray-400 block text-right mt-1.5 font-medium">
            {timeString}
          </span>
        </div>
      </div>
    </div>

    <!-- Footer Action -->
    <div class="p-4 bg-white border-t border-pink-50 flex flex-col gap-2">
      <a 
        href="https://wa.me/6285266761076" 
        target="_blank" 
        rel="noopener noreferrer"
        onclick={() => isOpen = false}
        class="w-full bg-pink-500 hover:bg-pink-600 active:scale-98 text-white font-semibold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
      >
        <!-- WhatsApp Icon inside button -->
        <svg class="w-4 h-4 fill-white" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.114-2.905-6.99C16.558 1.876 14.077.844 11.44.844c-5.437 0-9.863 4.42-9.867 9.864 0 1.73.456 3.42 1.32 4.922l-.995 3.635 3.722-.975zm10.74-5.267c-.29-.145-1.716-.847-1.98-.943-.266-.096-.46-.145-.652.146-.193.29-.747.943-.916 1.135-.168.193-.337.217-.627.072-2.905-1.45-4.807-4.3-5.247-5.066-.113-.194-.012-.299.085-.396.088-.087.193-.227.29-.34.096-.113.128-.193.193-.32.065-.127.032-.24-.016-.337-.048-.096-.46-1.109-.63-1.517-.166-.4-.349-.346-.48-.352-.123-.006-.264-.007-.406-.007a.78.78 0 00-.564.263c-.193.21-.736.72-.736 1.758 0 1.038.754 2.04 1.866 2.507C7.458 12.87 10.96 16.033 16.32 18.06c4.464 1.688 4.948 1.36 5.89.48.94-.88.94-1.92.94-2.04 0-.12-.048-.22-.193-.29z"/>
        </svg>
        <span>Mulai Chat Sekarang</span>
      </a>
      <span class="text-[9px] text-gray-400 text-center block">
        Membuka chat WhatsApp di tab baru
      </span>
    </div>
  </div>
{/if}

<!-- Floating Action Button (FAB) -->
<button 
  onclick={toggleOpen}
  class="fixed bottom-6 right-6 z-50 w-16 h-16 bg-white text-pink-500 rounded-full flex items-center justify-center shadow-xl border border-pink-100 hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer focus:outline-none"
  aria-label="Hubungi kami di WhatsApp"
>
  <!-- Pulsating Badge Indicator (only shown until first open) -->
  {#if !hasOpened}
    <span class="absolute top-1 right-1 flex h-3.5 w-3.5">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-pink-500 border border-white"></span>
    </span>
  {/if}

  <!-- Pink WhatsApp SVG Logo -->
  <svg class="w-8 h-8 fill-pink-500 transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.114-2.905-6.99C16.558 1.876 14.077.844 11.44.844c-5.437 0-9.863 4.42-9.867 9.864 0 1.73.456 3.42 1.32 4.922l-.995 3.635 3.722-.975zm10.74-5.267c-.29-.145-1.716-.847-1.98-.943-.266-.096-.46-.145-.652.146-.193.29-.747.943-.916 1.135-.168.193-.337.217-.627.072-2.905-1.45-4.807-4.3-5.247-5.066-.113-.194-.012-.299.085-.396.088-.087.193-.227.29-.34.096-.113.128-.193.193-.32.065-.127.032-.24-.016-.337-.048-.096-.46-1.109-.63-1.517-.166-.4-.349-.346-.48-.352-.123-.006-.264-.007-.406-.007a.78.78 0 00-.564.263c-.193.21-.736.72-.736 1.758 0 1.038.754 2.04 1.866 2.507C7.458 12.87 10.96 16.033 16.32 18.06c4.464 1.688 4.948 1.36 5.89.48.94-.88.94-1.92.94-2.04 0-.12-.048-.22-.193-.29z"/>
  </svg>
</button>
