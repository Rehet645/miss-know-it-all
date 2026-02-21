document.addEventListener("DOMContentLoaded", loadConfessions);

function addConfession() {
  const input = document.getElementById("confessionInput");
  const confessionText = input.value.trim();

  if (confessionText === "") {
    alert("Please write something before submitting.");
    return;
  }

  let confessions = JSON.parse(localStorage.getItem("confessions")) || [];
  confessions.push(confessionText);

  localStorage.setItem("confessions", JSON.stringify(confessions));

  input.value = "";
  loadConfessions();
}

function loadConfessions() {
  const confessionsDiv = document.getElementById("confessions");
  confessionsDiv.innerHTML = "";

  let confessions = JSON.parse(localStorage.getItem("confessions")) || [];

  confessions.reverse().forEach(text => {
    const post = document.createElement("div");
    post.classList.add("post");
    post.textContent = text;
    confessionsDiv.appendChild(post);
  });
}