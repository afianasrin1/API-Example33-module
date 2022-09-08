const loadcountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displaycountries(data));
};

const displaycountries = (countries) => {
  const countriesContainer = document.getElementById("country-all");
  countries.forEach((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    // console.log(country);
    countryDiv.innerHTML = `
    <h2>Name:${country.name.common}</h2>
    <h2>Capital${country.capital ? country.capital[0] : "no capital"}</h2>
    <button onclick="loadCountryDetail('${country.cca2}')" >Details</button>
    
        `;
    countriesContainer.appendChild(countryDiv);
  });
};
const loadCountryDetail = (code) => {
  //https://restcountries.com/v3.1/alpha/{code}
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  // console.log("get country details", code);
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetail(data[0]));
};
const displayCountryDetail = (country) => {
  console.log(country);
  const countryDetail = document.getElementById("country-details");
  countryDetail.innerHTML = `
    <h2>Details:${country.name.common}</h2>
 
    <img src="${country.flags.png}">`;
};

loadcountries();

/* <h2>language:${country.languages.spa ? languages.spa : "no language"}</h2>
<h2>postal code:${country.postalCode?.format}</h2> */
