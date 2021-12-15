console.log('Destructuring')

const book = {
    title:"Ego is the enemy",
    author:"Ryan Holiday",
    publisher:{
        name:"penguin"
    }
}
const {name:publishername="Self-published"} = book.publisher;

console.log(`${publishername}`)

const item = ['Cofee(hot)','$2.0','$2.50','$2.75'];
const [cofee,,medium]=item;
console.log(`a medium ${cofee} costs ${medium}`);