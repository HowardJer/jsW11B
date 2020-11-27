// creating a new request object
let ajax = new XMLHttpRequest();

// define our ajax callback function 
//(ie. what happens when we send() the request)

ajax.onreadystatechange = function() {
    // was the request completed successfully?
    if(this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
}

// preparing our request
ajax.open("GET", "https://api.kanye.rest", true);

// send ajax request
ajax.send();