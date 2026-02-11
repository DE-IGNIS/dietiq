import "./styling/Landing.css";
import food_img from "../assets/landing_food.webp";
import logo from "../assets/react.svg";

function Landing() {
  return (
    <div className="landing-wrapper">

      
      <section className="hero-section">

        <div className="hero-card">
          <div className="hero-card-header">
            <img src={logo} alt="HealthIQ" />
            <h3>HealthIQ</h3>
          </div>

          <h2>AI-Driven Community Health Intelligence</h2>

          <p>
            Delivering reliable health and nutrition guidance 
            with smart, accessible technology.
          </p>
        </div>

        <img
          src={food_img}
          alt="Healthy food"
          className="hero-image"
        />

      </section>

      
      <section className="content-section">

        <div className="content-left">
          <h2>Community Health, Powered by AI</h2>
          <p>
            Access to reliable health and nutrition guidance remains a major challenge in many semi-urban 
            and rural communities. Information is often scattered across unreliable sources, mixed with 
            misinformation, and presented in ways that are difficult for people with low digital literacy 
            to understand. The lack of localized, culturally relevant guidance further prevents individuals 
            from making timely and informed health decisions. As a result, preventable illnesses, poor nutrition 
            choices, and sanitation-related risks continue to affect overall community well-being.
            <br /><br />
            HealthIQ addresses this gap by bringing together artificial intelligence, structured community knowledge, 
            and accessible digital tools. It creates a trusted platform where people can learn, share, and verify health 
            information while receiving personalized guidance that aligns with their local food habits and lifestyle.
          </p>
        </div>

        <div className="content-right">
          <h3>Our Mission</h3>
          <p>
            To empower communities with accessible, AI-driven health
            intelligence that is simple, multilingual, and culturally relevant —
            enabling early detection, reducing misinformation, and improving
            overall community well-being through collective participation and
            trust.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Landing;