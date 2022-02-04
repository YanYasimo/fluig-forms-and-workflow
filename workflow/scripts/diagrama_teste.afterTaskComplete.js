function afterTaskComplete(colleagueId,nextSequenceId,userList){
	if(nextSequenceId == 13){
		hAPI.setCardValue("status_solicitacao", "finalizada_13");
	}
	if(nextSequenceId == 15){
		hAPI.setCardValue("status_solicitacao", "finalizada_15");
	}
}