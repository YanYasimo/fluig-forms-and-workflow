function validateForm(form) { 
    var activity = getValue('WKNumState');

    if(activity == 0 || activity == 9 || activity == 39){
        if ((form.getValue("nomeSolicitante") == null || form.getValue("nomeSolicitante") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) {
            throw "Informar o solicitante.";
        }
        if(form.getValue("departamentos") == null || form.getValue("departamentos") == "") {
        	throw "Selecione o departamento do solicitante.";
        }
        if((form.getValue("chapaSolicitante") == null || form.getValue("chapaSolicitante") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informar a chapa do solicitante.";
        }
        if((form.getValue("email") == null || form.getValue("email") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Digite o e-mail do solicitante.";
        }
        if((form.getValue("nomeColaborador") == null || form.getValue("nomeColaborador") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informar o nome do colaborador.";
        }
        if(form.getValue("unidades") == null || form.getValue("unidades") == "") {
        	throw "Selecione a unidade do colaborador.";
        }
        if((form.getValue("chapaColaborador") == null || form.getValue("chapaColaborador") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Necessário informar a chapa do colaborador.";
        }
        if((form.getValue("horaAtual") == null || form.getValue("horaAtual") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Necessário informar o horário atual do colaborador.";
        }
        if((form.getValue("horaNova") == null || form.getValue("horaNova") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Necessário informar o novo horário do colaborador.";
        }
        if((form.getValue("dataAlteracao") == null || form.getValue("dataAlteracao") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informe a data de alteração.";
        }
    }
    if (activity == 12) {
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