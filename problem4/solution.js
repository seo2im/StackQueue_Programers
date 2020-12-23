function solution(priorities, location) {
    let prints = priorities.map((prior, index) => ({prior, index}));
    let turn = 0;

    while (true) {
        if (prints.find(print => print.prior > prints[0].prior) !== undefined)
            prints.push(prints.shift());
        else {
            if (prints.shift().index === location)
                return turn + 1;
            turn += 1;
        }
    }
}