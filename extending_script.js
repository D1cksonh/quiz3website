/*
This area is where you would add event listeners and/or buttons for interaction
*/

window.onload = () => { // When the window opens, run these commands
  render();
};

const models = [ // Array of models
  {
    url: './assets/myModel/scene.gltf',
    scale: '0.5 0.5 0.5',
    rotation: '0 225 0'
  },
];

let modelIndex = 0; //Variable for modelIndex be 0

//The function below that changes depending on the condition
const setModel = (model, entity) => {
  if (model.position) { // Conditional statement telling if the model position is changed
    entity.setAttribute('position', model.position); //let setModel bet setModel.entity.setAttribute('position', model.position)
  }

  entity.setAttribute('gltf-model', model.url); // then let entity be entity.setAttribute('gltf-model', model.url)
};

function render() { // The render funciton for loading the ar models
  const scene = document.querySelector('a-scene'); // let the constant scene be this command

  //The function below makes the model appear
  navigator.geolocation.getCurrentPosition(function (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const model = document.createElement('a-entity');
    model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

    setModel(models[modelIndex], model);

    model.setAttribute('animation-mixer', '');

    scene.appendChild(model);
  });
}

/*
Indicate how and where you would handle a model's scale, and rotation, in code:
    You would handle the scale and rotation artibutes in the constant model (const models, changing the values can change the scale and rotation of the model
How would you add more models, and where would you need to add code to handle them?
    You would add more model in the constant model (const models), add another model you set another path to load the model in the array list. 
How and where would you add event listeners? buttons for interaction? There are some snippets you could look at. You don't have to integrate them for now.
    You would add event listeners in a seperate render function, just add the line of code t add a button to do an event
*/