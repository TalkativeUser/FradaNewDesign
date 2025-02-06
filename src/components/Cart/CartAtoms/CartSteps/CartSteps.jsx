import "./CartSteps.css";
const CartSteps = ({ step }) => {
  return (
    <div className="steps">
      <div className="progress_container">
        <div
          className="progress"
          style={{
            width:
              step === 1
                ? "0%"
                : step === 2
                ? "33.3%"
                : step === 3
                ? "65%"
                : step === 4 && "95%",
          }}
        ></div>
        <div
          className={`circle ${
            (step === 1 || step === 2 || step === 3 || step === 4) && "active"
          }`}
        >
          <span></span>
          <p>التسجيل</p>
        </div>
        <div
          className={`circle ${
            (step === 2 || step === 3 || step === 4) && "active"
          }`}
        >
          <span></span>
          <p>الشحن</p>
        </div>

        <div className={`circle ${(step === 3 || step === 4) && "active"}`}>
          <span></span>
          <p>وسيلة الدفع</p>
        </div>

        <div className={`circle ${step === 4 && "active"}`}>
          <span></span>
          <p>الدفع</p>
        </div>
      </div>
    </div>
  );
};

export default CartSteps;
