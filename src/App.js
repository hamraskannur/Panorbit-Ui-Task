import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon';
import Profile from './pages/Profile';
import Layout from './components/Layout/Layout'
import ErrorPage from './pages/404Page';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Layout><Profile /></Layout>  } />
        <Route path='/Posts' element={<Layout><ComingSoon/></Layout> } />
        <Route path='/Gallery' element={<Layout><ComingSoon/></Layout>} />
        <Route path='/ToDo' element={<Layout><ComingSoon/></Layout>} />
        <Route path='/*' element={<ErrorPage/>} />

     </Routes>
      
  );
}

export default App;
