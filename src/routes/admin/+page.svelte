<script>
	import { enhance } from '$app/forms';
	
	// Svelte 5 props
	const { data } = $props();
	
	const { user, articles, stats } = $derived(data);

	// Tracking IDs of articles currently being deleted
	let deletingIds = $state(new Set());
</script>

<svelte:head>
	<title>Dashboard Admin — Klinik Bidan Sri Deby Utari</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 flex font-montserrat">
	<!-- Sidebar -->
	<aside class="w-64 bg-white border-r border-gray-100 flex flex-col justify-between shrink-0 hidden md:flex">
		<div class="p-6">
			<a href="/" class="block mb-8">
				<span class="text-xl font-black font-merriweather tracking-tight text-gray-900">
					Bidan<span class="text-pink-500">Tari</span>
				</span>
				<span class="block text-[9px] font-bold text-pink-500 uppercase tracking-widest mt-0.5">
					Panel Dashboard
				</span>
			</a>

			<nav class="space-y-1.5">
				<a href="/admin" class="flex items-center gap-3 px-4 py-3 rounded-xl bg-pink-50 text-pink-600 font-bold text-sm transition-all">
					<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
					Dashboard
				</a>

				<a href="/admin/editor" class="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:text-pink-500 hover:bg-pink-50/50 font-semibold text-sm transition-all">
					<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
					Tulis Artikel
				</a>

				{#if user.role === 'admin'}
					<a href="/admin/users" class="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:text-pink-500 hover:bg-pink-50/50 font-semibold text-sm transition-all">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
						Kelola Operator
					</a>
				{/if}
			</nav>
		</div>

		<div class="p-6 border-t border-gray-100">
			<div class="flex items-center gap-3 mb-4">
				<div class="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-sm">
					{user.name.substring(0, 2).toUpperCase()}
				</div>
				<div>
					<p class="text-sm font-bold text-gray-800 leading-tight">{user.name}</p>
					<p class="text-[10px] text-gray-400 capitalize">{user.role}</p>
				</div>
			</div>

			<form method="POST" action="?/logout" use:enhance>
				<button type="submit" class="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-500 hover:text-rose-500 hover:border-rose-100 hover:bg-rose-50 text-xs font-bold transition-all uppercase tracking-wider">
					<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
					Keluar
				</button>
			</form>
		</div>
	</aside>

	<!-- Main Content Area -->
	<main class="flex-grow p-6 md:p-10 overflow-y-auto max-w-7xl mx-auto w-full">
		<!-- Header -->
		<header class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-100">
			<div>
				<h1 class="text-2xl font-black text-gray-900 font-merriweather">Selamat Datang, {user.name}!</h1>
				<p class="text-sm text-gray-500 mt-1">Kelola konten informasi & edukasi kesehatan Klinik Bidan Sri Deby Utari.</p>
			</div>

			<div class="flex gap-3">
				<a href="/admin/editor" class="bg-pink-500 hover:bg-pink-600 active:scale-98 text-white font-bold px-5 py-3 rounded-xl shadow-md shadow-pink-500/10 text-xs uppercase tracking-wider flex items-center gap-2">
					<svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
					Tulis Artikel Baru
				</a>
				
				<!-- Mobile Logout (Hidden on desktop) -->
				<form method="POST" action="?/logout" use:enhance class="md:hidden">
					<button type="submit" class="border border-gray-200 hover:bg-rose-50 text-gray-500 hover:text-rose-500 p-3 rounded-xl" aria-label="Keluar">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
					</button>
				</form>
			</div>
		</header>

		<!-- Statistics Panel -->
		<section class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
			<div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-5">
				<div class="w-12 h-12 rounded-2xl bg-pink-50 text-pink-500 flex items-center justify-center shrink-0">
					<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2zM12 11h3m-3 3h3m-6-3h.01M9 14h.01"></path></svg>
				</div>
				<div>
					<p class="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Artikel</p>
					<h3 class="text-2xl font-black text-gray-800 mt-1">{stats.totalArticles}</h3>
				</div>
			</div>

			<div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-5">
				<div class="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
					<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.367 1.258.59 1.816l-3.97 2.886a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.886a1 1 0 00-1.18 0l-3.97 2.886c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.97-2.886c-.776-.558-.37-1.816.59-1.816h4.907a1 1 0 00.95-.69l1.519-4.674z"></path></svg>
				</div>
				<div>
					<p class="text-xs font-bold text-gray-400 uppercase tracking-wider">Artikel Utama</p>
					<h3 class="text-2xl font-black text-gray-800 mt-1">{stats.featuredCount}</h3>
				</div>
			</div>

			<div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-5">
				<div class="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-500 flex items-center justify-center shrink-0">
					<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
				</div>
				<div>
					<p class="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Operator</p>
					<h3 class="text-2xl font-black text-gray-800 mt-1">{stats.totalOperators}</h3>
				</div>
			</div>
		</section>

		<!-- Article Table Section -->
		<section class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
			<div class="p-6 border-b border-gray-100 flex items-center justify-between">
				<h2 class="font-bold text-gray-850 font-merriweather">Daftar Artikel Informasi</h2>
				<span class="text-xs text-gray-450 font-bold bg-gray-50 px-3 py-1.5 rounded-full">
					{articles.length} artikel terbit
				</span>
			</div>

			<div class="overflow-x-auto">
				{#if articles.length === 0}
					<div class="py-16 text-center">
						<svg class="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"></path></svg>
						<p class="text-gray-500 text-sm font-semibold">Belum ada artikel yang diterbitkan.</p>
						<p class="text-gray-400 text-xs mt-1">Mulai bagikan panduan kesehatan dengan klik tombol "Tulis Artikel Baru".</p>
					</div>
				{:else}
					<table class="w-full text-left border-collapse">
						<thead>
							<tr class="bg-gray-50/85 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
								<th class="py-4 px-6">Judul Artikel</th>
								<th class="py-4 px-6">Kategori</th>
								<th class="py-4 px-6">Penulis</th>
								<th class="py-4 px-6">Tanggal Terbit</th>
								<th class="py-4 px-6">Status</th>
								<th class="py-4 px-6 text-right">Aksi</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-100 text-sm text-gray-600">
							{#each articles as article (article.id)}
								<tr class="hover:bg-pink-50/20 transition-colors">
									<td class="py-4 px-6 max-w-xs md:max-w-md">
										<p class="font-bold text-gray-800 truncate" title={article.title}>{article.title}</p>
										<span class="text-[10px] text-gray-400 block mt-0.5">/{article.slug}</span>
									</td>
									<td class="py-4 px-6 whitespace-nowrap">
										<span class="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider
											{article.category === 'Kehamilan' ? 'bg-pink-50 text-pink-600 border border-pink-100/50' : ''}
											{article.category === 'Persalinan' ? 'bg-purple-50 text-purple-600 border border-purple-100/50' : ''}
											{article.category === 'Perawatan Bayi' ? 'bg-blue-50 text-blue-600 border border-blue-100/50' : ''}
											{article.category === 'Kesehatan Ibu' ? 'bg-teal-50 text-teal-600 border border-teal-100/50' : ''}
											{article.category === 'Nutrisi' ? 'bg-amber-50 text-amber-600 border border-amber-100/50' : ''}
										">
											{article.category}
										</span>
									</td>
									<td class="py-4 px-6 whitespace-nowrap font-medium text-gray-700">
										{article.authorName ?? 'Sistem'}
									</td>
									<td class="py-4 px-6 whitespace-nowrap text-xs text-gray-400">
										{new Date(article.createdAt).toLocaleDateString('id-ID', {
											day: 'numeric',
											month: 'short',
											year: 'numeric'
										})}
									</td>
									<td class="py-4 px-6 whitespace-nowrap">
										{#if article.featured}
											<span class="flex items-center gap-1 text-xs font-bold text-amber-600">
												<svg class="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
												Featured
											</span>
										{:else}
											<span class="text-xs text-gray-400 font-semibold">Standard</span>
										{/if}
									</td>
									<td class="py-4 px-6 whitespace-nowrap text-right text-xs">
										<div class="flex items-center justify-end gap-2">
											<a href="/informasi/{article.slug}" target="_blank" class="p-2 rounded-lg text-gray-400 hover:text-pink-500 hover:bg-pink-50/50 transition-all" title="Pratinjau Artikel">
												<svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
											</a>
											
											<a href="/admin/editor/{article.id}" class="p-2 rounded-lg text-gray-450 hover:text-pink-500 hover:bg-pink-50/50 transition-all" title="Edit Artikel">
												<svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
											</a>
											
											<form method="POST" action="?/deleteArticle" use:enhance={() => {
												deletingIds.add(article.id);
												return async ({ update }) => {
													await update();
													deletingIds.delete(article.id);
												};
											}} class="inline-block" onsubmit={(e) => { if (!confirm('Apakah Anda yakin ingin menghapus artikel ini?')) e.preventDefault(); }}>
												<input type="hidden" name="id" value={article.id} />
												<button type="submit" disabled={deletingIds.has(article.id)} class="p-2 rounded-lg text-gray-400 hover:text-rose-500 hover:bg-rose-50 transition-all disabled:opacity-50" title="Hapus Artikel">
													{#if deletingIds.has(article.id)}
														<svg class="animate-spin w-4.5 h-4.5 text-rose-500" fill="none" viewBox="0 0 24 24">
															<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
															<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
														</svg>
													{:else}
														<svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
													{/if}
												</button>
											</form>
										</div>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				{/if}
			</div>
		</section>
	</main>
</div>
