// Shared IntersectionObserver for all reveal elements (much more efficient than one per element)
let sharedObserver = null;
const observedElements = new Map();

function getSharedObserver() {
	if (sharedObserver) return sharedObserver;
	
	sharedObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const node = entry.target;
					node.style.opacity = '1';
					node.style.transform = 'none';
					sharedObserver.unobserve(node);
					observedElements.delete(node);
				}
			});
		},
		{ threshold: 0.1 }
	);
	
	return sharedObserver;
}

export function reveal(node, options = {}) {
	const { delay = 0, duration = 600 } = options;
	const x = options.x ?? 0;
	const y = options.y ?? (options.x !== undefined ? 0 : 30);

	node.style.opacity = '0';
	
	let transformParts = [];
	if (x !== 0) transformParts.push(`translateX(${x}px)`);
	if (y !== 0) transformParts.push(`translateY(${y}px)`);
	
	node.style.transform = transformParts.length > 0 ? transformParts.join(' ') : 'translateY(0px)';
	node.style.transition = `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`;

	const observer = getSharedObserver();
	// Delay observation until DOM and SvelteKit transitions have mounted
	const frameId = requestAnimationFrame(() => {
		observer.observe(node);
		observedElements.set(node, true);
	});

	return {
		destroy() {
			cancelAnimationFrame(frameId);
			if (observedElements.has(node)) {
				observer.unobserve(node);
				observedElements.delete(node);
			}
		}
	};
}
