import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, ShieldCheck, Mail, Lock, ArrowRight, UserCheck } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { motion } from 'framer-motion';

const LoginPage: React.FC = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAdminMode) {
      localStorage.setItem('auth_role', 'admin');
      navigate('/admin');
    } else {
      localStorage.setItem('auth_role', 'user');
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col relative overflow-hidden font-sans">
      {/* Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-slate-50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-slate-50 rounded-full blur-[120px] pointer-events-none" />
      
      <header className="p-8 relative z-10">
        <Link to="/" className="flex items-center gap-3 w-fit group">
          <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shadow-2xl shadow-black/10 group-hover:scale-110 transition-transform">
            <Zap className="w-6 h-6 text-white" fill="white" />
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-900">Vocalink</span>
        </Link>
      </header>

      <main className="flex-grow flex items-center justify-center p-6 relative z-10">
        <div className="w-full max-w-[1100px] grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block"
          >
            <Badge variant="purple" className="mb-6">Welcome Back</Badge>
            <h1 className="text-5xl font-black mb-8 tracking-tighter leading-tight text-slate-900">
              Manage your AI <br /> voice employee.
            </h1>
            <p className="text-lg text-slate-400 mb-12 max-w-md leading-relaxed font-medium">
              Vocalink is helping {isAdminMode ? 'you manage the entire platform' : 'your business handle customer calls effortlessly'}. Log in to access your dashboard.
            </p>
            
            <div className="space-y-6">
              {[
                "Real-time call monitoring",
                "Inventory & Order management",
                "Advanced Urdu NLP analytics",
                "Global system health check"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                    <ShieldCheck className="w-3 h-3 text-slate-300 group-hover:text-white" />
                  </div>
                  <p className="text-slate-500 font-bold text-sm tracking-tight">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-10 border-none bg-white card-shadow relative overflow-hidden rounded-[3rem]">
              {/* Form Header */}
              <div className="text-center mb-10">
                <h2 className="text-3xl font-black mb-3 tracking-tighter text-slate-900">
                  {isAdminMode ? 'Admin Portal' : 'Partner Login'}
                </h2>
                <p className="text-sm text-slate-400 font-bold">Enter your credentials to continue.</p>
              </div>

              {/* Mode Switcher */}
              <div className="flex bg-slate-50 p-1.5 rounded-2xl mb-10 border border-slate-100">
                <button 
                  onClick={() => setIsAdminMode(false)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-black transition-all ${!isAdminMode ? 'bg-white text-black shadow-sm' : 'text-slate-300 hover:text-slate-500'}`}
                >
                  <UserCheck size={14} />
                  Business
                </button>
                <button 
                  onClick={() => setIsAdminMode(true)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-black transition-all ${isAdminMode ? 'bg-white text-black shadow-sm' : 'text-slate-300 hover:text-slate-500'}`}
                >
                  <ShieldCheck size={14} />
                  System Admin
                </button>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-300 uppercase tracking-widest ml-1">Email Address</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-black transition-colors" />
                    <input 
                      type="email" 
                      required
                      placeholder="name@business.com"
                      className="w-full bg-slate-50 border-none rounded-[1.5rem] py-4 pl-12 pr-6 text-sm font-bold text-slate-700 focus:ring-1 focus:ring-black/5 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center ml-1">
                    <label className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Password</label>
                    <a href="#" className="text-[10px] font-black text-slate-400 hover:text-black transition-colors uppercase tracking-widest">Forgot?</a>
                  </div>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-black transition-colors" />
                    <input 
                      type="password" 
                      required
                      placeholder="••••••••"
                      className="w-full bg-slate-50 border-none rounded-[1.5rem] py-4 pl-12 pr-6 text-sm font-bold text-slate-700 focus:ring-1 focus:ring-black/5 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <Button className="w-full h-14 rounded-[1.5rem] mt-4 shadow-2xl shadow-black/10 group">
                  Sign In to {isAdminMode ? 'Admin' : 'Dashboard'}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              {!isAdminMode && (
                <p className="mt-10 text-center text-sm font-bold text-slate-400">
                  Don't have an account? <Link to="/signup" className="text-black hover:underline">Sign up for free</Link>
                </p>
              )}
            </Card>
          </motion.div>
        </div>
      </main>

      <footer className="p-8 text-center relative z-10">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">© 2026 Vocalink AI — Built for the future of SMEs.</p>
      </footer>
    </div>
  );
};

export default LoginPage;
