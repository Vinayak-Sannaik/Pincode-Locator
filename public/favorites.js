document.addEventListener('DOMContentLoaded', async () => {
    try {
      // Fetch favorites from the server
      const response = await fetch('/api/favorites');
      if (!response.ok) {
        throw new Error('Failed to load favorites');
      }
  
      const favorites = await response.json();
  
      // Get the container element for displaying favorites
      const favoritesBody = document.getElementById('favoritesBody');
  
      // Loop through each favorite and add it to the table
      favorites.forEach((favorite) => {
        const row = `
          <tr>
            <td>${favorite.name || 'N/A'}</td>
            <td>${favorite.description || 'N/A'}</td>
            <td>${favorite.branch_type || 'N/A'}</td>
            <td>${favorite.delivery_status || 'N/A'}</td>
            <td>${favorite.circle || 'N/A'}</td>
            <td>${favorite.district || 'N/A'}</td>
            <td>${favorite.region || 'N/A'}</td>
            <td>${favorite.state || 'N/A'}</td>
            <td>${favorite.pincode || 'N/A'}</td>
            <td><button class="btn btn-danger" onclick="removeFavorite(${favorite.id})">Remove</button></td>
          </tr>
        `;
        favoritesBody.innerHTML += row;
      });
    } catch (error) {
      console.error('Error fetching favorites:', error);
      alert('Failed to load favorites');
    }
  });
  
  // Function to remove a favorite from the list (if needed)
  async function removeFavorite(favoriteId) {
    try {
      const response = await fetch(`/api/favorites/${favoriteId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to remove favorite');
      }
  
      // After successful deletion, reload the favorites list
      alert('Favorite removed');
      window.location.reload();
    } catch (error) {
      console.error('Error removing favorite:', error);
      alert('Failed to remove favorite');
    }
  }
  