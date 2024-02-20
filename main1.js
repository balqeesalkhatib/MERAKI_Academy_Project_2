$.ajax({
  url: "https://fakestoreapi.com/products",
  success: (data) => {
    readProduct(data);
     },
  error: (err) => {
    renderFail("Oooops!! Server Error  O_o");
  },
});
//==============Home page==============
let usersInfo=[];
let users=[];
const body = $("body");
const renderFail = (err) => {
  body.text(err);
};
body.addClass("lightMode");
const home = $(`<div class='home'></div>`);
body.append(home);
const main = $(`<div class='main'></div>`);
home.append(main);
const mainContains =
  $(`<div class='name' style='font-size:xx-large'><b><span>Family</span> Shop</b></div>
<div class='search'><form><i class='fas fa-search'></i><input type="search" id="searchInput" placeholder="What can we help you find?"></form></div>
<div class='account' style='font-size:xx-large'><i class="fa-solid fa-user"></i></div>
<div class='log' style='font-size:xx-large'><i class="fa-solid fa-right-to-bracket"></i></div>
<div class='cart' ><i style='font-size:xx-large' class="fa-solid fa-cart-shopping"></i></div>
<div class='fav' style='font-size:xx-large'><i class="fa-solid fa-heart"></i></div>`);
main.append(mainContains);
$(".search form i").on("click", function () {
  if ($("#searchInput").val() === "Women".toLowerCase()) {
    home.hide();
    categoryHome.show();
    render([
      {
        id: 15,
        title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 56.99,
        description:
          "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        rating: { rate: 2.6, count: 235 },
      },
      {
        id: 16,
        title:
          "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        description:
          "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        rating: { rate: 2.9, count: 340 },
      },
      {
        id: 17,
        title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        price: 39.99,
        description:
          "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        rating: { rate: 3.8, count: 679 },
      },
      {
        id: 18,
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        description:
          "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        rating: { rate: 4.7, count: 130 },
      },
      {
        id: 19,
        title: "Opna Women's Short Sleeve Moisture",
        price: 7.95,
        description:
          "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        rating: { rate: 4.5, count: 146 },
      },
      {
        id: 20,
        title: "DANVOUY Womens T Shirt Casual Cotton Short",
        price: 12.99,
        description:
          "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        rating: { rate: 3.6, count: 145 },
      },
    ]);
  } else if ($("#searchInput").val() === "MEN".toLowerCase()) {
    home.hide();
    categoryHome.show();
    render([
      {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: 3.9, count: 120 },
      },
      {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description:
          "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: { rate: 4.1, count: 259 },
      },
      {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description:
          "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating: { rate: 4.7, count: 500 },
      },
      {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        description:
          "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        rating: { rate: 2.1, count: 430 },
      },
    ]);
  } else if ($("#searchInput").val() === "jewelery".toLowerCase()) {
    home.hide();
    categoryHome.show();
    render([
      {
        id: 5,
        title:
          "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description:
          "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: "jewelery",
        image:
          "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 4.6, count: 400 },
      },
      {
        id: 6,
        title: "Solid Gold Petite Micropave ",
        price: 168,
        description:
          "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        category: "jewelery",
        image:
          "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 3.9, count: 70 },
      },
      {
        id: 7,
        title: "White Gold Plated Princess",
        price: 9.99,
        description:
          "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        category: "jewelery",
        image:
          "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 3, count: 400 },
      },
      {
        id: 8,
        title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        price: 10.99,
        description:
          "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        category: "jewelery",
        image:
          "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 1.9, count: 100 },
      },
    ]);
  } else if ($("#searchInput").val() === "Electronics".toLowerCase()) {
    home.hide();
    categoryHome.show();
    render([
      {
        id: 9,
        title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        price: 64,
        description:
          "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        rating: { rate: 3.3, count: 203 },
      },
      {
        id: 10,
        title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 109,
        description:
          "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        rating: { rate: 2.9, count: 470 },
      },
      {
        id: 11,
        title:
          "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        price: 109,
        description:
          "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        category: "electronics",
        image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        rating: { rate: 4.8, count: 319 },
      },
      {
        id: 12,
        title:
          "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        price: 114,
        description:
          "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        rating: { rate: 4.8, count: 400 },
      },
      {
        id: 13,
        title:
          "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        price: 599,
        description:
          "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        rating: { rate: 2.9, count: 250 },
      },
      {
        id: 14,
        title:
          "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        price: 999.99,
        description:
          "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        rating: { rate: 2.2, count: 140 },
      },
    ]);
  } else {
    $("#searchInput").val("");
  }
});
$(".account").on("click", function () {
  home.hide();
  createAccount.show();
});
$(".log").on("click", function () {
  home.hide();
  logIn.show();
});
const category = $(`<div class='category'></div>`);
home.append(category);
const pic1 =
  $(`<div class="pic1"><p class="newArrival" style="font-size: xx-large;">New Arrival</p><img src="./istockphoto-1404603483-1024x1024.jpg" alt="New Arrival"> 
</div>`);
const pic2 =
  $(`<div class="pic2"> <p class="BestSeller" style="font-size: xx-large;">Best Seller</p> <img src="./hanger-2566555_1280.jpg" alt="Best seller">
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
const allProducts = [
  {
    id: 1,
    title: "Winter Jacket",
    image:
      "https://cdn.pixabay.com/photo/2016/08/04/18/30/model-1569741_640.jpg",
    description:
      "Beautiful lady overjoyed by warm spring breeze dream of romantic date wear cute floral dress isolated pink background stock photo",
    rate: 8.5,
    price: "33 JD",
    category: "New Arrival",
  },
  {
    id: 2,
    title: "Traditional dress",
    image:
      "https://cdn.pixabay.com/photo/2014/02/27/16/10/medieval-276019_640.jpg",
    description:
      "Using the word sophisticated can convey a sense of class and elegance that is attractive and timeless. Describing outfits and women's dresses can be a challenge, but using creative",
    rate: 10,
    price: "45 JD",
    category: "women",
  },
  {
    id: 3,
    title: " traditional Wedding dress",
    image:
      "https://cdn.pixabay.com/photo/2021/02/11/05/34/woman-6004282_640.jpg",
    description:
      "fashion is the most general term and applies to any way of dressing, behaving, writing, or performing that is favored at any one time or place",
    rate: 9.5,
    price: "30 JD",
    category: "women",
  },
  {
    id: 4,
    title: "Indian Sari",
    image: "https://cdn.pixabay.com/photo/2014/05/30/15/01/sari-358314_640.jpg",
    description:
      " dress (also known as a frock or a gown) is a garment traditionally worn by women or girls consisting of a skirt with an attached bodice (or a matching bodice giving the effect of a one-piece garment)",
    rate: 10,
    price: "50 JD",
    category: "women",
  },
  {
    id: 1,
    title: "Suit fashion",
    image:
      "https://cdn.pixabay.com/photo/2018/02/07/19/46/suit-3137825_640.png",
    description:
      "suit, lounge suit, or business suit is a set of clothes comprising a suit jacket and trousers of identical textiles generally worn with a collared dress shirt, necktie, and dress shoes.",
    rate: 8.5,
    price: "25JD",
    category: "men",
  },
  {
    id: 2,
    title: "suit menswear",
    image: "https://cdn.pixabay.com/photo/2015/04/09/11/19/suit-714357_640.jpg",
    description:
      "The most important quality of a good suit is a jacket that has a full canvas layer between the fabric and lining.",
    rate: 9,
    price: "35 JD",
    category: "men",
  },
  {
    id: 3,
    title: "cotton shirt",
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/10/21/jacket-1868990_640.jpg",
    description:
      "The most important quality of a good suit is a jacket that has a full canvas layer between the fabric and lining.",
    rate: 9.5,
    price: "15JD",
    category: "men",
  },
  {
    id: 4,
    title: "Suit",
    image:
      "https://cdn.pixabay.com/photo/2019/06/13/12/07/suit-4271440_640.jpg",
    description:
      " Wearing a suit signifies that you are taking the other person more seriously and are striving to stand up to their expectations",
    rate: 10,
    price: "75 JD",
    category: "men",
  },
  {
    id: 1,
    title: "Newborn baby clothes",
    image:
      "https://cdn.pixabay.com/photo/2017/02/08/02/56/booties-2047596_640.jpg",
    description:
      "comfortable, soft and easy to take care of. Stretchy jumpsuits that fasten at the front are best, as well as tops with envelope necks, which are easier to get over your baby's head. Jumpsuits with zips can make dressing your baby quick and easy too.",
    rate: 9.5,
    price: "25JD",
    category: "kids",
  },
  {
    id: 2,
    title: "Kids Shirt",
    image:
      "https://cdn.pixabay.com/photo/2018/03/02/10/17/portrait-3192816_1280.jpg",
    description:
      "a lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment",
    rate: 10,
    price: "7JD",
    category: "kids",
  },
  {
    id: 3,
    title: "Traditional clothing",
    image:
      "https://cdn.pixabay.com/photo/2015/05/20/14/27/traditional-775512_640.jpg",
    description:
      "one of the more important attributes to look for in infant and baby clothing is that the clothes are soft and not rough. Soft baby clothes made from organic cotton or eco-friendly materials are becoming more popular.",
    rate: 8.5,
    price: "35JD",
    category: "kids",
  },
  {
    id: 4,
    title: "Socks",
    image:
      "https://cdn.pixabay.com/photo/2016/08/08/16/11/ankle-socks-1578652_640.jpg",
    description:
      "Comfort and Skin Sensitivity: Babies have delicate and sensitive skin, making it crucial to prioritize their comfort. ",
    rate: 9,
    price: "2JD",
    category: "kids",
  },
];
let starsNumber = [];
$(".newArrival").on("click", function () {
  home.hide();
  categoryHome.show();
  render(allProducts);
});
let newArray;
const favArr = JSON.parse(localStorage.getItem("favArray")) || [];
// let deletedArr = JSON.parse(localStorage.getItem("deletedArray")) || [];
const cartArr = [];
let all;
const select = $(".it");
const arrayCategory = [
  "Women's clothing",
  "Men's clothing",
  "Jewelery",
  "Electronics",
];
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
const readProduct = (data) => {
  all = data;
};
const filteringCategory = (indx) => {
  newArray = all.filter((elem) => {
    return elem.category == arrayCategory[indx].toLowerCase();
  });
};
const categoryHome = $(`<div class="categoryHome"></div>`);
select.append(categoryHome);
categoryHome.hide();
const homeReturn = $(
  `<div class='homeReturn'><i class="fa-solid fa-house"></i></div>`
);
let best;
$('.BestSeller').on('click', function(){
    home.hide();
  categoryHome.show();
all.forEach((e,indx)=>{
  best=all.filter((elem,i)=>{
        return elem.rating.rate>=4
          })
})
  render(best);
})
homeReturn.on("click", function () {
  home.show();
  categoryHome.hide();
});
const renderFav = (cartArr) => {
    console.log(cartArr);
  categoryHome.html("");
  categoryHome.append(homeReturn);
  homeReturn.on("click", function () {
    home.show();
    categoryHome.hide();
  });
  cartArr.forEach((e, indx) => {
    const toString = JSON.stringify(cartArr);
    localStorage.setItem("favArray", toString);
    homeReturn.on("click", function () {
      home.show();
      categoryHome.hide();
    });
    const divWomen = $(
      `<div id='${e.id}' class="divWomen"><img src='${e.image}'alt='${e.title}'><h4>${e.title}</h4><button class='delete'> Delete</button></div>`
    );
    categoryHome.append(divWomen);
    $(".delete").on("click", () => {
      deleteFun(cartArr, indx);
    });
  });
};
const deleteFun = (cartArr, indx) => {
  cartArr.splice(indx, 1);
  localStorage.removeItem("favArray", toString)
  renderFav(cartArr);
};
let counter=0;
const renderCheckout = () => {
  categoryHome.html("");
  categoryHome.append(homeReturn);
  homeReturn.on("click", function () {
    home.show();
    categoryHome.hide();
  });
  cartArr.forEach((e, indx) => {
    counter=counter+e.price;
     const divWomen = $(
      `<div id='${e.id}' class="divCat"><img src='${e.image}'alt='${e.title}'><h4>${e.price}</h4></div>`
    );
    categoryHome.append(divWomen);
  });
  const location = $(
    ` <div class="location"><label>Location:</label><input type="text" placeholder="City, street, building number"></div>`
  );
  const cash = $(
    `<div class="cash">Payment Method:<input type="radio" > cash <input type="radio" >visa</div>`
  );
  const totalP=$(`<div class="totalP">Total Amount: ${counter} $</div>`)
  const send = $(`<div class="send"><button>Send</button></div>`);
  categoryHome.append(location, cash,totalP, send);
  send.on("click", function () {
    home.show();
    categoryHome.hide();
    cartArr.splice(0, cartArr.length);
  });
};
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
    // const toString1 = JSON.stringify(cartArr);
    // localStorage.setItem("deletedArray", toString1);
    homeReturn.on("click", function () {
      home.show();
      categoryHome.hide();
    });
    const divWomen = $(
      `<div id='${e.id}' class="divWomen"><img src='${e.image}'alt='${e.title}'><h4>${e.price}</h4><button class='delete' style='width: 70px; background-color: #ebaa28;'> Delete</button></div>`
    );
    categoryHome.append(divWomen);
    $(".delete").on("click", function () {
      cartArr.splice(indx, 1);
        // localStorage.removeItem("deletedArray", toString1)
      renderCart(cartArr);
    });
  });
  const checkout = $(`<button class="checkout">Checkout</button>`);
  categoryHome.append(checkout);
  checkout.on("click", function () {
    renderCheckout(cartArr);
  });
};
const render = (newArray) => {
   categoryHome.html("");
  
   const products = $(`<div class="products"><b>${(newArray[0].category).toUpperCase()}</b></div>`);
  categoryHome.append(homeReturn, products);
  newArray.forEach((e, indx) => {
    const womenDescription = $(
      `<div class="womenDescription">${e.description}</div>`
    );
    $(".it").append(womenDescription);
    womenDescription.hide();
    const divBack = $(`<div class='divBack'></div>`);
       const backWomen = $(`<div class='backWomen'>Back</div>`);
    backWomen.on("click", function () {
      categoryHome.show();
      womenDescription.hide();
    });
       homeReturn.on("click", function () {
      home.show();
      categoryHome.hide();
    });
      const divWomen = $(
      `<div id='${e.id}' class="divWomen"><img src='${e.image}'alt='${e.title}'><h4>${e.title}</h4> </div>`
    );
    categoryHome.append(divWomen);
    divWomen.on("click", () => {
      renderOneItem(e);
    });
  });
};
const renderOneItem = function (e) {
  //============description==========
  starsNumber.push(e.rating.rate);
  $(".details").html("");
  $(".details").show();
  home.hide();
  categoryHome.hide();
  const divBack = $(`<div class='divBack'></div>`);
  const backWomen = $(`<div class='backWomen'>Back</div>`);
  const homeReturn4 = $(
    `<div class='homeReturn'><i class="fa-solid fa-house"></i></div>`
  );
  const starPersantage = (e.rating.rate / 5) * 100;
  const rounded = `${Math.round(starPersantage / 10) * 10}%`;
  const divImg = $(`<img  src='${e.image}'>`);
  const divTitle = $(`<div class="divTitle">${e.title}</div>`);
  const divDescription = $(`<div class="divDescription">${e.description}</div>`);
  const divRate = $(
    `<div class="divRate">Rate: <div class="outer"><div class="inner" style="width:${rounded} ;"></div></div> <span class="number-Rating"></span> </div>`
  );
  const divP = $(`<div class="divP">Price: ${e.price}</div>`);
  const divReaction = $(`<div class="divReaction"></div>`);
  const divCart = $(
    `<div class="divCart"><i style='font-size:xx-large' class="fa-solid fa-cart-shopping"></i></div>`
  );
  const divFav = $(
    `<div class="divFav"><i  style='font-size:xx-large' class="fa-solid fa-heart"></i></div>`
  );

  divBack.append(backWomen, homeReturn4);
  $(".details").append(
      divBack,
   
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
  backWomen.on("click", function () {
    categoryHome.show();
    home.hide();
    $(".details").hide();
  });
  divReaction.append(divCart, divFav);
  divCart.on("click", () => {
    cartArr.push(e);
  });
  divFav.on("click", () => {
    favArr.push(e);
    usersInfo.push({'one':e, 'two': users[0]})
    console.log(favArr);
    console.log(usersInfo);
  });
};
$(".cart").on("click", function () {
  home.hide();
  categoryHome.show();
     renderCart(cartArr);//
});
$(".fav").on("click", function () {
  home.hide();
  categoryHome.show();
  renderFav(favArr);
});
//===================
const createAccount = $(`<div class="createAccount"></div>`);
body.append(createAccount);
createAccount.hide();
const homeReturn3 = $(
  `<div class='homeReturn3'><i class="fa-solid fa-house"></i></div>`
);
const nameAccount =
  $(`<div class="nameAccount" style="font-size: xx-large;">Create Account</div>
<label> Email:</label> <br><input placeholder="Enter your email" type="email" required class='userEmail'><br><label> Password:</label> <br><input placeholder="Enter your password" type="password" required class='userPass'><br><label> Confirm password:</label> <br><input placeholder="Confirm your password" type="password" required><br> <label>
<input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
</label>
<br><div>By creating an account you agree to our terms and privacy: <br>
I agree<input type="radio" required></div><br>`);
const register = $(` <button>Sign up</button>`);
const design1 = $(`<div class="design1"></div>`);
createAccount.append(homeReturn3, design1);
design1.append(nameAccount, register);
homeReturn3.on("click", function () {
  home.show();
  createAccount.hide();
});
//========================
const registerFun = () => {
  let newUser = {
    email: $(".userEmail").val(),
    password: $(".userPass").val(),
  };
  users.push($(".userEmail").val())
  user.push(newUser);
  let userString = JSON.stringify(user);
  localStorage.setItem("user", userString);
  home.show();
  createAccount.hide();
};
register.on("click", registerFun);
//==============log in=================
const logIn = $(`<div class="logIn1"></div>`);
$(".logIn").append(logIn);
logIn.hide();
const homeReturn4 = $(
  `<div class='homeReturn3'><i class="fa-solid fa-house"></i></div>`
);
const logInAccount =
  $(`<div class="nameAccount1" style="font-size: xx-large;">Login Form</div>
<label> Email:</label> <br><input placeholder="Enter your email" type="email" required class='user'><br><label> Password:</label> <br><input placeholder="Enter your password" type="password" required class='pass'><br>`);
const design = $(`<div class="design"></div>`);
const info = $(`<p>"you have to register first"</p>`);
logIn.append(homeReturn4, design);
const logInToYourAccount = $(` <button>Login</button>`);
design.append(logInAccount, logInToYourAccount);
// logIn.append(logInToYourAccount);
homeReturn4.on("click", function () {
  home.show();
  logIn.hide();
});
//====================

const user = JSON.parse(localStorage.getItem("user")) || [];
const loginEmail = () => {
    
  for (k = 0; k < user.length; k++) {
    if (
      $(".user").val() === user[k].email &&
      $(".pass").val() === user[k].password
    ) {
      home.show();
      logIn.hide();
      createAccount.hide();
          break;
    } else {
      createAccount.show();
      logIn.hide();
      home.hide();
      //   alert("you have to register first");
    }
  }
};
logInToYourAccount.on("click", loginEmail);
