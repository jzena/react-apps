module.exports = (req, res, next) => {
  setTimeout(() => {
    next();
    return null;
  }, 2000);
}