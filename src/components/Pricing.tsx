
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Crown, Zap } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for getting started',
    features: [
      '3 websites',
      'Basic templates',
      'AI design assistant',
      'Mobile responsive',
      'Basic support'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For growing businesses',
    features: [
      'Unlimited websites',
      'Premium templates',
      'Advanced AI features',
      'Custom domains',
      'Priority support',
      'Analytics dashboard',
      'Team collaboration'
    ],
    cta: 'Start Pro Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    description: 'For large organizations',
    features: [
      'Everything in Pro',
      'White-label solution',
      'API access',
      'Dedicated support',
      'Custom integrations',
      'Advanced security',
      'Training & onboarding'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

const Pricing = () => {
  const { user, setShowAuthModal, setAuthMode } = useAuth();

  const handlePlanSelect = (planName: string) => {
    if (!user) {
      setAuthMode('register');
      setShowAuthModal(true);
      return;
    }

    if (planName === 'Free') {
      // Already have free access
      return;
    }

    // Simulate payment flow
    console.log(`Processing payment for ${planName} plan`);
    alert(`Payment processing for ${planName} plan would be implemented here with Stripe integration`);
  };

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. Upgrade or downgrade at any time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-black/20 border rounded-3xl p-8 ${
                plan.popular 
                  ? 'border-purple-500 scale-105 bg-gradient-to-b from-purple-500/10 to-pink-500/10' 
                  : 'border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Crown className="h-4 w-4 mr-2" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/70 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/70 ml-2">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-white/80">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button
                onClick={() => handlePlanSelect(plan.name)}
                className={`w-full py-6 text-lg font-medium rounded-2xl ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                    : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                }`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.popular && <Zap className="mr-2 h-5 w-5" />}
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
