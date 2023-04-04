import './styles/App.css';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <main className="main-container">
        <Header />
        <Outlet />
      </main>
    </Provider>
  );
}

export default App;
