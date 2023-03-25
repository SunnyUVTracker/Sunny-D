const User = require('../userModel');

const userController = {};

userController.updateUser = async (req, res, next) => {
  console.log(req.body)
  console.log("--here--")
  try {
    const { username, date, points } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      const newUser = await User.create({ username, days: [{ date, points }] });
      res.locals.totalPoints = points;
      return next();
    } else {
      const index = user.days.length - 1;
      const currentDate = user.days[index];
      const newPoints = currentDate.points + points;
      if (currentDate.date === date) {
        const update = await User.findOneAndUpdate(
          { username },
          { $set: { [`days.${index}.points`]: newPoints } },
          { new: true }
        );
        res.locals.totalPoints = update.days[index].points;
        return next();
      } else {
        const update = await User.findOneAndUpdate(
          { username },
          { $push: { days: { date, points } } },
          { new: true }
        );
        res.locals.totalPoints = points;
        return next();
      }
    }
  } catch (err) {
    return next({
      log: 'Error in userController.updateUser: ' + err,
      status: 418,
      message: { err: 'An error occurred in userController.updateUser' },
    });
  }
};
module.exports = userController;
