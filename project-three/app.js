const getURL = 'https://restcountries.com/v3.1/all'

const loadCountries = () => {
    fetch(getURL)
        .then(res => res.json())
        .then(data => showCountries(data))
}
loadCountries()

const showCountries = data => {
    const allCountry = document.getElementById('country-container')
    data.forEach(country => {
        // console.log(country.name.common);
        // console.log(country);
        const containey = document.createElement('div')
        containey.classList.add('country')
        containey.innerHTML = `
        <img src="${country.flags.svg}"
        alt="${country.name.common}-flag">
        <h3>Name: ${country.name.common}</h3>
        <p>Capital: ${country.capital ? country.capital : 'No Capital'}</p>
        <button onclick="countryDetail('${country.name.common}')">More Details</button>
        `
        allCountry.appendChild(containey)
    });
}
const detail = document.getElementById('detail')

const countryDetail = (name) => {
    // console.log('more details' , name);
    const detailURL = `https://restcountries.com/v3.1/name/${name}`
    fetch(detailURL)
        .then(res => res.json())
        .then(data => showCountryDetail(data[0]))

        detail.classList.remove('none')
    // const coutryDiv = document.getElementsByClassName(country)    
}

const showCountryDetail = cty => {
    console.log(cty);
    detail.innerHTML = `
        <img src="${cty.flags.svg}"
        alt="${cty.name.common}-flag">
        <h3>Name: ${cty.name.common}</h3>
        <h4>Official Name: ${cty.name.official}</h4>
        <p>Capital: ${cty.capital ? cty.capital : 'No Capital'}</p>
        <p>Population: ${cty.population }</p>
        `
    // detail.appendChild(containey)

}