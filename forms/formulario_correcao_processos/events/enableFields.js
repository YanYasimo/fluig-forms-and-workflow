function enableFields(form) { 
    var activity = getValue('WKNumState');
    
    if (form.getFormMode() != 'ADD'){  
        form.setEnabled("nomeSolicitante",  false);
        form.setEnabled("departamentos",    false);
        form.setEnabled("chapaSolicitante", false);
        form.setEnabled("email", 			false);
        form.setEnabled("processo", 		false);
        form.setEnabled("correcao", 		false);
        form.setEnabled("fluxo", 			false);
        form.setEnabled("prioridade", 		false);
        
    }
    if (activity == 9){
        form.setEnabled("nomeSolicitante",  true);
        form.setEnabled("departamentos",    true);
        form.setEnabled("chapaSolicitante", true);
        form.setEnabled("email", 			true);
        form.setEnabled("processo", 		true);
        form.setEnabled("correcao", 		true);
        form.setEnabled("fluxo", 			true);
        form.setEnabled("prioridade", 		true);
    }
}