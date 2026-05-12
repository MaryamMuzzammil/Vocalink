import React from 'react';
import { 
  TrendingUp, 
  Users, 
  PhoneCall, 
  Clock, 
  ArrowUpRight, 
  ArrowDownRight,
  Zap,
  MessageSquare,
  ChevronRight,
  Plus,
  BarChart3,
  Package
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { motion } from 'framer-motion';

const StatCard = ({ title, value, change, isPositive, icon, delay }: { title: string, value: string, change: string, isPositive: boolean, icon: any, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <Card className="p-10 border-none bg-white/60 backdrop-blur-md shadow-2xl hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 group overflow-hidden relative rounded-[3.5rem]">
      <div className="absolute inset-0 bg-vocalink-gradient opacity-10 group-hover:opacity-30 transition-opacity" />
      <div className="absolute top-0 right-0 p-10 text-slate-100 group-hover:text-slate-200 transition-colors group-hover:scale-110 transition-transform duration-700">
        {icon}
      </div>
      <div className="flex flex-col relative z-10">
        <span className="text-[10px] font-medium text-slate-300 uppercase tracking-[0.25em] mb-4">{title}</span>
        <div className="flex items-end gap-4">
          <span className="text-4xl font-medium tracking-normal text-slate-900">{value}</span>
          <div className={`flex items-center gap-1 text-[11px] font-medium mb-1.5 px-3 py-1 rounded-full ${isPositive ? 'text-emerald-600 bg-emerald-50' : 'text-red-600 bg-red-50'}`}>
            {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
            {change}
          </div>
        </div>
      </div>
    </Card>
  </motion.div>
);

const Overview: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-1000">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-medium tracking-normal mb-3 text-slate-900"
          >
            Welcome back, Ahmed!
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 font-medium text-lg"
          >
            Your AI Voice Agent has been busy handling calls today.
          </motion.p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="purple" className="py-2 px-6 rounded-2xl border-none bg-black text-white font-medium animate-pulse">Live Now</Badge>
          <div className="h-6 w-[2px] bg-slate-100" />
          <span className="text-xs font-medium text-slate-300 uppercase tracking-[0.2em]">Last Sync: 2 mins ago</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard 
          title="Total Calls Today" 
          value="142" 
          change="+12.5%" 
          isPositive={true} 
          icon={<PhoneCall size={64} />}
          delay={0.1}
        />
        <StatCard 
          title="Orders Processed" 
          value="89" 
          change="+8.2%" 
          isPositive={true} 
          icon={<Zap size={64} />}
          delay={0.2}
        />
        <StatCard 
          title="Avg Handled Time" 
          value="1m 24s" 
          change="-4.1%" 
          isPositive={true} 
          icon={<Clock size={64} />}
          delay={0.3}
        />
        <StatCard 
          title="Conversion Rate" 
          value="62%" 
          change="+2.4%" 
          isPositive={true} 
          icon={<TrendingUp size={64} />}
          delay={0.4}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <Card className="lg:col-span-2 p-12 border-none bg-white/60 backdrop-blur-md shadow-2xl hover:shadow-2xl transition-shadow duration-500 rounded-[4rem]">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h3 className="text-2xl font-medium tracking-tight text-slate-900">Call Volume Analysis</h3>
              <p className="text-[10px] text-slate-300 uppercase tracking-[0.3em] mt-3 font-medium">Real-time engagement across languages</p>
            </div>
            <div className="flex gap-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-black shadow-lg shadow-black/20" />
                <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Urdu</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">English</span>
              </div>
            </div>
          </div>
          
          <div className="h-72 flex items-end justify-between gap-6 px-4">
            {[40, 65, 45, 90, 75, 55, 85, 60, 45, 95, 80, 65].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center group h-full justify-end">
                <div className="w-full relative flex items-center justify-center h-full">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${val}%` }}
                    transition={{ duration: 1.2, delay: i * 0.05, ease: "easeOut" }}
                    className="w-full max-w-[20px] bg-slate-100 rounded-2xl group-hover:bg-black group-hover:shadow-2xl transition-all duration-500 relative"
                  >
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-[10px] font-medium px-4 py-2 rounded-xl shadow-2xl pointer-events-none">
                      {Math.round(val * 2.5)}
                    </div>
                  </motion.div>
                </div>
                <span className="text-[9px] font-medium text-slate-200 uppercase tracking-widest mt-6">{i + 1}h</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-12 border-none bg-white/60 backdrop-blur-md shadow-2xl hover:shadow-2xl transition-shadow duration-500 rounded-[4rem]">
          <h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-12">Recent Activity</h3>
          <div className="space-y-10">
            {[
              { type: 'order', customer: 'Ahmed Khan', text: 'Zinger Burger, Fries x2', time: '5m ago', status: 'confirmed' },
              { type: 'inquiry', customer: 'Saira Pervez', text: 'Menu availability check', time: '12m ago', status: 'resolved' },
              { type: 'order', customer: 'Bilal Butt', text: 'Large Pizza Deal 1', time: '24m ago', status: 'confirmed' },
              { type: 'support', customer: 'Zainab Ali', text: 'Order status update', time: '45m ago', status: 'pending' },
            ].map((activity, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 group cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-white transition-all duration-500">
                  {activity.type === 'order' ? <Plus size={18} /> : <MessageSquare size={18} />}
                </div>
                <div className="flex-grow flex flex-col min-w-0">
                  <div className="flex justify-between items-start mb-1.5">
                    <span className="text-md font-medium truncate text-slate-900">{activity.customer}</span>
                    <span className="text-[10px] text-slate-300 whitespace-nowrap font-medium uppercase tracking-widest">{activity.time}</span>
                  </div>
                  <p className="text-xs text-slate-400 truncate leading-relaxed font-medium uppercase tracking-tight">{activity.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <Button variant="ghost" className="w-full mt-14 h-16 text-xs font-medium uppercase tracking-[0.2em] hover:bg-white/50 backdrop-blur-sm rounded-3xl border border-slate-50">View All Activity</Button>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Card className="p-10 border-none bg-white/60 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 rounded-[4rem]">
          <div className="flex items-center gap-5 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 shadow-sm">
              <TrendingUp size={24} />
            </div>
            <h4 className="text-xl font-medium tracking-tight text-slate-900">Top Items</h4>
          </div>
          <div className="space-y-6">
            {[
              { name: 'Zinger Burger', count: 124, trend: '+12%' },
              { name: 'Large Pizza', count: 76, trend: '+8%' }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-6 rounded-[2rem] bg-white/40 border border-white/50 hover:bg-white hover:shadow-xl transition-all duration-500 cursor-default">
                <span className="text-md font-medium text-slate-700">{item.name}</span>
                <div className="flex items-center gap-5">
                  <span className="text-xs font-medium text-slate-300 uppercase">{item.count}</span>
                  <Badge variant="success" className="text-[9px] border-none bg-emerald-50 text-emerald-600 font-medium px-3 py-1 rounded-full">{item.trend}</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-10 border-none bg-white/60 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 rounded-[4rem]">
          <div className="flex items-center gap-5 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 shadow-sm">
              <Package size={24} />
            </div>
            <h4 className="text-xl font-medium tracking-tight text-slate-900">Low Stock</h4>
          </div>
          <div className="space-y-6">
            {[
              { name: 'French Fries', stock: 12, unit: 'bags' },
              { name: 'Special Sauce', stock: 2, unit: 'liters' }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-6 rounded-[2rem] bg-white/40 border border-white/50 hover:bg-white hover:shadow-xl transition-all duration-500 cursor-default">
                <span className="text-md font-medium text-slate-700">{item.name}</span>
                <div className="flex items-center gap-5">
                  <span className="text-xs font-medium text-slate-300 uppercase">{item.stock} {item.unit}</span>
                  <Badge variant="danger" className="text-[9px] border-none bg-red-50 text-red-600 font-medium px-3 py-1 rounded-full">Low</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-12 border-none bg-black text-white relative overflow-hidden group rounded-[4rem] shadow-2xl shadow-black/20">
          <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-1000">
            <Zap size={140} />
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <Badge className="w-fit mb-8 bg-white/10 text-white border-none py-2 px-6 rounded-full font-medium text-[10px] uppercase tracking-widest">Action Required</Badge>
            <h4 className="text-3xl font-medium tracking-normal mb-8 leading-tight text-white">Run your first AI Call Simulation</h4>
            <p className="text-md text-white/50 mb-12 leading-relaxed font-medium">
              Test how your agent handles complex orders in Urdu before going live.
            </p>
            <Button className="mt-auto w-full h-18 bg-white text-black hover:bg-slate-100 rounded-[2rem] font-medium text-lg shadow-2xl shadow-black/10">
              Start Simulation
              <ChevronRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Overview;
