import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import {
  Clock,
  Timer,
  Layout,
  Palette,
  BarChart3,
  Keyboard,
} from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '大屏时间显示',
    description: '超大字体时间显示，清晰易读，让你随时掌握时间进度',
  },
  {
    icon: Timer,
    title: '专注计时模式',
    description: '支持番茄钟、正计时、倒计时多种模式，科学规划学习时间',
  },
  {
    icon: Layout,
    title: '极简界面设计',
    description: '无干扰的深色界面，让你专注于学习本身，不受打扰',
  },
  {
    icon: Palette,
    title: '自定义主题',
    description: '支持多种配色方案，打造属于你的专属学习空间',
  },
  {
    icon: BarChart3,
    title: '学习数据统计',
    description: '记录每日学习时长，可视化展示学习进度',
  },
  {
    icon: Keyboard,
    title: '快捷操作',
    description: '支持全局快捷键，一键开始/暂停计时',
  },
];

export function Features() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">强大功能</span>
            <span className="text-white">，简洁体验</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            IndividualStudyBoard 提供丰富的功能，助你专注学习，提升效率
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleItems.has(index);

            return (
              <div
                key={feature.title}
                ref={(el) => { itemRefs.current[index] = el; }}
                className={`transition-all duration-600 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${(index % 3) * 100}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                <Card className="h-full p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 card-glow group">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
