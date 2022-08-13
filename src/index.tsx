import * as React from "react";

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Dashboard from "./dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div>

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        
      </Routes>
    </BrowserRouter>
    </div>

  </React.StrictMode>
);