document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
      });
    }
    const animateOnScroll = function() {
      const elements = document.querySelectorAll('.card, .feature-card');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
          element.classList.add('animate-fadeIn');
        }
      });
    };
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    const flashMessages = document.querySelectorAll('.alert');
    flashMessages.forEach(msg => {
      setTimeout(() => {
        msg.style.transition = 'opacity 0.5s ease';
        msg.style.opacity = '0';
        setTimeout(() => msg.remove(), 500);
      }, 5000);
    });
    const deleteButtons = document.querySelectorAll('.delete-trip');
    deleteButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        if (!confirm('Are you sure you want to delete this trip?')) {
          e.preventDefault();
        }
      });
    });
  });