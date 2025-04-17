function rollAbilityScore() {
    const rolls = [];

    for (let i = 0; i < 4; i++) {
        rolls.push(Math.floor(Math.random() * 6) + 1);
    }

    const originalRolls = [...rolls];

    rolls.sort((a, b) => a - b);
    const dropped = rolls.shift();

    const total = rolls.reduce((sum, val) => sum + val, 0);

    console.log(`Rolled: ${originalRolls.join(', ')} -> Dropped: ${dropped} -> Total: ${total}`);

    return {
        originalRolls,
        dropped,
        total
    };
}

function generateAllAbilityScores() {
    
    //old code
    // const scores = [];
    // for (let i = 0; i < 6; i++) {
    //     scores.push(rollAbilityScore());
    // }

    // console.log(`\nFinal ability scores: ${scores.join(', ')}`);
    // return scores;

    const container = document.getElementById('scores');
    container.innerHTML = '';

    const finalScores = [];

    for (let i = 0; i < 6; i++) {
        const { originalRolls, dropped, total } = rollAbilityScore();
        finalScores.push(total);

        const scoreDiv = document.createElement('div');
        scoreDiv.className = 'score';
        scoreDiv.innerHTML = `
        <strong>Roll ${i + 1}:</strong>
        Rolled: [${originalRolls.join(', ')}] -> Dropped: ${dropped} -> <strong>Total: ${total}</strong>
        `;
        container.appendChild(scoreDiv);
    }

    const resultDiv = document.createElement('div');
    resultDiv.className = 'scores';
    resultDiv.innerHTML = `
        <strong>Final Ability Scores:</strong> [${finalScores.join(', ')}]
    `;
    container.appendChild(resultDiv);

    console.log(`\nFinal ability scores: ${finalScores.join(', ')}`);
}

generateAllAbilityScores();