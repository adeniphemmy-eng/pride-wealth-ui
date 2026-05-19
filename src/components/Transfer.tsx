import React, { useState } from 'react';
import { Send, User, ChevronRight, Info, CreditCard, Copy, Landmark } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from 'sonner';

export const Transfer = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  // Admin Details
  const adminAccountNumber = '8127955636';
  const adminBankName = 'Opay';
  const adminAccountName = 'Adeshina Oluwatosin';

  const handleTransfer = () => {
    if (!recipient || !amount) {
      toast.error('Missing Information', { description: 'Please provide both recipient and amount.' });
      return;
    }
    
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1500)),
      {
        loading: 'Processing transfer...',
        success: () => {
          setRecipient('');
          setAmount('');
          return `Successfully sent ₦${Number(amount).toLocaleString()} to ${recipient}`;
        },
        error: 'Transfer failed',
      }
    );
  };

  const copyAdminDetails = () => {
    navigator.clipboard.writeText(adminAccountNumber);
    toast.success('Admin account copied');
  };

  return (
    <div className="space-y-6">
      <header className="flex items-center gap-4 py-2">
        <div className="p-3 bg-violet-600 text-white rounded-2xl shadow-lg shadow-violet-100">
          <Send className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Send Money</h1>
      </header>

      {/* Admin Account Section */}
      <div className="bg-violet-600 rounded-[32px] p-6 text-white shadow-xl shadow-violet-100 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-xl">
            <Landmark className="w-5 h-5" />
          </div>
          <h3 className="font-black tracking-tight">Ajo Contribution Portal</h3>
        </div>
        <p className="text-xs text-violet-100/80 font-medium leading-relaxed">
          Send your monthly Ajo contribution directly to the admin account below.
        </p>
        
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 space-y-3">
          <div className="flex justify-between items-center">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Admin Bank Details</p>
            <button onClick={copyAdminDetails} className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest bg-white/20 px-2 py-1 rounded-lg">
              <Copy className="w-3 h-3" /> Copy
            </button>
          </div>
          <div className="space-y-1">
            <p className="text-xl font-mono font-black tracking-widest">{adminAccountNumber}</p>
            <div className="flex justify-between items-center opacity-80">
              <p className="text-xs font-bold">{adminBankName}</p>
              <p className="text-xs font-black uppercase tracking-tighter">{adminAccountName}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 p-4 rounded-3xl space-y-6 border border-slate-100">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Recipient Account / Phone</label>
          <div className="relative">
            <Input 
              placeholder="e.g. 07025138462" 
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="pl-12 h-14 rounded-2xl border-slate-200 focus:ring-violet-500 bg-white"
            />
            <User className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Amount (₦)</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">₦</span>
            <Input 
              type="number" 
              placeholder="0.00" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="pl-10 h-14 rounded-2xl border-slate-200 focus:ring-violet-500 bg-white"
            />
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
          <div className="mt-1">
            <Info className="w-4 h-4 text-emerald-600" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Transfer Fee</p>
            <p className="text-sm font-bold text-emerald-600">₦0.00 (Free for Members)</p>
          </div>
        </div>

        <Button 
          onClick={handleTransfer}
          className="w-full h-14 rounded-2xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-lg shadow-xl shadow-violet-100 transition-all active:scale-[0.98]"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};