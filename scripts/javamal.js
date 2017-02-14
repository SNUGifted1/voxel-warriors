/*jslint esversion: 6*/

function onPlayerLogin(event){
	if (event.getName() !== "NAVER"){
		event.setCanceled();
		event.setCanceledMessage("렉걸리니까 들어와서 오류만들지좀 마요 ;;");
	}
}

function javamal(data, save, pos, yaw, pitch, rotate, type, human){
	try{
		for (var i of data){
			if (i === 's'){//앞으로 1칸
				pos[0] += rotate[0];
				pos[2] += rotate[2];
				Server.setBlock(pos.slice(), type);
			}else if (i === 'd'){//아래로 1칸
				pos[1] -= 1;
				Server.setBlock(pos.slice(), type);
			}else if (i === 'u'){//위로 1칸
				pos[1] += 1;
				Server.setBlock(pos.slice(), type);
			}else if (i === 'r'){//오른쪽 1
				yaw -= Math.PI / 2;
				pos[0] += Math.round(-Math.sin(yaw));
				pos[2] += Math.round(-Math.cos(yaw));
				Server.setBlock(pos.slice(), type);
				yaw += Math.PI / 2;
			}else if (i === 'l'){//왼쪽 1
				yaw += Math.PI / 2;
				pos[0] += Math.round(-Math.sin(yaw));
				pos[2] += Math.round(-Math.cos(yaw));
				Server.setBlock(pos.slice(), type);
				yaw == Math.PI / 2;
			}else if (i === 'R'){//오른쪽으로 회전
				yaw -= Math.PI / 2;
				rotate = [Math.round(-Math.sin(yaw)), Math.round(Math.sin(pitch)), Math.round(-Math.cos(yaw))];
			}else if (i === 'L'){//왼쪽으로 회전
				yaw += Math.PI / 2;
				rotate = [Math.round(-Math.sin(yaw)), Math.round(Math.sin(pitch)), Math.round(-Math.cos(yaw))];
			}else if (i === 'h'){//투명블럭 생성 (블럭 제거)
				type = null;
			}else if (i === 'c'){//벽돌블럭 생성
				type = "voxelBrick";
			}else if (i === 'S'){//앞으로 1칸, 모양 변경
				pos[0] += rotate[0];
				pos[2] += rotate[2];
				Server.setBlock(pos.slice(), "voxelBrick");
			}else if (i === '['){
				save.push({
					pos: pos.slice(),
					yaw: yaw
				});
			}else if (i === ']'){
				pos = save[save.length - 1].pos.slice();
				yaw = save[save.length - 1].yaw;
				rotate = [Math.round(-Math.sin(yaw)), Math.round(Math.sin(pitch)), Math.round(-Math.cos(yaw))];
				save.splice(save.length - 1, 1);
			}
		}
	}catch(e){
		human.sendMessage("[Error]", e);
	}
}

var playerPromise = [];
function onPlayerChat(event){
	if (!event.getMessage().startsWith('/')) return;
	event.setCanceled();
	var cmd = event.getMessage().split('/')[1];
	var human = event.getHuman();
	var data = cmd.split(' ');
	if (data[0].startsWith("do")){
		try{
			var save = [];
			var pos = human.getPosition().slice();
			var yaw = human.getRotation()[1];
			var pitch = human.getRotation()[2];
			var rotate = [Math.round(-Math.sin(yaw)), Math.round(Math.sin(pitch)), Math.round(-Math.cos(yaw))];
			var type = "voxelDirt";
			var maxPlay = 1;
			if (data[0].indexOf('_') !== -1) maxPlay = parseInt(data[0].split('_')[1]);
			for (var i = 0 ; i < maxPlay ; i++){
				for (var j in playerPromise[human.getHumanIdent()]) data[1] = data[1].split(j).join(playerPromise[human.getHumanIdent()][j]);
			}
			console.log(data[1]);
			javamal(data[1], save, pos, yaw, pitch, rotate, type, human);
			human.sendMessage("[JavaMAL]", "실행 완료!");
		}catch(e){
			human.sendMessage("[Error]", e);
		}
	}else if (data[0] === "promise"){
		try{
			if (playerPromise[human.getHumanIdent()] === undefined) playerPromise[human.getHumanIdent()] = [];
			playerPromise[human.getHumanIdent()][data[1]] = data[2];
			human.sendMessage("[JavaMAL]", data[1] + "을(를) " + data[2] + "(으)로 약속했어요!");
		}catch(e){
			human.sendMessage("[Error]", e);
		}
	}
}
///srssuurrssuurrsshsddddcsuuuuhscdhscdhscdhscduuuuhsddddcsuuuuhsdddcdssuuuu
