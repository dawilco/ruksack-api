'use strict';
module.exports = (sequelize, DataTypes) => {
  const Organizer = sequelize.define('Organizer', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    stripeId: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Organizer.associate = function(models) {
    Organizer.belongsTo(models.User);
    Organizer.hasMany(models.Event);
  };

  Organizer.prototype.getStripeId = function() {
    return this.stripeId;
  }

  return Organizer;
};