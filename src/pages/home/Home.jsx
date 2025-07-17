import AboutDine from "./AboutDine";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import Popularmenu from "./Popularmenu";
import RecommendItem from "./RecommentItem";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <AboutDine></AboutDine>
      <Popularmenu></Popularmenu>
      <RecommendItem></RecommendItem>
      <Featured></Featured>

      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
