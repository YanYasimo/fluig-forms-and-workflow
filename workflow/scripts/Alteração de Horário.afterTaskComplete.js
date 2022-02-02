function afterTaskComplete(colleagueId,nextSequenceId,userList){
	if(nextSequenceId == 14){
		hAPI.setCardValue("status_solicitacao", "Finalizada");
	}
}