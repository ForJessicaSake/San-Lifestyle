import React from "react";
import Nav from "./Navbar";
import Lady from "./Images/lady.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className=" bg-primary">
      <Nav />
      <section className="flex justify-around pl-6 pt-2 lg:pl-2 lg:pt-10 lg:flex-row flex-col">
        <section className="flex flex-col mt-20 text-ash">
          <hgroup className="text-7xl mb-4 text-ash">
          <h1>Summer</h1>
          <h1>Fashion Trends</h1>
          </hgroup>
          <p className="text-sm lg:w-96 w-80 text-justify mb-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            possimus quos in harum nisi optio voluptatibus asperiores nemo est
            facere.
          </p>
          <button className="text-center w-40 bg-amber-600 h-9 rounded-md"><Link to ="/signup">Register</Link></button>
        </section>
        <img src={Lady} alt="lady" />
      </section>
    </main>
  );
}

export default Home;
