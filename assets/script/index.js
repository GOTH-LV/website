fetch('assets/ascii/rose.txt')
  .then(response => response.text())
  .then(art => {
    document.getElementById('ascii-rose').textContent = art;
  })
  .catch(err => console.error('Failed to load ASCII art:', err));
