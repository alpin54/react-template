import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppRoutes from 'config/routes';

function App() {
  return (
    <Router>
      <Routes>
        {AppRoutes.map((val, idx) => (
          <Route key={`route${idx}`} {...val} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
