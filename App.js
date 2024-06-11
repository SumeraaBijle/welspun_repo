import "primeflex/primeflex.css";
import { StyleClass } from 'primereact/styleclass';
import { PrimeReactProvider } from "primereact/api";
import HeadlessDemo from "./components/Slidebar";
import {BrowserRouter , Route , Router, Routes} from "react-router-dom";

export default function App() {
  return (
    <PrimeReactProvider>
        <BrowserRouter>
        <Routes>  
          <Route path="/headlessdemo" element={<HeadlessDemo/>} />
        </Routes>
        </BrowserRouter>
    </PrimeReactProvider>
  )
}