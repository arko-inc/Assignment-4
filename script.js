  // Toggle the mobile menu visibility
  function toggleMenu() {
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('menu-visible');
    menu.classList.toggle('menu-hidden');
}


document.addEventListener('click', function(event) {
    var menu = document.getElementById('mobile-menu');
    var menuBtn = document.getElementById('menu-btn');
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        menu.classList.add('menu-hidden');
        menu.classList.remove('menu-visible');
    }
});
const switchButton = document.getElementById('switch');
const icon = switchButton.querySelector('i');

// Check if dark mode is already enabled (from localStorage or system preference)
if (localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
document.documentElement.classList.add('dark');
icon.classList.replace('fa-moon', 'fa-sun'); // Change icon to sun
}

// Toggle dark mode on button click
switchButton.addEventListener('click', () => {
document.documentElement.classList.toggle('dark');

// Save the theme in localStorage
if (document.documentElement.classList.contains('dark')) {
localStorage.setItem('theme', 'dark');
icon.classList.replace('fa-moon', 'fa-sun'); // Change icon to sun
} else {
localStorage.setItem('theme', 'light');
icon.classList.replace('fa-sun', 'fa-moon'); // Change icon back to moon
}
});