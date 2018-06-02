function Magrider() {
  Vehicle.call(this, {
    "name": "Magrider",
    "profile_id": 29,
    "hp": 4000,
    "resistances": {
        "front": 0,
        "right": -15,
        "top": 0,
        "rear": -100,
        "left": -15,
        "bottom": -100
    },
    "typeResistances": [
        {
            "resistTypeId": 1,
            "percent": 100,
            "type": "Melee"
        },
        {
            "resistTypeId": 2,
            "percent": 100,
            "type": "Personal Defense"
        },
        {
            "resistTypeId": 3,
            "percent": 50,
            "type": "Tier 2 AV"
        },
        {
            "resistTypeId": 4,
            "percent": 87,
            "type": "Tier 1 AV"
        },
        {
            "resistTypeId": 5,
            "percent": 0,
            "type": "Tier 3 AV"
        },
        {
            "resistTypeId": 6,
            "percent": 100,
            "type": "Grenades"
        },
        {
            "resistTypeId": 7,
            "percent": 0,
            "type": "Tank Shell"
        },
        {
            "resistTypeId": 8,
            "percent": 90,
            "type": "Aircraft Machine Gun"
        },
        {
            "resistTypeId": 24,
            "percent": -100,
            "type": "Lancer AV"
        },
        {
            "resistTypeId": 15,
            "percent": 100,
            "type": "Personal Defense - Snipers TR"
        },
        {
            "resistTypeId": 20,
            "percent": 100,
            "type": "Personal Defense - Snipers NC"
        },
        {
            "resistTypeId": 21,
            "percent": 100,
            "type": "Personal Defense - Snipers VS"
        },
        {
            "resistTypeId": 26,
            "percent": -100,
            "type": "Phoenix AV"
        },
        {
            "resistTypeId": 25,
            "percent": 0,
            "type": "Tier 2 AV - Liberator"
        },
        {
            "resistTypeId": 12,
            "percent": 100,
            "type": "Flak (Explosion)"
        },
        {
            "resistTypeId": 19,
            "percent": 100,
            "type": "Flak (Projectile)"
        },
        {
            "resistTypeId": 9,
            "percent": -100,
            "type": "Anti-Vehicle Mine"
        },
        {
            "resistTypeId": 11,
            "percent": -100,
            "type": "C4 (Boomer)"
        },
        {
            "resistTypeId": 33,
            "percent": 0,
            "type": "Mass Drivers"
        },
        {
            "resistTypeId": 28,
            "percent": 75,
            "type": "Armor Piercing Chain Guns"
        },
        {
            "resistTypeId": 13,
            "percent": 97,
            "type": "Dynamic Collisions"
        },
        {
            "resistTypeId": 14,
            "percent": 97,
            "type": "Static Collisions"
        },
        {
            "resistTypeId": 16,
            "percent": 100,
            "type": "Suspension Collisions"
        },
        {
            "resistTypeId": 18,
            "percent": 50,
            "type": "Rocket Pods"
        },
        {
            "resistTypeId": 27,
            "percent": 0,
            "type": "Armor Piercing Shell"
        },
        {
            "resistTypeId": 35,
            "percent": 100,
            "type": "Vehicle Shotgun (Canister)"
        },
        {
            "resistTypeId": 36,
            "percent": 100,
            "type": "Vehicle Grenades (Anti-Light Armor)"
        },
        {
            "resistTypeId": 17,
            "percent": 50,
            "type": "Falling Collisions"
        },
        {
            "resistTypeId": 22,
            "percent": 85,
            "type": "Anti-Aircraft Machine Gun"
        },
        {
            "resistTypeId": 29,
            "percent": 30,
            "type": "VS Vortex AV"
        },
        {
            "resistTypeId": 30,
            "percent": -60,
            "type": "VS Vortex AV: C2"
        },
        {
            "resistTypeId": 31,
            "percent": -150,
            "type": "VS Vortex AV: C3"
        },
        {
            "resistTypeId": 34,
            "percent": 0,
            "type": "Default Rocket Launcher"
        },
        {
            "resistTypeId": 23,
            "percent": 0,
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
            "percent": 40,
            "type": "Anti Materiel Rifle"
        },
        {
            "resistTypeId": 41,
            "percent": 75,
            "type": "VS ES AV"
        },
        {
            "resistTypeId": 42,
            "percent": 50,
            "type": "NC ES AV"
        },
        {
            "resistTypeId": 43,
            "percent": 50,
            "type": "TR ES AV"
        },
        {
            "resistTypeId": 44,
            "percent": 75,
            "type": "MAX HMG"
        },
        {
            "resistTypeId": 45,
            "percent": 20,
            "type": "Whale Hunter I"
        },
        {
            "resistTypeId": 47,
            "percent": 79,
            "type": "Orbital Strike"
        }
    ]
});
}
Magrider.prototype = Object.create(Vehicle.prototype);
