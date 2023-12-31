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
import { Description } from "./Pages/description/description"






export const App = () => {
  const product = (title, price, categorie, type, src, qnt, stock) => ({
    title,
    price,
    categorie,
    type,
    src,
    qnt: 1,
    stock: 2,
  })
  const [AllProducts, setAllProducts] = useState([
    //**women
    product("Fashionista's Paradise", 75, "women", "new", women1),
    product("Elegant Ensembles", 105, "women", "new", women2),
    product("Comfy Women's Casuals", 260, "women", "new", women3),
    product("Free-Spirited Women's", 30, "women", "sold", women4),
    product("Athleisure Avenue", 98, "women", "sold", women5),
    product("Women's Vintage", 22, "women", "sold", women6),
    product("Women's Professional", 168, "women", "old", women7),
    product("Women's Beachwear", 200, "women", "old", women8),
    // **men
    product("ExecutiveBlend Suit", 196, "men", "new", men1),
    product("UrbanEdge Jeans", 730, "men", "new", men2),
    product("ComfyTech Hoodie", 98, "men", "new", men3),
    product("Trailblazer Jacket", 125, "men", "sold", men4),
    product("ClassicGent Shirt", 66, "men", "sold", men5),
    product("PowerStride Shoes", 450, "men", "sold", men6),
    product("CoolBreeze Linen Shirt", 540, "men", "old", men7),
    product("MetroChic Overcoat", 127, "men", "old", men8),
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
  const [best, setBest] = useState([
    product("Comfy Women's Casuals", 260, "women", "new", women3),
    product("ExecutiveBlend Suit", 196, "men", "new", men1),
    // product("AdventureSeeker ", 152,"kids","new",kids3),
    product("Women's Vintage ", 22, "women", "sold", women6),])

  let [favorite, setFavorite] = useState([])
  let [panier, setPanier] = useState([])
  const addStock = (index) => {
    const newProducts = [...AllProducts];
    const newPanier = [...panier];
    if (newProducts[index].stock === 0) {
      alert("Il n'y a plus de produit");
    } else {
      newProducts[index].stock -= 1;

      const existingProduct = newPanier.find(
        (element) => element.title === newProducts[index].title
      );
console.log(existingProduct);
      if (existingProduct === undefined) {
        newPanier.push(newProducts[index]);
        console.log(newProducts[index]);

      } else {
        existingProduct.qnt += 1;
      }
      
      setPanier(newPanier);
      setAllProducts(newProducts);
    }
  }
  return (
    <div>
      <Nav tab={panier} />
      <Routes>
        {/* <Route path="*" element={<Error />}/> */}
        <Route exact path="/" element={<Home AllProducts={AllProducts} best={best} addStock={addStock} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product AllProducts={AllProducts} />} />
        <Route path="/favorite" element={<Favorite tab={favorite} />} />
        <Route path="/panier" element={<Panier tab={panier} />} />
        <Route path="/product/:id" element={<Description AllProducts={AllProducts} />} />


      </Routes>
      <Footer />

    </div>
  )

}