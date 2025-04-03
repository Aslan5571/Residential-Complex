

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Outlet /> {/* Здесь будут отображаться страницы */}
    </div>
  );
}

export default App;

