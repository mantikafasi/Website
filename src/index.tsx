import * as React from "react";

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Dashboard from "./dashboard/Dashboard";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//<App />
root.render(
  <React.StrictMode>
    <Dashboard></Dashboard>
  </React.StrictMode>
);