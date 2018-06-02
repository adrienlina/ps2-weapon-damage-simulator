function Vehicle(infos){
  this.name = infos.name;
  this.hp = infos.hp;
  this.resistances = infos.resistances;

  if (!this.resistances.side) {
    this.resistances.side = this.resistances.right;
  }
}

Vehicle.prototype.takeDamage = function(damage, direction) {
  if (!direction) {
    direction = 'front';
  }
  this.hp -= damage * (1-this.resistances[direction]/100 || 0);
};
