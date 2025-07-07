import AboutDine from "./AboutDine";
import Banner from "./Banner";
import Category from "./Category";
import Popularmenu from "./Popularmenu";
import RecommendItem from "./RecommentItem";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <AboutDine></AboutDine>
      <Popularmenu></Popularmenu>
      <RecommendItem></RecommendItem>
    </div>
  );
};

export default Home;
