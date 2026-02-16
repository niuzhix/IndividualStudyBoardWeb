import { useEffect, useRef, useState } from 'react';

const showcases = [
  {
    title: '清晰的时间显示',
    description:
      '超大字体显示当前时间，日期信息一目了然。深色背景配合高对比度文字，在任何光线环境下都清晰可读。',
    image: '/images/app-screenshot.png',
    reverse: false,
  }
];

export function Showcase() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0d1a1f] to-background pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">简洁而不简单</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            每一个功能都经过精心设计，只为给你最好的使用体验
          </p>
        </div>

        {/* Showcase Items */}
        <div className="space-y-24 sm:space-y-32">
          {showcases.map((showcase, index) => {
            const isVisible = visibleItems.has(index);

            return (
              <div
                key={showcase.title}
                ref={(el) => { itemRefs.current[index] = el; }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${showcase.reverse ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                {/* Image */}
                <div
                  className={`relative transition-all duration-700 ${isVisible
                      ? 'opacity-100 translate-x-0'
                      : `opacity-0 ${showcase.reverse ? 'translate-x-8' : '-translate-x-8'}`
                    }`}
                  style={{
                    order: showcase.reverse ? 2 : 1,
                    transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-primary/15 blur-3xl rounded-3xl transform scale-90" />

                  {/* Image container */}
                  <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm glow-cyan">
                    <img
                      src={showcase.image}
                      alt={showcase.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`transition-all duration-700 ${isVisible
                      ? 'opacity-100 translate-x-0'
                      : `opacity-0 ${showcase.reverse ? '-translate-x-8' : 'translate-x-8'}`
                    }`}
                  style={{
                    order: showcase.reverse ? 1 : 2,
                    transitionDelay: '200ms',
                    transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                    {showcase.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {showcase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
