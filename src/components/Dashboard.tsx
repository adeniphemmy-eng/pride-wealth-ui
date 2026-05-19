import React from 'react';
import { Wallet, TrendingUp, Users, Calendar, ArrowUpRight, ArrowDownLeft, ChevronRight, Bell, CreditCard, Copy, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { toast } from 'sonner';

interface DashboardProps {
  kycLevel: number;
  onStartKyc: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ kycLevel, onStartKyc }) => {
  const userName = 'Ade';
  const userBalance = 45750;
  const virtualAccountNumber = '9876543210';
  const totalSaved = 28500;
  const savingsGoal = 50000;
  const ajoPosition = 3;
  const ajoParticipants = 8;
  const monthlyAjoPack = 40000;
  
  // Updated Admin Details from User Request
  const adminAccountNumber = '8127955636';
  const adminBankName = 'Opay';
  const adminAccountName = 'Adeshina Oluwatosin';

  const transactions = [
    { id: 1, type: 'credit', title: 'Salary Deposit', amount: 150000, date: 'May 28', color: 'text-emerald-600' },
    { id: 2, type: 'debit', title: 'Ajo Contribution', amount: 40000, date: 'May 25', color: 'text-rose-600' },
    { id: 3, type: 'debit', title: 'Electricity Bill', amount: 5000, date: 'May 22', color: 'text-rose-600' },
  ];

  const progressPercentage = Math.min((totalSaved / savingsGoal) * 100, 100);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard`);
  };

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-slate-400 text-sm font-medium">Welcome back,</h2>
          <h1 className="text-2xl font-bold text-slate-900">{userName} 👋</h1>
        </div>
        <button className="relative p-2 bg-slate-100 rounded-full text-slate-600 active:scale-95 transition-transform">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
        </button>
      </header>

      {kycLevel < 2 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-amber-50 rounded-3xl border border-amber-100 flex items-center justify-between gap-4 cursor-pointer"
          onClick={onStartKyc}
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-500 text-white rounded-2xl shadow-lg shadow-amber-100">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-black text-amber-900 tracking-tight">KYC Level 1: Limited Account</p>
              <p className="text-[10px] font-bold text-amber-700/80">Tap to upgrade and remove limits</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-amber-400" />
        </motion.div>
      )}

      {/* Balance Card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative overflow-hidden bg-gradient-to-br from-violet-600 to-indigo-700 rounded-[32px] p-8 text-white shadow-2xl shadow-violet-200/50"
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-400/20 rounded-full -ml-16 -mb-16 blur-2xl"></div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-2">
            <p className="text-violet-100 text-sm font-medium opacity-80">Available Balance</p>
            <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
              Tier {kycLevel}
            </div>
          </div>
          <h2 className="text-4xl font-black mb-8 tracking-tight">₦{userBalance.toLocaleString()}</h2>
          
          <div className="flex justify-between items-center border-t border-white/10 pt-6">
            <div>
              <p className="text-[10px] text-violet-200 uppercase tracking-widest font-bold opacity-60 mb-1">Virtual Account</p>
              <p className="text-lg font-mono font-bold tracking-wider">{virtualAccountNumber}</p>
            </div>
            <button 
              onClick={() => copyToClipboard(virtualAccountNumber, 'Account number')}
              className="p-2.5 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <StatCard 
          icon={<TrendingUp className="w-5 h-5" />} 
          label="Share Capital" 
          value="₦15,000" 
          color="bg-emerald-50 text-emerald-600"
          borderColor="border-emerald-100"
        />
        <StatCard 
          icon={<Wallet className="w-5 h-5" />} 
          label="Dividends" 
          value="₦2,100" 
          color="bg-amber-50 text-amber-600"
          borderColor="border-amber-100"
        />
      </div>

      {/* Ajo Card */}
      <Card className="border-slate-100 shadow-xl shadow-slate-200/50 rounded-[32px] overflow-hidden bg-white">
        <CardContent className="p-0">
          <div className="bg-slate-50/80 p-5 flex items-center justify-between border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-violet-600 text-white rounded-2xl shadow-lg shadow-violet-100">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-black text-slate-800 tracking-tight">Monthly Ajo</h3>
            </div>
            <span className="text-[10px] font-black text-violet-600 bg-violet-50 px-2 py-1 rounded-md uppercase">Active</span>
          </div>
          <div className="p-6 space-y-5">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Your Position</p>
                <p className="text-sm font-black text-slate-800">{ajoPosition} of {ajoParticipants}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Monthly Pack</p>
                <p className="text-sm font-black text-slate-800">₦{monthlyAjoPack.toLocaleString()}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-violet-50/50 rounded-2xl border border-violet-100">
                <Calendar className="w-5 h-5 text-violet-600" />
                <div>
                  <p className="text-[10px] font-bold text-violet-400 uppercase tracking-widest">Contribution Period</p>
                  <p className="text-xs font-black text-slate-700">25th — Last Day of Month</p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-slate-400" />
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Admin Account</p>
                  </div>
                  <button onClick={() => copyToClipboard(adminAccountNumber, 'Admin account')} className="text-violet-600">
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-sm font-black text-slate-800 tracking-wider font-mono">{adminAccountNumber}</p>
                <div className="flex justify-between items-center">
                  <p className="text-[10px] font-bold text-slate-500">{adminBankName}</p>
                  <p className="text-[10px] font-black text-slate-800 uppercase tracking-tighter">{adminAccountName}</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => toast.info('Contribution Instructions', { 
                description: `Please transfer ₦${monthlyAjoPack.toLocaleString()} to ${adminAccountNumber} (${adminBankName} - ${adminAccountName}) before the end of the month.` 
              })}
              className="w-full py-4 bg-violet-600 text-white rounded-2xl font-black text-sm tracking-wide hover:bg-violet-700 transition-all shadow-xl shadow-violet-100 active:scale-[0.98]"
            >
              How to Pay
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Savings Progress */}
      <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-4">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <h3 className="font-black text-slate-800 tracking-tight">Savings Goal</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Building Wealth</p>
          </div>
          <div className="text-right">
            <span className="text-sm font-black text-emerald-600">₦{totalSaved.toLocaleString()}</span>
            <span className="text-[10px] font-bold text-slate-300"> / ₦{savingsGoal.toLocaleString()}</span>
          </div>
        </div>
        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-emerald-500 rounded-full shadow-lg shadow-emerald-100"
          />
        </div>
        <p className="text-[11px] text-slate-400 font-bold text-center italic opacity-80">You've completed {Math.round(progressPercentage)}% of your target!</p>
      </div>

      {/* Recent Activity */}
      <div className="space-y-4 pb-4">
        <div className="flex justify-between items-center">
          <h3 className="font-black text-slate-800 tracking-tight">Recent Activity</h3>
          <button className="text-[10px] font-black text-violet-600 bg-violet-50 px-3 py-1.5 rounded-full uppercase tracking-widest hover:bg-violet-100 transition-colors">
            View All
          </button>
        </div>
        <div className="space-y-3">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between p-4 bg-white rounded-[24px] border border-slate-50 hover:border-violet-100 hover:shadow-lg hover:shadow-violet-50/50 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-2xl transition-transform group-hover:scale-110 ${tx.type === 'credit' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                  {tx.type === 'credit' ? <ArrowDownLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                </div>
                <div>
                  <p className="font-black text-slate-800 text-sm tracking-tight">{tx.title}</p>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">{tx.date}</p>
                </div>
              </div>
              <p className={`font-black text-sm ${tx.color}`}>
                {tx.type === 'credit' ? '+' : '-'} ₦{tx.amount.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value, color, borderColor }: { icon: any, label: string, value: string, color: string, borderColor: string }) => (
  <div className={`p-5 rounded-[28px] border ${borderColor} ${color} space-y-3 shadow-sm hover:shadow-md transition-shadow cursor-default group`}>
    <div className="opacity-80 group-hover:scale-110 transition-transform w-fit">{icon}</div>
    <div>
      <p className="text-[9px] font-black uppercase tracking-[0.1em] opacity-60 mb-0.5">{label}</p>
      <p className="text-lg font-black tracking-tight">{value}</p>
    </div>
  </div>
);