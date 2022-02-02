function validateForm(form) { 
    var activity = getValue('WKNumState');

    if(activity == 4 || activity ==0 || activity == 11 ){
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
        if(form.getValue("unidades") == null || form.getValue("unidades") == "") {
        	throw "Selecione a unidade do colaborador.";
        }
        if(form.getValue("checkbox1") == false &&
        		form.getValue("checkbox2") == false &&
        		form.getValue("checkbox3") == false &&
        		form.getValue("checkbox4") == false &&
        		form.getValue("checkbox5") == false &&
        		form.getValue("checkbox6") == false &&
        		form.getValue("checkbox7") == false &&
        		form.getValue("checkbox8") == false &&
        		form.getValue("checkbox9") == false &&
        		form.getValue("checkbox10") == false &&
        		form.getValue("checkbox11") == false ) {
        	throw "Selecione ao menos uma categoria.";
        }
        if(form.getValue("checkbox11") == "on" ) {
        	if(form.getValue("outrosCateg") == null || form.getValue("outrosCateg") == "") {
            	throw "Informe a/ou outras categorias.";
        	}
        }
        if(form.getValue("cargoSolicitado") == null || form.getValue("cargoSolicitado") == "") {
        	throw "Informe o cargo solicitado.";
        }
        if(form.getValue("departamentosReq") == null || form.getValue("departamentosReq") == "") {
        	throw "Informe o setor de destino da requisição.";
        }
        if(form.getValue("tipoContrat") == null || form.getValue("tipoContrat") == "") {
        	throw "Selecione o tipo da contratação.";
        }
        if(form.getValue("tipoContrat") != null || form.getValue("tipoContrat") != ""){
        	if(form.getValue("tipoContrat") == "estagio" || form.getValue("tipoContrat") == "aprendiz"){
                if(form.getValue("e1") == null || form.getValue("e1") == "") {
                	throw "Informe a entrada 1 do horário de trabalho.";
                }
                if(form.getValue("s1") == null || form.getValue("s1") == "") {
                	throw "Informe a saída 1 do horário de trabalho.";
                }
        	}
        	else{
                if(form.getValue("e1") == null || form.getValue("e1") == "") {
                	throw "Informe a entrada 1 do horário de trabalho.";
                }
                if(form.getValue("s1") == null || form.getValue("s1") == "") {
                	throw "Informe a saída 1 do horário de trabalho.";
                }
                if(form.getValue("e2") == null || form.getValue("e2") == "") {
                	throw "Informe a entrada 2 do horário de trabalho.";
                }
                if(form.getValue("s2") == null || form.getValue("s2") == "") {
                	throw "Informe a saída 2 do horário de trabalho.";
                }
        	}
        }
        if(form.getValue("motivoRequisicao") == null || form.getValue("motivoRequisicao") == "") {
        	throw "Selecione o motivo da requisição.";
        }
        if(form.getValue("motivoRequisicao") != null || form.getValue("motivoRequisicao") != "") {
        	if(form.getValue("motivoRequisicao") == "aumentoQuadro"){
        		if(form.getValue("justificativaAumentoQuadro") == null || form.getValue("justificativaAumentoQuadro") == ""){
        			throw "Informe a justificativa do aumento de quadro.";
        		}
        	}
        	if(form.getValue("motivoRequisicao") == "substituicao"){
        		if(form.getValue("justificativaSubstituicao") == null || form.getValue("justificativaSubstituicao") == ""){
        			throw "Informe a justificativa da substituição.";
        		}
        		if(form.getValue("nomeSubstituido") == null || form.getValue("nomeSubstituido") == ""){
        			throw "Informe o nome do colaborador que será substituído.";
        		}
        		if(form.getValue("saidaSubstituido") == null || form.getValue("saidaSubstituido") == ""){
        			throw "Informe a data de saída do colaborador substituído.";
        		}
        	}
        }
        if(form.getValue("idade") == null || form.getValue("idade") == "") {
        	throw "Selecione a idade de requisito.";
        }
        if(form.getValue("idade") != null || form.getValue("idade") != "") {
        	if(form.getValue("idade") == "outrosIdade"){
        		if(form.getValue("outrosIdade") == null || form.getValue("outrosIdade") == "") {
        			throw "Informe as outras idades de requisito.";	
        		}
        	}
        }
        if(form.getValue("sexo") == null || form.getValue("sexo") == "") {
        	throw "Selecione o sexo de requisito.";
        }
        if(form.getValue("escolaridade") == null || form.getValue("escolaridade") == "") {
        	throw "Selecione a escolaridade de requisito.";
        }
        if(form.getValue("escolaridade") != null || form.getValue("escolaridade") != "") {
        	if(form.getValue("escolaridade") == "superiorIncompleto"){
        		if(form.getValue("periodo") == null || form.getValue("periodo") == ""){
            		throw "Informe o período.";
        		}
        	}
        }
        if(form.getValue("cursos") == null || form.getValue("cursos") == "") {
        	throw "Informe os cursos desejados.";
        }
        if(form.getValue("estadoCivil") == null || form.getValue("estadoCivil") == "") {
        	throw "Selecione o estado civil desejado.";
        }
        if(form.getValue("habilitacao") == null || form.getValue("habilitacao") == "") {
        	throw "Selecione a habilitação desejada.";
        }
        if(form.getValue("habilitacao") != null || form.getValue("habilitacao") != "") {
            if(form.getValue("habilitacao") == "outrosHab") {
            	if(form.getValue("outrosHab") == null || form.getValue("outrosHab") == "") {
                	throw "Informe qual outra habilitação será requisitada.";
            	}
            }
        }
        if(form.getValue("veiculoProprio") == null || form.getValue("veiculoProprio") == "") {
        	throw "Selecione se será requisito veículo próprio.";
        }
        if(form.getValue("comportamental") == null || form.getValue("comportamental") == "") {
        	throw "Informe as competências comportamentais desejáveis.";
        }
        if(form.getValue("tecnica") == null || form.getValue("tecnica") == "") {
        	throw "Informe as competências técnicas desejáveis.";
        }
        if(form.getValue("remuneracao") == null || form.getValue("remuneracao") == "") {
        	throw "Informe a remuneração fixa.";
        }
        if(form.getValue("variavel") == null || form.getValue("variavel") == "") {
        	throw "Informe se terá renda variável.";
        }
        if(form.getValue("variavel") != null || form.getValue("variavel") != "") {
            if(form.getValue("variavel") == "true") {
            	if(form.getValue("tipoVariavel") == null || form.getValue("tipoVariavel") == "") {
                	throw "Informe a variável que o colaborador terá.";
            	}
            	if(form.getValue("condicoesVariavel") == null || form.getValue("condicoesVariavel") == "") {
                	throw "Informe o valor e as condições do variável que o colaborador terá.";
            	}
            }
        }
        if(form.getValue("recrutamento") == null || form.getValue("recrutamento") == "") {
        	throw "Selecione o método de recrutamento.";
        }
        if(form.getValue("checkbox12") == false &&
        		form.getValue("checkbox13") == false &&
        		form.getValue("checkbox14") == false ) {
        	throw "Selecione ao menos um benefício.";
        }
        if(form.getValue("dataAdmissao") == null || form.getValue("dataAdmissao") == "") {
        	throw "Selecione a data prevista para admissão.";
        }
        if(form.getValue("gerente") == null || form.getValue("gerente") == "") {
        	throw "Informe o gerente do setor ou gerente de unidade.";
        }
    }
    if (activity == 5) {
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