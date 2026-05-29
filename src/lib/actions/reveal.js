export function reveal(node, options = {}) {
        const { delay = 0, duration = 600, threshold = 0.1 } = options;
        const x = options.x ?? 0;
        const y = options.y ?? (options.x !== undefined ? 0 : 30);

        node.style.opacity = '0';
        
        let transformParts = [];
        if (x !== 0) transformParts.push(`translateX(${x}px)`);
        if (y !== 0) transformParts.push(`translateY(${y}px)`);
        
        node.style.transform = transformParts.length > 0 ? transformParts.join(' ') : 'translateY(0px)';
        node.style.transition = `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`;

        let observer;
        
        // Delay observation until DOM and SvelteKit transitions have mounted
        const frameId = requestAnimationFrame(() => {
                observer = new IntersectionObserver(
                        (entries) => {
                                entries.forEach((entry) => {
                                        if (entry.isIntersecting) {
                                                node.style.opacity = '1';
                                                node.style.transform = 'none';
                                                observer.unobserve(node);
                                        }
                                });
                        },
                        { threshold }
                );
                observer.observe(node);
        });

        return {
                destroy() {
                        cancelAnimationFrame(frameId);
                        if (observer) {
                                observer.disconnect();
                        }
                }
        };
}
