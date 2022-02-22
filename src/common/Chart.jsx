import { Chart as ChartJs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Chart = ({ data }) => {
  return (
    <>
      <Bar
        data={data}
        options={{
          title: {
            display: true,
            text: 'Categories',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      ></Bar>
    </>
  );
};
