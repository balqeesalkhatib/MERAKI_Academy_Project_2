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
<div class='account' style='font-size:x-large'>Account</div>
<div class='cart' style='font-size:x-large'>cart</div>
<div class='fav' style='font-size:x-large'>fav</div>`);
main.append(mainContains);
$("#searchInput").on("click", function () {
  if ($("#searchInput").val() === "Women".toLowerCase()) {
    home.hide();
    womenHome.show();
  } else if ($("#searchInput").val() === "MEN".toLowerCase()) {
    home.hide();
    home.hide();
    menHome.show();
  } else if ($("#searchInput").val() === "kids".toLowerCase()) {
    home.hide();
    kidsHome.show();
  }
  else{ $("#searchInput").val('')}
});
$(".account").on("click", function () {
  home.hide();
  womenHome.hide();
  menHome.hide();
  kidsHome.hide();
  createAccount.show();
});
$(".cart").on("click", function () {
  home.hide();
  womenHome.hide();
  menHome.hide();
  kidsHome.hide();
  createAccount.hide();
  createCart.show();
});
const category = $(`<div class='category'></div>`);
home.append(category);
const women = $(`<div class="women" style='font-size:x-large'>Women</div>`);
const men = $(`<div class="men" style='font-size:x-large'>Men</div>`);
const kids = $(`<div class="kids" style='font-size:x-large'>Kids</div>`);
category.append(women, men, kids);
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
const dark = $(`<div>Dark Mode</div>`);
const light = $(`<div>Light Mode</div>`);
home.append(pic1, pic2, pic3, mode);
mode.append(dark, light);
dark.on("click", function () {
  body.removeClass("lightMode").addClass("darkMode");
  $(".main").css("background-color", "black");
});
light.on("click", function () {
  body.removeClass("darkMode").addClass("lightMode");
});
//=============================
//==========Women===========
women.on("click", function () {
  home.hide();
  womenHome.show();
});
const womenProducts = [
  {
    id: 1,
    title: "Winter Jacket",
    imageSrc:
      "https://cdn.pixabay.com/photo/2016/08/04/18/30/model-1569741_640.jpg",
    description:
      "Beautiful lady overjoyed by warm spring breeze dream of romantic date wear cute floral dress isolated pink background stock photo",
    rate: 8.5,
    price: "33 JD",
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
  },
];
const stars = $(` <div class="rateStars">
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
 </div>`);
const womenHome = $(`<div class="womenHome"></div>`);
body.append(womenHome);
womenHome.hide();
const homeReturn = $(`<div class='homeReturn'>back to home</div>`);
const products = $(`<div class="products"><b>Women Section</b></div>`);
womenHome.append(homeReturn, products);
const womenDescription = $(`<div class="womenDescription"></div>`);
body.append(womenDescription);
womenDescription.hide();
const divBack = $(`<div class='divBack'></div>`);
const homeReturn4 = $(`<div class='homeReturn'>back to home</div>`);
const backWomen = $(`<div class='backWomen'>Back</div>`);
//I should add cart and fav
const divImg = $(`<img  src=''>`);
const divTitle = $(`<div class="divTitle"></div>`);
const divDescription = $(`<div class="divDescription"></div>`);
const divRate = $(`<div class="divRate"></div>`);
const divP = $(`<div class="divP"></div>`);
const divReaction = $(`<div class="divReaction"></div>`);
const divCart = $(`<div class="divCart">cart</div>`);
const divFav = $(`<div class="divFav">fav</div>`);
divBack.append(backWomen, homeReturn4);
womenDescription.append(
  divBack,
  divTitle,
  divImg,
  divDescription,
  divRate,
  divP,
  divReaction
);
divReaction.append(divCart, divFav);
backWomen.on("click", function () {
  womenHome.show();
  womenDescription.hide();
});
homeReturn4.on("click", function () {
  home.show();
  womenHome.hide();
  menHome.hide();
  womenDescription.hide();
});
homeReturn.on("click", function () {
  home.show();
  womenHome.hide();
  menHome.hide();
});
const render = () => {
  womenProducts.forEach((elem, indx) => {
    const divWomen = $(
      `<div class="divWomen"><img src='${elem.imageSrc}'alt='${elem.title}'><h4>${elem.title}</h4> </div>`
    );
    womenHome.append(divWomen);
    divWomen.on("click", function () {
      //============description==========
      home.hide();
      womenHome.hide();
      womenDescription.show();
      divImg.attr("src", `${elem.imageSrc}`);
      divTitle.text(`${elem.title}`);
      divDescription.text(`${elem.description}`);
      divRate.html(stars);
      divP.text(`Price: ${elem.price}`);
    });
    //============Add to cart==========
    divImg.on("click", function () {
      console.log(this);
      createCart.show();
      womenDescription.hide();
      const deleteItem = $(`<button class='delete'>Delete</button>`);
      divProducts.attr("src", this.src); //should add price and total price edit img
      div2.text(`Price: ${elem.price}`);
      div.append(deleteItem);
      console.log(divProducts);
      deleteItem.on("click", function () {
        div.html("");
      });
    });
  });
};
render();
//=============================
//==========Men===========
men.on("click", function () {
  home.hide();
  womenHome.hide();
  menHome.show();
});
const menProducts = [
  {
    id: 1,
    title: "Suit fashion",
    imageSrc:
      "https://cdn.pixabay.com/photo/2018/02/07/19/46/suit-3137825_640.png",
    description:
      "suit, lounge suit, or business suit is a set of clothes comprising a suit jacket and trousers of identical textiles generally worn with a collared dress shirt, necktie, and dress shoes.",
    rate: 8.5,
    price: "25JD",
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
  },
];
const menHome = $(`<div class="menHome"></div>`);
body.append(menHome);
menHome.hide();
const productsMen = $(`<div class="productsMen"><b>Men Section</b></div>`);
const homeReturn1 = $(`<div class='homeReturn'>back to home</div>`);
const menDescription = $(`<div class="menDescription"></div>`);
body.append(menDescription);
menDescription.hide();
const divBack1 = $(`<div class='divBack'></div>`);
const homeReturnMen = $(`<div class='homeReturnMen'>back to home</div>`);
const backMen = $(`<div class='backMen'>Back</div>`);
//I should add cart and fav
const divImg1 = $(`<img  src=''>`);
const divTitle1 = $(`<div class="divTitle1"></div>`);
const divDescription1 = $(`<div class="divDescription1"></div>`);
const divRate1 = $(`<div class="divRate"></div>`);
const divP1 = $(`<div class="divP"></div>`);
divBack1.append(backMen, homeReturnMen);
menDescription.append(
  divBack1,
  divTitle1,
  divImg1,
  divDescription1,
  divRate1,
  divP1
);
backMen.on("click", function () {
  menHome.show();
  menDescription.hide();
});
homeReturnMen.on("click", function () {
  home.show();
  womenHome.hide();
  menHome.hide();
  menDescription.hide();
});
menHome.append(homeReturn1, productsMen);
homeReturn1.on("click", function () {
  home.show();
  womenHome.hide();
  menHome.hide();
});
const renderMen = () => {
  menProducts.forEach((elem, indx) => {
    const divMen = $(
      `<div class="divMen"><img src='${elem.imageSrc}'alt='${elem.title}'><h4>${elem.title}</h4> </div>`
    );
    menHome.append(divMen);
    divMen.on("click", function () {
      //============description==========
      home.hide();
      menHome.hide();
      menDescription.show();
      divImg1.attr("src", `${elem.imageSrc}`);
      divTitle1.text(`${elem.title}`);
      divDescription1.text(`${elem.description}`);
      divRate1.text(`Rate: ${elem.rate}`);
      divP1.text(`Price: ${elem.price}`);
    });
  });
};
renderMen();
//=============================
//==========Kids===========
kids.on("click", function () {
  home.hide();
  womenHome.hide();
  menHome.hide();
  kidsHome.show();
});
const kidsProducts = [
  {
    id: 1,
    title: "Newborn baby clothes",
    imageSrc:
      "https://cdn.pixabay.com/photo/2017/02/08/02/56/booties-2047596_640.jpg",
    description:
      "comfortable, soft and easy to take care of. Stretchy jumpsuits that fasten at the front are best, as well as tops with envelope necks, which are easier to get over your baby's head. Jumpsuits with zips can make dressing your baby quick and easy too.",
    rate: 9.5,
    price: "25JD",
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
  },
];
const kidsHome = $(`<div class="kidsHome"></div>`);
body.append(kidsHome);
kidsHome.hide();
const productsKids = $(`<div class="productsKids "><b>Kids Section</b></div>`);
const homeReturn2 = $(`<div class='homeReturn'>back to home</div>`);
kidsHome.append(homeReturn2, productsKids);
const kidsDescription = $(`<div class="kidsDescription"></div>`);
body.append(kidsDescription);
kidsDescription.hide();
const divBack2 = $(`<div class='divBack'></div>`);
const homeReturnKids = $(`<div class='homeReturn'>back to home</div>`);
const backKids = $(`<div class='backKids'>Back</div>`);
//I should add cart and fav
const divImg2 = $(`<img  src=''>`);
const divTitle2 = $(`<div class="divTitle"></div>`);
const divDescription2 = $(`<div class="divDescription"></div>`);
const divRate2 = $(`<div class="divRate"></div>`);
const divP2 = $(`<div class="divP"></div>`);
divBack2.append(backKids, homeReturnKids);
kidsDescription.append(
  divBack2,
  divTitle2,
  divImg2,
  divDescription2,
  divRate2,
  divP2
);
backKids.on("click", function () {
  kidsHome.show();
  kidsDescription.hide();
});
homeReturnKids.on("click", function () {
  home.show();
  womenHome.hide();
  menHome.hide();
  kidsDescription.hide();
});
homeReturn2.on("click", function () {
  home.show();
  womenHome.hide();
  menHome.hide();
  kidsHome.hide();
});
const renderKids = () => {
  kidsProducts.forEach((elem, indx) => {
    const divKids = $(
      `<div class="divKids"><img src='${elem.imageSrc}'alt='${elem.title}'><h4>${elem.title}</h4> </div>`
    );
    kidsHome.append(divKids);
    divKids.on("click", function () {
      //============description==========
      home.hide();
      kidsHome.hide();
      kidsDescription.show();
      divImg2.attr("src", `${elem.imageSrc}`);
      divTitle2.text(`${elem.title}`);
      divDescription2.text(`${elem.description}`);
      divRate2.text(`Rate: ${elem.rate}`);
      divP2.text(`Price: ${elem.price}`);
    });
  });
};
renderKids();
//=================================
//============Account==========
const createAccount = $(`<div class="createAccount"></div>`);
body.append(createAccount);
createAccount.hide();
const homeReturn3 = $(`<div class='homeReturn3'>back to home</div>`);
const nameAccount =
  $(`<div class="nameAccount" style="font-size: xx-large;">Create Account</div>
<label> Email:</label> <br><input placeholder="Enter your email" type="email"><br><label> Password:</label> <br><input placeholder="Enter your password" type="password"><br><label> Confirm password:</label> <br><input placeholder="Confirm your password" type="password"><br>I agree<input type="radio" required><br>`);
const register = $(` <button>Register</button>`);
createAccount.append(nameAccount, register, homeReturn3);
homeReturn3.on("click", function () {
  home.show();
  createAccount.hide();
  womenHome.hide();
  menHome.hide();
  kidsHome.hide();
});
//=================================
//============Cart==========
const createCart = $(`<div class="createCart"></div>`);
body.append(createCart);
createCart.hide();
const homeReturn6 = $(`<div class='homeReturn3'>back to home</div>`);
const div = $(`<div></div>`);
const div2 = $(`<div></div>`);
const divProducts = $(`<img src='' class="divProducts">`);
const divTotal = $(`<div class="divTotal"></div>`); //price+checkout
createCart.append(homeReturn6, div, divTotal);
div.append(divProducts, div2);
const divPrice = $(`<div class="divPrice"></div>`); //total price
const checkout = $(
  `<div class="checkout"><button style="width: 90px;">Checkout</button></div>`
);
divTotal.append(divPrice, checkout);
homeReturn6.on("click", function () {
  home.show();
  createCart.hide();
});
//=================================
//============description==========
const mainDescription = $(`<div class="mainDescription">mainDescription</div>`);
//=================================
