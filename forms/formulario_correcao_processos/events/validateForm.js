function validateForm(form) { 
    var activity = getValue('WKNumState');

    if(activity == 4 || activity == 9){
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
        if((form.getValue("processo") == null || form.getValue("processo") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informar o nome do processo que deseja alteração.";
        }
        if(form.getValue("correcao") == null || form.getValue("correcao") == "") {
        	throw "Redija a correção necessária para o processo.";
        }
    }

}