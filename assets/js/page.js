let imageContainer = document.getElementById('slideShow');

function createSlideshow() {
    let indexNumber = 0;

let arrayOfImages = [
    '../assets/images/pexels-josh-sorenson.jpg',
    '../assets/images/pexels-oleg-magni.jpg',
    '../assets/images/pexels-vishnu-r-nair.jpg',
];

imageContainer.src = arrayOfImages[0]

// Lav et interval
setInterval(() => {
    // Hvis index tallet er større end arrayets længde
    // Sættes index tilbage til 0
    if(indexNumber >= arrayOfImages.length - 1){
        indexNumber = 0;
    } else {
        indexNumber = indexNumber + 1;
    }
    imageContainer.src = arrayOfImages[indexNumber]
}, 5000);
}

createSlideshow()

