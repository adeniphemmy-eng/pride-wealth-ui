import React from 'react';
import { User, Shield, Settings, HelpCircle, LogOut, ChevronRight, Copy, CreditCard, ShieldCheck, ShieldAlert } from 'lucide-react';
import { toast } from 'sonner';

interface AccountProps {
  kycLevel: number;
  onStartKyc: () => void;
}

export const Account: React.FC<AccountProps> = ({ kycLevel, onStartKyc }) => {
  const userName = 'Ade';
  const userPhone = '07025138462';
  const accountNumber = '9876543210';

  const menuItems = [
    { icon: User, label: 'Profile Information', color: 'text-blue-500' },
    { icon: CreditCard, label: 'Virtual Card', color: 'text-amber-500' },
    { icon: Shield, label: 'Security & Privacy', color: 'text-emerald-500' },
    { icon: Settings, label: 'App Settings', color: 'text-slate-500' },
    { icon: HelpCircle, label: 'Support Center', color: 'text-violet-500' },
  ];

  return (
    <div className="space-y-8">
      <header className="flex flex-col items-center pt-4">
        <div className="relative">
          <div className="w-24 h-24 rounded-[32px] bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center text-white text-3xl font-black shadow-xl shadow-violet-100 ring-4 ring-white">
            {userName[0]}
          </div>
          <div className="absolute -bottom-1 -right-1 p-1.5 bg-emerald-500 rounded-full border-4 border-white">
            <ShieldCheck className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
        <div className="text-center mt-4">
          <h2 className="text-xl font-black text-slate-900">{userName}</h2>
          <p className="text-slate-400 font-bold text-sm tracking-tight">{userPhone}</p>
        </div>
        
        <button 
          onClick={kycLevel < 2 ? onStartKyc : undefined}
          className={`mt-4 px-6 py-2 rounded-full border flex items-center gap-2 transition-all ${
            kycLevel >= 2 
              ? 'bg-emerald-50 border-emerald-100 text-emerald-600' 
              : 'bg-amber-50 border-amber-100 text-amber-600 hover:bg-amber-100'
          }`}
        >
          {kycLevel >= 2 ? (
            <ShieldCheck className="w-4 h-4" />
          ) : (
            <ShieldAlert className="w-4 h-4" />
          )}
          <span className="text-[10px] font-black uppercase tracking-widest">
            KYC Level {kycLevel} {kycLevel >= 2 ? 'Verified' : '(Incomplete)'}
          </span>
          {kycLevel < 2 && <ChevronRight className="w-4 h-4" />}
        </button>
      </header>

      <div className="bg-slate-50 p-5 rounded-[32px] border border-slate-100 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Account Number</p>
          <p className="text-lg font-mono font-bold text-slate-800">{accountNumber}</p>
        </div>
        <button 
          onClick={() => {
            navigator.clipboard.writeText(accountNumber);
            toast.success('Copied to clipboard');
          }}
          className="p-3 bg-white rounded-2xl border border-slate-200 text-slate-400 hover:text-violet-600 hover:border-violet-200 transition-colors shadow-sm"
        >
          <Copy className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-3">
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 rounded-2xl transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-xl bg-slate-50 group-hover:bg-white transition-colors ${item.color}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-700">{item.label}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-slate-400 group-hover:translate-x-1 transition-all" />
          </button>
        ))}
        
        <button className="w-full flex items-center justify-between p-4 bg-rose-50 hover:bg-rose-100 rounded-2xl transition-all group mt-4">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-xl bg-white text-rose-500">
              <LogOut className="w-5 h-5" />
            </div>
            <span className="font-bold text-rose-600">Logout</span>
          </div>
        </button>
      </div>
      
      <p className="text-center text-[10px] font-bold text-slate-300 uppercase tracking-widest pb-4">
        PrideWealth v2.4.0 (Build 92)
      </p>
    </div>
  );
};