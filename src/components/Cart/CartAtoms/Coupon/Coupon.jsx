import { Form, InputGroup } from "react-bootstrap";
import "./Coupon.css"
const Coupon = ({addCoupon,setShowTabbyCard,couponName,setCouponName}) => {
  return (
    <div className="coupon">
      <h6 className="mb-2">هل لديك قسيمة شراء؟</h6>
      <InputGroup className="mb-3">
        <InputGroup.Text
          id="basic-addon1"
          className="btn"
          onClick={() => {
            addCoupon(), setShowTabbyCard(false);
          }}
        >
          تطبيق القسيمة
        </InputGroup.Text>
        <Form.Control
          value={couponName}
          onChange={(e)=>setCouponName(e.target.value)}
          placeholder="أدخل قسيمة الشراء"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </div>
  );
};

export default Coupon;
