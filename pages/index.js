import Layout from "../components/Layout";
import ProductBox from "../components/ProductBox";

const products = [
  {
    id: 0,
    wood: "Oak",
    price: 50,
    stock: 7,
    length: 50,
    width: 50,
    thickness: 5,
    stain: "Dark",
    imageSrc: "/board.jpg"
  },
  {
    id: 1,
    wood: "Willow",
    price: 50,
    stock: 7,
    length: 50,
    width: 50,
    thickness: 5,
    stain: "Light",
    imageSrc: "/board.jpg"
  },
  {
    id: 2,
    wood: "Willow",
    price: 50,
    stock: 7,
    length: 50,
    width: 50,
    thickness: 5,
    stain: "Light",
    imageSrc: "/board.jpg"
  },
  {
    id: 3,
    wood: "Willow",
    price: 50,
    stock: 7,
    length: 50,
    width: 50,
    thickness: 5,
    stain: "Light",
    imageSrc: "/board.jpg"
  },
  {
    id: 4,
    wood: "Willow",
    price: 50,
    stock: 7,
    length: 50,
    width: 50,
    thickness: 5,
    stain: "Light",
    imageSrc: "/board.jpg"
  },
  {
    id: 5,
    wood: "Willow",
    price: 50,
    stock: 7,
    length: 50,
    width: 50,
    thickness: 5,
    stain: "Light",
    imageSrc: "/board.jpg"
  },
  {
    id: 6,
    wood: "Willow",
    price: 50,
    stock: 7,
    length: 50,
    width: 50,
    thickness: 5,
    stain: "Light",
    imageSrc: "/board.jpg"
  },
  {
    id: 7,
    wood: "Willow",
    price: 50,
    stock: 7,
    length: 50,
    width: 50,
    thickness: 5,
    stain: "Light",
    imageSrc: "/board.jpg"
  }
];

const productBoxes = products.map(product => (
  <ProductBox key={product.id} {...product}></ProductBox>
));

export default () => (
  <Layout>
    <div className="flex items-center justify-start flex-wrap">
      {productBoxes}
    </div>
  </Layout>
);
