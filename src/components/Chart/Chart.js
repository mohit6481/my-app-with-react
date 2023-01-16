import "./Chart.css";
import ChartBars from "./components/ChartBars/ChartBars";

const Chart = ({ dataPoints }) => {
  const totalMaxValue = Math.max(...dataPoints.map(el => el.value));

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBars
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
