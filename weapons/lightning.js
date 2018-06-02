function Viper() {
  Weapon.call(this, {
    damage: 300,
    fireRate: 240,
    magazineSize: 6,
    reloadTime: 4.5,
    reloadSpeedAttachment: 0.1,
    damageResistType: 7,
  });
};
Viper.prototype = Object.create(Weapon.prototype);
Viper.fullName = "Viper";

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
PythonHEAT.fullName = "Python HEAT";

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
PythonAP.fullName = "Python AP";

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
PythonHESH.fullName = "Python HESH";
