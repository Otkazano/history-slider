import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { MockDataProvider } from './contexts/MockDataContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <MockDataProvider>
      <App />
    </MockDataProvider>
  </React.StrictMode>,
);

reportWebVitals();
