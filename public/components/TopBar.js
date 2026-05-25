class TopBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light bg-success">
        <div class="container-fluid px-4">
          <span class="navbar-brand fw-bold"><img src="/components/school.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top"></span><span class="navbar-brand fw-bold">សាលាបឋមសិក្សាធ្លកអណ្ដូង</span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link text-white" href="/pages/about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="/pages/contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}
customElements.define("top-bar", TopBar);
