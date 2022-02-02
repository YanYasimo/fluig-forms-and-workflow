function afterTaskCreate(colleagueId){
	var atv_inicio 		= 11;
	var atv_correcao 	= 15;
	var atv_aprovacao 	= 6;
	var atv_reprovado 	= 5;
	
    var data = new Date();
    var dia  = data.getDate();
    var mes  = data.getMonth() + 1;
    var ano  = data.getFullYear();

    dia  = (dia<=9 ? "0"+dia : dia);
    mes  = (mes<=9 ? "0"+mes : mes);
	
    var dataAtual 		= dia+"/"+mes+"/"+ano;
	
	var atividadeAtual = getValue("WKCurrentState");
	
	if(atividadeAtual == atv_aprovacao){
		var assunto 		= "Solicitação de Inclusão de Gratificação";
		var status 			= "Aprovada";
		var destinatario 	= new java.util.ArrayList(); 
		destinatario.add(colleagueId);
		destinatario.add(hAPI.getCardValue('email'));
		log.info("----Destinatarios " + destinatario)
		
		enviaEmail(assunto, status, dataAtual, destinatario, atv_aprovacao);
	}
	else if(atividadeAtual == atv_correcao){
		var assunto 		= "Solicitação de Inclusão de Gratificação";
		var status 			= "Enviada para Correção";
		var destinatario 	= new java.util.ArrayList(); 
		destinatario.add(colleagueId);
		destinatario.add(hAPI.getCardValue('email'));
		log.info("----Destinatarios " + destinatario)
		
		enviaEmail(assunto, status, dataAtual, destinatario, atv_correcao);
	}
}

function enviaEmail(assunto, status, dataAtual, destinatario, atividade){
	var processo = getValue("WKNumProces").toString();
	
	try{
		var parametros = new java.util.HashMap();
		
		var subject = "[WF" + processo + "] - Solicitação de Inclusão de Gratificação";
        var split = hAPI.getCardValue('dataInicial').split('-');
        var dataInicial = split[2] + '/' + split[1] + '/' + split[0];
        var split = hAPI.getCardValue('dataFinal').split('-');
        var dataFinal = split[2] + '/' + split[1] + '/' + split[0];
        var motivo;
        var obs;
        var tipo_gratificacao = hAPI.getCardValue('tipoInclusao');
        var titled = tipo_gratificacao[0].toUpperCase() + tipo_gratificacao.substr(1);
        
        if(hAPI.getCardValue('motivoInclusao') == 'ferias'){
        	motivo = 'Férias';
        }
        else if(hAPI.getCardValue('motivoInclusao') == 'experienciaFuncional'){
        	if(hAPI.getCardValue('xpFuncional') == 'novoCargo'){
        		motivo = 'Novo Cargo';
        		obs = hAPI.getCardValue('cargo');
        	}
        	else if(hAPI.getCardValue('xpFuncional') == 'substituicao'){
        		motivo = 'Substituição';
        		obs = hAPI.getCardValue('substituicao');
        	}
        }
        else if(hAPI.getCardValue('motivoInclusao') == 'outro'){
        	motivo = 'Outro';
        	obs = hAPI.getCardValue('outro');
        }

		parametros.put("LINK_SOLICITACAO", 		hAPI.getUserTaskLink(atividade));
		parametros.put("NUMERO_SOLICITACAO", 	processo);
		parametros.put("NOME_SOLICITANTE", 		hAPI.getCardValue('nomeSolicitante'));
		parametros.put("DEP_SOLICITANTE", 		hAPI.getCardValue('departamentos'));
		parametros.put("CHAPA_SOLICITANTE", 	hAPI.getCardValue('chapaSolicitante'));
		
		parametros.put("NOME_COLABORADOR", 		hAPI.getCardValue('nomeColaborador'));
		parametros.put("UNIDADE", 				hAPI.getCardValue('unidades'));
		parametros.put("CHAPA_COLABORADOR", 	hAPI.getCardValue('chapaColaborador'));
		
		parametros.put("TIPO_GRAT", 			hAPI.getCardValue('tipoInclusao'));
		parametros.put("GRATIFICACAO", 			hAPI.getCardValue('gratificacao'));
		parametros.put("DATA_INICIAL", 			dataInicial);
		parametros.put("DATA_FINAL", 			dataFinal);
		
		parametros.put("MOTIVO", 				motivo);
		parametros.put("OBS", 					obs);

		parametros.put("JUSTIFICATIVA", 		hAPI.getCardValue('justificativa'));
		
		
		notifier.notify("admin", "tplEmailIncGrat", parametros, destinatario, "text/html");
		
	}catch(error){
		log.info("Erro no envio de email");
		log.info(error);
	}
}