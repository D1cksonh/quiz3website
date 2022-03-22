window.onload = () => { //When the window opens, run these commands
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {// This funciton loads what lat and lng values, the lat and lng values are used for the models in the ar
    return [ // return the lat and lng values
        {
            name: 'MyModel',
            location: {
                lat:  51.0491, // This number is from index.html
                lng: -0.723, // This number is from index.html
            }
        },
    ];
}

function renderPlaces(places) { //This function renders the "scene" for the ar objects to be placed
    let scene = document.querySelector('a-scene'); // let scene be the variable for this command

    places.forEach((place) => { //another funciton which describes the model being loaded in the scene
        let latitude = place.location.lat; //the variable lattitude be the location for the lat
        let longitude = place.location.lng; //the variable longitude be the location of lng

        let model = document.createElement('a-entity'); // let model be the variable for this command

        // All of the commands below are for loading the model, scaling the model, and location of the model
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', './assets/MyModel/scene.gltf');
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.5 0.5 0.5');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
        scene.document.querySelector('a-scene').components.screenshot.capture('perspective');
    });
}

/*
Indicate how and where you would handle a model's scale, and rotation, in code:
    You would handle the scale and rotation artibutes in the the renderPlaces function, you would endite the values in the model.setAttribute(...) place to change the model
How would you add more models, and where would you need to add code to handle them?
    You would add more model in the staticLoadPlaces(), just add another name for the model (ie. myModel2) and edit the lat and lng values 
How and where would you add event listeners? buttons for interaction? There are some snippets you could look at. You don't have to integrate them for now.
    You would add event listeners in a seperate function, the event listens can change the atributes of the model
*/