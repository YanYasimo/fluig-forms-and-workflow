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
        form.setEnabled("tipoInclusao", 	false);
        form.setEnabled("gratificacao", 	false);
        form.setEnabled("dataInicial", 		false);
        form.setEnabled("dataFinal", 		false);
        form.setEnabled("inicioFerias", 	false);
        form.setEnabled("quantidadeDiasFerias", false);
        form.setEnabled("motivoInclusao", 	false);
        form.setEnabled("xpFuncional", 		false);
        form.setEnabled("cargo", 			false);
        form.setEnabled("substituicao", 	false);
        form.setEnabled("outro", 			false);
        form.setEnabled("justificativa", 	false);
    }
    if (activity == 15){
        form.setEnabled("nomeSolicitante",  true);
        form.setEnabled("departamentos",    true);
        form.setEnabled("chapaSolicitante", true);
        form.setEnabled("email", 			true);
        form.setEnabled("nomeColaborador",  true);
        form.setEnabled("unidades",         true);
        form.setEnabled("chapaColaborador", true);
        form.setEnabled("tipoInclusao", 	true);
        form.setEnabled("gratificacao", 	true);
        form.setEnabled("dataInicial", 		true);
        form.setEnabled("dataFinal", 		true);
        form.setEnabled("inicioFerias", 	true);
        form.setEnabled("quantidadeDiasFerias", true);
        form.setEnabled("motivoInclusao", 	true);
        form.setEnabled("xpFuncional", 		true);
        form.setEnabled("cargo", 			true);
        form.setEnabled("substituicao", 	true);
        form.setEnabled("outro", 			true);
        form.setEnabled("justificativa", 	true);
    }
}