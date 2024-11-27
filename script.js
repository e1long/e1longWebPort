//JavaScript

// "what's your name" button
document.getElementById("nameButton").addEventListener("click", function() {
    const name = prompt("Please enter your name:");
    if (name) {
        document.getElementById("nameOutput").innerText = "Hello " + name + "! ᵕ̈";
    }
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is loaded on the ABOUT page');
});

// personal enlarged image when clicked
document.getElementById("myImage").addEventListener("click", function() {
    this.style.width = "400px";
});

document.getElementById("myImage").addEventListener("mouseout", function() {
    this.style.width = "200px";
});

// Text resize widget
function setFontSize(size) {
    const textElements = document.querySelectorAll('h1, h2, h3, p, span, li, a'); // Add other tags you want to affect

    textElements.forEach(function(element) {
        element.style.fontSize = size;
    });
}

// Add event listeners for all font size links
window.onload = function() {
    const links = document.querySelectorAll('.font-size-link');
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            const size = this.getAttribute('data-size');
            setFontSize(size);
        });
    });
}

// Alt text for image gallery 
function showAltText(imgId, altTextId) {
    const altTextElement = document.getElementById(altTextId);
    if (altTextElement.innerText === "") {
        const image = document.getElementById(imgId);
        altTextElement.innerText = image.getAttribute("alt");
    } else {
        altTextElement.innerText = ""; 
    }
}

// citation for audio button
function showCitation() {
    var citation = document.getElementById('citationText');
    if (citation.style.display === "none") {
        citation.style.display = "block"; 
    } else {
        citation.style.display = "none"; 
    }
}

//scroll-top bottom
let mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log("Scrolling detected..."); // To verify that this function is being triggered
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
      console.log("Button is visible now");
    } else {
      mybutton.style.display = "none";
      console.log("Button is hidden");
    }
  }

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}