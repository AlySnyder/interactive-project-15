


async function submitHandler(event) {
    event.preventDefault();
  
    const state = document.querySelector('#search-state').value.trim();
    
  
    if (state) {
     await fetch('/api/states/' + state, {
        method: 'get',
        
      }).then(response => {
        if(response.ok){
            response.json().then(function(data) {
                displayState(data)
                console.log(data);
            });
        }
         
      }) 


  
     
    }
  };

  var displayState = function(state) {
    if (state.length === 0) {
        

        return;
    }

   
    // display city,time,weather description
  
    var stateName = state.state_name;
    
    var statePop = state.covid.population;
    var stateCases = state.covid.cases;
    var stateDeaths = state.covid.deaths;
    console.log(stateName);
    console.log(statePop);
    console.log(stateCases);
    console.log(stateDeaths);
    document.getElementById("result").innerHTML = stateName;

};

  
  document.querySelector('.search-form').addEventListener('submit', submitHandler);
  


  