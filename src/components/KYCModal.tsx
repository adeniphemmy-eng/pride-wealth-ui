import React, { useState } from 'react';
import { X, User, Calendar, MapPin, Phone, CreditCard, ShieldCheck, Upload, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from 'sonner';

interface KYCModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export const KYCModal: React.FC<KYCModalProps> = ({ isOpen, onClose, onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    address: '',
    phone: '',
    idType: 'NIN',
    idNumber: '',
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else {
      toast.promise(
        new Promise((resolve) => setTimeout(resolve, 2000)),
        {
          loading: 'Submitting KYC for verification...',
          success: () => {
            onComplete();
            onClose();
            return 'KYC submitted successfully!';
          },
          error: 'Submission failed',
        }
      );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="bg-white w-full max-w-md rounded-t-[32px] sm:rounded-[32px] overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
              <div>
                <h2 className="text-xl font-black text-slate-900 tracking-tight">Complete KYC</h2>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Step {step} of 3</p>
              </div>
              <button onClick={onClose} className="p-2 bg-slate-50 rounded-full text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Progress Bar */}
              <div className="flex gap-2 mb-4">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-1.5 flex-1 rounded-full transition-colors ${
                      s <= step ? 'bg-violet-600' : 'bg-slate-100'
                    }`}
                  />
                ))}
              </div>

              {step === 1 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-800">Personal Information</h3>
                    <p className="text-xs text-slate-500">Provide your official details as they appear on your ID.</p>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                    <div className="relative">
                      <Input
                        placeholder="e.g. Adeshina Oluwatosin"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="pl-10 h-12 rounded-2xl border-slate-200"
                      />
                      <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Date of Birth</label>
                    <div className="relative">
                      <Input
                        type="date"
                        value={formData.dob}
                        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                        className="pl-10 h-12 rounded-2xl border-slate-200"
                      />
                      <Calendar className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone Number</label>
                    <div className="relative">
                      <Input
                        placeholder="+234..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="pl-10 h-12 rounded-2xl border-slate-200"
                      />
                      <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-800">Identity Verification</h3>
                    <p className="text-xs text-slate-500">Select an ID type and provide the identification number.</p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Residential Address</label>
                    <div className="relative">
                      <Input
                        placeholder="Full home address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="pl-10 h-12 rounded-2xl border-slate-200"
                      />
                      <MapPin className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ID Type</label>
                    <div className="relative">
                      <select
                        value={formData.idType}
                        onChange={(e) => setFormData({ ...formData, idType: e.target.value })}
                        className="w-full h-12 rounded-2xl border border-slate-200 pl-10 pr-10 appearance-none bg-white font-medium text-sm focus:ring-2 focus:ring-violet-500 outline-none"
                      >
                        <option value="NIN">National ID (NIN)</option>
                        <option value="BVN">Bank Verification Number (BVN)</option>
                        <option value="DL">Driver's License</option>
                        <option value="IP">International Passport</option>
                      </select>
                      <CreditCard className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <ChevronDown className="w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ID Number</label>
                    <div className="relative">
                      <Input
                        placeholder="Enter ID number"
                        value={formData.idNumber}
                        onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
                        className="pl-10 h-12 rounded-2xl border-slate-200"
                      />
                      <ShieldCheck className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-800">Document Upload</h3>
                    <p className="text-xs text-slate-500">Upload clear photos of your documents for verification.</p>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-8 border-2 border-dashed border-slate-100 rounded-[24px] flex flex-col items-center justify-center gap-3 bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer group">
                      <div className="p-3 bg-white rounded-2xl shadow-sm text-slate-400 group-hover:text-violet-600 transition-colors">
                        <Upload className="w-6 h-6" />
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-black text-slate-700">Upload ID Front</p>
                        <p className="text-[10px] font-bold text-slate-400">JPG, PNG (Max 5MB)</p>
                      </div>
                    </div>

                    <div className="p-8 border-2 border-dashed border-slate-100 rounded-[24px] flex flex-col items-center justify-center gap-3 bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer group">
                      <div className="p-3 bg-white rounded-2xl shadow-sm text-slate-400 group-hover:text-violet-600 transition-colors">
                        <Upload className="w-6 h-6" />
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-black text-slate-700">Proof of Address</p>
                        <p className="text-[10px] font-bold text-slate-400">Utility bill or Bank statement</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                    <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                    <p className="text-[10px] font-bold text-blue-700 leading-relaxed">
                      Your data is encrypted and handled securely according to fintech regulatory standards. 
                      Verification usually takes 2-24 hours.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-slate-100 bg-white sticky bottom-0 z-10 flex gap-3">
              {step > 1 && (
                <Button
                  variant="ghost"
                  onClick={() => setStep(step - 1)}
                  className="flex-1 h-14 rounded-2xl font-black text-slate-500"
                >
                  Back
                </Button>
              )}
              <Button
                onClick={handleNext}
                className="flex-[2] h-14 rounded-2xl bg-violet-600 hover:bg-violet-700 text-white font-black shadow-xl shadow-violet-100"
              >
                {step === 3 ? 'Complete' : 'Continue'}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};