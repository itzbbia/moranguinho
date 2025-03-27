
document.addEventListener('DOMContentLoaded', function() {
  const showMoreButton = document.getElementById('show-more');
  const extraCartoons = document.getElementById('extra-cartoons');
  
  showMoreButton.addEventListener('click', function() {
    if (extraCartoons.style.display === 'none') {
      extraCartoons.style.display = 'block';
      showMoreButton.textContent = 'Mostrar menos desenhos';
    } else {
      extraCartoons.style.display = 'none';
      showMoreButton.textContent = 'Mostrar mais desenhos';
    }
  });
});
