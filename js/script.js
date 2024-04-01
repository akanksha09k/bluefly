document.addEventListener('DOMContentLoaded', function() {
  const productContainer = document.getElementById('product-scroll');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  // Fetch data from the API
  fetch('http://localhost:3000/products')
  .then(response => response.json())
  .then(products => { // Directly using the array of products
      if (!Array.isArray(products) || products.length === 0) {
          throw new Error('No products array found or empty');
      }
  })
  .catch(error => {
      console.error('Error loading products:', error);
  });

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

 //search functionality 
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const searchableItems = document.querySelectorAll('.searchable-item');

        searchableItems.forEach((item) => {
            const text = item.textContent.toLowerCase() || item.innerText.toLowerCase();
            if (text.includes(searchTerm)) {
                item.style.display = ''; // item matches, display it
            } else {
                item.style.display = 'none'; // item does not match, hide it
            }
        });
    });
});
  


// Function to load header
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
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

  
  