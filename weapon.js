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

function Viper() {
  Weapon.call(this, {
    name: "Viper",
    damage: 300,
    fireRate: 240,
    magazineSize: 6,
    reloadTime: 4.5,
    reloadSpeedAttachment: 0.1,
    damageResistType: 7,
  });
};

Viper.prototype = Object.create(Weapon.prototype);

function PythonHEAT() {
  Weapon.call(this, {
    name: "PythonHEAT",
    damage: 525,
    fireRate: 100,
    magazineSize: 1,
    reloadTime: 2,
    reloadSpeedAttachment: 0.1,
    damageResistType: 7,
  });
};

PythonHEAT.prototype = Object.create(Weapon.prototype);

function PythonAP() {
  Weapon.call(this, {
    name: "PythonAP",
    damage: 650,
    fireRate: 100,
    magazineSize: 1,
    reloadTime: 3,
    reloadSpeedAttachment: 0.1,
    damageResistType: 7,
  });
};

PythonAP.prototype = Object.create(Weapon.prototype);

function PythonHESH() {
  Weapon.call(this, {
    name: "PythonHESH",
    damage: 575,
    fireRate: 100,
    magazineSize: 1,
    reloadTime: 3,
    reloadSpeedAttachment: 0.1,
    damageResistType: 7,
  });
};

PythonHESH.prototype = Object.create(Weapon.prototype);
