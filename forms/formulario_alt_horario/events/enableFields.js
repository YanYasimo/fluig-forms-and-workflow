function enableFields(form) { 
    var activity = getValue('WKNumState');
    form.setEnabled("destino", false);
    form.setEnabled("obs", false);
    
    if (form.getFormMode() != 'ADD'){  
        form.setEnabled("nomeSolicitante",  false);
        form.setEnabled("departamentos",    false);
        form.setEnabled("chapaSolicitante", false);
        form.setEnabled("email", 			false);
        form.setEnabled("nomeColaborador",  false);
        form.setEnabled("unidades",         false);
        form.setEnabled("chapaColaborador", false);
        form.setEnabled("horaAtual", 		false);
        form.setEnabled("horaNova", 		false);
        form.setEnabled("obs",              false);
        form.setEnabled("dataAlteracao",    false);
        form.setEnabled("dataFinal",        false);
        form.setEnabled("justificativa",    false);
    }
    if (activity == 39){
        form.setEnabled("nomeSolicitante",  true);
        form.setEnabled("departamentos",    true);
        form.setEnabled("chapaSolicitante", true);
        form.setEnabled("email", 			true);
        form.setEnabled("nomeColaborador",  true);
        form.setEnabled("unidades",         true);
        form.setEnabled("chapaColaborador", true);
        form.setEnabled("horaAtual", 		true);
        form.setEnabled("horaNova", 		true);
        form.setEnabled("obs",              true);
        form.setEnabled("dataAlteracao",    true);
        form.setEnabled("dataFinal",        true);
        form.setEnabled("justificativa",    true);
    }
    if (activity == 12){
        form.setEnabled("destino", 			true);
        form.setEnabled("obs", 				true);
    }
}