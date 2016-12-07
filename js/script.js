$(document).ready(function(){
 
    var teste = {
        inicializar: function(){
            teste.mostraCapitais();
            teste.retornaCidade();
            teste.events();
            
        },        

        events: function(){
            $('.fechar').click(function(){
                $('.mostra-tempo').hide();
            });
        },

        retornaCidade: function() {
            $('#cidade').blur(function(){                    
                var pegaCidade = $(this).val();
                teste.retornaPrevisao(pegaCidade);

            });
        },

        retornaPrevisao: function(pegaCidade) {
            $.ajax({
                type: 'GET',
                url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20u%3D%27c%27%20and%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+pegaCidade+"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

                success: function (prev) {
                    if(prev.query.count == 0){
                        $('.mostra-tempo').fadeOut();
                    }else{

                            $('.mostra-tempo').css('display','inline-block');                           
                            console.log(prev);
                            // resumo
                            $('.resumo').text(prev.query.results.channel.location.city+", "+prev.query.results.channel.location.region+" - "+prev.query.results.channel.location.country)
                            $('.max-min .minimo').text(prev.query.results.channel.item.forecast[0].low+"°")
                            $('.max-min .maximo').text(prev.query.results.channel.item.forecast[0].high+"°")
                            $('.sensacao').text('Sensação: '+prev.query.results.channel.item.condition.temp+'°C')
                            $('.vento').text('Vento: '+prev.query.results.channel.wind.chill+'km/h')
                            $('.umidade').text('Umidade: '+prev.query.results.channel.atmosphere.humidity+'%')
                            // temperatura
                            var mensagemENG = prev.query.results.channel.item.condition.code;
                            teste.traduzirMensagem(prev, mensagemENG);
                            teste.dias(prev);                    
                            

                    }
                },

            });
        },

        dias: function(prev){
            var diaENG =[
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat',
                'Sun'
            ]

            var diaBR =[
                "Segunda",
                "Terça",
                "Quarta",
                "Quinta",
                "Sexta",
                "Sábado",
                "Domingo"
            ]
            var prox = $('.prox-dias').find('th');
            for (var i = 1; i <=5; i++) {
                for(var x = 0; x<diaENG.length; x++){
                    if (prev.query.results.channel.item.forecast[i].day == diaENG[x] ) {
                        $('.prox-dias').find('th').eq(parseInt(i) - parseInt(1)).text(diaBR[x]);
                    }
                }
                $('.prox-dias').find('td').eq(parseInt(i) - parseInt(1)).text(prev.query.results.channel.item.forecast[i].low+"° "+prev.query.results.channel.item.forecast[i].high+"°");
            }
        },

        traduzirMensagem: function(prev, mensagemENG) {
            var mensagem    = [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30,
                31,
                32,
                33,
                34,
                35,
                36,
                37,
                38,
                39,
                40,
                41,
                42,
                43,
                44,
                45,
                46,
                47,
                3200
            ];
            var mensagemTraduzida   = [
            'tornado',          
            'tempestade tropical',     
            'furacão',            
            'tempestade severa',             
            'trovoadas',              
            'chuva e neve',                 
            'chuva e granizo fino',          
            'neve e granizo fino',           
            'garoa gélida',              
            'garoa',            
            'chuva gélida',           
            'chuvisco',         
            'chuva',            
            'neve em flocos finos',   
            'leve precipitação de neve',   
            'ventos com neve',       
            'neve',          
            'chuva de granizo',
            'pouco granizo',  
            'pó em suspensão',
            'neblina',
            'névoa seca',    
            'enfumaçado',     
            'vendaval',          
            'ventando',       
            'frio',          
            'nublado',         
            'muitas nuvens (noite)',         
            'muitas nuvens (dia)',          
            'parcialmente nublado (noite)',  
            'parcialmente nublado (dia)',   
            'céu limpo (noite)',      
            'ensolarado',     
            'tempo bom (noite)',     
            'tempo bom (dia)',     
            'chuva e granizo',              
            'quente',       
            'tempestades isoladas',          
            'tempestades esparsas',          
            'tempestades esparsas',          
            'chuvas esparsas',            
            'nevasca',             
            'tempestades de neve esparsas',  
            'nevasca',             
            'parcialmente nublado',   
            'chuva com trovoadas',     
            'tempestade de neve',    
            'relâmpagos e chuvas isoladas',  
            'não disponível'                       
            ];

            for(i=0;i<mensagem.length;i++){
                if(mensagemENG == mensagem[i]){
                    $('.temp').text(parseInt(prev.query.results.channel.item.condition.temp)+parseInt(1)+"°C "+mensagemTraduzida[i]);
                }
            }
        },

        mostraCapitais: function() {
            $('.linha-cidades').each(function(){                    
                var pegaCidade = $(this).find('.cidade').text();
                var temp = $(this);
                $.ajax({
                type: 'GET',
                url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20u%3D%27c%27%20and%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+pegaCidade+"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
                    success: function (prev) {
                        $(temp).find('.min').text(prev.query.results.channel.item.forecast[0].low+"°");
                        $(temp).find('.max').text(prev.query.results.channel.item.forecast[0].high+"°");
                    },
                });
            });
        },
    }

    teste.inicializar();    
}); 