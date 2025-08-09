// Reusable Navigation Bar Component
function createNavbar() {
  return `
    <nav id="nav-bar">
      <img src="./Assets/Brand/logo-colored.svg" id="brandImage" />
      <div id="searchbarNBtn">
        <input type="text" placeholder="Search" required />
        <button id="menuBtn" type="button">All category &ensp;⌵</button>
        <div id="dropdown-content">
          <a href="#">Food</a>
          <a href="#">Sport</a>
          <a href="#">Tech</a>
        </div>
        <button id="searchBtn" type="submit">Search</button>
      </div>
      <div id="options">
        <div>
          <img src="./Assets/Image/navigation bar icons/profile.svg" />
          <p id="nav-item-alt">Profile</p>
        </div>
        <div class="message">
          <img src="./Assets/Image/navigation bar icons/message.svg" />
          <p id="nav-item-alt">Message</p>
        </div>
        <div>
          <img src="./Assets/Image/navigation bar icons/heart.svg" />
          <p id="nav-item-alt">Orders</p>
        </div>
        <div>
          <img src="./Assets/Image/navigation bar icons/cart.svg" />
          <p id="nav-item-alt">My Cart</p>
        </div>
      </div>
    </nav>
  `;
}

// Function to load navbar into any page
function loadNavbar() {
  const navbarContainer = document.getElementById('navbar-container');
  if (navbarContainer) {
    navbarContainer.innerHTML = createNavbar();
  }
}

// Load navbar when DOM is ready
document.addEventListener('DOMContentLoaded', loadNavbar);