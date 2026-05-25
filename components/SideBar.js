class SideBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="sidebar d-flex flex-column flex-shrink-0 p-2" id="sidebar">
        
        <a href="/index.html" class="sidebar-link" title="Home">
          <i class="fa-solid fa-home"></i>
          <span class="link-text">Home</span>
        </a>
        <a href="/pages/about.html" class="sidebar-link" title="About">
          <i class="fa-solid fa-info-circle"></i>
          <span class="link-text">About</span>
        </a>
        <a href="/pages/contact.html" class="sidebar-link" title="Contact">
          <i class="fa-solid fa-envelope"></i>
          <span class="link-text">Contact</span>
        </a>
        <a href="/pages/students.html" class="sidebar-link" title="Students">
          <i class="fa-solid fa-users"></i>
          <span class="link-text">Students</span>
        </a>
        <a href="/pages/report.html" class="sidebar-link" title="Reports">
          <i class="fa-solid fa-chart-bar"></i>
          <span class="link-text">Reports</span>
        </a>
        <a href="/pages/ranking.html" class="sidebar-link" title="Ranking">
          <i class="fa-solid fa-star"></i>
          <span class="link-text">Ranking</span>
        </a>

        <button class="toggle-btn" id="sidebarToggle" title="Toggle">
          <i class="fa-solid fa-arrow-right" id="toggleIcon"></i>
        </button>
      </div>
    `;

    document.getElementById("sidebarToggle").addEventListener("click", () => {
      const sidebar = document.getElementById("sidebar");
      const icon = document.getElementById("toggleIcon");
      sidebar.classList.toggle("expanded");
      icon.className = sidebar.classList.contains("expanded")
        ? "fa-solid fa-arrow-left"
        : "fa-solid fa-arrow-right";
    });
  }
}
customElements.define("side-bar", SideBar);
