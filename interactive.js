const nightMoon = 'M19 30C19 46.5685 30 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C30 0 19 13.4315 19 30Z';



const daySun = 'M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z""M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z';

 


const nightTime = document.querySelector('#nightTime');



let toggle = false; 

//Click on the Sun During the Day Toggle 
 
nightTime.addEventListener('click', () => {

    //Using anime.min.js

    
    const timeline = anime.timeline({

        duration : 1050, 
        easing : "easeOutExpo"



    });


    //Adding Animations


    timeline.add({

        targets : ".sun",
        d : [{value: toggle ? daySun : nightMoon}]


    })
    .add({

        targets : '#nightTime',
        rotate : 670

    }, '-= 450')



    .add({

        targets : "section",
        backgroundColor : toggle ? '#7b95b6' : 'rgb(12,13,12)'


    })


    .add({

        targets : "h1",
        targets : "label",
        color : toggle ? 'whitesmoke' : 'rgb(399,399,399)'
    }, '-= 900')


    .add({
        targets : ".Intro",
        textColor : toggle ? 'rgb(399,399,399)' : '#a0c6dc',
        backgroundColor : toggle ? '#a0c6dc' : '#0f2540'
    }, '-= 900')

    
    .add({

        targets : ".ProgText",
        backgroundColor : toggle ? '#EEE662' : '#E54D26'




    })


//EVERYTIME THE SUN IS CLICKED CHANGE TOGGLE 


    if(!toggle) {

        toggle = true;


    } else {

        toggle = false; 


    }

});   



