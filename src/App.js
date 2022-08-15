import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Pages/Home';
import AboutUs from './Components/Pages/About/AboutUs';
import Makhana from './Components/Pages/More/Makhna/Makhana';
import Maize from './Components/Pages/More/Maize/Maize';
import Black from './Components/Pages/More/BlackCardomon/Black';
import Wheat from './Components/Pages/More/Wheat/Wheat';
import Flaxseed from './Components/Pages/More/FlexSeed/FlexSeed';
import ContactUs from './Components/Pages/ContactForm';


function App() {
  return (
   
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/makhana"  element={<Makhana/>} />
      <Route path="/maize" element={<Maize/>} />
      <Route path="/BlackCardomon" element={<Black/>}/>
      <Route path="/Wheat" element={<Wheat/>}/>
      <Route path="/flax" element={<Flaxseed/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
