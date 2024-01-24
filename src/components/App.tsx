import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Editor } from './Editor';
import Landing from '../pages/Landing';
import Site from '../pages/Site';

function App() {
  const { pathname } = useLocation();

  const isPreview = pathname === '/site';

  return (
    <>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Link to="/">Home</Link>
        <Link to={isPreview ? '/site/edit' : '/site'}>
          <button>{isPreview ? 'Go to editor' : 'View my site'}</button>
        </Link>
      </nav>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="site" element={<Site />} />
        <Route path="site/edit" element={<Editor />} />
      </Routes>
    </>
  );
}

export default App;
