bleh.createupgrades = function() {
    new bleh.upgrade({
        name: 'Stronger Pickaxes',
        desc: 'Coal miners produce 0.1 more coal a second',
        price: {
            Coal: 10,
        }
    });
}

bleh.createbuildings = function() {
    new bleh.building({
        name: 'Coal Miner',
        id: 'coalminer',
        desc: 'Slavery at its finest',
        price: 10,

        prod: function() {
            let baserate = 0.1 + bleh.has('Stronger Pickaxes') * 0.01;
            let mult = 1;
            return baserate * mult;
        }
    });
}
