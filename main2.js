
//await, async style

//had to call it url2 because even though url is in 2 different files... they share the same name. it's a const so i can rename it... that's one of the reasons why the export thing is done

const url2 = `http://api.weatherapi.com/v1/current.json?key=831cf2b10ac1459e9a3154716241204&q=brampton&aqi=no`

async function getData(){

    let idContainer = document.getElementById('info_container')
    //this is how to catch errors with async
    try{
        let response = await fetch(url2); //fetch is a promise so it has to wait, but with the async syntax it works here... wouldn't work in the then and catch way

        let dataobj = await response.json();

        if (! response.ok) throw new Error('not a valid response'); //is needed to catch errors
        
        console.log(dataobj)    
    }   catch(err){
        console.warn(err.message)
    }
  


}

getData()

//so i ended up skipping number 3... it was the header, method, cache, all that jazz that kinda looks like backend.... in the youtube video

//https://www.youtube.com/watch?v=2sQ9xiEAXNo&ab_channel=SteveGriffith-Prof3ssorSt3v3