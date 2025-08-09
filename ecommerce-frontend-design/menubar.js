// Reusable Menu Bar Component
function createMenubar() {
  return `
    <section id="menu-bar">
      <nav id="options">
        <div class="dropdown">
          <a href="#" class="nav-item">☰ All category</a>
          <div class="dropdown-content">
            <a href="#second-row">Electronics</a>
            <a href="#recommendedItems">Clothing</a>
            <a href="#interiorProducts">Home & Garden</a>
          </div>
        </div>
        <a href="#dealNoffers" class="nav-item">Hot Offers</a>
        <a href="#" class="nav-item">Gift boxes</a>
        <a href="#" class="nav-item">Projects</a>
        <a href="#" class="nav-item">Menu item</a>
        <div class="dropdown">
          <a href="#" class="nav-item">Help &ensp;⌵</a>
          <div class="dropdown-content">
            <a href="#">Customer Service</a>
            <a href="#">FAQs</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </nav>
      <div id="shipNlanguage">
        <div class="dropdown">
          <a href="#" class="nav-item">English, USD&ensp;⌵</a>
          <div class="dropdown-content">
            <a href="#">EUR - Euro</a>
            <a href="#">GBP - Pound</a>
            <a href="#">JPY - Yen</a>
          </div>
        </div>
        <div class="dropdown">
          <a href="#" class="nav-item">
            <span>Ship to</span>
            &ensp; <img src="./Assets/Image/flags/Property 1=DE.svg" /> &ensp;⌵
          </a>
          <div class="dropdown-content">
            <a href="#">United States</a>
            <a href="#">United Kingdom</a>
            <a href="#">France</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Function to load menubar into any page
function loadMenubar() {
  const menubarContainer = document.getElementById('menubar-container');
  if (menubarContainer) {
    menubarContainer.innerHTML = createMenubar();
  }
}

// Load menubar when DOM is ready
document.addEventListener('DOMContentLoaded', loadMenubar);