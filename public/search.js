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
  
    results.forEach((result, index) => {
      const encodedData = encodeURIComponent(JSON.stringify(result));
      const row = `<tr>
        <td>${result.Name}</td>
        <td>${result.Description}</td>
        <td>${result.BranchType}</td>
        <td>${result.DeliveryStatus}</td>
        <td>${result.Circle}</td>
        <td>${result.District}</td>
        <td>${result.Region}</td>
        <td>${result.State}</td>
        <td>
  <button 
    class="btn btn-favorite" 
    onclick="saveFavorite('${encodeURIComponent(JSON.stringify(result))}')"
  >
    Favorite
  </button>
</td>
      </tr>`;
      table.innerHTML += row;
    });
  });
  
  async function saveFavorite(encodedData) {
    const data = JSON.parse(decodeURIComponent(encodedData));

    // console.log( JSON.stringify(data)){"Name":"","Description":""}

    try {
        const response = await fetch('/api/favorites', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error response from server:', errorText);
            throw new Error(`Server error: ${response.status}`);
        }

        const responseData = await response.json();
        alert('Added to favorites');
    } catch (error) {
        console.error('Error adding to favorites:', error);
        alert('Failed to add to favorites. Check console for details.');
    }
}

