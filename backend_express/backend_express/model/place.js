
module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('Show', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    description: DataTypes.INTEGER,
    isOpen: DataTypes.BOOLEAN
  }, {})
  return Place
};
