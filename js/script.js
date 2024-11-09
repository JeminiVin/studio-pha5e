document.querySelectorAll('.hero-image').forEach((image) => {
    image.addEventListener('mousemove', (e) => {
      const rect = image.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      image.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;
    });
  
    image.addEventListener('mouseleave', () => {
      image.style.transform = 'translate(0, 0)';
    });
  });
  
