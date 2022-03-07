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
// var faq = document.getElementsByClassName("faq-page");
// var i;
// for(i=0; i<faq.length; i++){
//     faq[i].addEventListener("click", function(){
//         this.classList.toggle("active");

//         // var body = this.nextElementSibling;
//         var body = document.getElementsByClassName("faq-body");
//         if(body.style.display === "block"){
//             body.style.display = "none";
//         }else{
//             body.style.display = "block";
//         }
//     });
// }
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