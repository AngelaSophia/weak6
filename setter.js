const kiosk ={
    firstFruit:'Mango',
    get getFruit () {
        return this.firstFruit;
    },
    set changeFruit (newFruit){
        this.firstFruit=newFruit;
    },

};
console.log(kiosk.getFruit);
kiosk.newFruit='Apple';
console.log(kiosk.newFruit);