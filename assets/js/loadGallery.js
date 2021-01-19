let images = [
    {
        name: 'bell',
        title: 'Bell Wave'
    },
    {
        name: 'other',
        title: 'Chaotic Wave'
    }
];

let lastSelector = '';

function galleryItem(image){
    $('#gallery').append(`
        <div class="gallery-panel" onclick="show('#detail-${image.name}')"><img src="assets/img/${image.name}.jpg"/></div>
    `);
    $('#details').append(`
        <div class="detail flex-container section" id="detail-${image.name}">
            <h2>${image.title}</h2>
            <video>
                <source src="assets/img/${image.name}.ogg" type="video/ogg"/>
            </video>
            <video>
                <source src="assets/img/${image.name}-wave.mp4" type="video/mp4"/>
            </video>
        </div>
    `)
}

function show(selector){
    if(selector != lastSelector){
        for(i in [0, 1]){
            $(selector + ' video').get(i).play();
            if(lastSelector != '') $(lastSelector + ' video').get(i).pause();
        }

        if(lastSelector == ''){
            $(selector).animate({height: 'toggle'}, 300);
        }else{
            $(lastSelector).animate({height: 'toggle'}, 0);
            $(selector).animate({height: 'toggle'}, 0);
        }

        lastSelector = selector;
    }
}

for(image of images){
    galleryItem(image);
}
