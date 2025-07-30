console.log("Script loaded");

document.getElementById('changeColorBtn').addEventListener('click', function() {
  const colors = ['#fefbd8', '#6b3e26', '#80ced6', '#f18973', '#d5f4e6'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
 //window.addEventListener("scroll", function () {
 // const info = document.getElementById("scrollInfo");
 // if (window.scrollY > 200) { // когда прокрутка > 200px
  //  info.classList.add("show");
//  } else {
 //   info.classList.remove("show");
 // }
//});
//const scrollInfo = document.getElementById('scrollInfo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    // показываем полоску
    scrollInfo.classList.add('active');
    scrollInfo.classList.remove('hidden');
  } else {
    // прячем полностью
    scrollInfo.classList.remove('active');
    scrollInfo.classList.add('hidden');
  }
});

