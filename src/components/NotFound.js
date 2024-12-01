import notFound from "../blogapp-asset/images/notfound.svg";
const NotFound = () => {
  return (
    <div className="container">
      <h3 className="title">Not Found Page (404 Page Not Found)</h3>
      <img src={notFound} />
    </div>
  );
};

export default NotFound;
