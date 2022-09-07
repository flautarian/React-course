console.log("Hello world!!!")

const dice = {
    faces: 20,
    getRandomValue: function(){
        // 👇️ get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (this.faces+ 1));
    }
}

const diceResult =`${dice.getRandomValue()}`;
console.log(diceResult);