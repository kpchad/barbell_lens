// -----JS CODE-----
// PlayAnimation.js
// Event: Frame Updated
// Properties:
// @input float speed = 1.0 {"widget":"slider", "min": 0, "max": 10, "step": 0.01}
// @input float range = 10.0 {"widget":"slider", "min": 0, "max": 30, "step": 0.01}


function liftBarbell(eventData) {
    // calculate the new height of the Scene Object and store it in newY
    var newY = (Math.sin(getTime() * script.speed) * script.range)+(script.range/2);

    // set the new local position of the Scene Object to [0,newY,0].
    script.getSceneObject().getTransform().setLocalPosition(new vec3(0, newY, 0));
}

var event = script.createEvent("UpdateEvent");
event.bind(liftBarbell)
