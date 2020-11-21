 document.addEventListener('DOMContentLoaded', function () {
     Highcharts.getJSON('http://preco-operadoras.pedrorualves.eu/back/api/prices', function (data) {

         Highcharts.setOptions(
             {
                 lang:{
                     contextButtonTitle:'Menu do gráfico',
                     months:['Janeiro','Fevereiro','Março','Abril','Maio','Junho', 'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
                     weekdays:['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
                     shortMonths:['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
                     downloadPNG:'Download em imagem PNG',
                     downloadJPEG:'Download em imagem JPG',
                     downloadPDF:'Download em documento PDF',
                     downloadSVG:'Download em imagem vector SVG',
                     exportButtonTitle:'Exportar o gráfico',
                     loading:'A carregar...',
                     printChart:'Imprimir o gráfico',
                     rangeSelectorFrom: "De",
                     rangeSelectorTo: "Até",
                     rangeSelectorZoom: "Periodo",
                     exitFullscreen: "Sair de ecrã inteiro",
                     viewFullscreen: "Ver em ecrã inteiro"
                 }
             });


             ss = [{
                        name : 'MEO',
                        data : data.meo,
                        tooltip: {
                            valueDecimals: 2
                        },
                        color: '#0076d1',
                        lineWidth: 2
                    },{
                        name : 'NOS',
                        data : data.nos,
                        tooltip: {
                            valueDecimals: 2
                        },
                        color: '#fffb0a',
                        lineWidth: 2
                    },{
                        name : 'VODAFONE',
                        data : data.vodafone,
                        tooltip: {
                            valueDecimals: 2
                        },
                        color: '#e8240e',
                        lineWidth: 2
                    }]

        Highcharts.stockChart('chart', {

            chart: { zoomType: 'x' },
            legend: { enabled: true },
            rangeSelector: {
                selected: 1
            },

            series: ss
        });
    });

});
