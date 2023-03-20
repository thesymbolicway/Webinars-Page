$(document).ready(function() {
  function populateWebinars() {
    // Get the webinars container
    var webinarsContainer = document.getElementById("webinars-container");

    // Make an AJAX request to the webinars.json file
    $.ajax({
      url: "webinars.json",
      type: "GET",
      dataType: "json",
      success: function(data) {
        // Loop through the webinars in the JSON data
        data.forEach(function(webinar) {
          // Create a div for the webinar
          var webinarDiv = document.createElement("div");
          webinarDiv.classList.add("webinar"); // Add the webinar class

          // Create a h2 for the webinar title
          var titleH2 = document.createElement("h2");
          titleH2.textContent = webinar.title;

          // Create a p for the event date
          var dateP = document.createElement("p");
          dateP.classList.add("card-text"); // Add the card-text class
          dateP.textContent = webinar.eventDate;

          // Create a div for the sponsors
          var sponsorsDiv = document.createElement("div");
          sponsorsDiv.classList.add("sponsors");

          // Loop through the sponsors and create a span for each one
          webinar.sponsors.forEach(function(sponsor) {
            var sponsorSpan = document.createElement("span");
            sponsorSpan.classList.add("sponsor");
            sponsorSpan.textContent = sponsor;
            sponsorsDiv.appendChild(sponsorSpan);
          });

          // Add the title, date, and links to the webinar div
          webinarDiv.appendChild(titleH2);
          webinarDiv.appendChild(dateP);
          var bannerImg = document.createElement("img");
          bannerImg.src = webinar.eventBanner;
          bannerImg.classList.add("card");
          webinarDiv.appendChild(bannerImg);

          // // Loop through the links and create a button for each one
          // webinar.links.forEach(function(link) {
          //   var linkBtn = document.createElement("a");
          //   linkBtn.classList.add("btn");
          //   linkBtn.textContent = link.btnText;
          //   linkBtn.href = link.href;
          //   webinarDiv.appendChild(linkBtn);
          // });

          // // Add the sponsors div to the webinar div
          // webinarDiv.appendChild(sponsorsDiv);

          // Add the webinar div to the webinars container
          webinarsContainer.appendChild(webinarDiv);
        });

        // Add the search button event listener
    var searchInput = document.getElementById("search");
    searchInput.addEventListener("input", searchWebinars);
  },
  error: function(jqXHR, textStatus, errorThrown) {
    console.error("Error loading webinars: " + textStatus, errorThrown);
  }
    });
  }

  var searchInput = document.getElementById("search");
searchInput.addEventListener("keyup", searchWebinars);

function sortWebinars() {
  var webinarsContainer = document.getElementById("webinars-container");
  var webinars = webinarsContainer.querySelectorAll(".webinar");
  var sortedWebinars = Array.from(webinars).sort(function(a, b) {
  var aDate = new Date(a.querySelector("p").textContent);
  var bDate = new Date(b.querySelector("p").textContent);
  return aDate - bDate;
  });
  sortedWebinars.forEach(function(webinar) {
  webinarsContainer.appendChild(webinar);
  });
  }
  
  function searchWebinars() {
    var searchInput = document.getElementById("search").value.toLowerCase();
    var webinars = document.getElementsByClassName("webinar");
    for (var i = 0; i < webinars.length; i++) {
      var webinarTitle = webinars[i].getElementsByTagName("h2")[0].textContent.toLowerCase();
      if (webinarTitle.indexOf(searchInput) === -1) {
        webinars[i].style.display = "none";
      } else {
        webinars[i].style.display= "block";
      }
    }
  }
  
            
            // Call the populateWebinars function on page load
            populateWebinars();
            
            // Add event listeners for the search and sort buttons
            var searchInput = document.getElementById("search");
            searchInput.addEventListener("input", searchWebinars);
            
            var sortBtn = document.getElementById("sort-btn");
            sortBtn.addEventListener("click", sortWebinars);
            });