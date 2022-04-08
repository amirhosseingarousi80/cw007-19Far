const alphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";

const find = (array) => {
    const array1 = array.split(" ");
  const result = array1.map((letter,index) => {
       let index1 = index%2;
       if (index1 === 0) {
           return letter
       }
           
    });
    return result.join(" ");
};
console.log(find(alphabet));