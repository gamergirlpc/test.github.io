
// Functie om de aftelklok te starten
function startCountdown() {
    const countdownDate = new Date('2023-12-25T00:00:00').getTime();
  
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = countdownDate - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById('days').innerText = days;
      document.getElementById('hours').innerText = hours;
      document.getElementById('minutes').innerText = minutes;
      document.getElementById('seconds').innerText = seconds;
  
      if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById('timer').innerHTML = 'Het is Kerstmis!';
      }
    }
  
    updateCountdown(); // Update de countdown direct om de initiele weergave te laten zien
  
    const timerInterval = setInterval(updateCountdown, 1000); 
  }
  
  // Start de aftelklok wanneer de pagina geladen is
  window.onload = function() {
    startCountdown();
  };

  