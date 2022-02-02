function validateForm(form) { 
    var activity = getValue('WKNumState');
    log.info("Nr Atividade --> " + activity);

    if(activity == 4 || activity == 0 || activity == 11 || activity == 15){
        if ((form.getValue("nomeSolicitante") == null || form.getValue("nomeSolicitante") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) {
            throw "Informar o solicitante.";
        } 
        else if(form.getValue("departamentos") == null || form.getValue("departamentos") == "") {
        	throw "Selecione o departamento do solicitante.";
        }
        else if((form.getValue("chapaSolicitante") == null || form.getValue("chapaSolicitante") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informar a chapa do solicitante.";
        }
        else if((form.getValue("email") == null || form.getValue("email") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informar o e-mail do solicitante.";
        }
        else if((form.getValue("nomeColaborador") == null || form.getValue("nomeColaborador") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informar o nome do colaborador.";
        }
        else if(form.getValue("unidades") == null || form.getValue("unidades") == "") {
        	throw "Selecione a unidade do colaborador.";
        }
        else if((form.getValue("chapaColaborador") == null || form.getValue("chapaColaborador") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Necessário informar a chapa do colaborador.";
        }
        else if((form.getValue("tipoInclusao") == null || form.getValue("tipoInclusao") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Necessário informar o tipo de inclusão.";
        }
        else if((form.getValue("gratificacao") == null || form.getValue("gratificacao") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Digite o valor da gratificação.";
        }
        else if((form.getValue("dataInicial") == null || form.getValue("dataInicial") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Digite a data inicial da gratificação.";
        }
        else if((form.getValue("dataFinal") == null || form.getValue("dataFinal") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Digite a data final da gratificação.";
        }
        else if((form.getValue("inicioFerias") == null || form.getValue("inicioFerias") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informe a data de início das férias.";
        }
        else if((form.getValue("quantidadeDiasFerias") == null || form.getValue("quantidadeDiasFerias") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informe a quantidade de dias das férias.";
        }
        else if((form.getValue("motivoInclusao") == null || form.getValue("motivoInclusao") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informe o motivo da inclusão.";
        }
        else if((form.getValue("motivoInclusao") == null || form.getValue("motivoInclusao") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informe o motivo da inclusão.";
        }
        else if(form.getValue("motivoInclusao") != null || form.getValue("motivoInclusao") != "") {
        	if(form.getValue("motivoInclusao") == "experienciaFuncional"){
        		if(form.getValue("xpFuncional") == "novoCargo"){
        			if(form.getValue("cargo") == null || form.getValue("cargo") == "") 
        				throw "Informe o cargo da experiência funcional.";
            	}
        		else if(form.getValue("xpFuncional") == "substituicao"){
        			if(form.getValue("substituicao") == null || form.getValue("substituicao") == "") 
        				throw "Informe o colaborador que será substituído.";
        		}
        		else if(form.getValue("xpFuncional") == null || form.getValue("xpFuncional") == ""){
    				throw "Selecione uma das opções de experiência funcional.";
        		}
        	}
        	else if(form.getValue("motivoInclusao") == "outro"){
    			if(form.getValue("outro") == null || form.getValue("outro") == "") 
    				throw "Informe o motivo da inclusão.";
        	}
        }
    }
    else if (activity == 8) {
        if(form.getValue("destino") == null || form.getValue("destino") == ""){
        	throw "Favor informar o resultado da validação. Se aprovado, reprovado ou se será enviado para correção.";
        }
        if(form.getValue("destino") == "reprovado" || form.getValue("destino") == "correcao"){
            if(form.getValue("obs") == null || form.getValue("obs") == ""){
            	throw "Favor informar a observação do resultado da validação.";
            }
        }
    }
}
