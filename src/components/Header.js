import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/userActions';

const Header = () => {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header>
      <h1>Counter</h1>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <div>
          <h3> login </h3>
        </div>
      )}
    </header>
  );
};

export default Header;