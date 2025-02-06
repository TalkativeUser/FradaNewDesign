const TrackOrderCircle = ({percentage}) => {
    const radius = 40;
    const strokeWidth = 5;
    const circleCircumference = 2 * Math.PI * radius;
    const strokeDasharray = `${circleCircumference} ${circleCircumference}`;
    const strokeDashoffset =
      circleCircumference - (percentage / 100) * circleCircumference;
  return (
    <div className=" w-fit relative">
      <svg width="120" height="120">
        <circle
          stroke="lightgray"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx="60"
          cy="60"
        />
        <circle
          stroke="#d27a51"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx="60"
          cy="60"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
      </svg>
      <span className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[76%] text-xl">
        {percentage}%
      </span>
      <div>نسبه الاكتمال</div>
    </div>
  );
};

export default TrackOrderCircle;
