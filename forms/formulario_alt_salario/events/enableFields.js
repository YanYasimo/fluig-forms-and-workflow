function enableFields(form) { 
    var activity = getValue('WKNumState');
    if (form.getFormMode() != 'ADD'){  
        form.setEnabled("nomeSolicitante",  false);
        form.setEnabled("departamentos",    false);
        form.setEnabled("chapaSolicitante", false);
        form.setEnabled("email", 			false);
        form.setEnabled("nomeColaborador",  false);
        form.setEnabled("unidades",         false);
        form.setEnabled("chapaColaborador", false);
        form.setEnabled("salarioAtual",     false);
        form.setEnabled("novoSalario",      false);
        form.setEnabled("dataAlteracao",    false);
        form.setEnabled("justificativa",    false);
    }
    if (activity == 30){
        form.setEnabled("nomeSolicitante",  true);
        form.setEnabled("departamentos",    true);
        form.setEnabled("chapaSolicitante", true);
        form.setEnabled("email", 			true);
        form.setEnabled("nomeColaborador",  true);
        form.setEnabled("unidades",         true);
        form.setEnabled("chapaColaborador", true);
        form.setEnabled("salarioAtual",     true);
        form.setEnabled("novoSalario",      true);
        form.setEnabled("dataAlteracao",    true);
        form.setEnabled("justificativa",    true);
    }
}