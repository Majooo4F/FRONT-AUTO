import { Link } from 'react-router-dom';

export default function NotFound() {

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center text-center py-5" style={{ minHeight: '70vh' }}>
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">Página no encontrada</h2>
      <p className="lead mb-4">La página que estás buscando no existe o ha sido movida.</p>
      <Link to="/" className="btn btn-primary btn-lg px-5 shadow">
        Volver al inicio
      </Link>
    </div>
  );
}