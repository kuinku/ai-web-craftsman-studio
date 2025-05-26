
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Briefcase, 
  ShoppingCart, 
  Camera, 
  Utensils, 
  Stethoscope, 
  GraduationCap,
  Palette,
  Code,
  Building,
  Heart,
  Plane,
  Music
} from 'lucide-react';

const templates = [
  {
    id: 'business',
    title: 'Corporate Business',
    description: 'Professional template for corporate websites and consulting firms',
    category: 'Business',
    icon: Briefcase,
    image: 'photo-1519389950473-47ba0277781c',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Store',
    description: 'Modern online store template with product showcases',
    category: 'E-commerce',
    icon: ShoppingCart,
    image: 'photo-1556742049-0cfed4f6a45d',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'portfolio',
    title: 'Creative Portfolio',
    description: 'Stunning portfolio template for designers and artists',
    category: 'Portfolio',
    icon: Camera,
    image: 'photo-1498050108023-c5249f4df085',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'restaurant',
    title: 'Restaurant & Cafe',
    description: 'Appetizing template for restaurants and food businesses',
    category: 'Food & Beverage',
    icon: Utensils,
    image: 'photo-1517248135467-4c7edcad34c4',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'medical',
    title: 'Healthcare Clinic',
    description: 'Professional template for medical practices and clinics',
    category: 'Healthcare',
    icon: Stethoscope,
    image: 'photo-1576091160399-112ba8d25d1f',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    id: 'education',
    title: 'Educational Institute',
    description: 'Academic template for schools and educational institutions',
    category: 'Education',
    icon: GraduationCap,
    image: 'photo-1523050854058-8df90110c9f1',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'agency',
    title: 'Creative Agency',
    description: 'Bold template for design agencies and creative studios',
    category: 'Agency',
    icon: Palette,
    image: 'photo-1487058792275-0ad4aaf24ca7',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'tech',
    title: 'Tech Startup',
    description: 'Modern template for tech companies and startups',
    category: 'Technology',
    icon: Code,
    image: 'photo-1461749280684-dccba630e2f6',
    color: 'from-violet-500 to-purple-500'
  },
  {
    id: 'realestate',
    title: 'Real Estate',
    description: 'Elegant template for real estate agencies and property listings',
    category: 'Real Estate',
    icon: Building,
    image: 'photo-1560518883-ce09059eeffa',
    color: 'from-slate-500 to-gray-500'
  },
  {
    id: 'wedding',
    title: 'Wedding & Events',
    description: 'Romantic template for wedding planners and event organizers',
    category: 'Events',
    icon: Heart,
    image: 'photo-1511285560929-80b456fea0bc',
    color: 'from-rose-500 to-pink-500'
  },
  {
    id: 'travel',
    title: 'Travel & Tourism',
    description: 'Adventure-ready template for travel agencies and tour operators',
    category: 'Travel',
    icon: Plane,
    image: 'photo-1488646953014-85cb44e25828',
    color: 'from-sky-500 to-blue-500'
  },
  {
    id: 'music',
    title: 'Music & Entertainment',
    description: 'Dynamic template for musicians, bands, and entertainment venues',
    category: 'Entertainment',
    icon: Music,
    image: 'photo-1493225457124-a3eb161ffa5f',
    color: 'from-amber-500 to-orange-500'
  }
];

const Templates = () => {
  const handleUseTemplate = (templateId: string) => {
    // This would typically load the template into the builder
    window.location.href = `/builder?template=${templateId}`;
  };

  return (
    <section id="templates" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose from
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Professional Templates
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Start with a professionally designed template and customize it to match your brand. 
            All templates are mobile-responsive and optimized for performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {templates.map((template) => (
            <Card
              key={template.id}
              className="group bg-black/20 border border-white/10 overflow-hidden hover:bg-black/30 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="relative">
                <div 
                  className={`h-48 bg-gradient-to-br ${template.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-lg rounded-lg p-3">
                      <template.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-white/20 backdrop-blur-lg rounded-full px-3 py-1 text-xs text-white">
                      {template.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">
                    {template.description}
                  </p>
                  
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      onClick={() => handleUseTemplate(template.id)}
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    >
                      Use Template
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      Preview
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/60 mb-6">
            Can't find what you're looking for? Start from scratch or let our AI create a custom template for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
              onClick={() => window.location.href = '/builder'}
            >
              Start from Blank
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              Generate with AI
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Templates;
