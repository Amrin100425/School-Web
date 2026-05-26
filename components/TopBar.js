class TopBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light" style="background: linear-gradient(135deg, #1a3b0a, #254d12, #448b21 );">
        <div class="container-fluid px-4">
          <span class="navbar-brand fw-bold"><a href="/"><img src="/components/school.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top"></a></span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link text-white" href="/pages/aboutus.html">About</a>
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
