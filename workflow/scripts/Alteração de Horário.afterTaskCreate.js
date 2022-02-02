function afterTaskCreate(colleagueId){
	var atv_inicio 		= 9;
	var atv_correcao 	= 39;
	var atv_aprovacao 	= 13;
	var atv_reprovado 	= 15;
	
    var data = new Date();
    var dia  = data.getDate();
    var mes  = data.getMonth() + 1;
    var ano  = data.getFullYear();

    dia  = (dia<=9 ? "0"+dia : dia);
    mes  = (mes<=9 ? "0"+mes : mes);
	
    var dataAtual 		= dia+"/"+mes+"/"+ano;
	
	var atividadeAtual = getValue("WKCurrentState");
	
	if(atividadeAtual == atv_aprovacao){
		var assunto 		= "Solicitação de Alteração de Horário";
		var status 			= "Aprovada";
		var destinatario 	= new java.util.ArrayList(); 
		destinatario.add(colleagueId);
		destinatario.add(hAPI.getCardValue('email'));
		log.info("----Destinatarios " + destinatario)
		
		enviaEmail(assunto, status, dataAtual, destinatario, atv_aprovacao);
	}
	else if(atividadeAtual == atv_correcao){
		var assunto 		= "Solicitação de Alteração de Horário";
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
		
		var subject = "[WF" + processo + "] - Solicitação de Alteração de Horário";
        var split = hAPI.getCardValue('dataAlteracao').split('-');
        var dataAlteracao = split[2] + '/' + split[1] + '/' + split[0];
        log.info("------Horario: " + dataAlteracao);

		parametros.put("subject", subject);

		parametros.put("LINK_SOLICITACAO", 		hAPI.getUserTaskLink(atividade));
		parametros.put("NUMERO_SOLICITACAO", 	processo);
		parametros.put("STATUS_SOLICITACAO", 	status);	
		parametros.put("DATA_STATUS", 			dataAtual);	
		parametros.put("NOME_SOLICITANTE", 		hAPI.getCardValue('nomeSolicitante'));
		parametros.put("DEP_SOLICITANTE", 		hAPI.getCardValue('departamentos'));
		parametros.put("CHAPA_SOLICITANTE", 	hAPI.getCardValue('chapaSolicitante'));
		
		parametros.put("NOME_COLABORADOR", 		hAPI.getCardValue('nomeColaborador'));
		parametros.put("UNIDADE", 				hAPI.getCardValue('unidades'));
		parametros.put("CHAPA_COLABORADOR", 	hAPI.getCardValue('chapaColaborador'));
		
		parametros.put("HORA_ATUAL", 			hAPI.getCardValue('horarioAtual'));
		parametros.put("NOVO_HORA", 			hAPI.getCardValue('novoHorario'));
		parametros.put("DATA_ALTERACAO", 		dataAlteracao);
		
		notifier.notify("admin", "tplEmailAltHora", parametros, destinatario, "text/html");
		
	}catch(error){
		log.info("Erro no envio de email");
		log.info(error);
	}
}