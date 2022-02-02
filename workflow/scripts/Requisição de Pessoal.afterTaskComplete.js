function afterTaskComplete(colleagueId,nextSequenceId,userList){
	if(nextSequenceId == 17){
		hAPI.setCardValue("status_solicitacao", "Finalizada");
	}
}