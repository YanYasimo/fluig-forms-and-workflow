function validateForm(form) { 
    var activity = getValue('WKNumState');
    log.info("Nr Atividade --> " + activity);


    if(activity == 4 || activity ==0 || activity == 13 || activity == 30){
        if ((form.getValue("nomeSolicitante") == null || form.getValue("nomeSolicitante") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) {
            throw "Informar o solicitante.";
        }
        else if(form.getValue("departamentos") == null || form.getValue("departamentos") == "") {
        	throw "Selecione o departamento do solicitante.";
        }
        else if((form.getValue("chapaSolicitante") == null || form.getValue("chapaSolicitante") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informar a chapa do solicitante.";
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
        else if((form.getValue("salarioAtual") == null || form.getValue("salarioAtual") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informar o salário atual.";
        }
        else if((form.getValue("novoSalario") == null || form.getValue("novoSalario") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informar o novo salário.";
        }
        else if((form.getValue("justificativa") == null || form.getValue("justificativa") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informar o novo salário.";
        }
        else if((form.getValue("dataAlteracao") == null || form.getValue("dataAlteracao") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informe a data de alteração.";
        }
    }

}