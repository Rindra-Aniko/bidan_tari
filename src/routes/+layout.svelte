<script>
        import './layout.css';
        import Navbar from '$lib/components/Navbar.svelte';
        import Footer from '$lib/components/Footer.svelte';
        import WhatsAppWidget from '$lib/components/WhatsAppWidget.svelte';
        import { page, navigating } from '$app/stores';
        import { onNavigate } from '$app/navigation';

        onNavigate((navigation) => {
                if (!document.startViewTransition) return;

                return new Promise((resolve) => {
                        document.startViewTransition(async () => {
                                resolve();
                                await navigation.complete;
                        });
                });
        });

        const { children } = $props();
</script>

{#if $navigating}
	<div class="fixed top-0 left-0 right-0 h-1 bg-pink-100/50 z-[9999] overflow-hidden">
		<div class="h-full bg-pink-500 w-full animate-loading-bar origin-left"></div>
	</div>
{/if}

{#if !$page.url.pathname.startsWith('/admin')}
	<Navbar />
{/if}

{@render children()}

{#if !$page.url.pathname.startsWith('/admin')}
	<Footer />
	<WhatsAppWidget />
{/if}

<style>
	@keyframes loading-bar {
		0% {
			transform: scaleX(0);
			transform-origin: 0% 50%;
		}
		50% {
			transform: scaleX(0.7);
			transform-origin: 0% 50%;
		}
		50.1% {
			transform: scaleX(0.7);
			transform-origin: 100% 50%;
		}
		100% {
			transform: scaleX(0);
			transform-origin: 100% 50%;
		}
	}
	.animate-loading-bar {
		animation: loading-bar 1.5s infinite ease-in-out;
	}
</style>