import { useSelector } from 'react-redux';
import Header from './components/Header';
import Counter from './components/Counter';
import Login from './components/Login';
import Register from './components/register';
import '.././src/App.css';

const App = () => {
  const user = useSelector(state => state.user.user);

  return (
    <div className="app">
      <Header />
      {user ? (
        <Counter />
      ) : (
        <>
          <Login />
          <Register />
        </>
      )}
    </div>
  );
};

export default App;