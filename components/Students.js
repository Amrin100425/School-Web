// const API = "http://localhost:3000";
const API =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://school-web-jet.vercel.app";

fetch(`${API}/api/students/total`)
  .then((r) => r.json())
  .then((d) => (document.getElementById("total").textContent = d.total));

fetch(`${API}/api/students/gender`)
  .then((r) => r.json())
  .then(
    (d) => (document.getElementById("totalGirl").textContent = d.totalGirl),
  );

fetch(`${API}/api/students/grade`)
  .then((r) => r.json())
  .then((d) => (document.getElementById("grade1").textContent = d.totalG1));

fetch(`${API}/api/students/grade1girl`)
  .then((r) => r.json())
  .then(
    (d) => (document.getElementById("grade1girl").textContent = d.totalGG1),
  );

fetch(`${API}/api/students/grade2`)
  .then((r) => r.json())
  .then((d) => (document.getElementById("grade2").textContent = d.totalG2));

fetch(`${API}/api/students/grade2girl`)
  .then((r) => r.json())
  .then(
    (d) => (document.getElementById("grade2girl").textContent = d.totalGG2),
  );

fetch(`${API}/api/students/grade3`)
  .then((r) => r.json())
  .then((d) => (document.getElementById("grade3").textContent = d.totalG3));

fetch(`${API}/api/students/grade3girl`)
  .then((r) => r.json())
  .then(
    (d) => (document.getElementById("grade3girl").textContent = d.totalGG3),
  );

fetch(`${API}/api/students/grade4`)
  .then((r) => r.json())
  .then((d) => (document.getElementById("grade4").textContent = d.totalG4));

fetch(`${API}/api/students/grade4girl`)
  .then((r) => r.json())
  .then(
    (d) => (document.getElementById("grade4girl").textContent = d.totalGG4),
  );

fetch(`${API}/api/students/grade5`)
  .then((r) => r.json())
  .then((d) => (document.getElementById("grade5").textContent = d.totalG5));

fetch(`${API}/api/students/grade5girl`)
  .then((r) => r.json())
  .then(
    (d) => (document.getElementById("grade5girl").textContent = d.totalGG5),
  );

fetch(`${API}/api/students/grade6`)
  .then((r) => r.json())
  .then((d) => (document.getElementById("grade6").textContent = d.totalG6));

fetch(`${API}/api/students/grade6girl`)
  .then((r) => r.json())
  .then(
    (d) => (document.getElementById("grade6girl").textContent = d.totalGG6),
  );
fetch(`${API}/api/students/grade1k`)
  .then((r) => r.json())
  .then(
    (d) => (document.getElementById("grade1k").textContent = d.totalG1K),
  );

fetch(`${API}/api/students/grade1kgirl`)
  .then((r) => r.json())
  .then(
    (d) => (document.getElementById("grade1kgirl").textContent = d.totalGG1K),
  );

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
