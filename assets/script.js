function rollAbilityScore() {
    const rolls = [];

    for (let i = 0; i < 4; i++) {
        rolls.push(Math.floor(Math.random() * 6) + 1);
    }

    rolls.sort((a, b) => a - b);
    rolls.shift();

    const total = rolls.reduce((sum, val) => sum + val, 0);
    return total;
}

function generateAllAbilityScores() {
    const scores = [];
    for (let i = 0; i < 6; i++) {
        scores.push(rollAbilityScore());
    }
    
    return scores;
}

console.log(generateAllAbilityScores());