function enableFields(form) { 
    var activity = getValue('WKNumState');
    form.setEnabled("apto", false);
    
    if (form.getFormMode() != 'ADD'){  
        form.setEnabled("nomeSolicitante",  false);
        form.setEnabled("departamentos",    false);
        form.setEnabled("chapaSolicitante", false);
        form.setEnabled("email", 			false);
        form.setEnabled("nomeColaborador",  false);
        form.setEnabled("unidades",         false);
        form.setEnabled("chapaColaborador", false);
        form.setEnabled("funcaoAtual",      false);
        form.setEnabled("novaFuncao",       false);
        form.setEnabled("funcNova",       	false);
        form.setEnabled("dataAlteracao",    false);
        form.setEnabled("justificativa",    false);
    }
    if (activity == 13){
        form.setEnabled("nomeSolicitante",  true);
        form.setEnabled("departamentos",    true);
        form.setEnabled("chapaSolicitante", true);
        form.setEnabled("email", 			true);
        form.setEnabled("nomeColaborador",  true);
        form.setEnabled("unidades",         true);
        form.setEnabled("chapaColaborador", true);
        form.setEnabled("funcaoAtual",      true);
        form.setEnabled("novaFuncao",       true);
        form.setEnabled("funcNova",       	true);
        form.setEnabled("dataAlteracao",    true);
        form.setEnabled("justificativa",    true);
    }
    if (activity == 52){
        form.setEnabled("funcaoAtual",      true);
        form.setEnabled("novaFuncao",       true);
    }
    if (activity == 70){
        form.setEnabled("apto",    			true);
    }
}