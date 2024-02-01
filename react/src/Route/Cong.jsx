import thank from "../assets/images/illustration-thank-you.svg";
import "./cong.css";

function Cong() {
  return (
    <main>
      <img src={thank} alt="" />
      <span>
        <p> You selected out of 5</p>
      </span>
      <h1>Thank you!</h1>
      <p>
        {" "}
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </main>
  );
}

export default Cong;
