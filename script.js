document.addEventListener("DOMContentLoaded", loadConfessions);

function addConfession() {
  const input = document.getElementById("confessionInput");
  const confessionText = input.value.trim();

  if (confessionText === "") {
    alert("Please write something before submitting.");
    return;
  }

  let confessions = JSON.parse(localStorage.getItem("confessions")) || [];

  confessions.push({
    text: confessionText,
    time: new Date().toLocaleString()
  });

  localStorage.setItem("confessions", JSON.stringify(confessions));

  input.value = "";
  loadConfessions();
}

function loadConfessions() {
  const confessionsDiv = document.getElementById("confessions");
  confessionsDiv.innerHTML = "";

  let confessions = JSON.parse(localStorage.getItem("confessions"));

  if (!confessions || confessions.length === 0) {
    confessions = [
      { text: "Sometimes I feel overwhelmed but I smile anyway.", time: "Demo Post" },
      { text: "It’s okay to not be okay.", time: "Demo Post" }
    ];
  }

  confessions.slice().reverse().forEach(item => {
    const post = document.createElement("div");
    post.classList.add("post");
    post.innerHTML = `<p>${item.text}</p><small>${item.time}</small>`;
    confessionsDiv.appendChild(post);
  });
}
