import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SingleProduct from './components/SingleProduct';


function App() {
  const [products, setProducts] = useState([
    {
      name: "Smartwatch",
      price: 150,
      description: "A wearable device that can receive notifications, track fitness, and more.",
      img: "https://via.placeholder.com/200x200?text=Smartwatch"
    },
    {
      name: "Wireless Earbuds",
      price: 80,
      description: "Earbuds that connect to your phone or tablet via Bluetooth, with noise cancelling and long battery life.",
      img: "https://via.placeholder.com/200x200?text=Wireless+Earbuds"
    },
    {
      name: "Smart Thermostat",
      price: 200,
      description: "A device that can control the temperature of your home and learn your preferences over time.",
      img: "https://via.placeholder.com/200x200?text=Smart+Thermostat"
    },
    {
      name: "Wireless Charger",
      price: 30,
      description: "A charging pad that can wirelessly charge your phone or other devices that support wireless charging.",
      img: "https://via.placeholder.com/200x200?text=Wireless+Charger"
    },
    {
      name: "Virtual Reality Headset",
      price: 400,
      description: "A device that provides a fully immersive experience of a virtual world.",
      img: "https://via.placeholder.com/200x200?text=Virtual+Reality+Headset"
    },
    {
      name: "Smart Speaker",
      price: 100,
      description: "A voice-activated speaker that can play music, control your smart home devices, and answer questions.",
      img: "https://via.placeholder.com/200x200?text=Smart+Speaker"
    },
    {
      name: "Laptop",
      price: 800,
      description: "A portable computer that allows you to work or play on the go.",
      img: "https://via.placeholder.com/200x200?text=Laptop"
    },
    {
      name: "Drone",
      price: 500,
      description: "A flying device that can capture aerial footage or perform tasks.",
      img: "https://via.placeholder.com/200x200?text=Drone"
    },
    {
      name: "Action Camera",
      price: 250,
      description: "A compact camera that can capture high-quality footage of your adventures.",
      img: "https://via.placeholder.com/200x200?text=Action+Camera"
    },
    {
      name: "Gaming Console",
      price: 400,
      description: "A device that allows you to play video games on your TV or monitor.",
      img: "https://via.placeholder.com/200x200?text=Gaming+Console"
    }
  ])

  const [pages, setPages] = useState(["home", "about", "contact", "services", "portfolio"])
    let JSXarray = pages.map((pageString)=>{
      return( 
        <div>{pageString}</div>
      )
    })
  return (
    <div className="App"> 
    {JSXarray}
    <SingleProduct name={products[0].name} price={products[0].price}           />
    <SingleProduct name={products[1].name} price={products[1].price}           />
    <SingleProduct name={products[2].name} price={products[2].price}           />
    </div>
  );
}

export default App;
