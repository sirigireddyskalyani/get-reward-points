module.exports = {
  calcRewardPoints: function (expense) {
    return {
      expense: expense,
      points:
        expense > 100
          ? (expense - 50) * 1 + (expense - 100) * 1
          : (expense - 50) * 1,
    };
  },
};
