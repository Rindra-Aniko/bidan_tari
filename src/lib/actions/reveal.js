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
					node.dataset.reveal = 'visible';
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

	const observer = getSharedObserver();
	
	// Use CSS variables and data attributes to avoid inline style layout thrashing
	node.dataset.reveal = 'hidden';
	node.style.setProperty('--rev-dur', `${duration}ms`);
	if (delay > 0) node.style.setProperty('--rev-del', `${delay}ms`);
	if (x !== 0) node.style.setProperty('--rev-x', `${x}px`);
	if (y !== 30) node.style.setProperty('--rev-y', `${y}px`);

	observer.observe(node);
	observedElements.set(node, true);

	return {
		destroy() {
			if (observedElements.has(node)) {
				observer.unobserve(node);
				observedElements.delete(node);
			}
		}
	};
}
