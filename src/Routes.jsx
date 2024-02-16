import {
  Routes,
  Route,
  Navigate,
  Outlet,
  Router,
} from 'react-router-dom';
import { getToken } from './helpers';
import Profile from './profile/profile';
import Main from './pages/main';
import Login from './pages/login';
import SignUp from './pages/signup';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Regulations from './pages/regulations';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route
        element={
          <>
            <Navbar />
            <Outlet />
            <Footer />
          </>
        }
      >
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/regulations" element={<Regulations />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
