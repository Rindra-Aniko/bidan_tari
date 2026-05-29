<script>
	import { enhance } from '$app/forms';
	
	// Svelte 5 props
	const { data, form } = $props();
	const { article, user } = $derived(data);

	// Editor state
	let title = $state('');
	let slug = $state('');
	let category = $state('Kehamilan');
	let summary = $state('');
	let content = $state('');
	let readingTime = $state('5 Menit Baca');
	let featured = $state(false);

	// Image settings state
	let imageType = $state('file');
	let imageUrl = $state('');
	let imagePreviewUrl = $state('');
	let imageFile = $state(null);

	// Auto slug generation toggler
	let autoSlug = $state(true);

	let currentArticleId = $state(null);

	$effect(() => {
		if (article?.id !== currentArticleId) {
			currentArticleId = article?.id ?? null;
			title = article?.title ?? '';
			slug = article?.slug ?? '';
			category = article?.category ?? 'Kehamilan';
			summary = article?.summary ?? '';
			content = article?.content ?? '';
			readingTime = article?.readingTime ?? '5 Menit Baca';
			featured = article?.featured ?? false;
			imageType = article?.image && !article.image.startsWith('/uploads/') ? 'url' : 'file';
			imageUrl = article?.image && !article.image.startsWith('/uploads/') ? article.image : '';
			imagePreviewUrl = article?.image ? article.image : '';
			imageFile = null;
			autoSlug = !article;
		}
	});

	// Form submission loading state
	let isSubmitting = $state(false);

	// Watch title change to generate slug
	$effect(() => {
		if (autoSlug && title) {
			slug = title
				.toLowerCase()
				.replace(/[^a-z0-9\s-]/g, '') // remove special chars
				.replace(/\s+/g, '-')         // replace spaces with hyphens
				.replace(/-+/g, '-')          // replace multiple hyphens
				.trim();
		}
	});

	// Handle local image file preview
	function handleFileChange(event) {
		const file = event.target.files[0];
		if (file) {
			imageFile = file;
			imagePreviewUrl = URL.createObjectURL(file);
		}
	}

	// Simple client-side Markdown Parser to HTML
	function parseMarkdown(md) {
		if (!md) return '<p class="text-gray-400 italic">Mulai mengetik untuk melihat pratinjau...</p>';
		
		let html = md
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');
		
		// Headers
		html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
		html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
		html = html.replace(/^# (.*?)$/gm, '<h1>$1</h1>');
		
		// Bold & Italic
		html = html.replace(/\*\*(.*?)\*\"/g, '<strong>$1</strong>');
		html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
		html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
		
		// Bullet lists (group them)
		html = html.replace(/^\- (.*?)$/gm, '<li>$1</li>');
		
		// Line breaks & paragraphs
		const paragraphs = html.split(/\n\s*\n/).map(p => {
			const trimmed = p.trim();
			if (!trimmed) return '';
			if (trimmed.startsWith('<h') || trimmed.startsWith('<li') || trimmed.startsWith('<ol')) {
				return trimmed;
			}
			return `<p>${trimmed.replace(/\n/g, '<br/>')}</p>`;
		});
		
		return paragraphs.filter(Boolean).join('');
	}

	// Reactive Markdown preview
	const previewHtml = $derived(parseMarkdown(content));

	let textareaRef;

	function insertStyle(before, after = '') {
		if (!textareaRef) return;
		const start = textareaRef.selectionStart;
		const end = textareaRef.selectionEnd;
		const text = textareaRef.value;
		const selected = text.substring(start, end);
		const replacement = before + selected + after;
		
		content = text.substring(0, start) + replacement + text.substring(end);
		
		setTimeout(() => {
			textareaRef.focus();
			textareaRef.setSelectionRange(
				start + before.length,
				start + before.length + selected.length
			);
		}, 10);
	}
</script>

<svelte:head>
	<title>{article ? 'Edit Artikel' : 'Tulis Artikel Baru'} — Klinik Bidan Sri Deby Utari</title>
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
				<a href="/admin" class="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:text-pink-500 hover:bg-pink-50/50 font-semibold text-sm transition-all">
					<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
					Dashboard
				</a>

				<a href="/admin/editor" class="flex items-center gap-3 px-4 py-3 rounded-xl bg-pink-50 text-pink-600 font-bold text-sm transition-all">
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

			<form method="POST" action="/admin?/logout" use:enhance>
				<button type="submit" class="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-500 hover:text-rose-500 hover:border-rose-100 hover:bg-rose-50 text-xs font-bold transition-all uppercase tracking-wider">
					<svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
					Keluar
				</button>
			</form>
		</div>
	</aside>

	<!-- Main Content Area -->
	<main class="flex-grow p-6 md:p-10 overflow-y-auto max-w-7xl mx-auto w-full">
		<header class="mb-8 pb-6 border-b border-gray-100 flex items-center justify-between">
			<div>
				<h1 class="text-2xl font-black text-gray-900 font-merriweather">
					{article ? 'Edit Artikel' : 'Tulis Artikel Baru'}
				</h1>
				<p class="text-sm text-gray-500 mt-1">
					{article ? 'Perbarui artikel yang sudah diterbitkan.' : 'Publikasikan panduan kehamilan dan tips kesehatan baru.'}
				</p>
			</div>
			
			<a href="/admin" class="border border-gray-200 hover:bg-gray-100 text-gray-700 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider">
				Batal
			</a>
		</header>

		{#if form?.error}
			<div class="mb-6 p-4 rounded-2xl bg-rose-50 text-rose-600 text-sm font-semibold border border-rose-100 flex items-center gap-2">
				<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
				{form.error}
			</div>
		{/if}

		<form
			method="POST"
			action="?/save"
			enctype="multipart/form-data"
			use:enhance={() => {
				isSubmitting = true;
				return async ({ update }) => {
					await update();
					isSubmitting = false;
				};
			}}
			class="grid grid-cols-1 lg:grid-cols-12 gap-8"
		>
			<!-- Left Column: Form Settings (Narrower) -->
			<div class="lg:col-span-4 space-y-6">
				<!-- Title & Slug -->
				<div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
					<div>
						<label for="title" class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Judul Artikel</label>
						<input
							type="text"
							name="title"
							id="title"
							bind:value={title}
							placeholder="Contoh: Tips Menjaga Kesehatan Bayi Baru Lahir"
							class="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all text-sm font-semibold"
							required
						/>
					</div>

					<div>
						<div class="flex justify-between items-center mb-2">
							<label for="slug" class="block text-xs font-bold text-gray-400 uppercase tracking-wider">Slug Rute URL</label>
							<label class="flex items-center gap-1.5 text-xs text-pink-500 font-semibold cursor-pointer">
								<input type="checkbox" bind:checked={autoSlug} class="accent-pink-500" />
								Otomatis
							</label>
						</div>
						<div class="relative">
							<span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 font-mono text-xs">/informasi/</span>
							<input
								type="text"
								name="slug"
								id="slug"
								bind:value={slug}
								readonly={autoSlug}
								placeholder="tips-menjaga-kesehatan-bayi"
								class="w-full pl-24 pr-4 py-3 rounded-xl border border-gray-200 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all text-xs font-mono {autoSlug ? 'bg-gray-50 text-gray-400' : ''}"
								required
							/>
						</div>
					</div>
				</div>

				<!-- Category & Metadata -->
				<div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div>
						<label for="category" class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Kategori</label>
						<select
							name="category"
							id="category"
							bind:value={category}
							class="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all text-sm font-medium bg-white"
						>
							<option value="Kehamilan">Kehamilan</option>
							<option value="Persalinan">Persalinan</option>
							<option value="Perawatan Bayi">Perawatan Bayi</option>
							<option value="Kesehatan Ibu">Kesehatan Ibu</option>
							<option value="Nutrisi">Nutrisi</option>
						</select>
					</div>

					<div>
						<label for="readingTime" class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Waktu Baca</label>
						<input
							type="text"
							name="readingTime"
							id="readingTime"
							bind:value={readingTime}
							placeholder="Contoh: 5 Menit Baca"
							class="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all text-sm font-medium"
						/>
					</div>

					<div class="sm:col-span-2 pt-2 border-t border-gray-50 flex items-center justify-between">
						<div>
							<span class="block text-sm font-bold text-gray-700">Jadikan Artikel Utama (Featured)</span>
							<span class="text-xs text-gray-450 block mt-0.5">Artikel utama akan tampil besar di bagian atas halaman Informasi.</span>
						</div>
						<label class="relative inline-flex items-center cursor-pointer">
							<input type="checkbox" name="featured" value="true" bind:checked={featured} class="sr-only peer" />
							<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
						</label>
					</div>
				</div>

				<!-- Summary -->
				<div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
					<label for="summary" class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Ringkasan Artikel</label>
					<textarea
						name="summary"
						id="summary"
						bind:value={summary}
						rows="3"
						placeholder="Tuliskan ringkasan singkat isi artikel untuk ditampilkan pada kartu daftar artikel (maksimal 200 karakter)..."
						class="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all text-sm font-medium leading-relaxed"
						required
					></textarea>
				</div>

				<!-- Image Cover -->
				<div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
					<div class="flex justify-between items-center border-b border-gray-50 pb-3">
						<span class="text-xs font-bold text-gray-400 uppercase tracking-wider">Gambar Cover</span>
						<div class="flex gap-2">
							<button type="button" onclick={() => imageType = 'file'} class="text-xs font-bold px-3 py-1 rounded-full {imageType === 'file' ? 'bg-pink-50 text-pink-600 border border-pink-100' : 'text-gray-400'}">Unggah File</button>
							<button type="button" onclick={() => imageType = 'url'} class="text-xs font-bold px-3 py-1 rounded-full {imageType === 'url' ? 'bg-pink-50 text-pink-600 border border-pink-100' : 'text-gray-400'}">Input URL</button>
						</div>
					</div>

					<input type="hidden" name="imageType" value={imageType} />

					{#if imageType === 'file'}
						<div>
							<div class="border-2 border-dashed border-gray-200 hover:border-pink-300 rounded-2xl p-6 text-center cursor-pointer transition-all relative">
								<input
									type="file"
									name="imageFile"
									accept="image/*"
									class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
									onchange={handleFileChange}
								/>
								<svg class="w-8 h-8 text-gray-300 mx-auto mb-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path></svg>
								<p class="text-xs font-bold text-gray-500">Klik atau seret file gambar ke sini</p>
								<p class="text-[10px] text-gray-400 mt-1">PNG, JPG, JPEG atau WEBP (maks. 2MB)</p>
							</div>
						</div>
					{:else}
						<div>
							<label for="imageUrl" class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">URL Gambar Eksternal</label>
							<input
								type="url"
								name="imageUrl"
								id="imageUrl"
								bind:value={imageUrl}
								oninput={() => imagePreviewUrl = imageUrl}
								placeholder="https://images.unsplash.com/photo-..."
								class="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all text-xs font-mono"
							/>
						</div>
					{/if}

					{#if imagePreviewUrl}
						<div class="rounded-2xl overflow-hidden border border-gray-150 max-h-56 relative group">
							<img src={imagePreviewUrl} alt="Cover Preview" class="w-full h-full object-cover" />
							<div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
								<span class="text-white text-xs font-bold uppercase tracking-wider">Pratinjau Gambar</span>
							</div>
						</div>
					{/if}
				</div>
			</div>

			<!-- Center/Right Column: Live Markdown Editor (Wider for Focus) -->
			<div class="lg:col-span-8 flex flex-col gap-6">
				<div class="bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col h-[750px] overflow-hidden">
					<div class="p-4 border-b border-gray-100 flex items-center justify-between shrink-0">
						<span class="text-sm font-bold text-gray-800 font-merriweather">Konten & Pratinjau</span>
						<span class="text-[10px] font-bold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full uppercase">Markdown</span>
					</div>

					<!-- Editor Tabs -->
					<div class="flex-grow flex flex-col overflow-hidden">
						<!-- HTML Rendering Preview (On Top) -->
						<div class="h-1/2 p-4 border-b border-gray-100 flex flex-col overflow-hidden bg-gray-50/50">
							<span class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 shrink-0">Pratinjau Tampilan</span>
							<div class="flex-grow bg-white p-5 border border-gray-100 rounded-xl overflow-y-auto prose prose-pink max-w-none prose-sm leading-relaxed antialiased">
								<!-- Render markdown content dynamically -->
								{@html previewHtml}
							</div>
						</div>

						<!-- Content Input Area (On Bottom) -->
						<div class="h-1/2 p-4 flex flex-col overflow-hidden">
							<div class="flex justify-between items-center mb-2 shrink-0">
								<label for="content" class="block text-xs font-bold text-gray-400 uppercase tracking-wider">Isi Konten Artikel</label>
								<span class="text-[10px] text-gray-455 italic">Klik tombol di bawah untuk format cepat</span>
							</div>

							<!-- Quick Toolbar -->
							<div class="flex flex-wrap items-center gap-1 p-1 bg-gray-50 border border-gray-100 rounded-xl mb-2 shrink-0">
								<button type="button" onclick={() => insertStyle('**', '**')} class="h-8 px-2.5 rounded-lg hover:bg-pink-50 hover:text-pink-600 text-gray-600 font-black text-xs transition-colors cursor-pointer" title="Tebal (Bold)">
									B
								</button>
								<button type="button" onclick={() => insertStyle('*', '*')} class="h-8 px-2.5 rounded-lg hover:bg-pink-50 hover:text-pink-600 text-gray-600 italic text-xs transition-colors cursor-pointer" title="Miring (Italic)">
									I
								</button>
								<div class="w-px h-4 bg-gray-200 mx-1"></div>
								<button type="button" onclick={() => insertStyle('# ', '')} class="h-8 px-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 text-gray-600 font-bold text-[10px] transition-colors cursor-pointer" title="Judul Utama (H1)">
									H1
								</button>
								<button type="button" onclick={() => insertStyle('## ', '')} class="h-8 px-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 text-gray-600 font-bold text-[10px] transition-colors cursor-pointer" title="Subjudul Besar (H2)">
									H2
								</button>
								<button type="button" onclick={() => insertStyle('### ', '')} class="h-8 px-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 text-gray-600 font-bold text-[10px] transition-colors cursor-pointer" title="Subjudul Sedang (H3)">
									H3
								</button>
								<div class="w-px h-4 bg-gray-200 mx-1"></div>
								<button type="button" onclick={() => insertStyle('- ', '')} class="h-8 px-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 text-gray-600 text-xs transition-colors cursor-pointer" title="Daftar Bulatan (Bullet List)">
									• List
								</button>
								<button type="button" onclick={() => insertStyle('> ', '')} class="h-8 px-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 text-gray-600 text-xs transition-colors cursor-pointer" title="Kutipan (Blockquote)">
									” Quote
								</button>
								<button type="button" onclick={() => insertStyle('[', '](https://url.com)')} class="h-8 px-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 text-gray-600 text-xs transition-colors flex items-center gap-1 cursor-pointer" title="Tautan Link">
									🔗 Link
								</button>
							</div>

							<textarea
								name="content"
								id="content"
								bind:this={textareaRef}
								bind:value={content}
								placeholder="Tulis artikel di sini. Gunakan tombol toolbar di atas untuk menebalkan teks, membuat judul, daftar, kutipan, atau link dengan mudah!"
								class="w-full flex-grow p-4 rounded-xl border border-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all text-sm leading-relaxed resize-none overflow-y-auto font-sans"
								required
							></textarea>
						</div>
					</div>
				</div>

				<!-- Save Button -->
				<button
					type="submit"
					disabled={isSubmitting}
					class="w-full bg-pink-500 hover:bg-pink-600 active:scale-98 text-white font-bold py-4 rounded-2xl shadow-lg shadow-pink-500/10 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
				>
					{#if isSubmitting}
						<svg class="animate-spin h-4.5 w-4.5 text-white" fill="none" viewBox="0 0 24 24">
							<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
							<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
						Menyimpan...
					{:else}
						{article ? 'Simpan Perubahan' : 'Terbitkan Artikel'}
					{/if}
				</button>
			</div>
		</form>
	</main>
</div>
