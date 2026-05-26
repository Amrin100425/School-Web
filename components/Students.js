const API = "http://localhost:3000";

fetch(`${API}/api/students/total`)
  .then((r) => r.json())
  .then((d) => (document.getElementById("total").textContent = d.total));

fetch(`${API}/api/students/passed`)
  .then((r) => r.json())
  .then((d) => (document.getElementById("passed").textContent = d.total));

fetch(`${API}/api/students/failed`)
  .then((r) => r.json())
  .then((d) => (document.getElementById("failed").textContent = d.total));

fetch(`${API}/api/students/by-grade`)
  .then((r) => r.json())
  .then((data) => {
    const container = document.getElementById("grade-cards");
    data.forEach((row) => {
      container.innerHTML += `
        <div class="stat-card">
          <i class="fa-solid fa-graduation-cap card-icon" style="color:#fbbf24"></i>
          <span class="card-label">ថ្នាក់ទី ${row._id}</span>
          <span class="card-value">${row.total}</span>
          <span class="card-sub sub-gray">នាក់</span>
        </div>`;
    });
  });
