console.log("Script loaded");

document.getElementById('changeColorBtn').addEventListener('click', function() {
  const colors = ['#fefbd8', '#6b3e26', '#80ced6', '#f18973', '#d5f4e6'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
