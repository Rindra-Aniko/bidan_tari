<script>
	import { enhance } from '$app/forms';
	
	// Svelte 5 props
	const { data, form } = $props();
	
	const { user, users: userList } = $derived(data);

	// Password visibility state
	let showPassword = $state(false);

	// Form loading states
	let deletingUserIds = $state(new Set());
	let isCreatingUser = $state(false);
</script>

<svelte:head>
	<title>Kelola Operator — Klinik Bidan Sri Deby Utari</title>
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

				<a href="/admin/editor" class="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:text-pink-500 hover:bg-pink-50/50 font-semibold text-sm transition-all">
					<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
					Tulis Artikel
				</a>

				<a href="/admin/users" class="flex items-center gap-3 px-4 py-3 rounded-xl bg-pink-50 text-pink-600 font-bold text-sm transition-all">
					<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
					Kelola Operator
				</a>
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
					<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
					Keluar
				</button>
			</form>
		</div>
	</aside>

	<!-- Main Content -->
	<main class="flex-grow p-6 md:p-10 overflow-y-auto max-w-7xl mx-auto w-full">
		<!-- Header -->
		<header class="mb-10 pb-6 border-b border-gray-100 flex items-center justify-between">
			<div>
				<h1 class="text-2xl font-black text-gray-900 font-merriweather">Kelola Operator & Admin</h1>
				<p class="text-sm text-gray-500 mt-1">Daftarkan operator klinik baru atau kelola hak akses sistem.</p>
			</div>
			
			<a href="/admin" class="border border-gray-200 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider">
				← Kembali
			</a>
		</header>

		{#if form?.createUserSuccess}
			<div class="mb-6 p-4 rounded-2xl bg-emerald-50 text-emerald-700 text-sm font-semibold border border-emerald-100 flex items-center gap-2 animate-fade-in">
				<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
				Operator baru berhasil didaftarkan!
			</div>
		{/if}

		{#if form?.deleteUserSuccess}
			<div class="mb-6 p-4 rounded-2xl bg-emerald-50 text-emerald-700 text-sm font-semibold border border-emerald-100 flex items-center gap-2 animate-fade-in">
				<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
				Akun operator berhasil dihapus.
			</div>
		{/if}

		{#if form?.deleteUserError}
			<div class="mb-6 p-4 rounded-2xl bg-rose-50 text-rose-600 text-sm font-semibold border border-rose-100 flex items-center gap-2 animate-fade-in">
				<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
				{form.deleteUserError}
			</div>
		{/if}

		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
			<!-- Operator List (Left) -->
			<div class="lg:col-span-7 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
				<div class="p-6 border-b border-gray-100">
					<h2 class="font-bold text-gray-800 font-merriweather">Daftar Akun Aktif</h2>
				</div>

				<div class="overflow-x-auto">
					<table class="w-full text-left border-collapse text-sm">
						<thead>
							<tr class="bg-gray-50 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
								<th class="py-4 px-6">Nama</th>
								<th class="py-4 px-6">Username</th>
								<th class="py-4 px-6">Peran</th>
								<th class="py-4 px-6 text-right">Aksi</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-100 text-gray-600">
							{#each userList as acc (acc.id)}
								<tr class="hover:bg-gray-50/50 transition-colors">
									<td class="py-4 px-6 font-bold text-gray-800">{acc.name}</td>
									<td class="py-4 px-6 font-mono text-xs">{acc.username}</td>
									<td class="py-4 px-6">
										<span class="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider
											{acc.role === 'admin' ? 'bg-pink-100 text-pink-700' : 'bg-gray-100 text-gray-600'}
										">
											{acc.role}
										</span>
									</td>
									<td class="py-4 px-6 text-right whitespace-nowrap">
										{#if acc.id !== user.id}
											<form method="POST" action="?/deleteUser" use:enhance={() => {
												deletingUserIds.add(acc.id);
												return async ({ update }) => {
													await update();
													deletingUserIds.delete(acc.id);
												};
											}} class="inline-block" onsubmit={(e) => { if (!confirm('Apakah Anda yakin ingin menghapus operator ini?')) e.preventDefault(); }}>
												<input type="hidden" name="id" value={acc.id} />
												<button type="submit" disabled={deletingUserIds.has(acc.id)} class="text-rose-500 hover:text-rose-700 hover:bg-rose-50 p-2 rounded-lg font-bold text-xs transition-all flex items-center gap-1.5 ml-auto disabled:opacity-50">
													{#if deletingUserIds.has(acc.id)}
														<svg class="animate-spin w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24">
															<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
															<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
														</svg>
													{:else}
														<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
													{/if}
													Hapus
												</button>
											</form>
										{:else}
											<span class="text-xs text-gray-400 font-semibold italic pr-2">Sedang Aktif</span>
										{/if}
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>

			<!-- Add Operator Form (Right) -->
			<div class="lg:col-span-5 bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
				<h2 class="font-bold text-gray-800 font-merriweather mb-6">Tambah Operator Baru</h2>

				{#if form?.createUserError}
					<div class="mb-5 p-4 rounded-2xl bg-rose-50 text-rose-600 text-xs font-semibold border border-rose-100 flex items-center gap-2">
						<svg class="w-4.5 h-4.5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
						{form.createUserError}
					</div>
				{/if}

				<form method="POST" action="?/createUser" use:enhance={() => {
					isCreatingUser = true;
					return async ({ update }) => {
						await update();
						isCreatingUser = false;
					};
				}} class="space-y-4">
					<div>
						<label for="name" class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Nama Lengkap</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Masukkan nama operator"
							class="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all text-sm font-medium"
							required
						/>
					</div>

					<div>
						<label for="username" class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Username</label>
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Pilih username"
							class="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all text-sm font-medium"
							required
						/>
					</div>

					<div>
						<label for="password" class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Password</label>
						<div class="relative">
							<input
								type={showPassword ? 'text' : 'password'}
								name="password"
								id="password"
								placeholder="Minimal 6 karakter"
								class="w-full pl-4 pr-12 py-3 rounded-xl border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all text-sm font-medium"
								required
							/>
							<button
								type="button"
								onclick={() => showPassword = !showPassword}
								class="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-pink-500 focus:outline-none transition-colors"
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

					<div>
						<label for="role" class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Peran (Role)</label>
						<select
							name="role"
							id="role"
							class="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all text-sm font-medium bg-white"
						>
							<option value="operator">Operator (Hanya Kelola Artikel)</option>
							<option value="admin">Admin (Akses Penuh)</option>
						</select>
					</div>

					<button
						type="submit"
						disabled={isCreatingUser}
						class="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3.5 rounded-xl shadow-md shadow-pink-500/10 transition-all uppercase tracking-wider text-xs font-montserrat mt-4 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
					>
						{#if isCreatingUser}
							<svg class="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
								<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
								<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
							</svg>
							Mendaftarkan...
						{:else}
							Daftarkan Operator
						{/if}
					</button>
				</form>
			</div>
		</div>
	</main>
</div>
