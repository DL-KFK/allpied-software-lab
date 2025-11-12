fetch('tools.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('tools-container');
    data.forEach(tool => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h2>${tool.name}</h2>
        <p>${tool.description}</p>
        <p class="author">Автор: ${tool.author}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error('Помилка завантаження JSON:', err);
  });

const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(query) ? '' : 'none';
  });
});

