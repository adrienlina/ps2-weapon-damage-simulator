function TitanHEAT() {
  Weapon.call(this, {
    name: "Titan-150 HEAT",
    damage: 550,
    fireRate: 240,
    magazineSize: 1,
    reloadTime: 3,
    reloadSpeedAttachment: 0.1,
    damageResistType: 7,
  });
};
TitanHEAT.prototype = Object.create(Weapon.prototype);

function TitanAP() {
  Weapon.call(this, {
    name: "Titan 150 AP",
    damage: 750,
    fireRate: 240,
    magazineSize: 1,
    reloadTime: 4,
    reloadSpeedAttachment: 0.1,
    damageResistType: 7,
  });
};
TitanAP.prototype = Object.create(Weapon.prototype);

function TitanHESH() {
  Weapon.call(this, {
    name: "Titan HESH",
    damage: 650,
    fireRate: 240,
    magazineSize: 1,
    reloadTime: 4,
    reloadSpeedAttachment: 0.1,
    damageResistType: 7,
  });
};
TitanHESH.prototype = Object.create(Weapon.prototype);
