class Body extends HTMLElement {
  connectedCallback() {
    // save whatever is inside the tags first
    const content = this.innerHTML;

    // then wrap it
    this.innerHTML = `
      <main class="main-content">
        <div class="container-fluid p-4">
          ${content}
        </div>
      </main>
    `;
  }
}

customElements.define("body-content", Body);
