//==============Home page==============
const body = $("body");
body.addClass("lightMode");
const home = $(`<div class='home'></div>`);
body.append(home);
const main = $(`<div class='main'></div>`);
home.append(main);
const mainContains =
  $(`<div class='name' style='font-size:x-large'><span>Family<span> Shop</div>
<div class='search'><input type="text" id="searchInput" placeholder="What can we help you find?"></div>
<div class='account' style='font-size:x-large'>Account</div>
<div class='cart' style='font-size:x-large'>cart</div>
<div class='fav' style='font-size:x-large'>fav</div>`);
main.append(mainContains);
$(".account").on("click", function () {
  home.hide();
  womenHome.hide();
  menHome.hide();
  kidsHome.hide();
  createAccount.show();
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
    title: "about product",
    imageSrc: "src/path",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
  {
    id: 2,
    title: "about product",
    imageSrc: "src/path",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
  {
    id: 3,
    title: "about product",
    imageSrc: "src/path",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
  {
    id: 4,
    title: "about product",
    imageSrc: "src/path",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
];
const womenHome = $(`<div class="womenHome">women</div>`);
body.append(womenHome);
womenHome.hide();
const homeReturn = $(`<div class='homeReturn'>back to home</div>`);
const products = $(`<div class="products">products</div>`);
womenHome.append(homeReturn, products);
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
    title: "about product",
    imageSrc: "src/path",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
  {
    id: 2,
    title: "about product",
    imageSrc: "src/path",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
  {
    id: 3,
    title: "about product",
    imageSrc: "src/path",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
  {
    id: 4,
    title: "about product",
    imageSrc: "src/path",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
];
const menHome = $(`<div class="menHome">men</div>`);
body.append(menHome);
menHome.hide();
const productsMen = $(`<div class="productsMen">productsMen</div>`);
const homeReturn1 = $(`<div class='homeReturn'>back to home</div>`);
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
  });
};
renderMen();
//=============================
//==========Men===========
kids.on("click", function () {
  home.hide();
  womenHome.hide();
  menHome.hide();
  kidsHome.show();
});
const kidsProducts = [
  {
    id: 1,
    title: "about product",
    imageSrc: "src/path",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
  {
    id: 2,
    title: "about product",
    imageSrc: "src/path",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
  {
    id: 3,
    title: "about product",
    imageSrc: "src/path",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
  {
    id: 4,
    title: "about product",
    imageSrc: "src/path",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
];
const kidsHome = $(`<div class="kidsHome">kids</div>`);
body.append(kidsHome);
kidsHome.hide();
const productsKids = $(`<div class="productsKids ">productsKids </div>`);
const homeReturn2 = $(`<div class='homeReturn'>back to home</div>`);
kidsHome.append(homeReturn2, productsKids);
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
createAccount.append( nameAccount, register,homeReturn3);
homeReturn3.on("click", function () {
  home.show();
  createAccount.hide();
  womenHome.hide();
  menHome.hide();
  kidsHome.hide();
});
//=================================
//============description==========
const mainDescription = $(`<div class="mainDescription">mainDescription</div>`);
//=================================
