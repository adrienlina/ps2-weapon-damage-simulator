Vue.filter('round', function(value) {
  return Number(value.toFixed(2));
});
Vue.filter('capitalize', function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
});

new Vue({
  el: '#app',
  data() {
    return {
      directionsList: [
        'front',
        'side',
        'rear',
        'top',
        'bottom',
      ],
      currentDirection: 'front',
      weaponsList: {
        'Harasser': [
          HalberdHarasser,
          FuryHarasser,
          EnforcerHarasser,
          GatekeeperHarasser,
          SaronHarasser,
        ],
        'Lightning': [
          Viper,
          PythonHEAT,
          PythonAP,
          PythonHESH,
        ],
        'Magrider': [
          SupernovaPC,
          SupernovaFPC,
          SupernovaVPC,
        ],
        'Vanguard': [
          TitanHEAT,
          TitanAP,
          TitanHESH,
        ],
        'Prowler': [
          P2HEAT,
          P2AP,
          P2HESH,
        ],
      },
      currentWeapons: [],
      currentTargets: [
        Lightning,
        Magrider,
        Vanguard,
        Harasser,
      ],
      computedSimulations: {},
    };
  },
  computed: {
  },
  methods: {
    // add a new weapon
    addWeapon(weapon) {
      if (_.indexOf(this.currentWeapons, weapon) === -1) {
        this.currentWeapons.push(weapon);
      }
    },
    changeDirection(direction) {
      this.currentDirection = direction;
    },
    weaponSimulation(target, weapon) {
      var key = `${target}-${weapon}:${this.currentDirection}`;
      if (!this.computedSimulations[key]) {
        console.log('compute');
        this.computedSimulations[key] = TTKSimulation(target, weapon, this.currentDirection);
      }

      return this.computedSimulations[key];
    }
  },
});
