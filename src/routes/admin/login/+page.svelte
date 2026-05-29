<script>
	import { enhance } from '$app/forms';
	
	// Svelte 5 props
	const { form } = $props();

	// Password visibility state
	let showPassword = $state(false);

	// Form submission loading state
	let isSubmitting = $state(false);
</script>

<svelte:head>
	<title>Login Admin — Klinik Bidan Sri Deby Utari</title>
</svelte:head>

<div class="min-h-screen bg-pink-50/30 flex items-center justify-center p-6 font-montserrat">
	<div class="absolute top-0 right-0 w-[300px] h-[300px] bg-pink-100/50 rounded-full -mr-20 -mt-20 filter blur-3xl opacity-70"></div>
	<div class="absolute bottom-0 left-0 w-[350px] h-[350px] bg-pink-100/40 rounded-full -ml-28 -mb-28 filter blur-3xl opacity-50"></div>

	<div class="max-w-md w-full bg-white rounded-3xl border border-pink-100/80 shadow-xl shadow-pink-500/5 p-8 relative z-10 transition-all duration-300">
		<div class="text-center mb-8">
			<a href="/" class="inline-block mb-4">
				<span class="text-2xl font-black font-merriweather tracking-tight text-gray-900">
					Log<span class="text-pink-500">in</span>
				</span>
			</a>
			
			<p class="text-gray-400 text-xs mt-1.5">Silakan masuk dengan akun Admin atau Operator Anda</p>
		</div>

		<!-- Default info box if empty database is suspected -->

		{#if form?.error}
			<div class="mb-5 p-4 rounded-2xl bg-rose-50 text-rose-600 text-xs font-semibold border border-rose-100 flex items-center gap-2">
				<svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
				{form.error}
			</div>
		{/if}

		<form
			method="POST"
			use:enhance={() => {
				isSubmitting = true;
				return async ({ update }) => {
					await update();
					isSubmitting = false;
				};
			}}
			class="space-y-5"
		>
			<div>
				<label for="username" class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Username</label>
				<input
					type="text"
					name="username"
					id="username"
					value={form?.username ?? ''}
					placeholder="Masukkan username"
					class="w-full px-5 py-3.5 rounded-2xl border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all text-sm font-medium"
					required
				/>
			</div>

			<div>
				<div class="flex justify-between items-center mb-2">
					<label for="password" class="block text-xs font-bold text-gray-400 uppercase tracking-wider">Password</label>
				</div>
				<div class="relative">
					<input
						type={showPassword ? 'text' : 'password'}
						name="password"
						id="password"
						placeholder="••••••••"
						class="w-full pl-5 pr-12 py-3.5 rounded-2xl border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all text-sm font-medium"
						required
					/>
					<button
						type="button"
						onclick={() => showPassword = !showPassword}
						class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-pink-500 focus:outline-none transition-colors"
						aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
					>
						{#if showPassword}
							<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.815 0a3 3 0 11-4.243 4.243m1.89-8.157L21 21" />
							</svg>
						{:else}
							<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						{/if}
					</button>
				</div>
			</div>

			<button
				type="submit"
				disabled={isSubmitting}
				class="w-full bg-pink-500 hover:bg-pink-600 active:scale-98 text-white font-bold py-4 rounded-2xl shadow-lg shadow-pink-500/10 transition-all duration-300 uppercase tracking-widest text-xs mt-6 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
			>
				{#if isSubmitting}
					<svg class="animate-spin h-4.5 w-4.5 text-white" fill="none" viewBox="0 0 24 24">
						<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
						<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
					</svg>
					Memproses...
				{:else}
					Masuk ke Dashboard
				{/if}
			</button>
		</form>

		<div class="text-center mt-6">
			<a href="/" class="text-xs text-gray-400 hover:text-pink-500 transition-colors font-medium">
				← Kembali ke Beranda
			</a>
		</div>
	</div>
</div>
