Highcharts.chart(document.getElementById("chartPlaceHolder"), {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Retension rate of female applicants in 2018'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Proportion',
        colorByPoint: true,
        data: [{
            name: 'Admitted',
            y: 15821,
            sliced: true,
            selected: true
        }, {
            name: 'enrolled',
            y: 3484
        }]
    }]
});