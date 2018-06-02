class Vacation {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }

  print() {
    console.log(`${this.destination} will take ${this.length} days.`);
  }

}

const trip = new Vacation('Paris, France', 7);
trip.print();


class Expedition extends Vacation {
  constructor(destination, length, gear) {
    super(destination, length); // super is required
    this.gear = gear;
  }

  print() {
    super.print();
    console.log(`Bring your ${this.gear.join(' and your ')}`);
  }

}

const expedition = new Expedition('Mt Everest', 3, ['camera', 'gloves', 'flask']);
expedition.print();