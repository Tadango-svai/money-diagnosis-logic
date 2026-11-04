module.exports = {
  run: function(data) {
    const debtRatio = data.debt / data.income;
    return {
      debtRatio: debtRatio,
      status: debtRatio > 0.2 ? 'Caution' : 'Good'
    };
  }
};