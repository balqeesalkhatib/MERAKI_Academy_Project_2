//==============Home page==============
const body = $("body");
body.addClass("lightMode");
const home = $(`<div class='home'></div>`);
body.append(home);
const main = $(`<div class='main'></div>`);
home.append(main);
const mainContains =
  $(`<div class='name' style='font-size:xx-large'><b><span>Family</span> Shop</b></div>
<div class='search'><input type="search" id="searchInput" placeholder="What can we help you find?"></div>
<div class='account' style='font-size:xx-large'><i class="fa-solid fa-user"></i></div>
<div class='cart' ><i style='font-size:xx-large' class="fa-solid fa-cart-shopping"></i></div>
<div class='fav' style='font-size:xx-large'><i class="fa-solid fa-heart"></i></div>`);
main.append(mainContains);
// $("#searchInput").on("click", function () {
//   if ($("#searchInput").val() === "Women".toLowerCase()) {
//     home.hide();
//     womenHome.show();
//   } else if ($("#searchInput").val() === "MEN".toLowerCase()) {
//     home.hide();
//     home.hide();
//     menHome.show();
//   } else if ($("#searchInput").val() === "kids".toLowerCase()) {
//     home.hide();
//     kidsHome.show();
//   } else {
//     $("#searchInput").val("");
//   }
// });
$(".account").on("click", function () {
  home.hide();
  womenHome.hide();
  menHome.hide();
  kidsHome.hide();
  createAccount.show();
});
const category = $(`<div class='category'></div>`);
home.append(category);
const pic1 =
  $(`<div class="pic1"><p style="font-size: xx-large;">New Arrival</p><img src="./istockphoto-1404603483-1024x1024.jpg" alt="New Arrival"> 
</div>`);
const pic2 =
  $(`<div class="pic2"> <p style="font-size: xx-large;">Best Seller</p> <img src="./hanger-2566555_1280.jpg" alt="Best seller">
</div>`);
const pic3 =
  $(`<div class="pic3"><p style="font-size: xx-large;">Free Shipping</p><img src="pic3.jpg" alt="Free Shipping">
</div>`);
const mode = $(`<div class="mode"></div>`);
const dark = $(
  `<div><i style="font-size: xx-large;" class="fa-solid fa-lightbulb"></i></div>`
);
const light = $(
  `<div><i style="font-size: xx-large;" class="fa-regular fa-lightbulb"></i></div>`
);
home.append(pic1, pic2, pic3, mode);
mode.append(dark, light);
dark.on("click", function () {
  body.removeClass("lightMode").addClass("darkMode");
  $(".main").css("background-color", "black");
});
light.on("click", function () {
  body.removeClass("darkMode").addClass("lightMode");
  $(".main").css("background-color", "#FFFABA");
});
//=============================
const allProducts = [
  {
    id: 1,
    title: "Winter Jacket",
    imageSrc:
      "https://cdn.pixabay.com/photo/2016/08/04/18/30/model-1569741_640.jpg",
    description:
      "Beautiful lady overjoyed by warm spring breeze dream of romantic date wear cute floral dress isolated pink background stock photo",
    rate: 8.5,
    price: "33 JD",
    categoryArray: "women",
  },
  {
    id: 2,
    title: "Traditional dress",
    imageSrc:
      "https://cdn.pixabay.com/photo/2014/02/27/16/10/medieval-276019_640.jpg",
    description:
      "Using the word sophisticated can convey a sense of class and elegance that is attractive and timeless. Describing outfits and women's dresses can be a challenge, but using creative",
    rate: 10,
    price: "45 JD",
    categoryArray: "women",
  },
  {
    id: 3,
    title: " traditional Wedding dress",
    imageSrc:
      "https://cdn.pixabay.com/photo/2021/02/11/05/34/woman-6004282_640.jpg",
    description:
      "fashion is the most general term and applies to any way of dressing, behaving, writing, or performing that is favored at any one time or place",
    rate: 9.5,
    price: "30 JD",
    categoryArray: "women",
  },
  {
    id: 4,
    title: "Indian Sari",
    imageSrc:
      "https://cdn.pixabay.com/photo/2014/05/30/15/01/sari-358314_640.jpg",
    description:
      " dress (also known as a frock or a gown) is a garment traditionally worn by women or girls consisting of a skirt with an attached bodice (or a matching bodice giving the effect of a one-piece garment)",
    rate: 10,
    price: "50 JD",
    categoryArray: "women",
  },
  {
    id: 1,
    title: "Suit fashion",
    imageSrc:
      "https://cdn.pixabay.com/photo/2018/02/07/19/46/suit-3137825_640.png",
    description:
      "suit, lounge suit, or business suit is a set of clothes comprising a suit jacket and trousers of identical textiles generally worn with a collared dress shirt, necktie, and dress shoes.",
    rate: 8.5,
    price: "25JD",
    categoryArray: "men",
  },
  {
    id: 2,
    title: "suit menswear",
    imageSrc:
      "https://cdn.pixabay.com/photo/2015/04/09/11/19/suit-714357_640.jpg",
    description:
      "The most important quality of a good suit is a jacket that has a full canvas layer between the fabric and lining.",
    rate: 9,
    price: "35 JD",
    categoryArray: "men",
  },
  {
    id: 3,
    title: "cotton shirt",
    imageSrc:
      "https://cdn.pixabay.com/photo/2016/11/29/10/21/jacket-1868990_640.jpg",
    description:
      "The most important quality of a good suit is a jacket that has a full canvas layer between the fabric and lining.",
    rate: 9.5,
    price: "15JD",
    categoryArray: "men",
  },
  {
    id: 4,
    title: "Suit",
    imageSrc:
      "https://cdn.pixabay.com/photo/2019/06/13/12/07/suit-4271440_640.jpg",
    description:
      " Wearing a suit signifies that you are taking the other person more seriously and are striving to stand up to their expectations",
    rate: 10,
    price: "75 JD",
    categoryArray: "men",
  },
  {
    id: 1,
    title: "Newborn baby clothes",
    imageSrc:
      "https://cdn.pixabay.com/photo/2017/02/08/02/56/booties-2047596_640.jpg",
    description:
      "comfortable, soft and easy to take care of. Stretchy jumpsuits that fasten at the front are best, as well as tops with envelope necks, which are easier to get over your baby's head. Jumpsuits with zips can make dressing your baby quick and easy too.",
    rate: 9.5,
    price: "25JD",
    categoryArray: "kids",
  },
  {
    id: 2,
    title: "Kids Shirt",
    imageSrc:
      "https://cdn.pixabay.com/photo/2018/03/02/10/17/portrait-3192816_1280.jpg",
    description:
      "a lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment",
    rate: 10,
    price: "7JD",
    categoryArray: "kids",
  },
  {
    id: 3,
    title: "Traditional clothing",
    imageSrc:
      "https://cdn.pixabay.com/photo/2015/05/20/14/27/traditional-775512_640.jpg",
    description:
      "one of the more important attributes to look for in infant and baby clothing is that the clothes are soft and not rough. Soft baby clothes made from organic cotton or eco-friendly materials are becoming more popular.",
    rate: 8.5,
    price: "35JD",
    categoryArray: "kids",
  },
  {
    id: 4,
    title: "Socks",
    imageSrc:
      "https://cdn.pixabay.com/photo/2016/08/08/16/11/ankle-socks-1578652_640.jpg",
    description:
      "Comfort and Skin Sensitivity: Babies have delicate and sensitive skin, making it crucial to prioritize their comfort. ",
    rate: 9,
    price: "2JD",
    categoryArray: "kids",
  },
];
let newArray;
const favArr = JSON.parse(localStorage.getItem("favArray"))|| [];
const cartArr = [];
const select = $(".it");
const arrayCategory = ["Women", "Men", "Kids"];
arrayCategory.forEach((elem, indx) => {
      const newButton = $(
    `<div id=${indx} class=${elem.categoryArray}>${elem}</div>`
  );
  category.append(newButton);
  newButton.on("click", function () {
    filteringCategory(this.id);
    home.hide();
    categoryHome.show();

    render(newArray);
  });
});
const filteringCategory = (indx) => {
  newArray = allProducts.filter(
    (elem) => elem.categoryArray === arrayCategory[indx].toLowerCase()
  );
};
const categoryHome = $(`<div class="categoryHome"></div>`);
select.append(categoryHome);
categoryHome.hide();
const homeReturn = $(
  `<div class='homeReturn'><i class="fa-solid fa-house"></i></div>`
);
const products = $(`<div class="products"><b> Section</b></div>`);

const renderFav = (cartArr) => {
  categoryHome.html("");
  categoryHome.append(homeReturn);
 
  cartArr.forEach((e, indx) => {
     const toString=JSON.stringify(cartArr);
  localStorage.setItem("favArray",toString)
    homeReturn.on("click", function () {
      home.show();
      categoryHome.hide();
    });
    const divWomen = $(
      `<div id='${e.id}' class="divWomen"><img src='${e.imageSrc}'alt='${e.title}'><h4>${e.title}</h4><button class='delete'> Delete</button></div>`
    );
    categoryHome.append(divWomen);
    $(".delete").on("click", function () {
      cartArr.splice(indx, 1);
      renderCart(cartArr);
    });
    console.log(cartArr);
   
  });
};
const renderCheckout=()=>{
    categoryHome.html("");
  categoryHome.append(homeReturn);
  cartArr.forEach((e, indx) => {
    const divWomen = $(
        `<div id='${e.id}' class="divCat"><img src='${e.imageSrc}'alt='${e.title}'><h4>${e.price}</h4></div>`
      );
      categoryHome.append(divWomen) 
  })
  const location = $(
    ` <label>Location:</label><input type="text" placeholder="City, street, building number">`
  );
  const cash=$(`<div class="cash">Payment Method:<input type="radio" > cash <input type="radio" >visa</div>`)
  const send=$(`<div class="send"><button>Send</button></div>`)
  categoryHome.append(location,cash,send);
  send.on('click', function () {
    home.show()
    categoryHome.hide()
    cartArr.splice(0,cartArr.length)
     })
}
homeReturn.on("click", function () {
  home.show();
  categoryHome.hide();
});
const renderCart = (cartArr) => {
  categoryHome.html("");
  categoryHome.append(homeReturn);
  homeReturn.on("click", function () {
    home.show();
    categoryHome.hide();
  });
  cartArr.forEach((e, indx) => {
    homeReturn.on("click", function () {
      home.show();
      categoryHome.hide();
    });
    const divWomen = $(
      `<div id='${e.id}' class="divWomen"><img src='${e.imageSrc}'alt='${e.title}'><h4>${e.price}</h4><button class='delete' style='width: 70px; background-color: #ebaa28;'> Delete</button></div>`
    );
    categoryHome.append(divWomen);
    $(".delete").on("click", function () {
      cartArr.splice(indx, 1);
      renderCart(cartArr);
    });
  });
  const checkout = $(`<button class="checkout">Checkout</button>`);
  categoryHome.append(checkout);
  checkout.on("click",function (){
    // categoryHome.hide()
    // $('checkoutHome').show()
    console.log(cartArr);
    renderCheckout(cartArr)
    
  })
};
const render = (newArray) => {
  categoryHome.html("");
  categoryHome.append(homeReturn, products);
  newArray.forEach((e, indx) => {
    const womenDescription = $(
      `<div class="womenDescription">${e.description}</div>`
    );
    $(".it").append(womenDescription);
    womenDescription.hide();
    const divBack = $(`<div class='divBack'></div>`);
    const homeReturn4 = $(
      `<div class='homeReturn'><i class="fa-solid fa-house"></i></div>`
    );
    const backWomen = $(`<div class='backWomen'>Back</div>`);
       backWomen.on("click", function () {
      categoryHome.show();
      womenDescription.hide();
    });
    // homeReturn4.on("click", function () {
    //   home.show();
    //   categoryHome.hide();

    //   womenDescription.hide();
    // });
    homeReturn.on("click", function () {
      home.show();
      categoryHome.hide();
    });
    //========
    const divWomen = $(
      `<div id='${e.id}' class="divWomen"><img src='${e.imageSrc}'alt='${e.title}'><h4>${e.title}</h4> </div>`
    );
    categoryHome.append(divWomen);
    divWomen.on("click", () => {
      console.log(e);
      renderOneItem(e);
    });
  });
  //===================
};

const renderOneItem = function (e) {
  //============description==========
  $(".details").html("");
  $(".details").show();
  home.hide();
  categoryHome.hide();
  const homeReturn4 = $(
    `<div class='homeReturn'><i class="fa-solid fa-house"></i></div>`
  );
  const divImg = $(`<img  src='${e.imageSrc}'>`);
  const divTitle = $(`<div class="divTitle">${e.title}</div>`);
  const divDescription = $(`<div class="divDescription"></div>`);
  const divRate = $(`<div class="divRate">Rate: ${e.rate}</div>`);
  const divP = $(`<div class="divP">Price: ${e.price}</div>`);
  const divReaction = $(`<div class="divReaction"></div>`);
  const divCart = $(
    `<div class="divCart"><i style='font-size:xx-large' class="fa-solid fa-cart-shopping"></i></div>`
  );
  const divFav = $(
    `<div class="divFav"><i  style='font-size:xx-large' class="fa-solid fa-heart"></i></div>`
  );

  // divBack.append(backWomen, homeReturn4);
  $(".details").append(
    //   divBack,
    homeReturn4,
    divTitle,
    divImg,
    divDescription,
    divRate,
    divP,
    divReaction
  );
  homeReturn4.on("click", function () {
    home.show();
    categoryHome.hide();
    $(".details").hide();
  });

  divReaction.append(divCart, divFav);
  divCart.on("click", () => {
    cartArr.push(e);
    console.log(cartArr);
  });
  divFav.on("click", () => {
    favArr.push(e);
    console.log(favArr);
  });
};

$(".cart").on("click", function () {
  home.hide();
  //   womenHome.hide();
  //   menHome.hide();
  //   kidsHome.hide();
  //   createAccount.hide();
  console.log(cartArr);
  //   $('.createCart').show();
  categoryHome.show();
  //   render(cartArr);
  renderCart(cartArr);
});
$(".fav").on("click", function () {
  home.hide();
  categoryHome.show();
  renderFav(favArr);
});
// render()
