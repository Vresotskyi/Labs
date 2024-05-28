function average(...args) {
    return args.reduce((acc, val) => acc + val) / args.length;
}

console.log(average(12, 434, 854, 141, 964));