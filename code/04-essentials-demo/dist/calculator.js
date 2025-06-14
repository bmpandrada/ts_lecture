function calculateInvestment(data) {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;
    if (initialAmount < 0) { //type 1 para sa data inputs
        return 'Initial investment ammount cannot be at least zero.';
    }
    if (duration <= 0) { //type 1 para sa data inputs
        return 'No valid amount of years provided.';
    }
    if (expectedReturn < 0) { //type 1 para sa data inputs
        return 'Expected return must be at least zero.';
    }
    let total = initialAmount; //type 1 para sa data inputs
    let totalContributions = 0; //type 2 resulta
    let totalInterestEarned = 0; //type 2 resulta
    const annualResults = []; //type 2 resulta
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn); // type 1 para sa data inputs
        totalInterestEarned = total - totalContributions - initialAmount; //type 1 and 2
        totalContributions = totalContributions + annualContribution; //type 1 and 2
        total = total + annualContribution; //type 1 para sa data inputs
        annualResults.push({
            year: `Year ${i + 1}`, //type 2 resulta
            totalAmount: total, //type 2 resulta
            totalInterestEarned, //type 2 resulta
            totalContributions //type 2 resulta
        });
    }
    return annualResults; //type 2 resulta
}
function printResults(results) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log('----------------------');
    }
}
const investmentData = {
    initialAmount: 1200,
    annualContribution: 100,
    expectedReturn: 0.05, //5% expected return
    duration: 10 //10 years
};
const results = calculateInvestment(investmentData);
printResults(results);
export {};
//# sourceMappingURL=calculator.js.map