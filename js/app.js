// target to <p> tag to fill in
let target = document.querySelector('.advice');

// select the button and attach an event listener to it
let button = document.querySelector('.get-advice');
button.addEventListener('click', function () {
    var buton = document.getElementById("button");
    var allchar = "0123456789ABCDEF";

    button.addEventListener("click", pageChange);

    function pageChange() {
        var randcol = "";
        for (var i = 0; i < 6; i++) {
            randcol += allchar[Math.floor(Math.random() * 16)];
        }
        document.body.style.backgroundColor = "#" + randcol;
    }

    // create a new XMLHttpRequest object
    let ajax = new XMLHttpRequest();

    // define what happens when the ajax request is performed
    ajax.onreadystatechange = function () {

        // if the request is successful
        if (this.readyState == 4 && this.status == 200) {

            // Parse the JSON string response in to a usable JS object
            let advisor = JSON.parse(this.responseText);
            // console.log(JSON.parse(this.responseText))

            // Set the <p>'s innerHTML
            target.innerHTML = advisor.slip.advice;
        }
        else if (this.readyState != 4) {
            document.getElementById("adviceGiven").innerHTML = "LOADING";
        }


    }

    // define where and how to make your ajax request

    ajax.open("GET", "	https://api.adviceslip.com/advice", true);   // args: request type, api url, asynchronous?
    // ajax.open("GET", "https://api.kanye.rest", true);   // args: request type, api url, asynchronous?

    // trigger the ajax request (changes readyState)
    ajax.send();
});

// trigger a button click when the page loads, to automatically load a quote
button.click();
