import React from 'react';
import './App.css'
import Dashboard from './components/Dashboard'

function App() {

  const riskData = [
    { route: "Austin_Jacksonville", riskScore: 0.15 },
    { route: "Chicago_Seattle", riskScore: 0.32 },
    { route: "New York_SF", riskScore: 0.22 },
  ];

  const accuracyData = [
    { route: "Austin_Jacksonville", accuracy: 78 },
    { route: "Chicago_Seattle", accuracy: 65 },
    { route: "New York_SF", accuracy: 82 },
  ];

  return (
    <>
      <Dashboard
        riskData={riskData}
        accuracyData={accuracyData}
        totalRisk={3.5}
        avgAccuracy={75}
        totalLostPallets={120}
      />,
    </>
  )
}

export default App
