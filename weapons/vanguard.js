function TitanHEAT() {
  Weapon.call(this, {
    damage: 550,
    fireRate: 240,
    magazineSize: 1,
    reloadTime: 3,
    reloadSpeedAttachment: 0.1,
    damageResistType: 7,
  });
};
TitanHEAT.prototype = Object.create(Weapon.prototype);
TitanHEAT.fullName = "Titan-150 HEAT";

function TitanAP() {
  Weapon.call(this, {
    damage: 750,
    fireRate: 240,
    magazineSize: 1,
    reloadTime: 4,
    reloadSpeedAttachment: 0.1,
    damageResistType: 7,
  });
};
TitanAP.prototype = Object.create(Weapon.prototype);
TitanAP.fullName = "Titan-150 AP";

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
TitanHESH.fullName = "Titan-150 HESH";
