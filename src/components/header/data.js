import shortid from "shortid";

const data = [
  {
    news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, temporibus.",
    icons: "lorem"
  },
  {
    news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, temporibus.",
    icons: "lorem"
  },
  {
    news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, temporibus.",
    icons: "lorem"
  },
  {
    news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, temporibus.",
    icons: "lorem"
  },
  {
    news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, temporibus.",
    icons: "lorem"
  }
]

export default data.map(el => ({...el, _id: shortid.generate()}));