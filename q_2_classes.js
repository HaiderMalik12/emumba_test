/**
 * 
 * 
 * @class Part
 */
class Part {

    constructor(code, name, category, wheels, engine, accessories,purchasePrice,salePrice) {
        this.code = code;
        this.name = name;
        this.category = category;
        this.wheels = wheels;
        this.engine = engine;
        this.accessories = accessories;
        this.purcahsePrice = purchasePrice;
        this.salePrice = salePrice;
    }

}
/**
 * 
 * 
 * @class CarModel
 */
class CarModel {

    constructor(name) {
        this.name = name;
    }
    addParts(parts){
        this.parts.push(parts);
    }
  
}
/**
 * 
 * 
 * @class Company
 */

class Company {

     constructor(name,country,address,phone,fax) {
        this.name = name;
        this.country= country;
        this.address = address;
        this.phoen = phone;
        this.fax = fax;
    }

    manufactureCar(car){
        this.cars.push(car);
    }
}

/**
 * 
 * 
 * @class Car
 */
class Car {
 
     constructor(name,country,address,phone,fax) {
        this.barnd = name;
        this.model= country;
        this.year = address;
        this.phoen = phone;
        this.fax = fax;
    }   

    setCarModel(carModel){
        this.carModel = carModel;
    }
}
