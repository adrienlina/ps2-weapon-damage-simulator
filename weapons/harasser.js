function HalberdHarasser() {
  Weapon.call(this, {
    damage: 600,
    fireRate: 60,
    magazineSize: 1,
    reloadTime: 3.25,
    reloadSpeedAttachment: 0.15,
    damageResistType: 5,
  });
};
HalberdHarasser.prototype = Object.create(Weapon.prototype);
HalberdHarasser.fullName = "E540 Hallberd-H";

function FuryHarasser() {
  Weapon.call(this, {
    damage: 175,
    fireRate: 171,
    magazineSize: 12,
    reloadTime: 2.5,
    reloadSpeedAttachment: 0.,
    damageResistType: 5,
  });
};
FuryHarasser.prototype = Object.create(Weapon.prototype);
FuryHarasser.fullName = "M40 Fury-H";

function EnforcerHarasser() {
  Weapon.call(this, {
    damage: 250,
    fireRate: 60,
    magazineSize: 8,
    reloadTime: 4,
    reloadSpeedAttachment: 0.15,
    damageResistType: 5,
  });
};
EnforcerHarasser.prototype = Object.create(Weapon.prototype);
EnforcerHarasser.fullName = "Enforcer ML85-H";

function GatekeeperHarasser() {
  Weapon.call(this, {
    damage: 85,
    fireRate: 160,
    magazineSize: 8,
    reloadTime: 3,
    reloadSpeedAttachment: 0.15,
    damageResistType: 5,
  });
};
GatekeeperHarasser.prototype = Object.create(Weapon.prototype);
GatekeeperHarasser.fullName = "MR11 Gatekeeper-H";

function SaronHarasser() {
  Weapon.call(this, {
    damage: 150,
    fireRate: 300,
    magazineSize: 6,
    reloadTime: 3,
    reloadSpeedAttachment: 0.15,
    damageResistType: 5,
  });
};
SaronHarasser.prototype = Object.create(Weapon.prototype);
SaronHarasser.fullName = "Saron HRB-H";
