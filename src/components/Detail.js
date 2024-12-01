import { useParams } from "react-router-dom";
import data from "../data/blog";
import { useEffect, useState } from "react";
import "./Detail.css";
const Detail = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    const result = data.find((item) => item.id === +id);
    // console.log(result);
    setTitle(result.title);
    setImage(result.image_url);
    setContent(result.content);
    setAuthor(result.author);
    //eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <h2 className="title">Title : {title}</h2>
      <img src={image} alt={title} />
      <strong>author : {author}</strong>
      <p>{content}</p>
    </div>
  );
};

export default Detail;
