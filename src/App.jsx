import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BackgroundImageContainer from './components/BackgroundImageContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Gallery from './pages/Gallery';
import AboutUsPage from './pages/AboutUsPage';
import RussiaUni from './pages/RussiaUni';
import Services1 from './pages/Services1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services1 />} />
        <Route path="/universities/russia" element={<RussiaUni />} />
      </Routes>
    </Router>
  );
}

const HomePage = () => {
  return (
    <BackgroundImageContainer>
      <Navbar isHomePage={true} />
      <HeroSection />
      <Home/>
    </BackgroundImageContainer>
  );
};

export default App;
