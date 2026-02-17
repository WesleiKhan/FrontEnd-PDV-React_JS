import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, Legend
} from "recharts";

import styles from "../utils/CashCharts.module.css"

function CashCharts({ dinheiro, pix, debito, credito }) {

    const data = [
        { name: "Dinheiro", value: dinheiro },
        { name: "Pix", value: pix },
        { name: "Débito", value: debito },
        { name: "Crédito", value: credito },
    ];

    const COLORS = ["#2E8B57", "#4DB8FF", "#5FBF4A", "#F28C38"];

    return (
        <div className={styles.container}>

            <div className={styles.chartHalf}>
                <ResponsiveContainer className={styles.responsive_container}>
                    <BarChart data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value">
                            {data.map((entry, index) => (
                                <Cell key={index} fill={COLORS[index]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Pizza */}
            <div className={styles.chartHalf}>
                <ResponsiveContainer className={styles.responsive_container}>
                    <PieChart>
                        <Pie data={data} dataKey="value" nameKey="name" outerRadius={90}>
                            {data.map((entry, index) => (
                                <Cell key={index} fill={COLORS[index]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
}

export default CashCharts;
