import './CategoryTabs.css';

export default function CategoryTabs({ categorias, categoriaActiva, onChange }) {
  return (
    <div className="d-flex justify-content-center gap-3 flex-wrap">
      <button
        onClick={() => onChange('todos')}
        className={`btn btn-lg fw-semibold d-flex align-items-center gap-2 category-tab ${
          categoriaActiva === 'todos' ? 'btn-dark active' : 'btn-outline-dark'
        }`}
      >
        <i className="bi bi-grid-fill"></i>
        Todos
      </button>
      {categorias.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.nombre)}
          className={`btn btn-lg fw-semibold d-flex align-items-center gap-2 category-tab ${
            categoriaActiva.toLowerCase() === cat.nombre.toLowerCase() ? 'btn-dark active' : 'btn-outline-dark'
          }`}
        >
          <i className="bi bi-car-front-fill"></i>
          {cat.nombre}
        </button>
      ))}
    </div>
  );
}
