import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {StepperProvider} from "./context/StepperContext";
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StepperProvider>
          <App />
        </StepperProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
