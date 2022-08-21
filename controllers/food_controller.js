module.exports = (req, res, next) => {
  const data = res.data;

  res.json({
    message: "success",
    data,
  });
};
