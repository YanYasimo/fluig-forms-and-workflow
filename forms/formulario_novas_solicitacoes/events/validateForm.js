function validateForm(form) { 
    var activity = getValue('WKNumState');

    if(activity == 4 || activity == 9){
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
        else if(form.getValue("departamentosEnvolvidos") == null || form.getValue("departamentosEnvolvidos") == ""){
        	throw "Informe os departamentos que estarão envolvidos nessa solicitação.";
        }        
        else if(form.getValue("finalidade") == null || form.getValue("finalidade") == ""){
        	throw "Nos diga para qual será a finalidade da solicitação."
        }        
        else if(form.getValue("resumo").length() < 500){
        	throw "O campo resumo deve ter ao menos 500 caracteres, você só digitou "+ form.getValue("resumo").length() + " caracteres.";
        }        
        else if(form.getValue("gestor") == null || form.getValue("gestor") == ""){
        	throw "Informe quem será o gestor da solicitação."
        }
    }
}
