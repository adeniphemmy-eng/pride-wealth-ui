import React from 'react';
import { PiggyBank, Target, Clock, ShieldCheck, ChevronRight, Plus } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { toast } from 'sonner';

export const Savings = () => {
  const plans = [
    { 
      name: 'Seed', 
      rate: '3.5%', 
      min: '₦1,000', 
      period: 'Monthly', 
      color: 'bg-emerald-500',
      lightColor: 'bg-emerald-50',
      textColor: 'text-emerald-600',
      icon: PiggyBank
    },
    { 
      name: 'Growth', 
      rate: '5.5%', 
      min: '₦5,000', 
      period: 'Monthly', 
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      icon: Target
    },
    { 
      name: 'Premier', 
      rate: '7.5%', 
      min: '₦20,000', 
      period: 'Monthly', 
      color: 'bg-violet-500',
      lightColor: 'bg-violet-50',
      textColor: 'text-violet-600',
      icon: ShieldCheck
    },
    { 
      name: 'Fixed Deposit', 
      rate: '10-18%', 
      min: '₦50,000', 
      period: '6-24 months', 
      color: 'bg-amber-500',
      lightColor: 'bg-amber-50',
      textColor: 'text-amber-600',
      icon: Clock
    },
  ];

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between py-2">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-100">
            <PiggyBank className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Savings</h1>
        </div>
        <button className="p-2 bg-slate-100 rounded-full text-slate-600">
          <Plus className="w-5 h-5" />
        </button>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {plans.map((plan, idx) => (
          <Card key={idx} className="border-none bg-white shadow-md rounded-[32px] overflow-hidden group">
            <CardContent className="p-0">
              <div className="flex">
                <div className={`w-2 ${plan.color}`}></div>
                <div className="flex-1 p-5">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-2xl ${plan.lightColor} ${plan.textColor}`}>
                        <plan.icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-extrabold text-slate-800 text-lg">{plan.name}</h3>
                    </div>
                    <div className={`${plan.textColor} text-xl font-black`}>
                      {plan.rate}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Minimum</p>
                      <p className="text-sm font-bold text-slate-700">{plan.min}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Period</p>
                      <p className="text-sm font-bold text-slate-700">{plan.period}</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => toast.success(`Enrolling in ${plan.name}`, { description: 'Processing your request...' })}
                    className={`w-full py-3 rounded-2xl font-bold text-white ${plan.color} shadow-lg shadow-${plan.color}/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2`}
                  >
                    Invest Now
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};