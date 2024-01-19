import "./App.css";
import { useState, useEffect } from "react";
const URL = `https://restcountries.com/v3.1/all`;

function App() {
  const [countries, setCountries] = useState([]);
  const fetchCountries = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <div className="App">
      <h1>Countries Flag</h1>
      <div className="cards">
        {countries.map((country) => {
          return (
            <div className="cardstyle">
              <img
                src={country.flags.png}
                alt={country.name.common}
                height={100}
                width={100}
              />
              <h2>{country.name.common}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
