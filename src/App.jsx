import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Rutas para pages
import Index from './pages/Index';
import NotFound from './pages/error/Not_Found';
// Rutas para Dashboard
import Home from './pages/dashboard/Home';
// Rutas para Auth
import Register from './pages/auth/Register';
// Rutas para Layout
import LayoutAdmin from './components/Dashboard/LayoutAdmin';
import PublicLayout from './components/PublicLayout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;