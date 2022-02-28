import './App.css';
import Search from './components/Search'
import ProductsView from './components/ProductsView';
import { useState }  from 'react';
import samsung from './components/870.PNG'
import mx4 from './components/mx4.PNG'
import samsung2 from './components/970evo.PNG'
import samsung3 from './components/980.PNG'
import radeon from './components/6500xt.PNG'
import elgato from './components/elgato.PNG'
import mx500 from './components/mx500.PNG'
import mx5002 from './components/mx5002.PNG'
import s22 from './components/s22.PNG'



function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([{
    id:0,
    image: mx4,
    name: "MX-4 - Quality thermal compound for all CPU coolers",
    price: 3.99,
  },
  {
    id:1,
    image: mx500,
    name: "Crucial MX500 CT1000MX500SSD1 1TB (3D NAN, SATA, 2,5 Inch Internal SSD",
    price: 89.90,
  },
  {
    id:2,
    image: samsung,
    name: "Samsung SSD 870 EVO Form Factor 2,5 Inch Intelligent TurboWrite, Black",
    price: 68.99,
  },
  {
    id:3,
    image: samsung3,
    name: "Samsung 980 Pro PCIe 4.0, NVMe M.2 (2280) Internal Solid State Drive",
    price: 291.99,
  },
  {
    id:4,
    image: elgato,
    name: "Corsair Elgato Game Capture HD60 S Gameplay",
    price: 189.99,
  },
  {
    id:5,
    image: samsung2,
    name: "Samsung 980 1TB PCIe 3.0 NVMe M.2 Internal Solid State Drive",
    price: 107.88,
  },
  {
    id:6,
    image: s22,
    name: "Samsung Galaxy S22 Ultra, Android Smartphone without Contract, 6.8 Inch Dynamic AMOLED Display, 5000 mAh battery",
    price: 1249,
  },
  {
    id:7,
    image: mx5002,
    name: "Crucial MX500 500 GB (3D NAND, SATA 2,5 Inch, Internal SSD",
    price: 89.9,
  },
  {
    id:8,
    image: radeon,
    name: "MSI Radeon RX 6500 XT Mech 2X 4G OC Gaming Graphics Card 4000 MB DDR Memory",
    price: 239,
  }]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }


  return (
    <div>
        <Search searchValue = {searchTerm} onSearchChange ={handleSearchChange}/>
        <ProductsView products={products} searchTerm={searchTerm}/>
   </div>
  );
}

export default App;