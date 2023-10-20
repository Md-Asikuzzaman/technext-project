import React, { createContext, useContext, useState, ReactNode } from 'react';

interface StatusContextProps {
  selectedStatus: string;
  setSelectedStatus: React.Dispatch<React.SetStateAction<string>>;
}

export const StatusContext = createContext<StatusContextProps | undefined>(
  undefined
);

interface StatusProviderProps {
  children: ReactNode;
}

export function StatusProvider({ children }: StatusProviderProps) {
  const [selectedStatus, setSelectedStatus] = useState<string>('');

  return (
    <StatusContext.Provider value={{ selectedStatus, setSelectedStatus }}>
      {children}
    </StatusContext.Provider>
  );
}

export function useStatus() {
  const context = useContext(StatusContext);
  if (context === undefined) {
    throw new Error('useStatus must be used within a StatusProvider');
  }
  return context;
}
