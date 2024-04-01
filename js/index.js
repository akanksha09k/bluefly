fetch('http://localhost:3000/promotionalBanners') 
  .then(response => response.json())
  .then(slidesData => { 
    const sliderContainer = document.getElementById('slider');

    slidesData.forEach((slide, index) => {
      const slideElement = document.createElement('div');
      slideElement.className = `slide${index === 0 ? " active" : ""}`;
      slideElement.innerHTML = `
        <img src="${slide.image}" alt="Slide">
        <div class="text-overlay">
          <h2>${slide.headline}</h2>
          <p>${slide.subline}</p>
          <a href="${slide.link}" class="shop-now">SHOP NOW</a>
        </div>
      `;
      sliderContainer.appendChild(slideElement);
    });

    attachSliderNavigation();
  });

function attachSliderNavigation() {
  let activeSlideIndex = 0;
  const slides = document.querySelectorAll('.slider .slide');

  document.querySelector('.prev').addEventListener('click', () => {
    changeSlide(-1);
  });

  document.querySelector('.next').addEventListener('click', () => {
    changeSlide(1);
  });

  function changeSlide(direction) {
    slides[activeSlideIndex].classList.remove('active');
    activeSlideIndex = (activeSlideIndex + slides.length + direction) % slides.length;
    slides[activeSlideIndex].classList.add('active');
  }

  // Auto slide change every 5 seconds
  setInterval(() => {
    changeSlide(1);
  }, 5000);
}
document.addEventListener('DOMContentLoaded', function() {
  const productContainer = document.getElementById('product-scroll');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  // Function to fetch and render products
  function fetchAndRenderProducts() {
    fetch('http://localhost:3000/products')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      if (!data || !Array.isArray(data)) {
        throw new Error('No products array found');
      }

      const productSection = document.getElementById('product-section');
      productContainer.innerHTML = ''; 
      data.forEach(product => {
        const productCard = createProductCard(product);
        productContainer.appendChild(productCard);
      });
    })
    .catch(error => {
      console.error('Error loading products:', error);
      // You can update the UI here to inform the user that an error has occurred
    });
  }

  // Call fetchAndRenderProducts initially
  fetchAndRenderProducts();

  // Function to create product card
  function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const image = document.createElement('img');
    image.src = product.image_url;
    image.alt = product.name;
    image.className = 'product-image';

    const name = document.createElement('h3');
    name.textContent = product.name;
    name.className = 'product-name';

    const originalPrice = document.createElement('p');
    originalPrice.textContent = `Original Price: $${product.original_price.toFixed(2)}`;
    originalPrice.className = 'product-original-price';

    const discountedPrice = document.createElement('p');
    discountedPrice.textContent = `Discounted Price: $${product.discounted_price.toFixed(2)}`;
    discountedPrice.className = 'product-discounted-price';

    const discountPercentage = document.createElement('p');
    discountPercentage.textContent = `Discount: ${product.discount_percentage}%`;
    discountPercentage.className = 'product-discount-percentage';

    productCard.appendChild(image);
    productCard.appendChild(name);
    productCard.appendChild(originalPrice);
    productCard.appendChild(discountedPrice);
    productCard.appendChild(discountPercentage);

    return productCard;
  }

  // Event listeners for navigation buttons
  prevButton.addEventListener('click', () => scrollProducts('left'));
  nextButton.addEventListener('click', () => scrollProducts('right'));

  function scrollProducts(direction) {
    const scrollAmount = 300; // Adjust as needed
    const containerScroll = productContainer.scrollLeft;

    if (direction === 'left') {
      productContainer.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
      productContainer.scrollLeft += scrollAmount;
    }
  }
});


//newarrival
document.addEventListener('DOMContentLoaded', () => {
  const newArrivalsContainer = document.querySelector('.new-arrivals-container');

  // Replace 'path_to_your_api' with the actual path to your API
  fetch('http://localhost:3000/newArrival')
    .then(response => response.json())
    .then(data => {
      // Assuming 'newArrival' is the key in the JSON response containing the array
      data.newArrival.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('new-arrival-card');
        card.innerHTML = `
          <img src="${item.image_url}" alt="${item.name}">
          <div class="info">
            <div class="name">${item.name}</div>
            <div class="price">${item.original_price}</div>
            <div class="discount">${item.discounted_price}</div>
            <div class="save-percentage">${item.save_percentage}</div>
          </div>
        `;
        newArrivalsContainer.appendChild(card);
      });
    })
    .catch(error => console.error('Error fetching new arrivals:', error));
});


function loadHeader() {
  console.log('Loading header...');
  fetch('header.html')
      .then(response => response.text())
      .then(data => {
          document.querySelector('header').innerHTML = data;
          console.log('Header loaded successfully!');
      })
      .catch(error => {
          console.error('Error loading header:', error);
      });
}

// Function to load footer
function loadFooter() {
  fetch('footer.html')
      .then(response => response.text())
      .then(data => {
          document.querySelector('footer').innerHTML = data;
      });
}

// Call the functions to load header and footer
loadHeader();
loadFooter();

document.addEventListener('DOMContentLoaded', function() {
  var loginLink = document.getElementById('loginLink');
  loginLink.addEventListener('click', function(event) {
      event.preventDefault(); // This prevents the default anchor action
      openLoginForm();
  });
});

function openLoginForm() {
  // Your logic to open the login form
  window.location.href = 'login.html'; // Or show a login modal, etc.
}

