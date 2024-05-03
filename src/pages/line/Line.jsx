import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";


const data = [
  {
    id: "japan",
    color: "hsl(79, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 264,
      },
      {
        x: "helicopter",
        y: 111,
      },
      {
        x: "boat",
        y: 251,
      },
      {
        x: "train",
        y: 61,
      },
      {
        x: "subway",
        y: 188,
      },
      {
        x: "bus",
        y: 242,
      },
      {
        x: "car",
        y: 17,
      },
      {
        x: "moto",
        y: 14,
      },
      {
        x: "bicycle",
        y: 122,
      },
      {
        x: "horse",
        y: 118,
      },
      {
        x: "skateboard",
        y: 251,
      },
      {
        x: "others",
        y: 39,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(327, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 190,
      },
      {
        x: "helicopter",
        y: 92,
      },
      {
        x: "boat",
        y: 116,
      },
      {
        x: "train",
        y: 134,
      },
      {
        x: "subway",
        y: 219,
      },
      {
        x: "bus",
        y: 157,
      },
      {
        x: "car",
        y: 54,
      },
      {
        x: "moto",
        y: 280,
      },
      {
        x: "bicycle",
        y: 222,
      },
      {
        x: "horse",
        y: 11,
      },
      {
        x: "skateboard",
        y: 187,
      },
      {
        x: "others",
        y: 51,
      },
    ],
  },

  {
    id: "germany",
    color: "hsl(83, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 118,
      },
      {
        x: "helicopter",
        y: 90,
      },
      {
        x: "boat",
        y: 164,
      },
      {
        x: "train",
        y: 68,
      },
      {
        x: "subway",
        y: 251,
      },
      {
        x: "bus",
        y: 298,
      },
      {
        x: "car",
        y: 45,
      },
      {
        x: "moto",
        y: 163,
      },
      {
        x: "bicycle",
        y: 46,
      },
      {
        x: "horse",
        y: 294,
      },
      {
        x: "skateboard",
        y: 203,
      },
      {
        x: "others",
        y: 103,
      },
    ],
  },
];

const Line = ({ isDashboard = false }) => {
  const theme = useTheme();

  return (
    <Box sx={{ height: isDashboard ? "280px" : "75vh" }}>

      <ResponsiveLine
        theme={{
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: "#dddddd",
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        data={data}
        curve="catmullRom"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,                     
          legend: isDashboard ? null : "transportation",                      
          legendOffset: 40,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "Count",
          legendOffset: -44,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default Line;
