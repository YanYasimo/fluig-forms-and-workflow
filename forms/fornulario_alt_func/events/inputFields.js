function inputFields(form) {
    if (form.getValue("dataAlteracao").match("^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$")) {
        var split = form.getValue("dataAlteracao").split('/');
        form.setValue("dataAlteracao", split[2] + '/' + split[1] + '/' + split[0]);
    }
}