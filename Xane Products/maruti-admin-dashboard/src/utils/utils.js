let chart_1_2_3_options = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 60,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9a9a9a",
        },
      },
    ],
    xAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a",
        },
      },
    ],
  },
};

export const getTrends = (data, trends) => {
  let dateRangeStart = new Date("2020-11-20");
  let dateRangeEnd = new Date("2020-11-29");
  let date1 = new Date(dateRangeStart);

  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  let dates = [];
  while (date1 <= dateRangeEnd) {
    dates.push(new Date(date1.addDays(1)));
    date1 = date1.addDays(1);
  }

  let modelMap = [];
  data.map((model) => {
    let counts = [];
    dates.map((date) => {
      let _c = trends.find(
        (t) =>
          t.model === model &&
          t.date.substring(0, 10) ===
            new Date(date).toISOString().substring(0, 10)
      );
      _c ? counts.push(_c.count) : counts.push(0);
    });
    let obj = { model: model, counts: counts };
    modelMap.push(obj);
  });

  let model_trend = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)");

      return {
        labels: dates.map((date) =>
          new Date(date).toISOString().substring(0, 10)
        ),

        datasets: modelMap.map((m) => {
          return {
            label: m.model,
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: m.counts,
          };
        }),
      };
    },
    options: chart_1_2_3_options,
  };

  return model_trend;
};
