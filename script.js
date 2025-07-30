alert("Привет! Я JS из отдельного файла");

document.getElementById('changeColorBtn').addEventListener('click', function() {
  // Меняем цвет фона body на случайный
  const colors = ['#fefbd8', '#6b3e26', '#80ced6', '#f18973', '#d5f4e6'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
