import { Link } from 'react-router-dom';

const HeaderAdmin = () => (
  <nav className="navbar navbar-dark bg-black px-3 d-flex justify-content-between">
    <span className="navbar-brand mb-0 h1">Royal Auto Center</span>
    <div className="d-flex align-items-center text-white">
      <Link to="/" className="btn btn-sm btn-outline-light me-3">Ver sitio web</Link>
      <span><i className="bi bi-person-circle me-2"></i> Admin</span>
    </div>
  </nav>
);
export default HeaderAdmin;