import "./App.css";
import star from "../assets/images/icon-star.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <span>
        <img src={star} alt="" />
      </span>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <section>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </section>
      <Link to="/congratulations">
        <button>Submit</button>
      </Link>
    </main>
  );
}

export default Home;
