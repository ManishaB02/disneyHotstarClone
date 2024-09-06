let movies = [
    {
      name: "the falcon and the winter soldier",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
      image: "images/slider 2.PNG"
    },
    {
      name: "loki",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
      image: "images/slider 1.PNG"
    },
    {
      name: "wanda vision",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
      image: "images/slider 3.PNG"
    },
    {
      name: "raya and the last dragon",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
      image: "images/slider 4.PNG"
    },
    {
      name: "luca",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
      image: "images/slider 5.PNG"
    }
  ];
  
  const caraousel = document.querySelector(".caraousel");
  let sliders = [];
  
  let slideIndex = 0; //track the current slideIndex
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    //create DOM Elements
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    // attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    caraousel.appendChild(slide);
  
    // imgElement.appendChild(document.createTextNode(""));
    // h1.appendChild(document.createTextNode(movies[slideIndex].name));
    // p.appendChild(document.createTextNode(movies[slideIndex].des));
    // content.appendChild(h1);
    // content.appendChild(p);
    // slide.appendChild(content);
    // slide.appendChild(imgElement);
    // caraousel.appendChild(slide);
  
    //setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    //setting elements classnames
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
  //Video Cards
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  // card sliders
  
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
  
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  
    // let cardContainers = [...document.querySelectorAll(".card-container")];
    // let preBtns = [...document.querySelectorAll(".pre-btn")];
    // let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
    // cardContainers.forEach((item, i) => {
    //   let containerDimensions = item.getBoundingClientRect();
    //   let containerWidth = containerDimensions.width;
  
    // nxtBtns[i].addEventListener("click", () => {
    //   item.scrollLeft += containerWidth - 200;
    // });
  
    // preBtns[i].addEventListener("click", () => {
    //   item.scrollLeft -= containerWidth + 200;
    // });
  });

  const searchBox = document.querySelector(".search-box");
  const searchResultsContainer = document.getElementById("search-results-container");
  const searchResultsList = document.getElementById("search-results-list");

  searchBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      const searchTerm = searchBox.value.toLowerCase().trim();
      displaySearchResults(searchTerm);

      searchBox.value = '';
    }
  });

  function displaySearchResults(searchTerm) {
    searchResultsList.innerHTML = ''; // Clear previous results

    const filteredMovies = movies.filter(movie =>
      movie.name.toLowerCase().includes(searchTerm)
    );

    if (filteredMovies.length > 0) {
      filteredMovies.forEach(movie => {
        const resultCard = document.createElement("div");
        resultCard.className = "search-result-card";

        const resultImage = document.createElement("img");
        resultImage.src = movie.image;

        const resultInfo = document.createElement("div");
        resultInfo.className = "result-info";

        const resultTitle = document.createElement("h2");
        resultTitle.innerText = movie.name;

        const resultDescription = document.createElement("p");
        resultDescription.innerText = movie.des;

        resultInfo.appendChild(resultTitle);
        resultInfo.appendChild(resultDescription);
        resultCard.appendChild(resultImage);
        resultCard.appendChild(resultInfo);

        searchResultsList.appendChild(resultCard);
      });

      searchResultsContainer.style.display = "block"; // Show search results container
    } else {
      searchResultsContainer.style.display = "none"; // Hide search results if none found
    }
  }

  // Initially hide the search results container
  searchResultsContainer.style.display = "none";


  //login modal

  const loginModal = document.getElementById("loginModal");
  const loginBtn = document.getElementById("loginBtn");
  const closeBtn = document.getElementsByClassName("close")[0];

  // Open the modal
  loginBtn.onclick = function() {
    loginModal.style.display = "block";
  };

  // Close the modal
  closeBtn.onclick = function() {
    loginModal.style.display = "none";
  };

  // Close the modal when the user clicks outside of it
  window.onclick = function(event) {
    if (event.target == loginModal) {
      loginModal.style.display = "none";
    }
  };

  function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation (this can be enhanced)
    if (username === "user" && password === "password") {
      alert("Login successful!");
      loginModal.style.display = "none";
    } else {
      alert("Invalid credentials!");
    }
  }

  //subscribe
  document.querySelector("#btn-subscribe").addEventListener("click", () => {
    alert("You have successfully subscribed, now you can enjoy unlimited content!");
    // window.location.href = 'subscription.html'; // Uncomment if you have a subscription page
  });
  

  