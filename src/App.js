import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

// Scroll fade-in
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Form submit
  function handleSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('submit-btn');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '✓ Message Sent!';
      btn.style.background = '#443DAA';
      e.target.reset();
      setTimeout(() => {
        btn.textContent = 'Send Message ✦';
        btn.disabled = false;
        btn.style.background = '';
      }, 3000);
    }, 1200);
  }

export default App;
