


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

    <h2 id="state-name" class="state-name" >${stateName} 🦠 </h2> 
    <p id="state-pop" class="state-pop"> <span class="pop">Population</span>: ${statePop}</p> 
    <p id="state-cases" class="state-cases"> <span class="case">Cases</span>: ${stateCases}</p> 
    <p id="state-deaths" class="state-death"> <span class="death">Deaths</span>: ${stateDeaths}<p/> 

    </div>
    `
    document.getElementById("result").innerHTML = template;

};

  
  document.querySelector('.search-form').addEventListener('submit', submitHandler);
  


  