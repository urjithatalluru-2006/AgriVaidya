import React, { createContext, useContext, useState, useEffect } from 'react';

const PlantContext = createContext();

export const PlantProvider = ({ children }) => {
  const [activeScan, setActiveScan] = useState(() => {
    const saved = localStorage.getItem('agrivaidya_latest_scan');
    return saved ? JSON.parse(saved) : null;
  });

  const updateScan = (scanData) => {
    setActiveScan(scanData);
    localStorage.setItem('agrivaidya_latest_scan', JSON.stringify(scanData));
  };

  const clearScan = () => {
    setActiveScan(null);
    localStorage.removeItem('agrivaidya_latest_scan');
  };

  return (
    <PlantContext.Provider value={{ activeScan, updateScan, clearScan }}>
      {children}
    </PlantContext.Provider>
  );
};

export const usePlant = () => useContext(PlantContext);