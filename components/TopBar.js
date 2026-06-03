class TopBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light" style="background: linear-gradient(135deg, #1a3b0a, #254d12, #223618);">
        <div class="container-fluid px-4">
          <span class="navbar-brand fw-bold">
            <a href="/"><img src="/components/school.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top"></a>
          </span>

          <!-- Custom dropdown toggle button (right side) -->
          <div class="ms-auto position-relative">
            <button id="menuBtn" style="
              background: none;
              border: 1px solid rgba(255,255,255,0.4);
              color: white;
              padding: 6px 14px;
              border-radius: 6px;
              cursor: pointer;
              font-size: 15px;
            ">☰ ផ្សេងៗ</button>

            <div id="dropMenu" style="
              display: none;
              position: absolute;
              right: 0;
              top: calc(100% + 8px);
              background: #1a3b0a;
              border: 1px solid rgba(255,255,255,0.15);
              border-radius: 8px;
              min-width: 160px;
              box-shadow: 0 8px 24px rgba(0,0,0,0.4);
              z-index: 9999;
              overflow: hidden;
            ">
              <a href="/pages/aboutus.html" style="display:block; padding:12px 18px; color:white; text-decoration:none; font-size:14px; transition: background 0.2s;"
                onmouseover="this.style.background='rgba(255,255,255,0.1)'"
                onmouseout="this.style.background='transparent'">អំពី</a>
                <a href="/pages/students.html" style="display:block; padding:12px 18px; color:white; text-decoration:none; font-size:14px; border-top:1px solid rgba(255,255,255,0.08); transition: background 0.2s;"
                onmouseover="this.style.background='rgba(255,255,255,0.1)'"
                onmouseout="this.style.background='transparent'">សិស្សទាំងអស់</a>
              <a href="/pages/contact.html" style="display:block; padding:12px 18px; color:white; text-decoration:none; font-size:14px; border-top:1px solid rgba(255,255,255,0.08); transition: background 0.2s;"
                onmouseover="this.style.background='rgba(255,255,255,0.1)'"
                onmouseout="this.style.background='transparent'">ទំនាក់ទំនង</a>
                 <a href="/pages/ranking.html" style="display:block; padding:12px 18px; color:white; text-decoration:none; font-size:14px; border-top:1px solid rgba(255,255,255,0.08); transition: background 0.2s;"
                onmouseover="this.style.background='rgba(255,255,255,0.1)'"
                onmouseout="this.style.background='transparent'">ចំណាត់ថ្នាក់</a>
            </div>
          </div>

        </div>
      </nav>
    `;

    // Click to toggle
    const btn = this.querySelector("#menuBtn");
    const menu = this.querySelector("#dropMenu");

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = menu.style.display === "block";
      menu.style.display = isOpen ? "none" : "block";
    });

    // Click outside to close
    document.addEventListener("click", () => {
      menu.style.display = "none";
    });
  }
}

customElements.define("top-bar", TopBar);
