function Harasser() {
  Vehicle.call(this, {
    "name": "Harasser",
    "profile_id": 27,
    "hp": 2500,
    "resistances": {
        "front": 0,
        "right": 0,
        "top": 0,
        "rear": 0,
        "left": 0,
        "bottom": 0
    },
    "typeResistances": [
        {
            "resistTypeId": 1,
            "percent": 100,
            "type": "Melee"
        },
        {
            "resistTypeId": 2,
            "percent": 87,
            "type": "Personal Defense"
        },
        {
            "resistTypeId": 4,
            "percent": 85,
            "type": "HMG"
        },
        {
            "resistTypeId": 6,
            "percent": 100,
            "type": "Grenades"
        },
        {
            "resistTypeId": 7,
            "percent": -50,
            "type": "Tank Shell"
        },
        {
            "resistTypeId": 8,
            "percent": 80,
            "type": "Aircraft Machine Gun"
        },
        {
            "resistTypeId": 15,
            "percent": 80,
            "type": "Personal Defense - Snipers TR"
        },
        {
            "resistTypeId": 20,
            "percent": 80,
            "type": "Personal Defense - Snipers NC"
        },
        {
            "resistTypeId": 21,
            "percent": 80,
            "type": "Personal Defense - Snipers VS"
        },
        {
            "resistTypeId": 12,
            "percent": 100,
            "type": "Flak (Explosion)"
        },
        {
            "resistTypeId": 19,
            "percent": 80,
            "type": "Flak (Projectile)"
        },
        {
            "resistTypeId": 9,
            "percent": -60,
            "type": "Anti-Vehicle Mine"
        },
        {
            "resistTypeId": 11,
            "percent": -75,
            "type": "C4 (Boomer)"
        },
        {
            "resistTypeId": 16,
            "percent": 99,
            "type": "Suspension Collisions"
        },
        {
            "resistTypeId": 17,
            "percent": 50,
            "type": "Falling Collisions"
        },
        {
            "resistTypeId": 22,
            "percent": 80,
            "type": "Anti-Aircraft Machine Gun"
        },
        {
            "resistTypeId": 3,
            "percent": 0,
            "type": "Tier 2 AV"
        },
        {
            "resistTypeId": 5,
            "percent": -25,
            "type": "Tier 3 AV"
        },
        {
            "resistTypeId": 13,
            "percent": 96,
            "type": "Dynamic Collisions"
        },
        {
            "resistTypeId": 14,
            "percent": 99,
            "type": "Static Collisions"
        },
        {
            "resistTypeId": 18,
            "percent": 60,
            "type": "Rocket Pods"
        },
        {
            "resistTypeId": 24,
            "percent": -100,
            "type": "Lancer AV"
        },
        {
            "resistTypeId": 26,
            "percent": -220,
            "type": "Phoenix AV"
        },
        {
            "resistTypeId": 25,
            "percent": 0,
            "type": "Tier 2 AV - Liberator"
        },
        {
            "resistTypeId": 33,
            "percent": -25,
            "type": "Mass Drivers"
        },
        {
            "resistTypeId": 28,
            "percent": 60,
            "type": "Armor Piercing Chain Guns"
        },
        {
            "resistTypeId": 27,
            "percent": 4,
            "type": "Armor Piercing Shell"
        },
        {
            "resistTypeId": 35,
            "percent": 84,
            "type": "Vehicle Shotgun (Canister)"
        },
        {
            "resistTypeId": 36,
            "percent": 25,
            "type": "Vehicle Grenades (Anti-Light Armor)"
        },
        {
            "resistTypeId": 29,
            "percent": 20,
            "type": "VS Vortex AV"
        },
        {
            "resistTypeId": 30,
            "percent": -100,
            "type": "VS Vortex AV: C2"
        },
        {
            "resistTypeId": 31,
            "percent": -200,
            "type": "VS Vortex AV: C3"
        },
        {
            "resistTypeId": 34,
            "percent": 0,
            "type": "Default Rocket Launcher"
        },
        {
            "resistTypeId": 23,
            "percent": -20,
            "type": "Air to Ground"
        },
        {
            "resistTypeId": 37,
            "percent": 25,
            "type": "Liberator Cannon"
        },
        {
            "resistTypeId": 38,
            "percent": -120,
            "type": "Striker"
        },
        {
            "resistTypeId": 40,
            "percent": 25,
            "type": "Anti Materiel Rifle"
        },
        {
            "resistTypeId": 41,
            "percent": 60,
            "type": "VS ES AV"
        },
        {
            "resistTypeId": 42,
            "percent": 25,
            "type": "NC ES AV"
        },
        {
            "resistTypeId": 43,
            "percent": 40,
            "type": "TR ES AV"
        },
        {
            "resistTypeId": 44,
            "percent": 80,
            "type": "MAX HMG"
        },
        {
            "resistTypeId": 45,
            "percent": 0,
            "type": "Whale Hunter I"
        },
        {
            "resistTypeId": 47,
            "percent": 87,
            "type": "Orbital Strike"
        }
    ]
});
}
Harasser.prototype = Object.create(Vehicle.prototype);
