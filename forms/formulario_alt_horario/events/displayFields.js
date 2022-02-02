function displayFields(form,customHTML){      
    var mode = form.getFormMode();
    var nAtividade = form.getValue("WKNumState");
    var nProcesso = getValue("WKNumProces");
    form.setValue('info_tarefa', nAtividade);
    form.setValue('nrSolicitacao', nProcesso);

    log.info("Atividade Atual!!! --> " + nAtividade);

    if (mode == 'ADD'){
        
    }
}