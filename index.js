function SubscribeButton() {
  let button = document.querySelector(`.js-Youtubebutton`);
  if (button.textContent === `Subscribe`) {
    button.textContent = `Subscribed`;
    button.classList.add(`is-Subscribed`);
  } else {
    button.textContent = `Subscribe`;
    button.classList.remove(`is-Subscribed`);
  }
}

// Amazon
function enter() {
  if (event.key === "Enter") {
    Amazon();
  }
}

function Amazon() {
  let inputElement = document.querySelector(`.js-input`);
  let displayElement = document.querySelector(`.js-AmazonDisplay`);
  let ErrorElement = document.querySelector(`.js-AmazonDisplayError`);
  cost = Number(inputElement.value);
  displayElement.textContent = "";
  ErrorElement.textContent = "";
  
  
 
  if (cost < 0) {
    ErrorElement.textContent = `Error: cost cannot be less than $0`;
    return
  } else if (cost > 39) {
    cost;
  } else if (cost < 40) {
    cost += 10;
  } 
  else if(cost != cost){
    displayElement.textContent = `Not A Number`
    return
  }
  
  displayElement.textContent = `$${cost}`;
}


// Gaming Button
function gaming() {
  let gamingElement = document.querySelector(`.js-gamingbbutton`);
  if (!gamingElement.classList.contains(`changeGamingButton`)) {
    gamingElement.classList.add(`changeGamingButton`);
  } else {
    gamingElement.classList.remove(`changeGamingButton`);
  }
}

// The Three Buttons
function threeButton(Selector) {
  let threeButtons = document.querySelector(Selector);

  if (!threeButtons.classList.contains(`changeThreeButtons`)) {
    UpdateThreeButton();
    threeButtons.classList.add(`changeThreeButtons`);
  } else {
    threeButtons.classList.remove(`changeThreeButtons`);
  }
}

function UpdateThreeButton() {
  let PreviousButton = document.querySelector(`.changeThreeButtons`);
  if (PreviousButton) {
    PreviousButton.classList.remove(`changeThreeButtons`);
  }
}
