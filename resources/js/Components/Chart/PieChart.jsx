import { Pie } from "react-chartjs-2";
import {Chart,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js'

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

function PieChart({data}) {
    const PieCHartData = {
        labels:["Completed","Over due","In progress"],
        datasets: [
            {
            data: data,
            backgroundColor: ['#008844','#d33d44','#6b7280'],
            hoverOffset: 4,
            },
        ],
    }

    return (
        <Pie options={{
            maintainAspectRatio: false, 
            height: 300, 
        }} data={PieCHartData} />
    )
}

export default PieChart
    