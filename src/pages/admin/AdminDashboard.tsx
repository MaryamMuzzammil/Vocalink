import React from 'react';
import { 
  PhoneCall, Zap, 
  Search, TrendingUp, 
  ShieldCheck,
  Building2, ArrowRight,
  Lock
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  // Admin Email Check
  const isAdmin = user?.primaryEmailAddress?.emailAddress === 'admin@vocalink.ai';

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-mesh-grey flex items-center justify-center p-6 text-center">
        <Card className="max-w-md p-12 border-none bg-white/60 backdrop-blur-xl shadow-2xl rounded-[3rem] animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 rounded-[2rem] bg-red-50 flex items-center justify-center mx-auto mb-8">
            <Lock size={32} className="text-red-500" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Access Denied</h2>
          <p className="text-slate-500 mb-10 leading-relaxed font-medium">
            You do not have permission to access the platform administration area. This section is restricted to system operators.
          </p>
          <Link to="/">
            <Button className="w-full h-16 rounded-2xl font-bold text-lg">Return Home</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mesh-grey text-slate-900 p-8 space-y-10 animate-in fade-in duration-700">
      {/* Admin Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/50 pb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-[1.25rem] bg-black flex items-center justify-center shadow-2xl shadow-black/20">
            <ShieldCheck size={24} className="text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">System Overview</h2>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="purple" className="text-[8px] border-none bg-purple-100 text-purple-600">Platform Admin</Badge>
              <span className="text-[10px] font-medium text-slate-300 uppercase tracking-widest">Active Node: Karachi-S1</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center overflow-hidden shadow-lg">
                <img src={`https://i.pravatar.cc/150?u=${i}`} alt="admin" className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-4 border-white bg-black flex items-center justify-center text-[10px] font-bold text-white shadow-lg">+2</div>
          </div>
          <Button variant="secondary" size="sm" className="h-11 px-6 rounded-xl border border-white/50 bg-white/50 backdrop-blur-md">Manage Team</Button>
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: 'Total Businesses', val: '1,482', change: '+24 this week', icon: <Building2 size={64} />, color: 'text-slate-900' },
          { label: 'Active Agents', val: '3,109', change: '+12% growth', icon: <Zap size={64} />, color: 'text-slate-900' },
          { label: 'Total Calls', val: '142.5k', change: '8.2M minutes', icon: <PhoneCall size={64} />, color: 'text-slate-900' },
          { label: 'Platform Revenue', val: '$84,200', change: '+18.4%', icon: <TrendingUp size={64} />, color: 'text-emerald-600' },
        ].map((stat, i) => (
          <Card key={i} className="p-8 relative overflow-hidden group border-none bg-white/60 backdrop-blur-md shadow-xl rounded-[2.5rem]">
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-slate-900 group-hover:scale-110 transition-transform duration-700">
              {stat.icon}
            </div>
            <p className="text-[10px] font-medium text-slate-300 uppercase tracking-widest mb-4">{stat.label}</p>
            <p className="text-4xl font-bold mb-3 text-slate-900 tracking-tight">{stat.val}</p>
            <div className={`flex items-center gap-2 text-[10px] font-bold ${stat.color} uppercase tracking-widest bg-white/40 w-fit px-3 py-1 rounded-full border border-white/50`}>
              {stat.change}
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Businesses Table */}
        <Card className="lg:col-span-2 overflow-hidden border-none bg-white/60 backdrop-blur-md shadow-2xl rounded-[3.5rem] border border-white/50">
          <div className="p-8 border-b border-white/50 flex items-center justify-between">
            <h3 className="text-xl font-bold tracking-tight text-slate-900">Registered Businesses</h3>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                <input 
                  type="text" 
                  placeholder="Filter businesses..." 
                  className="bg-white/50 border border-white/50 rounded-xl py-2.5 pl-12 pr-6 text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                />
              </div>
              <Button variant="secondary" size="sm" className="h-10 px-4 rounded-xl">Export</Button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-medium text-slate-300 uppercase tracking-[0.2em] border-b border-white/50">
                  <th className="px-8 py-6">Business</th>
                  <th className="px-8 py-6">Owner</th>
                  <th className="px-8 py-6">Plan</th>
                  <th className="px-8 py-6">Agents</th>
                  <th className="px-8 py-6">Status</th>
                  <th className="px-8 py-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/30">
                {[
                  { name: 'The Gourmet Burger', owner: 'Ahmed Khan', plan: 'Business', agents: 1, status: 'Active' },
                  { name: 'City Clinic', owner: 'Dr. Sarah', plan: 'Starter', agents: 1, status: 'Active' },
                  { name: 'Luxe Salon', owner: 'Maria B.', plan: 'Enterprise', agents: 3, status: 'Pending' },
                  { name: 'Rapid Repair', owner: 'M. Bilal', plan: 'Business', agents: 2, status: 'Active' },
                  { name: 'Apex Tuition', owner: 'Kashif R.', plan: 'Starter', agents: 1, status: 'Inactive' },
                ].map((bus, i) => (
                  <tr key={i} className="hover:bg-white/40 transition-colors group">
                    <td className="px-8 py-6">
                      <span className="text-md font-bold text-slate-700">{bus.name}</span>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-xs font-medium text-slate-400">{bus.owner}</span>
                    </td>
                    <td className="px-8 py-6">
                      <Badge variant={bus.plan === 'Enterprise' ? 'purple' : bus.plan === 'Business' ? 'info' : 'default'} className="text-[8px] border-none py-1 px-3">
                        {bus.plan}
                      </Badge>
                    </td>
                    <td className="px-8 py-6 text-xs font-medium text-slate-500">{bus.agents}</td>
                    <td className="px-8 py-6">
                      {bus.status === 'Active' ? <Badge variant="success" className="border-none py-1 px-3">Active</Badge> : 
                       bus.status === 'Pending' ? <Badge variant="warning" className="border-none py-1 px-3">Pending</Badge> : 
                       <Badge variant="danger" className="border-none py-1 px-3">Inactive</Badge>}
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="text-slate-200 hover:text-black transition-colors transform group-hover:translate-x-1 duration-300">
                        <ArrowRight size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 text-center">
            <button className="text-[10px] font-bold text-slate-300 uppercase tracking-widest hover:text-slate-900 transition-colors">View All Businesses</button>
          </div>
        </Card>

        {/* Sidebar Alerts */}
        <div className="space-y-8">
          <Card className="p-10 border-none bg-black text-white rounded-[3rem] shadow-2xl shadow-black/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-1000">
              <Zap size={100} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <ShieldCheck size={20} className="text-white" />
                </div>
                <h4 className="font-bold text-white tracking-tight">System Health</h4>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-white/40 uppercase tracking-widest">API Response</span>
                  <span className="text-xs font-bold text-emerald-400">92ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-white/40 uppercase tracking-widest">Voice Latency</span>
                  <span className="text-xs font-bold text-emerald-400">0.3s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-white/40 uppercase tracking-widest">Queue Status</span>
                  <Badge variant="success" className="text-[7px] border-none bg-emerald-500/20 text-emerald-400">Optimal</Badge>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-10 border-none bg-white/60 backdrop-blur-md shadow-2xl rounded-[3rem] border border-white/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                <Zap size={20} className="text-amber-500" />
              </div>
              <h4 className="font-bold text-slate-900 tracking-tight">Urgent Alerts</h4>
            </div>
            <div className="space-y-5">
              {[
                { title: 'Billing Issue', desc: 'Luxe Salon payment failed', time: '2h ago' },
                { title: 'High Latency', desc: 'Node Karachi-S1 spike', time: '4h ago' }
              ].map((alert, i) => (
                <div key={i} className="p-6 rounded-[2rem] bg-white/40 border border-white/50 hover:bg-white transition-all duration-500 group">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-slate-700">{alert.title}</span>
                    <span className="text-[9px] font-medium text-slate-300 uppercase">{alert.time}</span>
                  </div>
                  <p className="text-[10px] font-medium text-slate-400 leading-relaxed group-hover:text-slate-600">{alert.desc}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
