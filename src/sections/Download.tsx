import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Monitor, Check } from 'lucide-react';

const downloadFeatures = [
  '完全免费，开源软件',
  '轻量级，占用资源少',
  '持续更新，社区支持',
];

export function DownloadSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="download"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial-bottom pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div
          className={`text-center transition-all duration-700 ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
        >
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">开始你的专注之旅</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            IndividualStudyBoard 完全免费，立即下载体验高效学习的乐趣
          </p>

          {/* Feature list */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {downloadFeatures.map((feature, index) => (
              <div
                key={feature}
                className={`flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50 transition-all duration-500 ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
                  }`}
                style={{
                  transitionDelay: `${200 + index * 100}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                <Check className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 transition-all duration-500 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
              }`}
            style={{
              transitionDelay: '600ms',
              transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] transition-all duration-200 glow-cyan-strong px-8"
            >
              <Monitor className="w-5 h-5 mr-2" />
              下载 Windows 版
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary transition-all duration-200 px-8"
            >
              <a
                href="https://github.com/niuzhix/IndividualStudyBoard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                查看 GitHub
              </a>
            </Button>
          </div>

          {/* Version info */}
          <p
            className={`text-sm text-muted-foreground transition-all duration-500 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
              }`}
            style={{
              transitionDelay: '700ms',
              transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            最新版本 v1.0.0 | 更新于 2026年2月
          </p>
        </div>
      </div>
    </section>
  );
}
