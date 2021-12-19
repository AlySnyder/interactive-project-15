


async function submitHandler(event) {
    event.preventDefault();
  
    const state = document.querySelector('#search-state').value.trim();
    
  
    if (state) {
     await fetch('/api/states/' + state, {
        method: 'get',
        
      }).then(response => {
        if(response.ok){
            return response.json();  
        }
          throw new Error('Request failed!');
      }, networkError => {
        console.log(networkError.message);
      }).then(jsonResponse => {
        console.log(jsonResponse);
      }) 


  
     
    }
  }


  
  document.querySelector('.search-form').addEventListener('submit', submitHandler);
  


  