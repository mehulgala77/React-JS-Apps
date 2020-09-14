
import React, {useState, useEffect} from 'react'
import { Line } from 'react-chartjs-2'
import numeral from "numeral";

const options = {
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: function (tooltipItem, data) {
                return numeral(tooltipItem.value).format("+0,0");
            },
        },
    },
    scales: {
        xAxes: [
        {
            type: "time",
            time: {
            format: "MM/DD/YY",
            tooltipFormat: "ll",
            },
        },
        ],
        yAxes: [
        {
            gridLines: {
            display: false,
            },
            ticks: {
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
                return numeral(value).format("0a");
            },
            },
        },
        ],
    },
};

// Takeaway
function LineGraph({ caseType = 'cases', ...props }) {

    const [data, setData] = useState({})

    const generateChartData = (data, chartField) => {

        const chartData = []

        const chartFieldArr = Object.entries(data[chartField])        
        chartFieldArr.forEach((field, index) => {

            let date = field[0]
            let newCases = 0
            
            if (index !== 0) {     
                
                // Computing new cases on this day by diff between yesterday's total 
                // cases and today's total cases.
                newCases = field[1] - chartFieldArr[index - 1][1]

                chartData.push({
                    x: date,
                    y: newCases
                })
            }
            
        })

        return chartData
    }

    useEffect(() => {

        const url = "https://disease.sh/v3/covid-19/historical/all?lastdays=120"

        fetch(url)
        .then(response => response.json())
        .then(data => {            
            const chartData = generateChartData(data, caseType)     
            setData(chartData)       
        })

    }, [caseType])

    return (
        <div className={props.className}>   
            {/* Takeaway: ?. is short hand to avoid null check on data.
            If it is null, it will result in undefined. That's so cool :) 
            It is called optional chaining. */}
            {data?.length > 0 && (
                <Line
                data={{
                    datasets: [
                        {
                            backgroundColor: "rgba(204, 16, 52, 0.5)",
                            borderColor: "#CC1034",
                            data: data
                        }
                    ]
                }}
                options={options}
                />
            )}
        </div>
    )
}

export default LineGraph
