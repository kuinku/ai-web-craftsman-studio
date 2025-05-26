
import React from 'react';
import { Wand2, Palette, Code, Smartphone, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'AI-Powered Design',
    description: 'Tell our AI what you want, and watch as it creates beautiful designs tailored to your vision.'
  },
  {
    icon: Palette,
    title: 'Smart Color Schemes',
    description: 'Automatically generate professional color palettes that match your brand and industry.'
  },
  {
    icon: Code,
    title: 'Clean Code Export',
    description: 'Export production-ready HTML, CSS, and JavaScript code that follows best practices.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Every website is automatically optimized for mobile, tablet, and desktop devices.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Build websites 10x faster with our intelligent drag-and-drop interface.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with SSL certificates and regular security audits.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Modern Websites
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Everything you need to create professional websites that convert visitors into customers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-black/20 border border-white/10 rounded-2xl p-8 hover:bg-black/30 transition-all duration-300 hover:scale-105"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-3 w-fit mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
