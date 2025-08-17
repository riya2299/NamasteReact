//Card container
const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData.info);
  const { o2FeaturedImage, name, rating, cft } = resData?.info;
  const aggRate = rating.aggregate_rating;
  const cftText = cft.text;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="res-logo" src={o2FeaturedImage.url} />
      <h4>{name}</h4>
      <h5>{aggRate} stars</h5>
      <h5>{cftText}</h5>
    </div>
  );
};

export default RestaurantCard;
