
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './Counter App/Store.jsx'; // Import your Redux store

createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* Pass the store to the Provider */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
