import "./styling/Landing.css";
import food_img from "../assets/landing_food.webp";

function Landing() {
  return (
    <>
      <div className="landing-container">
      <h1>This is the Landing page</h1>
        <img
          className="landing-page-img"
          src={food_img}
          alt="landing-page-food"
        />
        <p className="overlap-para">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iste
          quam mollitia aspernatur laborum porro, voluptate temporibus inventore
          quis? Deserunt harum sunt inventore maiores totam amet recusandae
          facere et aut.
        </p>
        <div className="landing-content">
          <p className="landing-para">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            fugit, deleniti quis autem laboriosam officiis cum, ipsam id impedit
            aliquid provident ab? Esse, cupiditate? Quam repellendus magnam id
            iure reiciendis.
          </p>
          <p className="landing-para">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            fugit, deleniti quis autem laboriosam officiis cum, ipsam id impedit
            aliquid provident ab? Esse, cupiditate? Quam repellendus magnam id
            iure reiciendis.
          </p>
        </div>
      </div>
    </>
  );
}

export default Landing;
