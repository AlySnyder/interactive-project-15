
/*const stateInput = document.querySelector('#search-state');
const resultsContainer = document.querySelector('#result');
const stateCont = document.querySelector('#state-cont');

var submitHandler = function(event) {
    event.preventDefault();
    
    var stateEl = stateInput.value.trim();
    
    


    if (stateEl) {
         getState(stateEl);
        stateInput.value = ""; 
        

    } else {
        alert("Please enter a valid state");

        return;
    }
};

async function getState(state) {
    if (state) {
        const response = await fetch(`/api/${state}`, {
          method: 'get',
          body: JSON.stringify({
            state_name
          }),
          headers: { 'Content-Type': 'application/json' }
          // headers: { 'Content-Type': 'application/json' }
        });
    
      
      }

    
};
*/


async function submitHandler(event) {
    event.preventDefault();
  
    const state = document.querySelector('#search-state').value.trim();
    
  
    if (state) {
      const response = await fetch('/api/states/' + state, {
        method: 'get',
      });
  
      if (response.ok) {
        console.log(state);
      } else {
        alert(response.statusText);
      }
    }
  }


  
  document.querySelector('.search-form').addEventListener('submit', submitHandler);
  


  