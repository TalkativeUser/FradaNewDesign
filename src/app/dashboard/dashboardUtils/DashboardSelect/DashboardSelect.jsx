const DashboardSelect = ({
  label,
  dashboard,
  disabled,
  name,
  value,
  fn,
  DataToMap,
  error,
  errorText,
}) => {
  return (
    <div className={`${dashboard?"customer-info":"w-full"}`}>
      <div className={`${dashboard?"input-dashboard":""}`}>
        <label>{label}</label>
        <select
         disabled={disabled} 
         name={name} 
         value={value} 
        onChange={(e) => fn(e.target.value)} 
        className="w-[100%] text-end border-[1px] rounded outline-none"
        style={{direction:"ltr"}}
        >
          <option value="0">إختر مدينة</option>
          {DataToMap &&
            DataToMap?.data.map((city) => (
              <option key={city.id} value={city.id}>
                {city.nameAr}
              </option>
            ))}
        </select>
        {error && (
          <div className="w-100 text-center mt-1 text-red-600">{errorText}</div>
        )}
      </div>
    </div>
  );
};

export default DashboardSelect;
