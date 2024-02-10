import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'; // Import your Footer component
import Home from './pages/Home';
import Stuff from './pages/Stuff';
import Contact from './pages/Contact';
import UseEffectPage from './pages/UseEffectPage';
import UseStatePage from './pages/UseStatePage';
import UseReducerPage from './pages/UseReducerPage';
import UseLayoutEffect from './pages/UseLayoutEffect';
import ImperativeHandle from './pages/ImperativeHandle';
import Context from './pages/Context';
import UseRefPage from './pages/UseRefPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="pageMain">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stuff" element={<Stuff />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/UseEffectPage" element={<UseEffectPage />} />
            <Route path="/UseStatePage" element={<UseStatePage />} />
            <Route path="/UseReducerPage" element={<UseReducerPage />} />
            <Route path="/UseRefPage" element={<UseRefPage />} />
            <Route path="/UseLayoutEffect" element={<UseLayoutEffect />} />
            <Route path="/Context" element={<Context />} />
            <Route path="/ImperativeHandle" element={<ImperativeHandle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
