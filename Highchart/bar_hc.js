Highcharts.chart(document.getElementById("chartPlaceHolder"), {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Historic World Population by Region'
    },
    subtitle: {
        text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
    },
    xAxis: {
        categories: ['2018', '20017', '2016', '2015', '2014', '2013'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'number of people',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: 'people'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },

    credits: {
        enabled: false
    },
    series: [{
        name: 'male',
        data: [13781, 13981, 14103, 12748, 11758, 11866]
    }, {
        name: 'femal',
        data: [15821, 16231, 16170, 13761, 12837, 12966]
    }]
});