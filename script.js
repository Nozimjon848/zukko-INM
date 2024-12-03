const nav = document.getElementById("nav");
const body = document.getElementById("body");
const b = document.getElementById("b");
const d = document.getElementById("d");
const a = document.getElementById("a");
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) { 
    nav.classList.add('sticky'); 
  } else {
    nav.classList.remove('sticky');
  }
});
b.addEventListener('click', () => {
  body.style.backgroundColor = "rgb(32, 32, 32)"
  b.style.display = "none";
  d.style.display = "block";
  a.style.color = "white";
})
d.addEventListener('click', () => {
  body.style.backgroundColor = "transparent"
  d.style.display = "none";
  b.style.display = "block";
})
document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Formani yuklashdan saqlaydi
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;

  // Ma'lumotlarni dropdownga qo'shish
  const accountDropdown = document.querySelector('#accountDropdown .dropdown-menu');
  accountDropdown.innerHTML = `
    <li><span class="dropdown-item-text"><strong>Foydalanuvchi nomi:</strong> ${username}</span></li>
    <li><span class="dropdown-item-text"><strong>Email:</strong> ${email}</span></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item text-danger" href="#">Chiqish</a></li>
  `;
});
