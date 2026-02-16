import { Button } from '@/components/ui/button';
import { Github, Download, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial-bottom pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in-up opacity-0">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-primary">免费开源的学习计时工具</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up opacity-0 animation-delay-100">
          <span className="text-gradient">专注学习</span>
          <br />
          <span className="text-white">从计时开始</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 animation-delay-200">
          IndividualStudyBoard 是一款简洁优雅的学习专注计时工具，
          <br className="hidden sm:block" />
          助你高效管理学习时间，提升专注力
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up opacity-0 animation-delay-300">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] transition-all duration-200 glow-cyan group px-8"
          >
            <a href="#download">
              <Download className="w-5 h-5 mr-2" />
              立即下载
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-border hover:bg-secondary transition-all duration-200 px-8"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub 仓库
            </a>
          </Button>
        </div>

        {/* App Screenshot */}
        <div className="relative max-w-4xl mx-auto animate-scale-in opacity-0 animation-delay-500">
          {/* Glow effect behind screenshot */}
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-3xl transform scale-90" />
          
          {/* Screenshot container */}
          <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm glow-cyan">
            <img
              src="/images/app-screenshot.png"
              alt="IndividualStudyBoard 应用截图"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
}
