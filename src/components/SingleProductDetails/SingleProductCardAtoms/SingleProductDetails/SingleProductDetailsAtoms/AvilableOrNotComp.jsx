const AvilableOrNotComp = ({ productQuantity, productQuantityAtCart }) => {
  return (
    <>
      {productQuantity > 0 ? (
        <>
          {productQuantity > productQuantityAtCart ? (
            <div className="quatity-container" style={{ color: "green" }}>
              <p> متوفر في المخزن</p>
            </div>
          ) : (
            <div className="quatity-container outstock">
              <p style={{ color: "#bf1029" }}>لقد وصلت للحد الأقصي</p>
            </div>
          )}
        </>
      ) : (
        <div className="quatity-container outstock">
          <p style={{ color: "#bf1029" }}>غير متوفر في المخزن</p>
          <p role="button">! إخباري عندما يكون متاحاً</p>
        </div>
      )}
    </>
  );
};

export default AvilableOrNotComp;
