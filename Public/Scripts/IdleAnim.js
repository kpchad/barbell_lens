// IdleAnim.js
// Version: 0.0.3
// Event: Lens Initialized
// Description: Plays a single looping animation on the character

//  @ui {"widget": "group_start", "label": "Idle Animation Settings"}
//  @input Component.AnimationMixer AnimationMixer
//  @input string IdleAnimLayer
//  @ui {"widget": "group_end"}

//  @input Component.AudioComponent IdleAnimAudio

script.api.idleAnimLayerName = script.IdleAnimLayer;
script.api.animMixer = script.AnimationMixer;
script.api.idleAnimAudio = script.IdleAnimAudio;

function idleAnimInitFunc()
{
    if(script.AnimationMixer && script.IdleAnimLayer)
    {
        script.AnimationMixer.start(script.IdleAnimLayer, 0, -1);
        script.AnimationMixer.setWeight(script.IdleAnimLayer, 1.0);
        if (script.IdleAnimAudio)
        {
            script.IdleAnimAudio.play( -1 );
        }        
    }
}

script.api.idleAnimInitFunc = idleAnimInitFunc;

script.api.idleAnimInitFunc();