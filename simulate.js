function TTKSimulation(targetClass, weaponClass, direction) {
  var timer = 0.;
  var nShots = 0;
  var history = [];

  var target = new targetClass();
  var weapon = new weaponClass();

  while (true) {
    history.push({
      time: timer,
      hp: target.hp,
      event: 'Firing shot',
    });
    nShots += 1;
    var wait = weapon.shoot();
    target.takeDamage(weapon.damage, direction);

    if (target.hp <= 0) {
      history.push({
        time: timer,
        hp: target.hp,
        event: 'Vehicle destroyed',
      });
      break
    }

    if (weapon.currentMagazine > 0) {
      timer += wait;
    } else {
      // TODO test if what is the delay between final shot and reloading
      // Probably refire time ~80ms
      history.push({
        time: timer,
        hp: target.hp,
        event: 'Reloading',
      });

      timer += weapon.reload();
    }
  }

  return {
    timer,
    history,
    nShots,
  };
}


console.log(TTKSimulation(Lightning, Viper, 'side'));
console.log(TTKSimulation(Lightning, PythonHEAT, 'side'));
console.log(TTKSimulation(Lightning, PythonAP, 'side'));
console.log(TTKSimulation(Lightning, PythonHESH, 'side'));
