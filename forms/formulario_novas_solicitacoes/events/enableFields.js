function enableFields(form) { 
    var activity = getValue('WKNumState');
    if (form.getFormMode() != 'ADD'){  
        form.setEnabled("nomeSolicitante",  false);
        form.setEnabled("departamentos",    false);
        form.setEnabled("chapaSolicitante", false);
        form.setEnabled("email", 			false);
        form.setEnabled("departamentosEnvolvidos", 			false);
        form.setEnabled("finalidade", 		false);
        form.setEnabled("resumo", 			false);
        form.setEnabled("gestor", 			false);
    }
    if (activity == 9){
        form.setEnabled("nomeSolicitante",  true);
        form.setEnabled("departamentos",    true);
        form.setEnabled("chapaSolicitante", true);
        form.setEnabled("email", 			true);
        form.setEnabled("departamentosEnvolvidos", 			true);
        form.setEnabled("finalidade", 		true);
        form.setEnabled("resumo", 			true);
        form.setEnabled("gestor", 			true);
    }
}