import React, { useState } from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Navigation from "./Component/Navigation";
import Card from "./Component/Card";



const App = () => {
  const [cardItems , setCardItems] = useState([])
  const cardData = [
    {
      id: 1,
      sale: false,
      name: "Fancy Product",
      price: "$40.00 - $80.00",
      star: false,
      card: true,
    },
    {
      id: 2,
      sale: true,
      name: "Special Item",
      spanprice: "$20.00",
      price: "$18.00",
      star: true,
      card: true,
    },
    {
      id: 3,
      sale: true,
      name: "Sale Item",
      spanprice: "$50.00",
      price: "$25.00",
      star: false,
      card: true,
    },
    {
      id: 4,
      sale: false,
      name: "Popular Item",
      spanprice: "",
      price: "$40.00",
      star: true,
      card: true,
    },
    {
      id: 5,
      sale: true,
      name: "Sale Item",
      spanprice: "$50.00",
      price: "$25.00",
      star: false,
      card: true,
    },
    {
      id: 6,
      sale: false,
      name: "Fancy Product",
      price: "$120.00 - $280.00",
      star: false,
      card: true,
    },
    {
      id: 7,
      sale: true,
      name: "Special Item",
      spanprice: "$20.00",
      price: "$18.00",
      star: true,
      card: true,
    },
    {
      id: 8,
      sale: false,
      name: "Popular Item",
      spanprice: "",
      price: "$40.00",
      star: true,
      card: true,
    },
  ];



  return (
    <div>
      <Navigation 
        key={cardData.id}
        cardItems={cardItems}
            />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
    
            {cardData.map((data, index) => (
              <Card key={index} data={data} cardItems={cardItems} setCardItems={setCardItems}/>
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
