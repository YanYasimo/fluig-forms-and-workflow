function validateForm(form) { 
    var activity = getValue('WKNumState');

    if(activity == 4 || activity ==0 || activity == 2 || activity == 13){
    	log.info("DEBUG RADIO " + form.getValue("funcNova"));
        if ((form.getValue("nomeSolicitante") == null || form.getValue("nomeSolicitante") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) {
        	throw "Informar o solicitante.";
        }
        else if((form.getValue("chapaSolicitante") == null || form.getValue("chapaSolicitante") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informar a chapa do solicitante.";
        }
        else if((form.getValue("nomeColaborador") == null || form.getValue("nomeColaborador") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informar o nome do colaborador.";
        }
        else if((form.getValue("chapaColaborador") == null || form.getValue("chapaColaborador") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Necessário informar a chapa do colaborador.";
        }
        else if((form.getValue("funcaoAtual") == null || form.getValue("funcaoAtual") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informar a função atual.";
        }
        else if((form.getValue("novaFuncao") == null || form.getValue("novaFuncao") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informar a nova função.";
        }
        else if((form.getValue("salarioAtual") == null || form.getValue("salarioAtual") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informar o salário atual.";
        }
        else if((form.getValue("novoSalario") == null || form.getValue("novoSalario") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informe o novo salário.";
        }
        else if((form.getValue("dataAlteracao") == null || form.getValue("dataAlteracao") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informe a data de alteração.";
        }
        else if(form.getValue("unidades") == null || form.getValue("unidades") == "") {
        	throw "Selecione a unidade do colaborador.";
        }
        else if(form.getValue("departamentos") == null || form.getValue("departamentos") == "") {
        	throw "Selecione o departamento do solicitante.";
        }
        else if(form.getValue("email") == null || form.getValue("email") == "") {
        	throw "Informe o e-mail do solicitante.";
        }
        else if(form.getValue("funcNova") == null || form.getValue("funcNova") == ""){
        	throw "Informe se a função é nova ou não.";
        }
        else if(form.getValue("justificativa") == null || form.getValue("justificativa") == ""){
        	throw "Informe uma justificativa.";
        }
    }
    else if (activity == 72) {
        if(form.getValue("apto") == null || form.getValue("apto") == ""){
        	throw "Informe se o colaborador está apto ou não conforme resultado do exame.";
        }
    }
    else if (activity == 77) {
        if(form.getValue("nr_chamado") == null || form.getValue("nr_chamado") == ""){
        	throw "Informe o número do chamado de alteração que foi aberto no GLPI.";
        }
    }
    else if (activity == 5) {
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