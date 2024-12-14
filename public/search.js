document.getElementById('searchForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const searchBy = formData.get('searchBy');
    const query = formData.get('query');
  
    const response = await fetch('/api/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ searchBy, query }),
    });
  
    const results = await response.json();
    const table = document.getElementById('resultsTable');
    table.innerHTML = '';
  
    results.forEach((result) => {
      const row = `<tr>
        <td>${result.Name}</td>
        <td>${result.Description}</td>
        <td>${result.BranchType}</td>
        <td>${result.DeliveryStatus}</td>
        <td>${result.Circle}</td>
        <td>${result.District}</td>
        <td>${result.Region}</td>
        <td>${result.State}</td>
        <td><button class="btn btn-favorite" onclick="saveFavorite(${JSON.stringify(result)})">Favorite</button></td>
      </tr>`;
      table.innerHTML += row;
    });
  });
  
  async function saveFavorite(data) {
    await fetch('/api/favorites', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      alert('Added to favorites');
    })
    .catch((error) => {
      console.error('Error adding to favorites:', error);
    });
  }
  