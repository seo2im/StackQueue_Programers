const solution = (progresses, speeds)  => {
    let answer = [];
    
    const queue = progresses.map((per, i) => {
        let j = 1;
        while (per + j * speeds[i] < 100) {
            j += 1;
        }
        return j;
    })
    
    let min = queue[0];
    let i = 0;
    
    while (queue.length !== 0) {
        if (queue[0] <= min) {
            i++;
            queue.shift();
        }
        else {
            min = queue[0];
            answer.push(i);
            i = 0;
        }
    }
    answer.push(i);
    
    
    return answer
}