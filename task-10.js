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
    }
];
let playerScoreUpdate = {
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
            z_value: 456,
        },
        {
            player_id: "3",
            player_name: "hijk",
            z_value: 127,
        },
        {
            player_id: "4",
            player_name: "lmnop",
            z_value: 567,
        }
    ],
}

let output = roomArray.find(a => a.room_id === playerScoreUpdate.room_id);
let array = playerScoreUpdate.players;

for (let i = 0; i < array.length; i++) {
    if (output >= 0) {
        if (players[i].player_id == array.players[i].player_id) {
            roomArray[output].players[i].player_name == array.players[i].player_name;
            roomArray[output].players[i].z_value == array.players[i].z_value;

        }
        else {
            roomArray[output].players.push({
                player_id: playerScoreUpdate.players[i].player_id,
                player_name: playerScoreUpdate.players[i].player_name,
                z_value: playerScoreUpdate.players[i].z_value
            });

        }
    }
}

console.log(output);

