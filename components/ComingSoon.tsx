
import React, { useState } from 'react';
import FeatureCard from './FeatureCard';

const ComingSoon: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');

    try {
      // REPLACE 'YOUR_FORMSPARK_ID' with your actual Form ID from Formspark.io
      const FORMSPARK_ACTION_URL = "https://submit-form.com/YOUR_FORMSPARK_ID";

      const response = await fetch(FORMSPARK_ACTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: email,
          message: 'New Waitlist Registration',
        }),
      });

      if (response.ok) {
        setStatus('submitted');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-24 overflow-hidden relative">
      {/* Background blobs for aesthetic */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Logo */}
      <div className="flex items-center gap-3 mb-12 animate-bounce">
        <div className="w-12 h-12 bg-gradient-main rounded-xl flex items-center justify-center shadow-lg shadow-purple-200">
           <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
             <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
           </svg>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-3xl font-bold tracking-tight text-gray-800">Automate Reply</span>
          <span className="text-xs font-semibold text-gray-400 tracking-wider -mt-1 uppercase">automatereply.com</span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="text-center max-w-2xl mx-auto z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          Coming Soon
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
          One Platform. <span className="gradient-text">All Your Replies.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
          The ultimate multi-channel auto-reply platform. Effortlessly manage and automate conversations across 
          Socials, Emails, and Web Chat from one powerful rules-based engine.
        </p>

        {/* Signup Form */}
        <div className="max-w-md mx-auto mb-16">
          {status !== 'submitted' ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input type="checkbox" name="_honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                value={email}
                disabled={status === 'submitting'}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-2xl border-2 border-gray-100 bg-white focus:border-purple-500 focus:outline-none transition-all shadow-sm text-lg text-gray-900 disabled:bg-gray-50"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-gradient-main text-white px-8 py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-all shadow-lg active:scale-95 whitespace-nowrap disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending...' : 'Get Early Access'}
              </button>
            </form>
          ) : (
            <div className="bg-green-50 text-green-700 px-6 py-4 rounded-2xl font-medium border border-green-100 animate-in fade-in zoom-in duration-500">
              🎉 You're on the list! We'll notify you as soon as we launch.
            </div>
          )}
          
          {status === 'error' && (
            <p className="mt-4 text-sm text-red-500">Something went wrong. Please try again later.</p>
          )}
          
          <p className="mt-4 text-sm text-gray-400 tracking-wide">Join our private beta group at automatereply.com</p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full px-4 z-10">
        <FeatureCard 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>}
          title="Multi-Channel"
          description="Sync your Email, Instagram, WhatsApp, Web Chat and Telegram. One unified automation hub to rule them all."
        />
        <FeatureCard 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}
          title="Auto-Reply"
          description="Build custom reply triggers based on your specific business rules to handle FAQs instantly, 24/7."
        />
        <FeatureCard 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>}
          title="Smart Analytics"
          description="Track conversion rates and response performance across all automated channels in real-time."
        />
      </div>

      {/* Footer */}
      <footer className="mt-20 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Automate Reply. Smart Multi-Channel Automation.
      </footer>
    </div>
  );
};

export default ComingSoon;
