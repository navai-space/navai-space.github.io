/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import CompanyWebsite from './components/CompanyWebsite';
import DeveloperPortal from './components/DeveloperPortal';

export default function App() {
  const [currentView, setCurrentView] = useState<'website' | 'portal'>('website');

  return (
    <div className="w-full min-h-screen bg-slate-950">
      {currentView === 'website' ? (
        <CompanyWebsite onSwitchToDeveloperPortal={() => setCurrentView('portal')} />
      ) : (
        <DeveloperPortal onBackToWebsite={() => setCurrentView('website')} />
      )}
    </div>
  );
}
