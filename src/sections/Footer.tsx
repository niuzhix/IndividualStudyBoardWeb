import { Clock, Github, Heart } from 'lucide-react';

const footerLinks = {
  product: [
    { label: '功能介绍', href: '#features' },
    { label: '下载应用', href: '#download' },
    { label: '更新日志', href: '#' },
  ],
  resources: [
    { label: '使用文档', href: '#' },
    { label: '常见问题', href: '#' },
    { label: '反馈建议', href: '#' },
  ],
  community: [
    { label: 'GitHub', href: 'https://github.com', external: true },
    { label: '讨论区', href: '#', external: true },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <span className="font-semibold text-lg">IndividualStudyBoard</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              一款简洁优雅的学习专注计时工具，助你高效管理学习时间，提升专注力。
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">产品</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">资源</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">社区</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <Github className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024-2026 IndividualStudyBoard. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              用 <Heart className="w-4 h-4 text-red-500 fill-red-500" /> 制作
            </span>
            <span>|</span>
            <span>MIT License</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
