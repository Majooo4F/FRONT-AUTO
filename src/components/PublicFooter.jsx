import { Link } from 'react-router-dom';

export default function PublicFooter() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="bg-black text-light py-5 mt-auto border-top border-secondary">
      <div className="container">
        <div className="row g-4 text-center text-md-start">

          <div className="col-12 col-md-4">
            <h5 className="text-white fw-bold mb-3">
              <i className="bi bi-car-front-fill text-primary me-2"></i>
              Royal<span className="text-primary">Auto</span>Center
            </h5>
            <p className="small mb-0 text-white-50">
              Expertos en diagnóstico, mantenimiento y estética automotriz. Tu seguridad y el rendimiento de tu vehículo son nuestra prioridad.
            </p>
            <p className="small mt-3">
              <Link to="/aviso-privacidad" className="text-decoration-none text-white-50 hover-primary">
                Aviso de Privacidad
              </Link>
            </p>
          </div>

          <div className="col-12 col-md-4">
            <h5 className="text-white fw-bold mb-3">Enlaces Rápidos</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><Link to="/" className="text-white-50 text-decoration-none hover-primary">Inicio</Link></li>
              <li><Link to="/catalogo" className="text-white-50 text-decoration-none hover-primary">Ver Catálogo de Autos</Link></li>
              <li><Link to="/contacto" className="text-white-50 text-decoration-none hover-primary">Agendar Cita</Link></li>
              <li><Link to="/preguntas-frecuentes" className="text-white-50 text-decoration-none hover-primary">Preguntas Frecuentes</Link></li>
            </ul>
          </div>

          <div className="col-12 col-md-4">
            <h5 className="text-white fw-bold mb-3">Síguenos</h5>
            <p className="small text-white-50">Mantente al tanto de promociones y consejos de mantenimiento.</p>
            
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
              <a href="#" className="text-white-50 fs-4 hover-primary"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white-50 fs-4 hover-danger"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white-50 fs-4 hover-success"><i className="bi bi-whatsapp"></i></a>
            </div>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        <div className="row">
          <div className="col-12 text-center small text-white-50">
            <span>&copy; {anioActual} Royal Auto Center. Todos los derechos reservados.</span>
          </div>
        </div>
      </div>
      
      {/* Estilos para el efecto hover */}
      <style>{`
        .hover-primary:hover { color: var(--bs-primary) !important; transition: 0.3s; }
        .hover-danger:hover { color: var(--bs-danger) !important; transition: 0.3s; }
        .hover-success:hover { color: var(--bs-success) !important; transition: 0.3s; }
      `}</style>
    </footer>
  );
}