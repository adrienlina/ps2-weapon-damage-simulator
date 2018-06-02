function Weapon(infos) {
  this.damage = infos.damage;
  this.fireRate = infos.fireRate;
  this.magazineSize = infos.magazineSize;
  this.reloadTime = infos.reloadTime;
  this.damageResistType = infos.damageResistType;

  this.reloadSpeedAttachment = infos.reloadSpeedAttachment || 0;

  this.currentMagazine = this.magazineSize;
}

Weapon.prototype.shoot = function() {
  if (this.currentMagazine <= 0) {
    throw new Exception('Tried firing with no bullets left');
  }

  this.currentMagazine -= 1;

  return 60/this.fireRate;
}

Weapon.prototype.reload = function() {
  this.currentMagazine = this.magazineSize;

  return this.reloadTime*(1-this.reloadSpeedAttachment);
}
