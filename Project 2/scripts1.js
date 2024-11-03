function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  if (taskInput.value === "") return;
  const listItem = document.createElement("li");
  listItem.textContent = taskInput.value;
  const removeBtn = document.createElement("button");
  removeBtn.textContent= "Remove";
  removeBtn.onclick = function () {
    listItem.remove();
  };
  listItem.appendChild(removeBtn);
  taskList.appendChild(listItem);
  taskInput.value = "";
}
document.getElementById("contactForm").onsubmit = function (event) {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  if (!name.value || !email.value || !message.value) {
    alert("All fields are required.");
    event.preventDefault();
    return;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    alert("Please enter a valid email address.");
    event.preventDefault();
    return;
  }
  alert("Thank you for contacting us! We will get back to you soon.");
};
function toggleMenu() {
  const navbarLinks = document.getElementById('navbarLinks');
  navbarLinks.classList.toggle('show');
}