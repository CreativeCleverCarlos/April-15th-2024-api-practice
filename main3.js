

//understanding and using the response object

const url3 = `http://api.weatherapi.com/v1/current.json?key=831cf2b10ac1459e9a3154716241204&q=brampton&aqi=no`


function getMoreData(){

    let region = document.getElementById('region');
    let condition = document.getElementById('condition');
    let localTime = document.getElementById('local_time')

    fetch(url3)
    .then(response => {
        if (!response.ok) throw new Error("invalid")//first confirm if there is an error
        return response.json();
    })
    .then(dataArray => {
        region.innerHTML = dataArray.location.region;
        condition.innerHTML = dataArray.current.condition.text
        localTime.innerHTML = dataArray.location.localtime
    })
    .catch(console.warn);
}


getMoreData();
