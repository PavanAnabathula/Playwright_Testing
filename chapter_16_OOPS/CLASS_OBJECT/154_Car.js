class Car {
  // Attribute
  // Constructor
  constructor (assigned_name) {
    this.name = assigned_name
  }

  drive () {
    console.log('Driving the car ' + this.name)
  }

  details () {
    console.log('Details of  the car ' + this.name)
  }
}

let hyundai = new Car('i10')
hyundai.drive()
hyundai.details()
