
//this is the then, catch style


const url = `http://api.weatherapi.com/v1/current.json?key=831cf2b10ac1459e9a3154716241204&q=brampton&aqi=no`

function getData(){
//the fetch method returns a promise
    fetch(url)
    .then((resp)=>{ //resp is short for response
        //console.log(resp)
        //error checking
        if (! resp.ok) throw new Error("was not a valid response")
        return resp.json(); //method to extract JSON string and convert it to an object
    })
    .then((dataobj) => { //then always waits
        console.log(dataobj) //the dataobj is the returned json from the previous then
    })
    .catch((err) =>{
        console.log(err.message); 
    });
}

//commented this out just to make the dom less crowded

// getData()

//youtube video where i got the info

//https://www.youtube.com/watch?v=2sQ9xiEAXNo&ab_channel=SteveGriffith-Prof3ssorSt3v3

