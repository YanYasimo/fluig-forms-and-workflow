function afterTaskComplete(colleagueId,nextSequenceId,userList){
	if(nextSequenceId == 37){
		hAPI.setCardValue("status_solicitacao", "Finalizada");
	}
	if(nextSequenceId == 79){
		hAPI.setCardValue("status_solicitacao", "Colaborador Inapto");
	}
}