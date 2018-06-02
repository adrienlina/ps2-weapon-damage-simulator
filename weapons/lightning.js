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
