// This function will handle the "Show More/Less" functionality for each section.
function toggleSection(section) {
    const moreBrands = section.querySelectorAll('.more-brands');
    moreBrands.forEach(function (brand) {
      brand.classList.toggle('hide');
    });
  
    const showMoreBtn = section.querySelector('.show-more');
    showMoreBtn.textContent = showMoreBtn.textContent.includes('MORE') ? 'SHOW LESS -' : 'SHOW MORE +';
  }
  
  // Set up event listeners for all filter titles.
  document.querySelectorAll('.filter-title').forEach(function (title) {
    title.addEventListener('click', function () {
      const section = this.closest('.filter-section');
      section.querySelector('.filter-list').classList.toggle('hide');
      const toggleText = section.querySelector('.filter-toggle');
      toggleText.textContent = toggleText.textContent === '▼' ? '▲' : '▼';
    });
  });
  
  // Set up event listeners for all "Show More/Less" buttons.
  document.querySelectorAll('.show-more').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const section = this.closest('.filter-section');
      toggleSection(section);
    });
  });
  