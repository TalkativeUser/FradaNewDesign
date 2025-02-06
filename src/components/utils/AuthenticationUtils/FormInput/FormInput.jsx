import "./FormInput.css";
const FormInput = ({
  name,
  type,
  placeHolder,
  error,
  showPass,
  setShowPass,
}) => {
  return (
    <div className="input-container">
      <input
        name={name}
        type={type}
        placeholder={placeHolder}
        style={{
          border: error ? "1px solid #B00020" : "",
        }}
      />
      {error ? (
        <>
          <span className="icon-notice"></span>
          <p className="error-msg">{error}</p>
        </>
      ) : null}
      {(name == "password" || name == "confirmPassword") && !error && (
        <>
          {showPass ? (
            <span
              className="icon-eye"
              onClick={() => setShowPass(false)}
            ></span>
          ) : (
            <span
              className="icon-eye-off"
              onClick={() => setShowPass(true)}
            ></span>
          )}
        </>
      )}
    </div>
  );
};

export default FormInput;
