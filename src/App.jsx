import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import AppRoutes from './Routes';

export default function App() {
  return (
    <div className="relative w-full h-screen overflow-x-hidden">
      <AppRoutes />
    </div>
  );
}
