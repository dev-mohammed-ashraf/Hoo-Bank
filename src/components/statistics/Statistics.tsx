import CountUp from "react-countup";

function Statistics() {
  return (
    <div className="pt-20 md:pt-20 lg:pt-50 xl:pt-35 flex flex-col md:flex-row gap-6 md:gap-2 justify-between items-center">
      <div className="flex items-center gap-4">
        <span className="text-3xl lg:text-4xl">
          <CountUp
            end={4800}
            duration={3}
            decimals={1}
            formattingFn={(value) => (value / 1_000).toFixed(1) + "K"}
          />
          +
        </span>
        <h3 className="text-base lg:text-lg uppercase gradient-text">
          user active
        </h3>
      </div>
      <span className="rotate-90 md:rotate-0 text-lightBlue">|</span>
      <div className="flex items-center gap-4">
        <span className="text-3xl lg:text-4xl">
          <CountUp end={230} duration={5} />+
        </span>
        <h3 className="text-base lg:text-lg uppercase gradient-text">
          trusted by company
        </h3>
      </div>
      <span className="rotate-90 md:rotate-0 text-lightBlue">|</span>
      <div className="flex items-center gap-4">
        <span className="text-3xl lg:text-4xl">
          $
          <CountUp
            end={1500000}
            duration={5}
            decimals={1}
            formattingFn={(value) => (value / 1_000_000).toFixed(1) + "M"}
          />
          +
        </span>
        <h3 className="text-base lg:text-lg uppercase gradient-text">
          transaction
        </h3>
      </div>
    </div>
  );
}

export default Statistics;
