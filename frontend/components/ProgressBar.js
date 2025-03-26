const ProgressBar = ({ streak }) => {
  const percentage = (streak / 66) * 100;
  const color = percentage < 33 ? 'red' : percentage < 66 ? 'yellow' : 'green';

  return (
    <div className="w-full bg-gray-200 rounded">
      <div className={`h-4 rounded bg-${color}-500`} style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export default ProgressBar;
