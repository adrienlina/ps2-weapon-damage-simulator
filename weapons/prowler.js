function P2HEAT() {
  Weapon.call(this, {
    damage: 475,
    fireRate: 120,
    magazineSize: 2,
    reloadTime: 2.5,
    reloadSpeedAttachment: 0.1,
    damageResistType: 7,
  });
};
P2HEAT.prototype = Object.create(Weapon.prototype);
P2HEAT.fullName = "P2-120 HEAT";

function P2AP() {
  Weapon.call(this, {
    damage: 600,
    fireRate: 120,
    magazineSize: 2,
    reloadTime: 3.5,
    reloadSpeedAttachment: 0.1,
    damageResistType: 7,
  });
};
P2AP.prototype = Object.create(Weapon.prototype);
P2AP.fullName = "P2-120 AP";

function P2HESH() {
  Weapon.call(this, {
    name: "P2 HESH",
    damage: 550,
    fireRate: 120,
    magazineSize: 2,
    reloadTime: 3.5,
    reloadSpeedAttachment: 0.1,
    damageResistType: 7,
  });
};
P2HESH.prototype = Object.create(Weapon.prototype);
P2HESH.fullName = "P2-120 HESH";
