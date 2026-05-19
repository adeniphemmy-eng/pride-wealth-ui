import React from 'react';
import { Zap, Droplets, Monitor, Wifi, Phone, GraduationCap, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';

export const Bills = () => {
  const billOptions = [
    { icon: Zap, label: 'Electricity', color: 'bg-amber-50 text-amber-500', borderColor: 'border-amber-100' },
    { icon: Droplets, label: 'Water', color: 'bg-cyan-50 text-cyan-500', borderColor: 'border-cyan-100' },
    { icon: Monitor, label: 'Cable TV', color: 'bg-violet-50 text-violet-500', borderColor: 'border-violet-100' },
    { icon: Wifi, label: 'Internet', color: 'bg-blue-50 text-blue-500', borderColor: 'border-blue-100' },
    { icon: Phone, label: 'Mobile Top-up', color: 'bg-pink-50 text-pink-500', borderColor: 'border-pink-100' },
    { icon: GraduationCap, label: 'School Fees', color: 'bg-emerald-50 text-emerald-500', borderColor: 'border-emerald-100' },
  ];

  return (
    <div className="space-y-6">
      <header className="flex items-center gap-4 py-2">
        <div className="p-3 bg-amber-500 text-white rounded-2xl shadow-lg shadow-amber-100">
          <Zap className="w-6 h-6 fill-amber-200" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Pay Bills</h1>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {billOptions.map((bill, idx) => (
          <button
            key={idx}
            onClick={() => toast.info(`Paying ${bill.label}`, { description: 'Feature coming soon to web portal.' })}
            className={`flex items-center gap-4 p-4 bg-white rounded-3xl border ${bill.borderColor} hover:bg-slate-50 transition-all active:scale-[0.99] shadow-sm`}
          >
            <div className={`p-3 rounded-2xl ${bill.color}`}>
              <bill.icon className="w-6 h-6" />
            </div>
            <span className="font-bold text-slate-800 flex-1 text-left">{bill.label}</span>
            <ChevronRight className="w-5 h-5 text-slate-300" />
          </button>
        ))}
      </div>

      <div className="p-5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl text-white">
        <h3 className="font-bold mb-1">Automate Your Bills</h3>
        <p className="text-xs text-white/80 leading-relaxed mb-4">Never miss a payment. Schedule your monthly utility bills with our auto-pay feature.</p>
        <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-xs font-bold transition-colors">Setup Now</button>
      </div>
    </div>
  );
};