const wrapper=document.querySelector(".sliderWrapper")
const menuItems=document.querySelectorAll(".menuItem")
const products=[
    {
        id:1,
        title:"Air Force",
        price:119,
        colors:[
            {
                code:"black",
                img:"",
            },
            {
                code:"darkblue",
                img:"",
            },
        ],
    },
    {
        id:2,
        title:"Jordan",
        price:119,
        colors:[
            {
                code:"gray",
                img:"",
            },
            {
                code:"green",
                img:"",
            },
        ],
    },
    {
        id:3,
        title:"Blazer",
        price:119,
        colors:[
            {
                code:"red",
                img:"",
            },
            {
                code:"orange",
                img:"",
            },
        ],
    },
    {
        id:4,
        title:"Crater",
        price:119,
        colors:[
            {
                code:"purple",
                img:"",
            },
            {
                code:"yellow",
                img:"",
            },
        ],
    },
    {
        id:5,
        title:"Hippie",
        price:119,
        colors:[
            {
                code:"brown",
                img:"",
            },
            {
                code:"lightblue",
                img:"",
            },
        ],
    },
];

let choosenProduct=products[0]

const currentProductImg=document.querySelector(".productImg");
const currentProductTitle=document.querySelector(".productTitle");
const currentProductPrice=document.querySelector(".productPrice");
const currentProductColors=document.querySelectorAll(".color");
const currentProductSizes=document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        //change the current slide
        wrapper.style.transform=`translateX(${-100*index}vw)`;

        //change the choosen prodict
        choosenProduct=products[index]

        //chnage texts of current product
        currentProductTitle.textContent=choosenProduct.title
        currentProductPrice.textContent="$"+choosenProduct.price
        currentProductImg.src=choosenProduct.colors[0].img

        //changing colors of choosen Product
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor=choosenProduct.colors[index].code;
        })
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src=choosenProduct.colors[index].img
    })

})

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor="white"
            size.style.color="black"
        });
        size.style.backgroundColor="black"
        size.style.color="white"
    });
});

const productButton=document.querySelector(".productButton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
});

close.addEventListener("click",()=>{
    payment.style.display="none"
});



