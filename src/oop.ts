class Person {
    name : string
    address : string

    constructor (name: string, address:string){
        this.name = name
        this.address = address
    }

    greet() {
        console.log(`Hi, nama saya ${this.name} rumah saya di Kota ${this.address}`);   
    }
}

class Employe extends Person {
    jobTittle: string

    constructor(name: string, address:string, 
        jobTittle: string){
        super(name, address)
        this.jobTittle = jobTittle
    }

    work(){
        console.log(`aku ${this.name} bekerja sebagai ${this.jobTittle}`);       
    }
}

let employe1 = new Employe('Yasir', "Suradadi", 'Peternak lele')
employe1.greet()
employe1.work()
