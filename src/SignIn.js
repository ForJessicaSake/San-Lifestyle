import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Lady from "./Images/lady.png";
import axios from 'axios';

function SignIn() {
  const [name, setName] = useState("");
  const [quotes, setQuotes] = useState(null);
  const [modal, setModal] = useState(false)

  useEffect(() => {
    fetchQuotes()
  }, []);

  const fetchQuotes = async () => {
    const data = await axios.get("https://api.kanye.rest");
    console.log(data)
    setQuotes(data.data.quote)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchQuotes();
    setModal(true)
  };

  return (
    <main>
      {quotes && modal ? (
  <p className="flex items-center justify-center bg-primary h-screen text-ash text-sm">
  {" "}
  Hi, {name}, did you know that...{quotes}
</p>        
      ) : (
        <section className="flex lg:justify-around flex-col lg:flex-row">
          <section className="flex flex-col lg:flex-row justify-around bg-primary lg:mt-10 rounded-2xl rounded-r-xl pr-6 pb-14 pt-14 pl-10">
            <hgroup className="italic flex flex-col justify-center font-light">
              <h2 className="text-4xl mb-4 text-ash text-center">
                NEW ARRIVALS
              </h2>
              <hgroup className="lg:text-9xl text-5xl font-extrabold text-ash flex justify-around lg:flex-col">
                <h1 className="">JUST</h1>
                <h1>FOR</h1>
              </hgroup>
              <h2 className="text-5xl text-amber-600 font-extrabold text-center lg:text-start mb-8">
                You
              </h2>
            </hgroup>
            <img src={Lady} alt="lady" className="lg:w-96" />
          </section>

          <section className="mt-12 pt-10 pl-2 pr-2 flex flex-col items-center">
            <h2 className="text-xl text-center text-gray">
              <span className="font-bold text-black">SAN</span> LIFESTYLE.
            </h2>

            <form className="flex flex-col mt-16" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter your username"
                required
                className="mb-8 border-b-2 border-slate-100 text-sm h-10"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter your password"
                required
                className="mb-8 border-b-2 border-slate-100 text-sm h-10"
              />
              <button className="bg-primary w-80 h-10 mb-8 mt-2 text-white rounded-md">
                Sign In
              </button>
              <p className="text-sm mb-6 text-center">
                New on our platform?{" "}
                <span className="text-primary">
                  <Link to="/signup">Create an account</Link>
                </span>
              </p>
              <p className="text-sm mb-6 text-center">OR</p>
              <p className="text-sm mb-8 text-center">
                Join with your social network
              </p>
            </form>
          </section>
        </section>
      )}
    </main>
  );
}

export default SignIn;
