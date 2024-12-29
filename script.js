// Example JS for adding interactivity (e.g., logging buy button clicks)

document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.btn-buy');
  
    buyButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const gameName = e.target.parentElement.querySelector('h3').textContent;
        alert(`You have added ${gameName} to your cart!`);
      });
    });
  });
  