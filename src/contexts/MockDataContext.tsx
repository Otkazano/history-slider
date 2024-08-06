import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MockDataInit } from '../utils/Data/DataTypes';
import { MockData } from '../utils/Data/MockData';

interface MockDataContextProps {
  mockData: MockDataInit[];
  setMockData: React.Dispatch<React.SetStateAction<MockDataInit[]>>;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

const MockDataContext = createContext<MockDataContextProps | undefined>(undefined);

export const MockDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mockData, setMockData] = useState<MockDataInit[]>(MockData);
  const [selected, setSelected] = useState<number>(0);

  return (
    <MockDataContext.Provider value={{ mockData, setMockData, selected, setSelected }}>
      {children}
    </MockDataContext.Provider>
  );
};

export const useMockData = (): MockDataContextProps => {
  const context = useContext(MockDataContext);
  if (context === undefined) {
    throw new Error('useMockData must be used within a MockDataProvider');
  }
  return context;
};
