const sky = document.getElementById('sky');
const toggleBtn = document.getElementById('toggle-btn');
let isDay = true;

function createStars(count) {
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${1 + Math.random() * 2}s`;
    sky.appendChild(star);
  }
}

function removeStars() {
  document.querySelectorAll('.star').forEach(star => star.remove());
}

toggleBtn.addEventListener('click', () => {
  isDay = !isDay;

  if (isDay) {
    sky.classList.remove('night');
    sky.classList.add('day');
    toggleBtn.textContent = '🌙';
    removeStars();
    document.querySelectorAll('.cloud').forEach(cloud => {
      cloud.style.display = 'block';
    });
  } else {
    sky.classList.remove('day');
    sky.classList.add('night');
    toggleBtn.textContent = '☀️';
    createStars(100);
    document.querySelectorAll('.cloud').forEach(cloud => {
      cloud.style.display = 'none';
    });
  }
});
