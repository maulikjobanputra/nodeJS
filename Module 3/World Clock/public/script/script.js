

let ccode = '';
let scode = '';



const getCountries = () => {
    
    fetch("https://api.countrystatecity.in/v1/countries", {headers: {"X-CSCAPI-KEY" : "ZkFrazMwbkJuMnk2a2ZNUThXSmEzOENhTDhQTWcxVllKbHprY0Z6dA=="}})
    
    .then(response => response.json())
    
    .then(result => {
        
        let options = '<option selected>Select Country</option>'
        
        result.forEach(e => {
            options += "<option value = "+e.iso2+">"+e.name+"</option>"
        });
        
        document.querySelector("#country").innerHTML = options;
    })
    
    .catch(error => console.log('error', error));
};



const getState= () => {
    
    let options = '<option selected>Select State</option>'

    ccode = country.value;

    fetch(`https://api.countrystatecity.in/v1/countries/${ccode}/states`, {headers: {"X-CSCAPI-KEY" : "ZkFrazMwbkJuMnk2a2ZNUThXSmEzOENhTDhQTWcxVllKbHprY0Z6dA=="}})

    .then(response => response.json())

    .then(result => {

        result.forEach(e => {
            options += "<option value = "+e.iso2+">"+e.name+"</option>"
        });

        document.querySelector("#state").innerHTML = options;
    })

    .catch(error => console.log('error', error));
};




const getCity = () => {

    let options = '<option selected>Select City</option>'

    scode = state.value;

    fetch(`https://api.countrystatecity.in/v1/countries/${ccode}/states/${scode}/cities`, {headers: {"X-CSCAPI-KEY" : "ZkFrazMwbkJuMnk2a2ZNUThXSmEzOENhTDhQTWcxVllKbHprY0Z6dA=="}})

    .then(response => response.json())

    .then(result => {

        result.forEach(e => {
            options += "<option>"+e.name+"</option>"
        });

        document.querySelector("#city").innerHTML = options;
    })

    .catch(error => console.log('error', error));
}

const getTime = () => {
    
    let cityName = city.value;

    fetch(`/time?location=${cityName}`)

    .then(response => response.json())

    .then(result => {
       
        const hourHand = document.querySelector('.hourHand');
        const minuteHand = document.querySelector('.minuteHand');
        const secondHand = document.querySelector('.secondHand');
        const time = document.querySelector('.time');
        const clock = document.querySelector('.clock');

        function setDate(){
            const today = new Date(result.date_time_txt);
            
            // const second = today.getSeconds();
            
            // const secondDeg = ((second / 60) * 360) + 360; 
            // secondHand.style.transform = `rotate(${secondDeg}deg)`;
            
            const minute = today.getMinutes();
            console.log(minute);
            const minuteDeg = ((minute / 60) * 360); 
            minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    
            const hour = today.getHours();
            const hourDeg = ((hour / 12 ) * 360 ); 
            hourHand.style.transform = `rotate(${hourDeg}deg)`;
            
            time.innerHTML = '<span>' + '<strong>' + hour + '</strong>' + ' : ' + minute + '</span>';
    
            }
      
        setInterval(setDate, 1000);
    })

    .catch(error => console.log('error', error));

}
