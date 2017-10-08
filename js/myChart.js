        window.onload = function() {
            var chart = new CanvasJS.Chart("chartContainer", {
                title: {
                    text: "My languages"
                },
                animationEnabled: true,
                animationDuration: 2000,
                legend: {
                    verticalAlign: "bottom",
                    horizontalAlign: "center"
                },
                data: [{
                    indexLabelFontSize: 20,
                    indexLabelFontFamily: "Monospace",
                    indexLabelFontColor: "darkgrey",
                    indexLabelLineColor: "darkgrey",
                    indexLabelPlacement: "outside",
                    type: "pie",
                    showInLegend: true,
                    toolTipContent: "{y} - <strong>#percent%</strong>",
                    dataPoints: [{
                        y: 4181563,
                        legendText: "HTML5",
                        indexLabel: "HTML5"
                    }, {
                        y: 2175498,
                        legendText: "CSS/SASS",
                        indexLabel: "CSS/SASS"
                    }, {
                        y: 3125844,
                        legendText: "Javascript",
                        exploded: true,
                        indexLabel: "Javascript"
                    }, {
                        y: 1176121,
                        legendText: "PHP",
                        indexLabel: "PHP"
                    }, {
                        y: 1727161,
                        legendText: "ANGULAR",
                        indexLabel: "ANGULAR"
                    }, {
                        y: 4303364,
                        legendText: "Symfony",
                        indexLabel: "Symfony"
                    }, {
                        y: 1717786,
                        legendText: "Vita",
                        indexLabel: "PS Vita"
                    }]
                }]
            });
            chart.render();
        }