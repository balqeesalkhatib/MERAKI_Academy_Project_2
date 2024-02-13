//==============Home page==============
const body=$('body');
const home=$(`<div class='home'></div>`)
body.append(home);
const main=$(`<div class='main'></div>`)
home.append(main);
const mainContains=$(`<div class='name'>1.1</div>
<div class='search'>1.2</div>
<div class='account'>1.3</div>
<div class='card'>1.4</div>
<div class='fav'>1.5</div>`)
main.append(mainContains);
const category=$(`<div class='category'></div>`)
home.append(category);
const women=$(`<div class="women">women</div>`)
const men=$(`<div class="men">men</div>`)
const kids=$(`<div class="kids">kids</div>`)
category.append(women,men,kids)
const pic1=$(`<div class="pic1"><img src="./istockphoto-1404603483-1024x1024.jpg" alt="New Arrival"> 
<p style="font-size: larger;">New Arrival</p></div>`)
const pic2=$(`<div class="pic2">  <img src="./hanger-2566555_1280.jpg" alt="Best seller">
<p style="font-size: larger;">Best Seller</p></div>`)
const pic3=$(`<div class="pic3"><img src="pic3.jpg" alt="Free Shipping">
<p style="font-size: larger;">Free Shipping</p></div>`)
home.append(pic1,pic2,pic3);
//=============================
//==========Women===========
women.on('click',function () {
    home.hide();
    womenHome.show()
})
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
      }
    
  ];
const womenHome=$(`<div class="womenHome">women</div>`)
body.append(womenHome);
womenHome.hide()
const homeReturn=$(`<div class='homeReturn'>back to home</div>`)
const products=$(`<div class="products">products</div>`)
womenHome.append(homeReturn,products);
const render=()=>{
    womenProducts.forEach((elem,indx)=>{
const divWomen=$(`<div class="divWomen"><img src='${elem.imageSrc}'alt='${elem.title}'><h4>${elem.title}</h4> </div>`)
   womenHome.append(divWomen)
})
}
render()
//=================================
//============description==========
const mainDescription=$(`<div class="mainDescription">mainDescription</div>`)
//=================================





