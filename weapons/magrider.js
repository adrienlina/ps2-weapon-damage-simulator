function SupernovaPC() {
  Weapon.call(this, {
    name: "Supernova PC",
    damage: 550,
    fireRate: 240,
    magazineSize: 1,
    reloadTime: 2.75,
    reloadSpeedAttachment: 0.1,
    damageResistType: 7,
  });
};
SupernovaPC.prototype = Object.create(Weapon.prototype);

function SupernovaFPC() {
  Weapon.call(this, {
    name: "Supernova FPC",
    damage: 750,
    fireRate: 240,
    magazineSize: 1,
    reloadTime: 3.25,
    reloadSpeedAttachment: 0.1,
    damageResistType: 7,
  });
};
SupernovaFPC.prototype = Object.create(Weapon.prototype);

function SupernovaVPC() {
  Weapon.call(this, {
    name: "Supernova VPC",
    damage: 650,
    fireRate: 240,
    magazineSize: 1,
    reloadTime: 3.25,
    reloadSpeedAttachment: 0.1,
    damageResistType: 7,
  });
};
SupernovaVPC.prototype = Object.create(Weapon.prototype);
