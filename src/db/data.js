import { AiFillStar } from "react-icons/ai";

const data = [
  {
    id:1,
    img: "https://m.media-amazon.com/images/I/61uA2UVnYWL._AC_UY218_.jpg",
    title: "iPad 10th Gen",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Tablet",
    color: "white",
    category: "Tablet",
  },
  {
    id:2,
    img: "https://m.media-amazon.com/images/I/81hAx31maUL._AC_UY218_.jpg",
    title: "iPad Pro 2023",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Tablet",
    color: "red",
    category: "Tablet",
  },

  {
    id:3,
    img: "https://m.media-amazon.com/images/I/51MfOw+lbEL._AC_UY218_.jpg",
    title: "Asus Predator",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Laptop",
    color: "green",
    category: "Laptop",
  },
  {
    id:4,
    img: "https://m.media-amazon.com/images/I/71K84j2O8wL._AC_UY218_.jpg",
    title: "OnePlus 11 R",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Mobile",
    color: "black",
    category: "Mobile",
  },
  {
    id:5,
    img: "https://m.media-amazon.com/images/I/81UmTnrBDSL._AC_UY218_.jpg",
    title: "Redmi A1",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Mobile",
    color: "green",
    category: "Mobile",
  },
  {
    id:6,
    img: "https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_UY218_.jpg",
    title: "iPhone 13 (Pink)",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Mobile",
    color: "black",
    category: "Mobile",
  },

  {
    id:7,
    img: "https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY218_.jpg",
    title: "iPhone 13 (White)",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Mobile",
    color: "white",
    category: "Mobile",
  },
  {
    id:8,
    img: "https://m.media-amazon.com/images/I/71RxCmvnrbL._AC_UY218_.jpg",
    title: "Samsung TV",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Television",
    color: "green",
    category: "Television",
  },
  
];

export const addProduct = (product) => {
  data.push(product);
}

export default data;