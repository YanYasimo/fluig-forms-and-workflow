function displayFields(form,customHTML){      
    var mode = form.getFormMode();
    var nAtividade = getValue("WKNumState");
    form.setValue('info_tarefa', nAtividade);

    log.info("Atividade Atual!!! --> " + nAtividade);
    
    if (mode == 'ADD'){
        //filter = new java.util.HashMap();
        //filter.put("colleaguePK.colleagueId", fluigAPI.getUserService().getCurrent().getCode());
        //usuario = getDatasetValues('colleague',filter);

        //form.setValue('nomeSolicitante',	fluigAPI.getUserService().getCurrent().getFullName());
        //form.setValue('chapaSolicitante',	fluigAPI.getUserService().getCurrent().getCode());
        //form.setValue('email',				fluigAPI.getUserService().getCurrent().getEmail());	
    }
}