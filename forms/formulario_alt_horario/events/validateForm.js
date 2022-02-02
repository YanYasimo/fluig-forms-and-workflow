function validateForm(form) { 
    var activity = getValue('WKNumState');

    if(activity == 0 || activity == 9 || activity == 39){
        if ((form.getValue("nomeSolicitante") == null || form.getValue("nomeSolicitante") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) {
            throw "Informar o solicitante.";
        }
        if(form.getValue("departamentos") == null || form.getValue("departamentos") == "") {
        	throw "Selecione o departamento do solicitante.";
        }
        if((form.getValue("chapaSolicitante") == null || form.getValue("chapaSolicitante") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informar a chapa do solicitante.";
        }
        if((form.getValue("email") == null || form.getValue("email") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Digite o e-mail do solicitante.";
        }
        if((form.getValue("nomeColaborador") == null || form.getValue("nomeColaborador") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informar o nome do colaborador.";
        }
        if(form.getValue("unidades") == null || form.getValue("unidades") == "") {
        	throw "Selecione a unidade do colaborador.";
        }
        if((form.getValue("chapaColaborador") == null || form.getValue("chapaColaborador") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Necessário informar a chapa do colaborador.";
        }
        if(	(form.getValue("chkSegAt") == false) && 
        	(form.getValue("chkTerAt") == false) &&
        	(form.getValue("chkQuaAt") == false) &&
        	(form.getValue("chkQuiAt") == false) &&
        	(form.getValue("chkSexAt") == false) &&
        	(form.getValue("chkSabAt") == false) &&
        	(form.getValue("chkDomAt") == false) 
        ){
        	throw "Selecione os dias que o colaborador trabalha atualmente.";
        }
        if(form.getValue("chkSegAt") != false){
        	if(	(form.getValue("e1SegAt") == null || form.getValue("e1SegAt") == "") &&
        		(form.getValue("s1SegAt") == null || form.getValue("s1SegAt") == "") &&
        		(form.getValue("e2SegAt") == null || form.getValue("e2SegAt") == "") &&
        		(form.getValue("s2SegAt") == null || form.getValue("s2SegAt") == "") 
        	){
            	throw "Horário atual do colaborador. Informe o horário da segunda-feira.";
        	}
        }
        if(form.getValue("chkTerAt") != false){
        	if(	(form.getValue("e1TerAt") == null || form.getValue("e1TerAt") == "") &&
            	(form.getValue("s1TerAt") == null || form.getValue("s1TerAt") == "") &&
            	(form.getValue("e2TerAt") == null || form.getValue("e2TerAt") == "") &&
            	(form.getValue("s2TerAt") == null || form.getValue("s2TerAt") == "") 
            	){
                	throw "Horário atual do colaborador. Informe o horário da terça-feira.";
            	}
        }
        if(form.getValue("chkQuaAt") != false){
        	if(	(form.getValue("e1QuaAt") == null || form.getValue("e1QuaAt") == "") &&
                (form.getValue("s1QuaAt") == null || form.getValue("s1QuaAt") == "") &&
                (form.getValue("e2QuaAt") == null || form.getValue("e2QuaAt") == "") &&
                (form.getValue("s2QuaAt") == null || form.getValue("s2QuaAt") == "") 
                ){
        			throw "Horário atual do colaborador. Informe o horário da quarta-feira.";
        	}
        }
        if(form.getValue("chkQuiAt") != false){
        	if(	(form.getValue("e1QuiAt") == null || form.getValue("e1QuiAt") == "") &&
        		(form.getValue("s1QuiAt") == null || form.getValue("s1QuiAt") == "") &&
                (form.getValue("e2QuiAt") == null || form.getValue("e2QuiAt") == "") &&
                (form.getValue("s2QuiAt") == null || form.getValue("s2QuiAt") == "") 
        	){
        		throw "Horário atual do colaborador. Informe o horário da quinta-feira.";
        	}
        }
        if(form.getValue("chkSexAt") != false){
        	if(	(form.getValue("e1SexAt") == null || form.getValue("e1SexAt") == "") &&
            	(form.getValue("s1SexAt") == null || form.getValue("s1SexAt") == "") &&
                (form.getValue("e2SexAt") == null || form.getValue("e2SexAt") == "") &&
                (form.getValue("s2SexAt") == null || form.getValue("s2SexAt") == "") 
            ){
        		throw "Horário atual do colaborador. Informe o horário da sexta-feira.";
        	}
        }
        if(form.getValue("chkSabAt") != false){
        	if(	(form.getValue("e1SabAt") == null || form.getValue("e1SabAt") == "") &&
                (form.getValue("s1SabAt") == null || form.getValue("s1SabAt") == "") &&
                (form.getValue("e2SabAt") == null || form.getValue("e2SabAt") == "") &&
                (form.getValue("s2SabAt") == null || form.getValue("s2SabAt") == "") 
        	){
        		throw "Horário atual do colaborador. Informe o horário do sábado.";
            }
        }
        if(form.getValue("chkDomAt") != false){
        	if(	(form.getValue("e1DomAt") == null || form.getValue("e1DomAt") == "") &&
                (form.getValue("s1DomAt") == null || form.getValue("s1DomAt") == "") &&
                (form.getValue("e2DomAt") == null || form.getValue("e2DomAt") == "") &&
                (form.getValue("s2DomAt") == null || form.getValue("s2DomAt") == "") 
            ){
            	throw "Horário atual do colaborador. Informe o horário do domingo.";
             }
        }

        if(	(form.getValue("chkSegNv") == false) && 
        	(form.getValue("chkTerNv") == false) &&
        	(form.getValue("chkQuaNv") == false) &&
        	(form.getValue("chkQuiNv") == false) &&
        	(form.getValue("chkSexNv") == false) &&
        	(form.getValue("chkSabNv") == false) &&
        	(form.getValue("chkDomNv") == false) 
        ){
        	throw "Selecione os dias da grade do novo horário do colaborador.";
        }
        if(form.getValue("chkSegNv") != false){
        	if(	(form.getValue("e1SegNv") == null || form.getValue("e1SegNv") == "") &&
        		(form.getValue("s1SegNv") == null || form.getValue("s1SegNv") == "") &&
        		(form.getValue("e2SegNv") == null || form.getValue("e2SegNv") == "") &&
        		(form.getValue("s2SegNv") == null || form.getValue("s2SegNv") == "") 
        	){
            	throw "Novo horário do colaborador. Informe o horário da segunda-feira.";
        	}
        }
        if(form.getValue("chkTerNv") != false){
        	if(	(form.getValue("e1TerNv") == null || form.getValue("e1TerNv") == "") &&
            	(form.getValue("s1TerNv") == null || form.getValue("s1TerNv") == "") &&
            	(form.getValue("e2TerNv") == null || form.getValue("e2TerNv") == "") &&
            	(form.getValue("s2TerNv") == null || form.getValue("s2TerNv") == "") 
            	){
                	throw "Novo horário do colaborador. Informe o horário da terça-feira.";
            	}
        }
        if(form.getValue("chkQuaNv") != false){
        	if(	(form.getValue("e1QuaNv") == null || form.getValue("e1QuaNv") == "") &&
                (form.getValue("s1QuaNv") == null || form.getValue("s1QuaNv") == "") &&
                (form.getValue("e2QuaNv") == null || form.getValue("e2QuaNv") == "") &&
                (form.getValue("s2QuaNv") == null || form.getValue("s2QuaNv") == "") 
                ){
        			throw "Novo horário do colaborador. Informe o horário da quarta-feira.";
        	}
        }
        if(form.getValue("chkQuiNv") != false){
        	if(	(form.getValue("e1QuiNv") == null || form.getValue("e1QuiNv") == "") &&
        		(form.getValue("s1QuiNv") == null || form.getValue("s1QuiNv") == "") &&
                (form.getValue("e2QuiNv") == null || form.getValue("e2QuiNv") == "") &&
                (form.getValue("s2QuiNv") == null || form.getValue("s2QuiNv") == "") 
        	){
        		throw "Novo horário do colaborador. Informe o horário da quinta-feira.";
        	}
        }
        if(form.getValue("chkSexNv") != false){
        	if(	(form.getValue("e1SexNv") == null || form.getValue("e1SexNv") == "") &&
            	(form.getValue("s1SexNv") == null || form.getValue("s1SexNv") == "") &&
                (form.getValue("e2SexNv") == null || form.getValue("e2SexNv") == "") &&
                (form.getValue("s2SexNv") == null || form.getValue("s2SexNv") == "") 
            ){
        		throw "Novo horário do colaborador. Informe o horário da sexta-feira.";
        	}
        }
        if(form.getValue("chkSabNv") != false){
        	if(	(form.getValue("e1SabNv") == null || form.getValue("e1SabNv") == "") &&
                (form.getValue("s1SabNv") == null || form.getValue("s1SabNv") == "") &&
                (form.getValue("e2SabNv") == null || form.getValue("e2SabNv") == "") &&
                (form.getValue("s2SabNv") == null || form.getValue("s2SabNv") == "") 
        	){
        		throw "Novo horário do colaborador. Informe o horário do sábado.";
            }
        }
        if(form.getValue("chkDomNv") != false){
        	if(	(form.getValue("e1DomNv") == null || form.getValue("e1DomNv") == "") &&
                (form.getValue("s1DomNv") == null || form.getValue("s1DomNv") == "") &&
                (form.getValue("e2DomNv") == null || form.getValue("e2DomNv") == "") &&
                (form.getValue("s2DomNv") == null || form.getValue("s2DomNv") == "") 
            ){
            	throw "Novo horário do colaborador. Informe o horário do domingo.";
             }
        }
        if((form.getValue("dataAlteracao") == null || form.getValue("dataAlteracao") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        	throw "Informe a data de alteração.";
        }
    }
    if (activity == 12) {
        if(form.getValue("destino") == null || form.getValue("destino") == ""){
        	throw "Favor informar o resultado da validação. Se aprovado, reprovado ou se será enviado para correção.";
        }
        if(form.getValue("destino") == "reprovado" || form.getValue("destino") == "correcao"){
            if(form.getValue("obs") == null || form.getValue("obs") == ""){
            	throw "Favor informar a observação do resultado da validação.";
            }
        }
    }

}