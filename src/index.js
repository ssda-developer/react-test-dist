import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TaskProvider } from './context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
      <TaskProvider>
          <App />
      </TaskProvider>
  </StrictMode>
);

reportWebVitals();
