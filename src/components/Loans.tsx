import React from 'react';
import { Landmark, CheckCircle2, XCircle, Info, Calculator, FileText } from 'lucide-react';
import { toast } from 'sonner';

interface LoansProps {
  kycLevel: number;
}

export const Loans: React.FC<LoansProps> = ({ kycLevel }) => {
  const requirements = [
    { text: 'Active Savings for 6 Months', met: true },
    { text: 'KYC Level 2 Completed', met: kycLevel >= 2 },
    { text: 'No Outstanding Debts', met: false },
    { text: 'Minimum Share Capital', met: true },
  ];

  const rates = [
    { period: '1-6 months', rate: '15% p.a.' },
    { period: '7-12 months', rate: '20% p.a.' },
    { period: '13-18 months', rate: '25% p.a.' },
  ];

  return (
    <div className="space-y-6">
      <header className="flex items-center gap-4 py-2">
        <div className="p-3 bg-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-100">
          <Landmark className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Loans</h1>
      </header>

      <section className="space-y-4">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
          Eligibility Checklist
          <Info className="w-4 h-4 text-slate-400" />
        </h3>
        <div className="bg-slate-50 p-5 rounded-3xl border border-slate-100 space-y-4">
          {requirements.map((req, idx) => (
            <div key={idx} className="flex items-center gap-3">
              {req.met ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              ) : (
                <XCircle className="w-5 h-5 text-rose-400" />
              )}
              <span className={`text-sm font-medium ${req.met ? 'text-slate-700' : 'text-slate-400 line-through'}`}>
                {req.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-bold text-slate-800">Interest Rates</h3>
        <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500">Duration</th>
                <th className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 text-right">Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rates.map((row, idx) => (
                <tr key={idx} className="bg-white">
                  <td className="px-6 py-4 text-sm font-bold text-slate-700">{row.period}</td>
                  <td className="px-6 py-4 text-sm font-black text-indigo-600 text-right">{row.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-4">
        <button className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100 gap-2">
          <Calculator className="w-6 h-6 text-slate-400" />
          <span className="text-[11px] font-bold text-slate-600">Calculator</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100 gap-2">
          <FileText className="w-6 h-6 text-slate-400" />
          <span className="text-[11px] font-bold text-slate-600">History</span>
        </button>
      </div>

      <button 
        onClick={() => toast.error('Ineligible', { description: 'Please complete all requirements first.' })}
        className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-[0.98]"
      >
        Apply for Loan
      </button>
    </div>
  );
};