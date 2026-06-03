class Ranking extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="rankingItem" style="position: relative; display: inline-block;">
        <button id="rankingBtn" style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 18px;
          color: white;
          background: transparent;
          border: none;
          border-radius: 6px;
          font-size: 14px;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.2s;
        "
          onmouseover="this.style.background='rgba(255,255,255,0.1)'"
          onmouseout="this.style.background='transparent'">
          <h3>☰</h3> <span style="font-size:11px; margin-left:6px;"></span>
        </button>

        <div id="subMenu" style="
          display: none;
          position: absolute;
          left: 0;
          top: calc(100% + 6px);
          background: #1a3b0a;
          border:none;
          border-radius: 8px;
          min-width: 150px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.4);
          z-index: 10000;
          overflow: hidden;
        ">
          <a href="/pages/subpages/class1.html?class=1" style="display:block; padding:10px 16px; color:white; text-decoration:none; font-size:13px; transition: background 0.2s;"
            onmouseover="this.style.background='rgba(255,255,255,0.1)'"
            onmouseout="this.style.background='transparent'">ថ្នាក់ទី ១</a>
          <a href="/pages/ranking.html?class=2" style="display:block; padding:10px 16px; color:white; text-decoration:none; font-size:13px; border-top:1px solid rgba(255,255,255,0.08); transition: background 0.2s;"
            onmouseover="this.style.background='rgba(255,255,255,0.1)'"
            onmouseout="this.style.background='transparent'">ថ្នាក់ទី ២</a>
          <a href="/pages/ranking.html?class=3" style="display:block; padding:10px 16px; color:white; text-decoration:none; font-size:13px; border-top:1px solid rgba(255,255,255,0.08); transition: background 0.2s;"
            onmouseover="this.style.background='rgba(255,255,255,0.1)'"
            onmouseout="this.style.background='transparent'">ថ្នាក់ទី ៣</a>
          <a href="/pages/ranking.html?class=4" style="display:block; padding:10px 16px; color:white; text-decoration:none; font-size:13px; border-top:1px solid rgba(255,255,255,0.08); transition: background 0.2s;"
            onmouseover="this.style.background='rgba(255,255,255,0.1)'"
            onmouseout="this.style.background='transparent'">ថ្នាក់ទី ៤</a>
          <a href="/pages/ranking.html?class=5" style="display:block; padding:10px 16px; color:white; text-decoration:none; font-size:13px; border-top:1px solid rgba(255,255,255,0.08); transition: background 0.2s;"
            onmouseover="this.style.background='rgba(255,255,255,0.1)'"
            onmouseout="this.style.background='transparent'">ថ្នាក់ទី ៥</a>
          <a href="/pages/ranking.html?class=6" style="display:block; padding:10px 16px; color:white; text-decoration:none; font-size:13px; border-top:1px solid rgba(255,255,255,0.08); transition: background 0.2s;"
            onmouseover="this.style.background='rgba(255,255,255,0.1)'"
            onmouseout="this.style.background='transparent'">ថ្នាក់ទី ៦</a>
        </div>
      </div>
    `;

    const rankingBtn = this.querySelector("#rankingBtn");
    const subMenu = this.querySelector("#subMenu");

    // Click to toggle sub-menu
    rankingBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = subMenu.style.display === "block";
      subMenu.style.display = isOpen ? "none" : "block";
    });

    // Click outside to close
    document.addEventListener("click", () => {
      subMenu.style.display = "none";
    });
  }
}

customElements.define("ranking-dropdown", Ranking);
