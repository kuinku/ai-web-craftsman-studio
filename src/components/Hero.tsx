
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Hero = () => {
  const { user, setShowAuthModal, setAuthMode } = useAuth();

  const handleGetStarted = () => {
    if (user) {
      // Redirect to builder
      window.location.href = '/builder';
    } else {
      setAuthMode('register');
      setShowAuthModal(true);
    }
  };

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-8">
          <Sparkles className="h-4 w-4 text-purple-400" />
          <span className="text-purple-300 text-sm">Powered by AI Technology</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Build Stunning Websites
          <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            With AI Magic
          </span>
        </h1>
        
        <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Create professional websites in minutes, not hours. Our AI-powered builder understands your vision 
          and brings it to life with drag-and-drop simplicity and intelligent design suggestions.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button
            size="lg"
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-4 rounded-full"
          >
            {user ? 'Open Builder' : 'Start Building Free'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4 rounded-full"
          >
            <Zap className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>
        
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent blur-3xl"></div>
          <div className="relative bg-black/40 border border-white/10 rounded-2xl p-2 backdrop-blur-lg">
            <img
              src="/placeholder.svg"
              alt="AI Web Builder Interface"
              className="w-full rounded-xl opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
