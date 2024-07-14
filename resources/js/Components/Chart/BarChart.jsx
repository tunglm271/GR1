import { Bar } from 'react-chartjs-2';
import {Chart,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

Chart.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);


function BarChart({data}) {
    const BarChartData = {
        labels:["Completed","Over due","In progress"],
        datasets: [
            {
            data: data,
            borderColor: "black",
            backgroundColor: ['#008844','#d33d44','#6b7280'],   
            },
        ],
    }

    return (
        <Bar options={{
            plugins: {
                legend: {
                    display: false 
                },
            },
            maintainAspectRatio: false, 
            height: 300, 
        }} data={BarChartData} />
    )
}

export default BarChart