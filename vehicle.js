function Vehicle(infos){
  this.name = infos.name;
  this.hp = infos.hp;
  this.resistances = infos.resistances;
}

Vehicle.prototype.takeDamage = function(damage, direction) {
  if (!direction) {
    direction = 'front';
  }
  this.hp -= damage * (1-this.resistances[direction]/100);
};

function Lightning() {
  Vehicle.call(this, {
    name: 'Lightning',
    hp: 4000,
    resistances: {
      front: 0,
      side: -15,
      rear: -100,
      top: 0,
      bottom: -100,
    }
  });
}
Lightning.prototype = Object.create(Vehicle.prototype);

function Magrider() {
  Vehicle.call(this, {
    name: 'Magrider',
    hp: 5000,
    resistances: {
      front: 0,
      side: -15,
      rear: -100,
      top: 0,
      bottom: -100,
    }
  });
}
Magrider.prototype = Object.create(Vehicle.prototype);

function Vanguard() {
  Vehicle.call(this, {
    name: 'Vanguard',
    hp: 6000,
    resistances: {
      front: 0,
      side: -15,
      rear: -100,
      top: 0,
      bottom: -100,
    }
  });
}
Vanguard.prototype = Object.create(Vehicle.prototype);
