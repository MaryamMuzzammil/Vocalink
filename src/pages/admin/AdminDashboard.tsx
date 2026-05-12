import React from 'react';
import { 
  PhoneCall, Zap, 
  Search, TrendingUp, 
  ShieldCheck,
  Building2, ArrowRight
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 p-8 space-y-10 animate-in fade-in duration-700">
      {/* Admin Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-50 pb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-[1.25rem] bg-slate-50 flex items-center justify-center">
            <ShieldCheck size={24} className="text-slate-900" />
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">System Overview</h2>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="info" className="text-[8px] border-none">Platform Admin</Badge>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Active Node: Karachi-S1</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden shadow-sm">
                <img src={`https://i.pravatar.cc/150?u=${i}`} alt="admin" className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-white bg-black flex items-center justify-center text-[10px] font-bold text-white shadow-sm">+2</div>
          </div>
          <Button variant="secondary" size="sm" className="h-9">Manage Team</Button>
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Businesses', val: '1,482', change: '+24 this week', icon: <Building2 size={64} />, color: 'text-slate-900' },
          { label: 'Active Agents', val: '3,109', change: '+12% growth', icon: <Zap size={64} />, color: 'text-slate-900' },
          { label: 'Total Calls', val: '142.5k', change: '8.2M minutes', icon: <PhoneCall size={64} />, color: 'text-slate-900' },
          { label: 'Platform Revenue', val: '$84,200', change: '+18.4%', icon: <TrendingUp size={64} />, color: 'text-emerald-600' },
        ].map((stat, i) => (
          <Card key={i} className="p-6 relative overflow-hidden group border-none bg-slate-50">
             <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity text-slate-900">
              {stat.icon}
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{stat.label}</p>
            <p className="text-3xl font-black mb-2 text-slate-900">{stat.val}</p>
            <p className={`text-[10px] font-bold ${stat.color} uppercase tracking-widest`}>{stat.change}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Businesses Table */}
        <Card className="lg:col-span-2 overflow-hidden border-none bg-white card-shadow">
          <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
            <h3 className="text-xl font-bold tracking-tight text-slate-900">Registered Businesses</h3>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-300" />
                <input 
                  type="text" 
                  placeholder="Filter businesses..." 
                  className="bg-white border border-slate-100 rounded-lg py-1.5 pl-9 pr-4 text-xs font-bold text-slate-700 focus:outline-none focus:ring-1 focus:ring-black/5"
                />
              </div>
              <Button variant="secondary" size="sm" className="h-8">Export</Button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] border-b border-slate-50">
                  <th className="px-6 py-4">Business</th>
                  <th className="px-6 py-4">Owner</th>
                  <th className="px-6 py-4">Plan</th>
                  <th className="px-6 py-4">Agents</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[
                  { name: 'The Gourmet Burger', owner: 'Ahmed Khan', plan: 'Business', agents: 1, status: 'Active' },
                  { name: 'City Clinic', owner: 'Dr. Sarah', plan: 'Starter', agents: 1, status: 'Active' },
                  { name: 'Luxe Salon', owner: 'Maria B.', plan: 'Enterprise', agents: 3, status: 'Pending' },
                  { name: 'Rapid Repair', owner: 'M. Bilal', plan: 'Business', agents: 2, status: 'Active' },
                  { name: 'Apex Tuition', owner: 'Kashif R.', plan: 'Starter', agents: 1, status: 'Inactive' },
                ].map((bus, i) => (
                  <tr key={i} className="hover:bg-slate-50/30 transition-colors group">
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-slate-700">{bus.name}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-bold text-slate-400">{bus.owner}</span>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={bus.plan === 'Enterprise' ? 'purple' : bus.plan === 'Business' ? 'info' : 'default'} className="text-[8px] border-none">
                        {bus.plan}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-xs font-bold text-slate-500">{bus.agents}</td>
                    <td className="px-6 py-4">
                      {bus.status === 'Active' ? <Badge variant="success" className="border-none">Active</Badge> : 
                       bus.status === 'Pending' ? <Badge variant="warning" className="border-none">Pending</Badge> : 
                       <Badge variant="danger" className="border-none">Inactive</Badge>}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-200 hover:text-black transition-colors">
                        <ArrowRight size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-slate-50 text-center">
            <button className="text-[10px] font-bold text-slate-300 uppercase tracking-widest hover:text-slate-900 transition-colors">View All Businesses</button>
          </div>
        </Card>

        {/* Sidebar Alerts */}
        <div className="space-y-6">
          <Card className="p-8 border-none bg-black">
            <div className="flex items-center gap-3 mb-6">
              <Zap size={20} className="text-white" />
              <h4 className="font-bold text-white">System Health</h4>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-white/40 uppercase tracking-widest">API Response</span>
                <span className="text-xs font-black text-emerald-400">92ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Voice Latency</span>
                <span className="text-xs font-black text-emerald-400">0.3s</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Queue Status</span>
                <Badge variant="success" className="text-[7px] border-none bg-emerald-500/20 text-emerald-400">Optimal</Badge>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-none bg-white card-shadow">
            <div className="flex items-center gap-3 mb-6">
              <Zap size={20} className="text-amber-500" />
              <h4 className="font-bold text-slate-900">Urgent Alerts</h4>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Billing Issue', desc: 'Luxe Salon payment failed', time: '2h ago' },
                { title: 'High Latency', desc: 'Node Karachi-S1 spike', time: '4h ago' }
              ].map((alert, i) => (
                <div key={i} className="p-4 rounded-[1.5rem] bg-slate-50 border border-slate-100">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs font-bold text-slate-700">{alert.title}</span>
                    <span className="text-[9px] font-bold text-slate-300 uppercase">{alert.time}</span>
                  </div>
                  <p className="text-[10px] font-bold text-slate-400">{alert.desc}</p>
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
