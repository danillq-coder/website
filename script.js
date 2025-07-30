console.log("Script loaded");

document.getElementById('changeColorBtn').addEventListener('click', function() {
  const colors = ['#fefbd8', '#6b3e26', '#80ced6', '#f18973', '#d5f4e6'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

const scrollInfo = document.getElementById('scrollInfo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollInfo.classList.add('active');
    scrollInfo.classList.remove('hidden');
  } else {
    scrollInfo.classList.remove('active');
    scrollInfo.classList.add('hidden');
  }
});
