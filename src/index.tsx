import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Global Error Handler for debugging startup crashes
window.onerror = function (message, source, lineno, colno, error) {
  const errorDiv = document.createElement('div');
  errorDiv.style.color = 'red';
  errorDiv.style.padding = '20px';
  errorDiv.style.backgroundColor = 'white';
  errorDiv.style.zIndex = '9999';
  errorDiv.style.position = 'fixed';
  errorDiv.style.top = '0';
  errorDiv.style.left = '0';
  errorDiv.style.width = '100%';
  errorDiv.style.height = '100%';
  errorDiv.style.overflow = 'auto';
  errorDiv.innerHTML = `
    <h1>Application Error</h1>
    <p><strong>Message:</strong> ${message}</p>
    <p><strong>Source:</strong> ${source}:${lineno}</p>
    <pre style="background:#eee; padding:10px;">${error?.stack || 'No stack trace'}</pre>
  `;
  document.body.appendChild(errorDiv);
};

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error("Could not find root element to mount to");
  }

  const root = ReactDOM.createRoot(rootElement);
  console.log('React root created, attempting to render...');
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (e: any) {
  console.error("Mount Error", e);
  document.body.innerHTML = `
    <div style="color:red; padding:20px; background:white;">
      <h1>Mount Error</h1>
      <pre>${e?.message || e}</pre>
      <pre>${e?.stack || ''}</pre>
    </div>
  `;
}