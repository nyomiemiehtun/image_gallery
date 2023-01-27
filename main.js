const imagesList = [
    {
        thumbUrl : "images/1-thumb.jpg",
        imageUrl : "images/1.jpg",
        title : "The First Title",
    },
    {
        thumbUrl : "images/2-thumb.jpg",
        imageUrl : "images/2.jpg",
        title : "The Second Title",
    },
    {
        thumbUrl : "images/3-thumb.jpg",
        imageUrl : "images/3.jpg",
        title : "The Third Title",
    },
    {
        thumbUrl : "images/4-thumb.jpg",
        imageUrl : "images/4.jpg",
        title : "The Fourth Title",
    },
    {
        thumbUrl : "images/5-thumb.jpg",
        imageUrl : "images/5.jpg",
        title : "The Fifth Title",
    },
    {
        thumbUrl : "images/6-thumb.jpg",
        imageUrl : "images/6.jpg",
        title : "The Sixth Title",
    },

];

/* 
    <div class="image">
        <img src="images/1-thumb.jpg" alt=""/>
    </div>
*/

const imageGrid = document.querySelector(".image-grid");
const lightboxContainer = document.querySelector(".lightbox-container");
const lightboxImage = document.querySelector(".lightbox img");
const lightboxTitle = document.querySelector(".lightbox .title");
const closeBtn = document.querySelector(".lightbox .close-btn");
const downloadBtn = document.querySelector(".lightbox .download-btn");
const nextBtn = document.querySelector(".lightbox .next-btn");
const previousBtn = document.querySelector(".lightbox .previous-btn");

let currentImage = "";

    const populateImages = () => {
    imagesList.forEach ((i) => {
    const image = document.createElement("div");
    image.classList.add("image");
    image.addEventListener("click", ()=>{
        showLightbox(i);
    });

    const img = document.createElement("img");
    img.src = i.thumbUrl;
    img.alt = i.title;
    image.appendChild(img);
    imageGrid.appendChild(image);

});
};

populateImages();

const showLightbox = (data) => {
    lightboxContainer.classList.add("active");
    lightboxImage.src = "images/loading.png";
    lightboxImage.src = data.imageUrl;
    lightboxImage.alt = data.title;
    lightboxTitle.innerText = data.title;
    downloadBtn.href = data.imageUrl;

    currentImage = data;
};

closeBtn.addEventListener("click", () =>{
    lightboxContainer.classList.remove("active");
});

nextBtn.addEventListener("click", () => {
    showNextImage(currentImage);
});

previousBtn.addEventListener("click", () =>{
    showPreviousImage(currentImage);
});

const showNextImage = (data) => {
    let nextImageIndex = imagesList.indexOf(data) + 1;
    
    if(nextImageIndex < imagesList.length){
        showLightbox(imagesList[nextImageIndex])
    }else{
        showLightbox(imagesList[0]);
    }
};

const showPreviousImage = (data) => {
    let previousImageIndex = imagesList.indexOf(data) - 1;
    
    if(previousImageIndex >= 0){
        showLightbox(imagesList[previousImageIndex])
    }else{
        showLightbox(imagesList[imagesList.length - 1]);
    }
};