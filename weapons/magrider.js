function SupernovaPC() {
  Weapon.call(this, {
    damage: 550,
    fireRate: 240,
    magazineSize: 1,
    reloadTime: 2.75,
    reloadSpeedAttachment: 0.1,
    damageResistType: 7,
  });
};
SupernovaPC.prototype = Object.create(Weapon.prototype);
SupernovaPC.fullName = "Supernova PC";

function SupernovaFPC() {
  Weapon.call(this, {
    damage: 750,
    fireRate: 240,
    magazineSize: 1,
    reloadTime: 3.25,
    reloadSpeedAttachment: 0.1,
    damageResistType: 7,
  });
};
SupernovaFPC.prototype = Object.create(Weapon.prototype);
SupernovaFPC.fullName = "Supernova FPC";

function SupernovaVPC() {
  Weapon.call(this, {
    damage: 650,
    fireRate: 240,
    magazineSize: 1,
    reloadTime: 3.25,
    reloadSpeedAttachment: 0.1,
    damageResistType: 7,
  });
};
SupernovaVPC.prototype = Object.create(Weapon.prototype);
SupernovaVPC.fullName = "Supernova VPC";
