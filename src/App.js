
import { Route } from 'react-router-dom';
import './App.css';
import AvailableJobs from './components/Jobs/AvailableJobs';
import { Footer } from './components/footer/Footer';
import { Home } from './components/home/Home';
import { Navbar } from './components/navbar/Navbar';
import { SearchJob } from './components/search/SearchJob';
import { Testimonials } from './components/testimonials/Testimonials';
import { TrustedBy } from './components/trustedby/TrustedBy';
import { WhyJobHunt } from './components/whyweb3jobhunt/WhyJobHunt';

function App() {
  return (
    <>

    <Navbar />
    <Home />
    <TrustedBy />
    <SearchJob />
    <AvailableJobs />
    <WhyJobHunt />
    <Testimonials />
    <Footer />
    </>
    
  );
}

export default App;
