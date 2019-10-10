var series = [
    {
        name: 'male applicant',
        data: [31992, 34618, 37009, 39779, 41583, 45636]
    },
    {
        name: 'New York',
        data: [35408, 38822, 41047, 44430, 46845, 52265]
    }
];

// Configuration about the plot
var title = {
    text: 'Applicant by year, male vs femal'
};
var subtitle = {
    text: 'Source: WorldClimate.com'
};
var xAxis = {
    categories: ['2013', '2014', '2015', '2016', '2017', '2018'
        ]
};
var yAxis = {
    title: {
        text: 'Temperature (\xB0C)'
    },
    plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
    }]
};
var tooltip = {
    valueSuffix: '\xB0C'    // /xB0C is basically degrees
}
var legend = {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0
};

// Data structure to hold all the configurations together
var json = {};

// Tying all the configurations
json.title = title;
json.subtitle = subtitle;
json.xAxis = xAxis;
json.yAxis = yAxis;
json.tooltip = tooltip;
json.legend = legend;

// Tying the data as the series data
json.series = series;

// We need to couple the chart data structure with the chartPlaceHolder div
var someVar = document.getElementById("chartPlaceHolder");
Highcharts.chart(someVar, json);