// ------------------------------ Start List 
let listUl = document.querySelector(".list");
let listBars = document.querySelector("#bars");

listBars.addEventListener("click", function(){
    listUl.classList.toggle("active");
    listBars.classList.toggle("active");
});


// Start Input Shoe And Hide
let input = document.querySelector("#input");
let Btn = document.querySelector("#btn");
Btn.onclick = () => {
    if(input.type === "password"){
        input.setAttribute("type", "text");
        Btn.innerHTML = "HIDE";
    }else{
        input.setAttribute("type", "password");
        Btn.innerHTML = "SHOW";
    }
}

// ----------------------- Start One Tow Three
let BtnT = document.querySelectorAll(".top .btn");
let imgB = document.querySelectorAll(".botton p");
// console.log(Btn);
BtnT.forEach(btn => {
    btn.onclick = () => {
        BtnT.forEach(remove => {
            remove.classList.remove("active");
            dataTop = btn.getAttribute("data-top");
            imgB.forEach(btn => {
                dataB = btn.getAttribute("data-botton");
                if(dataTop == dataB){
                    btn.classList.add("active");
                }else{
                    btn.classList.remove("active");
                }
            })
        });
        btn.classList.add("active");
    }
})


// ------------------------------ Start Plus Div
let faq = document.querySelectorAll(".faq");
let faqPage = document.querySelector(".faq-page");

faq.forEach((event) => {
    event.addEventListener("click", () => {
        if(event.classList.contains("active")){
            event.classList.remove("active");
        }else{
            event.classList.add("active");
        }
    })
})



// ---------------------------- Start Gallery
let galleryList = document.querySelectorAll(".gallery-list .btn");
let galleryImg = document.querySelectorAll(".gallery-img .gallery-item");

galleryList.forEach(click => {
    click.onclick = () => {
        galleryList.forEach(remove => {
            remove.classList.remove("active");
            // Gallery List Data
            galleryListData = click.getAttribute("data-gallery");
            // Gallery Img
            galleryImg.forEach(click => {
                var galleryImgData = click.getAttribute("data-gallery-img");
                if(galleryListData == "all"){
                    click.style.display = "inline-block";
                }else if(galleryListData == galleryImgData){
                    click.style.display = "inline-block";
                }else{
                    click.style.display = "none";
                }
            });
        });
        click.classList.add("active");
    }
})


// Start PopUp Img
let popupImg = document.querySelector(".popup");
let imgBig = document.querySelectorAll(".gallery-item img");
let H3Big = document.querySelectorAll("#big");

imgBig.forEach(img => {
    img.onclick = () => {
        var imgSrc = img.getAttribute('src');
        popupImg.querySelector('img').src = imgSrc;
        popupImg.style.display = "flex";
        console.log(img);
    }
})
popupImg.onclick = () => {
    popupImg.style.display = "none";
}


// Add Love
// var addLove = document.querySelector("#addlove");
// var addB = document.querySelector("#btnB");
// addLove.addEventListener('click', function(){
//     document.querySelector("#love-number").innerHTML ++
// })





//----------------------------- Start Date
let countDate = new Date("Mar 31, 2022 23:59:59").getTime();
// console.log(countDate);

let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    // console.log(dateNow);

    let dateDiff = countDate - dateNow;
    // console.log(dateDiff);

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / (1000));

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    if(seconds < 10){
        document.querySelector(".seconds").innerHTML = `0${seconds}`
    }else{
        document.querySelector(".seconds").innerHTML = seconds;
    };
    if(setInterval < 0){
        clearInterval(counter);
        console.log("FISH");
    }

}, 1000);


// ------------------------------- Slider And Bull
var img = 1;
displayimg(img);

function nextimg(n){
    displayimg(img += n);
};
function currentSlide(n){
    displayimg(img = n);
};

function displayimg(n){
    var i;
    var image = document.getElementsByClassName("img");
    var dots = document.getElementsByClassName("dot");

    if(n > image.length){
        img = 1;
    }
    if(n < 1){
        img = image.length;
    }
    for(i=0; i<image.length; i++){
        image[i].style.display = "none";
    }
    for(i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" color", "");
    }
    image[img - 1].style.display = "block";
    dots[img - 1].className += " color";
}


// ------------------------- Start Section
var sectionBtn = document.querySelectorAll(".btn");
var sectionBox = document.querySelectorAll(".box");

sectionBtn.forEach(btn => {
    btn.onclick = () => {

        sectionBtn.forEach(remove => {
            remove.classList.remove("active");
            dataSection = btn.getAttribute("data-section");
            sectionBox.forEach(item => {
                var dataBox = item.getAttribute("data-text");

                if(dataSection == dataBox){
                    item.style.display = "block";
                }else{
                    item.style.display = "none";
                }
            })
        });
        btn.classList.add("active");
    }
})