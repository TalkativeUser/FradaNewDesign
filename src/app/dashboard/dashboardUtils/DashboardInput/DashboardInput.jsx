const DashboardInput = ({
  dashboard,
  palceholder,
  label,
  readOnly,
  name,
  type,
  value,
  fn,
  showPass,
  setShowPass,
  error,
  errorText,
}) => {
  return (
    <div className={` ${dashboard ? "customer-info" : "w-full relative"}`}>
      <label>{label}</label>
      <input
        readOnly={readOnly}
        name={name}
        type={type}
        value={value}
        placeholder={palceholder}
        onChange={(e) => fn(e.target.value)}
        style={{
          borderBottom: error ? "1px solid red" : "1px solid #05060538",
          direction:"rtl"
        }}
        className={`outline-none ${readOnly?"opacity-50":"opacity-100"} ${
          !dashboard &&
          "border-[1px] w-[100%] text-sm  pr-1 py-1 rounded"
        }`}
      />
      {(name == "password" || name == "confirmPassword") && !error && (
        <>
          {showPass ? (
            <span
              className="icon-eye absolute translate-y-[32%] left-[7%] text-sm cursor-pointer"
              onClick={() => setShowPass(false)}
            ></span>
          ) : (
            <span
              className="icon-eye-off absolute translate-y-[32%] left-[7%] text-sm cursor-pointer"
              onClick={() => setShowPass(true)}
            ></span>
          )}
        </>
      )}
      {error && (
        <div className="w-100 text-center mt-1 text-sm text-red-600">
          {typeof errorText==[]?errorText[0]:errorText}
        </div>
      )}
    </div>
  );
};
export default DashboardInput;
