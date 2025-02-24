import Button from "./Button";
import "./StatusModal.css";
import orderstatusimage from "../assets/orderstatusimage.svg";

const StatusModal = () => {
  return (
    <section className="status-modal">
      <p className="status-modal__order-number">Ordernummer #12DV23F</p>
      <img className="status-modal__img" src={orderstatusimage} alt="drone" />
      <h1 className="status-modal__info">Din beställning är på väg!</h1>
      <section className="status-modal__time-wrapper">
        <span className="status-modal__time">13</span>

        <p className="status-modal__minutes">minuter</p>
      </section>

      <Button bgColor={"rgba(255, 255, 255, 1)"} color={"rgba(47, 41, 38, 1)"}>
        Ok, cool!
      </Button>
    </section>
  );
};

export default StatusModal;
