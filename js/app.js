// target to <p> tag to fill in
let target = document.querySelector('.titles');

// select the button and attach an event listener to it
let button = document.querySelector('.get-titles');
button.addEventListener('click', function() {
    
    // create a new XMLHttpRequest object
    let ajax = new XMLHttpRequest();

    // define what happens when the ajax request is performed
    ajax.onreadystatechange = function() {
        
        // if the request is successful
        if(this.readyState == 4 && this.status == 200) {
            
            // Parse the JSON string response in to a usable JS object
            let recipeTitles = JSON.parse(this.responseText);
            // console.log(JSON.parse(this.responseText))
            let eachTitle = recipeTitles.results[length].title;
            console.log(eachTitle)
            // Set the <p>'s innerHTML
            target.innerHTML = eachTitle;
            
        } 
    }

    // define where and how to make your ajax request
     
    ajax.open("GET", "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/", true);   // args: request type, api url, asynchronous?
    // ajax.open("GET", "https://api.kanye.rest", true);   // args: request type, api url, asynchronous?
    
    // trigger the ajax request (changes readyState)
    ajax.send();
});

// trigger a button click when the page loads, to automatically load a quote
button.click();