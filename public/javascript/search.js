
const stateInput = document.querySelector('#search-state');
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

var getState = function(state) {

    var stateDetails = ('api/states/' + state)

    fetch(stateDetails).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                displayState(data);
                console.log(data);
            });
        } else {
            alert("state not found");
        }
    })
    .catch(function(error) {
        // Notice this `.catch()` getting chained onto the end of the `.then()` method
        alert("Unable to get state");
      })
};

var displayState = function(weather) {
    if (state.length === 0) {
        resultsContainer.textContent = "State info not available";

        return;
    }
  
    resultsContainer.textContent = "";
    var stateFacts = state.state_name;
    console.log(stateFacts);
    var infoDiv = document.createElement("div");
    
    stateLi = document.createElement("li");
    stateTitle.textContent = stateFacts
    stateCont.appendChild(stateTitle);
    infoDiv.appendChild(stateCont);
    resultsContainer.appendChild(infoDiv);
    stateTitle.style.cssText = "font-size: 30px; font-weight: bold; margin-bottom: 20px;"
    console.log(stateFacts);
};

  
  document.querySelector('.search-form').addEventListener('submit', submitHandler);
  


  