import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';

const SignupPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col relative overflow-hidden font-sans">
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-slate-50 rounded-full blur-[120px] pointer-events-none" />
      
      <header className="p-8">
        <Link to="/" className="flex items-center gap-3 w-fit">
          <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shadow-lg shadow-black/10">
            <Zap className="w-6 h-6 text-white" fill="white" />
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-900">Vocalink</span>
        </Link>
      </header>

      <main className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-black mb-6 tracking-tight text-slate-900">Start your journey with <span className="text-slate-400">Vocalink.</span></h1>
            <p className="text-slate-500 mb-10 leading-relaxed font-medium">
              Join thousands of businesses that are automating their customer calls and growing their operations with AI.
            </p>
            
            <div className="space-y-6">
              {[
                "Launch your agent in under 10 minutes",
                "Full support for Urdu & Roman Urdu",
                "No credit card required for 14 days",
                "Dedicated Pakistani support team"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <p className="text-slate-600 text-sm font-bold tracking-tight">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-10 border-none bg-white card-shadow rounded-[3rem]">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black mb-2 text-slate-900">Create Business Account</h2>
              <p className="text-sm text-slate-400 font-bold">Enter your details to get started.</p>
            </div>

            {/* Clerk Signup Placeholder */}
            <div className="space-y-4">
              <Button 
                className="w-full h-14 bg-[#6C47FF] hover:bg-[#5b3ce5] rounded-[1.5rem] shadow-lg shadow-purple-500/10"
                onClick={() => {
                  localStorage.setItem('auth_role', 'user');
                  navigate('/dashboard');
                }}
              >
                Sign up with Clerk
              </Button>
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-50"></div></div>
                <div className="relative flex justify-center text-[10px] font-black uppercase"><span className="bg-white px-4 text-slate-300 tracking-widest">or</span></div>
              </div>
              <Button variant="outline" className="w-full h-14 rounded-[1.5rem] border-slate-100 hover:bg-slate-50">
                Continue with Google
              </Button>
            </div>

            <p className="mt-8 text-center text-sm font-bold text-slate-400">
              Already have an account? <Link to="/login" className="text-black hover:underline">Log in</Link>
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SignupPage;
