const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data) );
}; 
loadCountries();

const displayCountries = countris =>{
const divContener = document.getElementById('countries');
     countris.forEach(country=>{
        const svgImg = country.flags.svg;
        // console.log(svgImg);
        const div = document.createElement('div');
        // div.style.backgroundImage= svgImg;
        div.classList.add('country')
        div.innerText
        div.innerHTML = `
        <div style="background-image: url(${svgImg}); background-repeat: no-repeat; 
        background-position: right;
        background-size: contain;">
            <h3 style="margin-top: 0px;">${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick="countryDetais('${country.name.common}')">Details</button>
        </div>`;
        divContener.appendChild(div);
    })
}

const countryDetais = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res=>res.json())
    .then(data => showDetails(data))
    // console.log(url);
};

const showDetails = countries =>{

    console.log(countries[0])
}