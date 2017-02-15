function onPlayerLogin(event){
    var players = Server.getAllPlayers();
    for (var i in players) if (event.getName() === players[i].getName()){
        event.setCanceled();
        event.setCanceledMessage("이름이 중복됩니다.");
    }
}
