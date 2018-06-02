function Vehicle(infos){
  this.name = infos.name;
  this.hp = infos.hp;
  this.resistances = infos.resistances;
  this.typeResistances = infos.typeResistances;

  if (!this.resistances.side) {
    this.resistances.side = this.resistances.right;
  }
}

Vehicle.prototype.directionalMultiplier = function (direction) {
  var value = 1 - (this.resistances[direction]/100 || 0);
  if (Number.isNaN(value)) {
    throw new Exception('NaN in directionnal coefficient');
  }
  return value;
}
Vehicle.prototype.resistanceTypeMultiplier = function(weapon) {
  var resistType = _.find(this.typeResistances, {resistTypeId: weapon.damageResistType});
  var value = 1 - (resistType.percent/100 || 0);
  if (Number.isNaN(value)) {
    throw new Exception('NaN in resistance type coefficient');
  }
  return value;
}

Vehicle.prototype.takeDamage = function(weapon, direction) {
  if (!direction) {
    direction = 'front';
  }
  this.hp -= weapon.damage * this.directionalMultiplier(direction) * this.resistanceTypeMultiplier(weapon);
};
