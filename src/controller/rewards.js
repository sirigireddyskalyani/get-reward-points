module.exports = {
  calcRewardPoints: function (expense) {
    const value =
      expense > 100
        ? (expense - 50) * 1 + (expense - 100) * 1
        : (expense - 50) * 1;
    return {
      expense: expense,
      points: value > 0 ? value : 0,
    };
  },
};
