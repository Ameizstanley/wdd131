// Set current year in footer
document.getElementById('currentyear').textContent = new Date().getFullYear();
        
// Set last modified date
document.getElementById('lastModified').textContent = `Last Updated: ${document.lastModified}`;

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuButton");
    const navMenu = document.getElementById("nav-menu");
    
    if (menuButton && navMenu) {
        // Toggle menu on button click
        menuButton.addEventListener("click", function(e) {
            e.stopPropagation();
            navMenu.classList.toggle("active");
            
            // Update ARIA state
            const isExpanded = navMenu.classList.contains("active");
            menuButton.setAttribute("aria-expanded", isExpanded);
        });
        
        // Close menu when clicking outside
        document.addEventListener("click", function(e) {
            if (!e.target.closest(".navigation")) {
                navMenu.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");
            }
        });
        
        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll("a");
        navLinks.forEach(function(link) {
            link.addEventListener("click", function() {
                navMenu.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
      templeName:"Buenos Aires Argentina",
      location:"Buenos Aires argentina",
      dedicated:"1986, january, 19",
      area: 30659,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg"
  },
  {
      templeName:"Salta Argentina",
      location:"Salta argentina",  
      dedicated:"2024, june, 16",
      area: 27000,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salta-argentina-temple/salta-argentina-temple-48241-main.jpg"
  },
  {
      templeName:"Tokyo Japan Temple",
      location:"Tokyo Japan Temple",
      dedicated:"1980, october, 29",
      area: 53997,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
  }
];

function filterOldTemples(){
  return temples.filter(temple => {
      const dedicatedYear = parseInt(temple.dedicated.split(', ')[0]);
      return dedicatedYear < 1900;
  });
}

function filterNewTemples() {
  return temples.filter(temple => {
      const dedicatedYear = parseInt(temple.dedicated.split(', ')[0]);
      return dedicatedYear > 2000;
  });
}

function filterLargeTemples(){
  return temples.filter(temple => temple.area > 90000);
}

function filterSmallTemples() {
  return temples.filter(temple => temple.area < 10000);
}

function displayTemples(templeList) {
  const templeContainer = document.getElementById("temple-container");
  templeContainer.innerHTML = "";

  templeList.forEach(temple => {
      const templeCard = document.createElement("article");
      templeCard.classList.add("temple-card");

      const templeName = document.createElement("h2");
      templeName.textContent = temple.templeName;

      const templeImage = document.createElement("img");
      templeImage.src = temple.imageUrl;
      templeImage.alt = `${temple.templeName} Temple`;
      templeImage.loading = "lazy";
      templeImage.style.width = "400px";  // Set width
      templeImage.style.height = "auto";  // Maintain aspect ratio

      const templeDetails = document.createElement("div");
      templeDetails.classList.add("temple-details");

      const location = document.createElement("p");
      location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

      const dedicated = document.createElement("p");
      dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

      const area = document.createElement("p");
      area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} square feet`;

      templeDetails.appendChild(location);
      templeDetails.appendChild(dedicated);
      templeDetails.appendChild(area);

      templeCard.appendChild(templeName);
      templeCard.appendChild(templeImage);
      templeCard.appendChild(templeDetails);

      templeContainer.appendChild(templeCard);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Display all temples initially
  displayTemples(temples);
  
  // Add event listeners to filter buttons
  document.getElementById("all-temples").addEventListener("click", function(event) {
    event.preventDefault();
    displayTemples(temples);
    highlightActiveButton(this);
  });
  
  document.getElementById("old-temples").addEventListener("click", function(event) {
    event.preventDefault();
    displayTemples(filterOldTemples());
    highlightActiveButton(this);
  });
  
  document.getElementById("new-temples").addEventListener("click", function(event) {
    event.preventDefault();
    displayTemples(filterNewTemples());
    highlightActiveButton(this);
  });
  
  document.getElementById("large-temples").addEventListener("click", function(event) {
    event.preventDefault();
    displayTemples(filterLargeTemples());
    highlightActiveButton(this);
  });
  
  document.getElementById("small-temples").addEventListener("click", function(event) {
    event.preventDefault();
    displayTemples(filterSmallTemples());
    highlightActiveButton(this);
  });
});

// Function to highlight the active button
function highlightActiveButton(activeButton) {
  // Remove active class from all buttons
  const buttons = document.querySelectorAll("#nav-menu button");
  buttons.forEach(button => {
    button.classList.remove("active");
  });
  
  // Add active class to clicked button
  activeButton.classList.add("active");
}
