import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MockDataInit } from '../utils/Data/DataTypes';
import { MockData } from '../utils/Data/MockData';

interface DataContextProps {
  data: MockDataInit[];
  setData: React.Dispatch<React.SetStateAction<MockDataInit[]>>;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<MockDataInit[]>(MockData);
  const [selected, setSelected] = useState<number>(0);

  return (
    <DataContext.Provider value={{ data, setData, selected, setSelected }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = (): DataContextProps => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useMockData must be used within a MockDataProvider');
  }
  return context;
};
