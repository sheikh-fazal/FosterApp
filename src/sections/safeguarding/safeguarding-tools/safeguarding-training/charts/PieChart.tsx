import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { chartTitles } from ".";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function PieChart({ selectedChart, setSelectedChart }: any) {
  let series: number[] = [22, 54, 24];

  let options: ApexOptions = {
    chart: {
      type: "donut",
    },
    fill: {
      pattern: {
        strokeWidth: 5,
      },
    },
    dataLabels: { enabled: false },
    labels: ["Completed", "Inprogress", "Pending"],
    colors: ["#F6460F", "#2CB764", "#F6830F"],
    legend: {
      show: false,
    },
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedChart((event.target as HTMLInputElement).value);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <ReactApexChart options={options} series={series} type="donut" width={200} height={186} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          marginTop: "20px",
          marginRight: "50px",
        }}
      >
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={selectedChart}
            onChange={handleChange}
          >
            <FormControlLabel value="pie" control={<Radio size="small" />} label="Pie Chart" />
            <FormControlLabel value="bar" control={<Radio size="small" />} label="Bar Graph" />
          </RadioGroup>
        </FormControl>
        {chartTitles?.map((item) => (
          <Box key={item?.color} sx={{ mt: 0.5 }}>
            <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
              <Box
                sx={{
                  width: "10px",
                  height: "10px",
                  background: item?.color,
                  borderRadius: "50%",
                }}
              ></Box>
              <Typography variant="subtitle2">{item?.title}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
