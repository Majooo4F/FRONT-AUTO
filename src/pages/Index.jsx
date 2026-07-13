import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div className="bg-white text-dark text-start">
      <section className="py-5 bg-white border-bottom border-light position-relative overflow-hidden">
        <div className="container position-relative py-5" style={{ zIndex: 1 }}>
          <div className="row align-items-center g-5">
            
            <div className="col-12 col-lg-7">
              <h1 className="display-4 fw-extrabold text-black mb-3 tracking-tight">
                El rendimiento no espera. <br />
                <span className="text-secondary fw-bold">Confía en expertos automotrices.</span>
              </h1>
              <p className="lead text-dark mb-4 opacity-75">
                No arriesgues la seguridad de tu motor. Únete a Royal Auto Center, donde combinamos tecnología de diagnóstico de vanguardia con un mantenimiento impecable para mantener tu vehículo en condiciones óptimas.
              </p>
              
              <div className="d-flex flex-wrap gap-3">
                <a href="#servicios" className="btn btn-outline-dark btn-lg px-4 fw-semibold">
                  Ver Servicios
                </a>
                <button className="btn btn-dark btn-lg px-4 fw-semibold">
                    Agendar Cita
                </button>
              </div>
            </div>

            <div className="col-12 col-lg-5 text-center">
              <img 
                src="https://blog.autochilango.com/wp-content/uploads/2025/02/Agencia-de-coches.jpg" 
                alt="Taller Automotriz Profesional" 
                className="img-fluid rounded-4 shadow border border-light"
                style={{ maxHeight: '340px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-5 bg-light border-bottom border-light">
        <div className="container py-4">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <h2 className="fw-bold text-black mb-2">Soluciones Integrales para tu Auto</h2>
            <p className="text-secondary small fw-medium">Especialistas en el cuidado y optimización de vehículos de alto desempeño.</p>
          </div>

          <div className="row g-4">
            
            <div className="col-12 col-md-4">
              <div className="card bg-black border-dark h-100 shadow-lg overflow-hidden d-flex flex-column rounded-3">
                <img 
                  src="https://www.apeseg.org.pe/wp-content/uploads/2021/11/GettyImages-1162113364.jpg" 
                  className="card-img-top" 
                  alt="Mantenimiento Preventivo"
                  style={{ height: '180px', objectFit: 'cover', filter: 'brightness(85%)' }}
                />
                <div className="card-body p-4 d-flex flex-column flex-grow-1 text-white">
                  <div className="d-flex align-items-center gap-2 mb-2 text-danger">
                    <i className="bi bi-wrench-adjustable"></i>
                    <span className="small fw-bold text-uppercase tracking-wider" style={{ fontSize: '11px' }}>Taller</span>
                  </div>
                  <h4 className="card-title fw-bold text-white mb-2">Mantenimiento</h4>
                  <p className="card-text text-white-50 small flex-grow-1">
                    Cambio de aceites, filtros y revisión exhaustiva de frenos para garantizar tu seguridad en cada kilómetro.
                  </p>
                  <Link to="/mantenimiento" className="btn btn-outline-light btn-sm w-100 mt-3 fw-semibold">
                    Ver Detalles <i className="bi bi-chevron-right small ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card bg-black border-dark h-100 shadow-lg overflow-hidden d-flex flex-column rounded-3">
                <img 
                  src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&fit=crop&w=600&q=80" 
                  className="card-img-top" 
                  alt="Diagnóstico Electrónico"
                  style={{ height: '180px', objectFit: 'cover', filter: 'brightness(85%)' }}
                />
                <div className="card-body p-4 d-flex flex-column flex-grow-1 text-white">
                  <div className="d-flex align-items-center gap-2 mb-2 text-info">
                    <i className="bi bi-cpu-fill"></i>
                    <span className="small fw-bold text-uppercase tracking-wider" style={{ fontSize: '11px' }}>Tecnología</span>
                  </div>
                  <h4 className="card-title fw-bold text-white mb-2">Diagnóstico</h4>
                  <p className="card-text text-white-50 small flex-grow-1">
                    Escaneo avanzado de sistemas electrónicos para detectar fallas ocultas antes de que se conviertan en reparaciones costosas.
                  </p>
                  <Link to="/diagnostico" className="btn btn-outline-light btn-sm w-100 mt-3 fw-semibold">
                    Ver Detalles <i className="bi bi-chevron-right small ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card bg-black border-dark h-100 shadow-lg overflow-hidden d-flex flex-column rounded-3">
                <img 
                  src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=600&q=80" 
                  className="card-img-top" 
                  alt="Estética Automotriz"
                  style={{ height: '180px', objectFit: 'cover', filter: 'brightness(85%)' }}
                />
                <div className="card-body p-4 d-flex flex-column flex-grow-1 text-white">
                  <div className="d-flex align-items-center gap-2 mb-2 text-success">
                    <i className="bi bi-paint-bucket"></i>
                    <span className="small fw-bold text-uppercase tracking-wider" style={{ fontSize: '11px' }}>Estética</span>
                  </div>
                  <h4 className="card-title fw-bold text-white mb-2">Detallado</h4>
                  <p className="card-text text-white-50 small flex-grow-1">
                    Limpieza profunda, pulido de carrocería y tratamiento interior para que tu auto luzca como nuevo.
                  </p>
                  <Link to="/detallado" className="btn btn-outline-light btn-sm w-100 mt-3 fw-semibold">
                    Ver Detalles <i className="bi bi-chevron-right small ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}