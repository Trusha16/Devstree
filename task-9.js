let roomArray = [
    {
        room_id: "123",
        players: [
            {
                player_id: "1",
                player_name: "abcd",
                z_value: 123,
            },
            {
                player_id: "2",
                player_name: "efgh",
                z_value: 125,
            },
            {
                player_id: "3",
                player_name: "hijk",
                z_value: 127,
            },
        ],
    },
    {
        room_id: "456",
        players: [
            {
                player_id: "1",
                player_name: "abcd",
                z_value: 123,
            },
            {
                player_id: "2",
                player_name: "efgh",
                z_value: 125,
            },
            {
                player_id: "3",
                player_name: "hijk",
                z_value: 127,
            },
        ],
    },
    {
        room_id: "789",
    },
    {
        room_id: "101",
    },
];

let playerScoreUpdate = {
    room_id: "123",
    players: {
        player_id: "1",
        player_name: "ab6546cd",
        z_value: 777,
    },
};

for(j in roomArray){
    j=roomArray.room_id;
    if (roomArray['room_id'] === playerScoreUpdate['room_id']) {
        for (i in roomArray.players) {
            if (roomArray.players['player_id'] === playerScoreUpdate.players['player_id']) {
                roomArray.players['player_name'] = playerScoreUpdate.players['player_name'];
                roomArray.players['z_value'] = playerScoreUpdate.players['z_value'];
            }
        
       const output  = {
            room_id: playerScoreUpdate['room_id'],
            players: {
                player_id: playerScoreUpdate.players['player_id'],
                player_name: playerScoreUpdate.players['player_name'],
                z_value: playerScoreUpdate.players['z_value']
            }
        }
        roomArray.push(output);
    } }
    
}
console.log(roomArray[0]);
console.log(roomArray[1]);