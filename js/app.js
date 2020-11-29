// target to <p> tag to fill in
let target = document.querySelector('.quote');

// select the button and attach an event listener to it
let button = document.querySelector('.get-quote');
button.addEventListener('click', function() {
    
    // create a new XMLHttpRequest object
    let ajax = new XMLHttpRequest();

    // define what happens when the ajax request is performed
    ajax.onreadystatechange = function() {
        
        // if the request is successful
        if(this.readyState == 4 && this.status == 200) {
            
            // Parse the JSON string response in to a usable JS object
            let text = JSON.parse(this.responseText);
            console.log(this.responseText)
            
            // Set the <p>'s innerHTML
            target.innerHTML = text.quote;
            
        } 
    }

    // define where and how to make your ajax request
     
    ajax.open("GET", "https://api.kanye.rest", true);   // args: request type, api url, asynchronous?
    
    // trigger the ajax request (changes readyState)
    ajax.send();
});

// trigger a button click when the page loads, to automatically load a quote
button.click();