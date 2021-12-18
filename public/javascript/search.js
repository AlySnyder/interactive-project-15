async function searchFormHandler(event) {
    event.preventDefault();
  
    const searchState = document.querySelector('#search-state').value.trim();
  
    if (searchState) {
      const response = await fetch(`/api/${searchState}`, {
        method: 'get',
        // headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/search');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.search-form').addEventListener('submit', searchFormHandler);