


async function submitHandler(event) {
    event.preventDefault();
  
    const state = document.querySelector('#search-state').value.trim();
    
    
  
    if (!state ) {
    return alert("Please enter valid state")
    } else await fetch('/api/states/' + state, {
        method: 'get',
        
      }).then(response => {
        if(response.ok){
            response.json().then(function(data) {
                displayState(data)
                console.log(data);

            });
        } 
         
      }) 
  };

  var displayState = function(state) {
    if (state.length === 0) {
         return;
    }

   
    
  
    var stateName = state.state_name;
    
    var statePop = state.covid.population;
    var stateCases = state.covid.cases;
    var stateDeaths = state.covid.deaths;
    console.log(stateName);
    console.log(statePop);
    console.log(stateCases);
    console.log(stateDeaths);

    const template = `
    <div class="template-class">

    <h2 class="state-name" ><span id="state-name">${stateName}</span> 🦠 </h2> 
    <p class="state-pop"> <span class="pop">Population</span>:<span id="state-pop">${statePop}</span></p> 
    <p class="state-cases"> <span class="case">Cases</span>:<span id="state-cases">${stateCases}</span></p> 
    <p class="state-death"> <span class="death">Deaths</span>:<span id="state-deaths">${stateDeaths}</span><p/> 


  
    </div>
    `
    document.getElementById("result").innerHTML = template;

};

  
  document.querySelector('.search-form').addEventListener('submit', submitHandler);
  


  