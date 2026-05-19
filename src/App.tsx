import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { Transfer } from './components/Transfer';
import { Savings } from './components/Savings';
import { Account } from './components/Account';
import { Loans } from './components/Loans';
import { Toaster } from './components/ui/sonner';
import { KYCModal } from './components/KYCModal';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [showKycModal, setShowKycModal] = useState(false);
  const [kycLevel, setKycLevel] = useState(1);

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard kycLevel={kycLevel} onStartKyc={() => setShowKycModal(true)} />;
      case 'transfer':
        return <Transfer />;
      case 'savings':
        return <Savings />;
      case 'loans':
        return <Loans kycLevel={kycLevel} />;
      case 'account':
        return <Account kycLevel={kycLevel} onStartKyc={() => setShowKycModal(true)} />;
      default:
        return <Dashboard kycLevel={kycLevel} onStartKyc={() => setShowKycModal(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        {renderContent()}
      </Layout>
      <KYCModal 
        isOpen={showKycModal} 
        onClose={() => setShowKycModal(false)} 
        onComplete={() => setKycLevel(2)} 
      />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;