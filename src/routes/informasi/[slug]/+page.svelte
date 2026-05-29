<script>
	import { reveal } from '$lib/actions/reveal.js';
	// Svelte 5 props
	const { data } = $props();
	const { article } = $derived(data);

	// Simple Markdown parser
	function parseMarkdown(md) {
		if (!md) return '';
		
		let html = md
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');
		
		// Headers
		html = html.replace(/^### (.*?)$/gm, '<h3 class="text-xl font-bold mt-6 mb-3 text-gray-800">$1</h3>');
		html = html.replace(/^## (.*?)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4 border-b pb-2 text-gray-850">$1</h2>');
		html = html.replace(/^# (.*?)$/gm, '<h1 class="text-3xl font-black mt-10 mb-6 text-gray-900">$1</h1>');
		
		// Bold & Italic
		html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
		html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
		
		// Bullet lists
		html = html.replace(/^\- (.*?)$/gm, '<li class="list-disc ml-6 my-2 text-gray-700">$1</li>');
		
		// Blockquotes
		html = html.replace(/^> (.*?)$/gm, '<blockquote class="border-l-4 border-pink-500 pl-4 py-1 italic my-6 text-gray-650 bg-pink-50/30 rounded-r-xl">$1</blockquote>');
		
		// Links
		html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-pink-500 hover:text-pink-650 underline font-semibold transition-colors">$1</a>');

		// Line breaks & paragraphs
		const paragraphs = html.split(/\n\s*\n/).map(p => {
			const trimmed = p.trim();
			if (!trimmed) return '';
			if (trimmed.startsWith('<h') || trimmed.startsWith('<li') || trimmed.startsWith('<blockquote') || trimmed.startsWith('<ol')) {
				return trimmed;
			}
			return `<p class="mb-5 leading-relaxed text-gray-600 text-base md:text-lg">${trimmed.replace(/\n/g, '<br/>')}</p>`;
		});
		
		return paragraphs.filter(Boolean).join('');
	}

	const articleHtml = $derived(parseMarkdown(article.content));
</script>

<svelte:head>
	<title>{article.title} — Klinik Bidan Sri Deby Utari</title>
	<meta name="description" content={article.summary} />
</svelte:head>

<article class="bg-white min-h-screen font-montserrat pb-20">
	<div class="max-w-5xl mx-auto px-4 md:px-6 pt-24 space-y-8">
		<!-- Breadcrumbs and Back Button -->
		<nav class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-150 pb-6">
			<!-- Breadcrumb -->
			<div class="flex items-center gap-2 text-xs font-semibold text-gray-400">
				<a href="/" class="hover:text-pink-500 transition-colors">Beranda</a>
				<svg class="w-3 h-3 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
				<a href="/informasi" class="hover:text-pink-500 transition-colors">Informasi</a>
				<svg class="w-3 h-3 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
				<span class="text-pink-500">{article.category}</span>
			</div>

			<a href="/informasi" class="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-pink-500 transition-colors">
				<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
				Kembali ke Artikel
			</a>
		</nav>

		<!-- Title Header -->
		<header class="space-y-6">
			<div class="flex flex-wrap items-center gap-3">
				<span class="bg-pink-50 text-pink-500 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-pink-100/50">
					{article.category}
				</span>
				<span class="text-xs text-gray-400 font-semibold flex items-center gap-1.5">
					<svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
					{article.readingTime}
				</span>
			</div>

			<h1 class="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.2] text-gray-900 font-merriweather">
				{article.title}
			</h1>

			<!-- Author details -->
			<div class="flex items-center gap-3 pt-2">
				<div class="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-sm shrink-0">
					{(article.authorName ?? 'Bidan').substring(0, 2).toUpperCase()}
				</div>
				<div>
					<p class="text-sm font-bold text-gray-800 leading-tight">Ditulis oleh {article.authorName ?? 'Bidan'}</p>
					<p class="text-[11px] text-gray-400">
						Diterbitkan pada {new Date(article.createdAt).toLocaleDateString('id-ID', {
							day: 'numeric',
							month: 'long',
							year: 'numeric'
						})}
					</p>
				</div>
			</div>
		</header>

		<!-- Cover Image -->
		<div class="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-pink-100/50 shadow-md relative bg-pink-50/10">
			<img src={article.image} alt={article.title} class="w-full h-full object-cover hover:scale-[1.01] transition-transform duration-500" />
		</div>

		<!-- Article Body Content -->
		<div class="space-y-6">
			<!-- Summary intro block -->
			<div class="border-l-4 border-pink-400 pl-5 py-1">
				<p class="text-gray-500 font-medium text-base md:text-lg leading-relaxed italic">
					{article.summary}
				</p>
			</div>

			<!-- Main prose body content -->
			<div class="prose prose-pink max-w-none prose-base md:prose-lg leading-relaxed antialiased font-montserrat">
				{@html articleHtml}
			</div>
		</div>
	</div>
</article>
