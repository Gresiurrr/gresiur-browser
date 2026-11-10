document.addEventListener('DOMContentLoaded', () => {
  const primaryButtons = document.querySelectorAll('.primary-btn, .nav-button');

  primaryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      button.animate(
        [
          { transform: 'scale(1)' },
          { transform: 'scale(0.98)' },
          { transform: 'scale(1)' }
        ],
        {
          duration: 180,
          easing: 'ease-out'
        }
      );
    });
  });
});
