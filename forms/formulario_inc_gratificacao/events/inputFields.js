function inputFields(form) {
    if (form.getValue("dataInicial").match("^[0-3]?[0-9]-[0-3]?[0-9]-(?:[0-9]{2})?[0-9]{2}$")) {
        var split = form.getValue("dataInicial").split('-');
        form.setValue("dataInicial", split[2] + '/' + split[1] + '/' + split[0]);
    }
    if (form.getValue("dataFinal").match("^[0-3]?[0-9]-[0-3]?[0-9]-(?:[0-9]{2})?[0-9]{2}$")) {
        var split = form.getValue("dataFinal").split('-');
        form.setValue("dataFinal", split[2] + '/' + split[1] + '/' + split[0]);
    }
    if (form.getValue("inicioFerias").match("^[0-3]?[0-9]-[0-3]?[0-9]-(?:[0-9]{2})?[0-9]{2}$")) {
        var split = form.getValue("inicioFerias").split('-');
        form.setValue("inicioFerias", split[2] + '/' + split[1] + '/' + split[0]);
    }
}
