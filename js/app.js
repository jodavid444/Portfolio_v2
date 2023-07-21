const menuIcon = document.querySelector('.hamburger');
const navMenu = document.querySelector('.toggle-nav');
const closeBtn = document.querySelector('.close-container');
const headerContainer = document.querySelector('#header-container')
const linksItem1 = document.querySelector('.links-item1');
const linksItem2 = document.querySelector('.links-item2');
const linksItem3 = document.querySelector('.links-item3');


menuIcon.addEventListener('click', () => {
     navMenu.style.transform = 'translateX(0)';
     headerContent.style.height = '100%';
})

linksItem1.addEventListener('click', () => {
     navMenu.style.transform = 'translateX(-500%)';
     headerContent.style.height = '60px';
   });
   linksItem2.addEventListener('click', () => {
     navMenu.style.transform = 'translateX(-500%)';
     headerContent.style.height = '60px';
   });
   linksItem3.addEventListener('click', () => {
     navMenu.style.transform = 'translateX(-500%)';
     headerContent.style.height = '60px';
   });
   
   closeBtn.addEventListener('click', () => {
     navMenu.style.transform = 'translateX(-500%)';
     headerContent.style.height = '60px';
   });


// Smooth scroll function
function smoothScroll(target, duration) {
  const targetElement = document.querySelector(target);
  const targetPosition = targetElement.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Event listener for smooth scroll on link click
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    const duration = 1000; // Adjust this value for the scroll speed
    smoothScroll(target, duration);
  });
});




