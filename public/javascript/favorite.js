async function favFormHandler(event) {
    event.preventDefault();
  
    const fav_name = document.querySelector('#state-name').innerText;
    const fav_pop = document.querySelector('#state-pop').innerText;
    const fav_case = document.querySelector('#state-cases').textContent;
    const fav_death = document.querySelector('#state-deaths').textContent;
  
    const response = await fetch(`/api/favorites`, {
      method: 'POST',
      body: JSON.stringify({
        fav_name,
        fav_pop,
        fav_case,
        fav_death
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/mystates');
    } else {
      //alert(response.statusText);
      console.log(fav_name, fav_pop);
    }
  }
  
  document.querySelector('.list-form').addEventListener('submit', favFormHandler);