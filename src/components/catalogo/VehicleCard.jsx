import { useNavigate } from 'react-router-dom';
import './VehicleCard.css';

export default function VehicleCard({ vehiculo }) {
  const { id, modelo, anio, precio, descripcion, marcaNombre, categoriaNombre, imagenes } = vehiculo;
  const navigate = useNavigate();

  const imagenPrincipal = imagenes && imagenes.length > 0
    ? imagenes[0]
    : 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80';

  const handleCotizar = () => {
    navigate('/catalogo/cotizar', { state: { vehiculoId: id } });
  };

  return (
    <div className="card bg-black border-dark h-100 shadow-lg overflow-hidden rounded-3 vehicle-card">
      <img
        src={imagenPrincipal}
        className="card-img-top"
        alt={`${marcaNombre} ${modelo}`}
        style={{ height: '200px', objectFit: 'cover', filter: 'brightness(85%)' }}
      />
      <div className="card-body p-4 text-white d-flex flex-column justify-content-between">
        <div>
          <h4 className="card-title fw-bold mb-3">{marcaNombre} {modelo}</h4>

          <div className="spec-sheet mb-3">
            <div className="spec-row">
              <span className="text-white-50 small"><i className="bi bi-calendar3 me-2"></i>Año</span>
              <span className="small fw-semibold">{anio}</span>
            </div>
            <div className="spec-row">
              <span className="text-white-50 small"><i className="bi bi-tag-fill me-2"></i>Categoría</span>
              <span className="small fw-semibold">{categoriaNombre}</span>
            </div>
            {descripcion && (
              <p className="text-white-50 small mt-2 mb-0" style={{ lineHeight: '1.6' }}>
                {descripcion}
              </p>
            )}
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center border-top border-secondary pt-3">
          <span className="fw-bold text-danger fs-5">
            ${precio ? Number(precio).toLocaleString() : '0'}
          </span>
          <button className="btn btn-outline-light btn-sm fw-semibold" onClick={handleCotizar}>
            Cotizar <i className="bi bi-chevron-right small ms-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
