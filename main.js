//==============Home page==============
const body = $("body");
body.addClass("lightMode");
const home = $(`<div class='home'></div>`);
body.append(home);
const main = $(`<div class='main'></div>`);
home.append(main);
const mainContains =
  $(`<div class='name' style='font-size:xx-large'><b><span>Family</span> Shop</b></div>
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
    title: "Winter Jacket",
    imageSrc: "https://cdn.pixabay.com/photo/2016/08/04/18/30/model-1569741_640.jpg",
    description: "Beautiful lady overjoyed by warm spring breeze dream of romantic date wear cute floral dress isolated pink background stock photo",
    rate: 10,
    price: 25,
  },
  {
    id: 2,
    title: "Traditional dress",
    imageSrc: "https://cdn.pixabay.com/photo/2014/02/27/16/10/medieval-276019_640.jpg",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
  {
    id: 3,
    title: " traditional Wedding dress",
    imageSrc: "https://cdn.pixabay.com/photo/2021/02/11/05/34/woman-6004282_640.jpg",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
  {
    id: 4,
    title: "Indian Sari",
    imageSrc: "https://cdn.pixabay.com/photo/2014/05/30/15/01/sari-358314_640.jpg",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
];
const womenHome = $(`<div class="womenHome"></div>`);
body.append(womenHome);
womenHome.hide();
const homeReturn = $(`<div class='homeReturn'>back to home</div>`);
const products = $(`<div class="products"><b>Women Section</b></div>`);
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
    title: "Suit fashion",
    imageSrc: "https://cdn.pixabay.com/photo/2018/02/07/19/46/suit-3137825_640.png",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
  {
    id: 2,
    title: "suit menswear",
    imageSrc: "https://cdn.pixabay.com/photo/2015/04/09/11/19/suit-714357_640.jpg",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
  {
    id: 3,
    title: "cotton shirt",
    imageSrc: "https://cdn.pixabay.com/photo/2016/11/29/10/21/jacket-1868990_640.jpg",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
  {
    id: 4,
    title: "Suit",
    imageSrc: "https://cdn.pixabay.com/photo/2019/06/13/12/07/suit-4271440_640.jpg",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
];
const menHome = $(`<div class="menHome"></div>`);
body.append(menHome);
menHome.hide();
const productsMen = $(`<div class="productsMen"><b>Men Section</b></div>`);
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
    imageSrc: "https://cdn.pixabay.com/photo/2017/02/08/02/56/booties-2047596_640.jpg",
    description: "some description about product",
    rate: 10,
    price: '25JD',
  },
  {
    id: 2,
    title: "Kids Shirt",
    imageSrc: "https://cdn.pixabay.com/photo/2018/03/02/10/17/portrait-3192816_1280.jpg",
    description: "some description about product",
    rate: 10,
    price: '7JD',
  },
  {
    id: 3,
    title: "Traditional clothing",
    imageSrc: "https://cdn.pixabay.com/photo/2015/05/20/14/27/traditional-775512_640.jpg",
    description: "some description about product",
    rate: 10,
    price:'35JD',
  },
  {
    id: 4,
    title: "Socks",
    imageSrc: "https://cdn.pixabay.com/photo/2016/08/08/16/11/ankle-socks-1578652_640.jpg",
    description: "some description about product",
    rate: 10,
    price: '2JD',
  },
];
const kidsHome = $(`<div class="kidsHome"></div>`);
body.append(kidsHome);
kidsHome.hide();
const productsKids = $(`<div class="productsKids "><b>Kids Section</b></div>`);
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
