function spawnBlock() {
    var blockChances = {
        "break": 10,
        "sideways": Math.round(150 / difficulty)
    };

    if (Math.round(Math.random() * blockChances["break"]) === 0) {
        return "break";
//    } else if (Math.round(Math.random() * blockChances["sideways"]) === 0) {
//        return "sideways";
//    }
    }
    return 0;
}
