const imageSlider=document.querySelector("#imgageSlider")
const nextBtn=document.querySelector("#nextButton")
const prevBtn=document.querySelector("#prevButton")


const images=[
    "https://img.freepik.com/free-photo/los-angeles-downtown-buildings-night_649448-298.jpg?w=1380&t=st=1708341609~exp=1708342209~hmac=0cdd743e18976f2ad7507ec13a957202f2501b16c9b7e9bffa0be06f74eddf1e",
    "https://img.freepik.com/free-photo/toronto-sunrise_649448-3470.jpg?w=1060&t=st=1708343069~exp=1708343669~hmac=d925a0b7a99dc646dc4cffc4d43e2dc124adce0ce1495fb63f5602da2b9eea60",
    "https://img.freepik.com/free-photo/toronto-skyline-from-park_649448-3488.jpg?w=1060&t=st=1708343116~exp=1708343716~hmac=5ed012360f5f71869fbf244ed93264fe2b9ca39199d819dc92d7ae54cb666be4",
     "https://img.freepik.com/free-photo/toronto-cityscape_649448-3399.jpg?w=1060&t=st=1708343454~exp=1708344054~hmac=ef2f8b6a5011913348e78ac413ee047dd405d69273f9bd8f00caad32bb842956",
    "https://img.freepik.com/free-photo/orlando-night-scene_649448-301.jpg?w=1060&t=st=1708343187~exp=1708343787~hmac=c5e4c33f17043cb9347e57e264fea2f0bacc5b5db9304a497c71245dea79b9db"
]
let indexImage=0
function currentImage(){
    imageSlider.src=images[indexImage]
}

currentImage()

//handle next button
nextBtn.addEventListener("click", function(){
    indexImage++;
    if(indexImage > images.length -1){
        indexImage=0
    }
    currentImage()
})



//handle pre button
 
prevBtn.addEventListener("click", function(){
    indexImage--;
    if(indexImage < 0){
        indexImage=0
    }
    currentImage()
})
