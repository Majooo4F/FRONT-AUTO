import { Outlet } from 'react-router-dom';
import HeaderAdmin from './HeaderAdmin';
import Sidebar from './Sidebar';

const LayoutAdmin = () => (
  <div className="d-flex flex-column vh-100">
    <HeaderAdmin />
    <div className="d-flex flex-grow-1">
      <Sidebar />
      <main className="flex-grow-1 p-4 bg-white">
        <Outlet />
      </main>
    </div>
  </div>
);
export default LayoutAdmin;