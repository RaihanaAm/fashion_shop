import { About } from "./Pages/About/about"
import { useEffect, useState } from "react"
import { Home } from "./Pages/Home/components/home"
import { Panier } from "./Pages/Panier/panier"
import { Contact } from "./Pages/contact/contact"
import { Favorite } from "./Pages/favorite/favorite"
import { Product } from "./Pages/product/product"
import { Route, Routes } from "react-router-dom"
import { Nav } from "./layout/navbar/navbar"
// ** images
// &&women
import women1 from "./assets/images/banner-02.jpg"
import women2 from "./assets/images/banner-07.jpg"
import women3 from "./assets/images/banner-08.jpg"
import women4 from "./assets/images/blog-01.jpg"
import women5 from "./assets/images/blog-02.jpg"
import women6 from "./assets/images/blog-03.jpg"
import women7 from "./assets/images/gallery-03.jpg"
import women8 from "./assets/images/gallery-07.jpg"
//&&men
import men1 from "./assets/images/men/Best-Suit-Brands-banner-2.jpg"
import men2 from "./assets/images/men/hodie.jpg"
import men3 from "./assets/images/men/item-cart-03.jpg"
import men4 from "./assets/images/men/jacket.jpg"
import men5 from "./assets/images/men/last.jpg"
import men6 from "./assets/images/men/money.jpg"
import men7 from "./assets/images/men/shirt.jpg"
import men8 from "./assets/images/men/shop-item-09.jpg"
// && kids 
// import kids1 from "./assets/images/kids/kid1.jpeg"
// import kids2 from "./assets/images/kids/kid2.jpg"
// import kids3 from "./assets/images/kids/kid3.jpg"
// import kids4 from "./assets/images/kids/kid4.jpg"
// import kids5 from "./assets/images/kids/kid5.jpg"
// import kids6 from "./assets/images/kids/kid6.jpg"
// import kids7 from "./assets/images/kids/kid7.jpg"
// import kids8 from "./assets/images/kids/kid8.jpg"
import { Footer } from "./layout/footer/footer"






export const App = () => {
  const product = (title, price, categorie, type, src) => ({
    title,
    price,
    categorie,
    type,
    src,
  })
  const [AllProducts,setAllProducts] =useState( [
    //**women
    product("Fashionista's Paradise", 75, "women", "new", women1),
    product("Elegant Ensembles", 105, "women", "new", women2),
    product("Comfy Women's Casuals", 260, "women", "new", women3),
    product("Free-Spirited Women's ", 30, "women", "sold", women4),
    product("Athleisure Avenue", 98, "women", "sold", women5),
    product("Women's Vintage ", 22, "women", "sold", women6),
    product("Women's Professional", 168, "women", "old", women7),
    product("Women's Beachwear ", 200, "women", "old", women8),
    // **men
    product("ExecutiveBlend Suit", 196,"men","new",men1),
    product("UrbanEdge Jeans", 730,"men","new",men2),
    product("ComfyTech Hoodie", 98,"men","new",men3),
    product("Trailblazer Jacket", 125,"men","sold",men4),
    product("ClassicGent Shirt", 66,"men","sold",men5),
    product("PowerStride Shoes", 450,"men","sold",men6),
    product("CoolBreeze Linen Shirt", 540,"men","old",men7),
    product("MetroChic Overcoat",127 ,"men","old",men8),
    // *kids
    // product("TinyTots Rompers", 146,"kids","new",kids1),
    // product("CuddleCloud Onesies", 78,"kids","new",kids2),
    // product("AdventureSeeker ", 152,"kids","new",kids3),
    // product("DinoRoar T-shirts", 975,"kids","sold",kids4),
    // product("MiniExplorers Cargo ", 397,"kids","sold",kids5),
    // product("TinyTrendsetters ", 834,"kids","sold",kids6),
    // product("CloudHopper", 245,"kids","sold",kids7),
    // product("TeddyBear Plush", 99,"kids","sold",kids8)
  ])
  const [solde,setSolde]=useState([]);
  const [news,setNews]=useState([]);
  const [old,setOld]=useState([]);
  useEffect(()=>{
    let girl = [];
    let boy = [];
    let kid = [];
    for (let index = 0; index < AllProducts.length; index++) {
      let element = AllProducts[index];
      switch (element.type) {
        case "new":
          girl.push(element)
          break;
          case "sold":
            boy.push(element)
          break;
          case "old":
            kid.push(element)
          break;
        default:
          break;
      }
      
    }
    setSolde(boy)
    setNews(girl)
    setOld(kid)

  },[AllProducts])
  return (
    <div>
      <Nav />
      <Routes>
        {/* <Route path="*" element={<Error />}/> */}
        <Route exact path="/" element={<Home AllProducts={AllProducts}  solde={solde}  news={news} old={old} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product AllProducts={AllProducts}  solde={solde}  news={news} old={old} />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/panier" element={<Panier />} />

      </Routes>
      <Footer/>

    </div>
  )

}