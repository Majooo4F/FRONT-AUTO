import { Outlet } from 'react-router-dom';
import PublicHeader from '../components/PublicHeader'; 
import Footer from '../components/PublicFooter';

export default function PublicLayout() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light text-dark">
      <PublicHeader />
      <main className="flex-grow-1 w-100">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}