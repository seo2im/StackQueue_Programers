function solution(bridge_length, weight, truck_weights) {
    let bridge = [];
    let total_weight = 0;
    let time = 0;
    
    truck_weights.forEach(truck => {
        while (true) {
            if (bridge.length === 0) {
                bridge.push(truck);
                total_weight += truck;
                time += 1;
                break;
            } else if (bridge.length === bridge_length) {
                total_weight -= bridge.shift();
            } else {
                if (total_weight + truck > weight) {
                    bridge.push(0);
                    time += 1;
                } else {
                    bridge.push(truck);
                    total_weight += truck;
                    time += 1;
                    break;
                }
            }
        }
    });
    return time + bridge_length;
}