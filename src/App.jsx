import { Routes ,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home";
import Footer from "./components/footer";
import WhatsAppButton from "./components/wa";
import Gallery from './pages/gallery';
function App(){
  return(
<>

<div className="relative">

<Navbar />
<div className=" mx-10 max-sm:mx-2">
  
<Routes>
  <Route path="/" element={<HomePage/>}></Route>
  <Route path="/Gallery" element={<Gallery/>}></Route>
</Routes>

<Footer/>
</div>

</div>
<WhatsAppButton/>
</>
  )

}
export default App;










