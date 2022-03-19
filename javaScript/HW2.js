//compare two objects

obj1 = {
    fname:'mahdi',
    lname:'saadi',
    DateOfB:22/07/02
}
obj2 = {
    fname:'mahdi',
    lname:'saadi',
} 

function compare(obj1,obj2){
    const k1 = Object.keys(obj1);
    const k2 = Object.keys(obj2);

    for(let key of k1){
        if (obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}
console.log(compare(obj1,obj2));

//find the common elements from two arrays
//method 1
arr1 = [1, 2, 3];
arr2 = [100, 2, 1, 10];

function difference(arr1,arr2){
    let common = [];
    for(let i=0 ; i < arr1.length; i++){
        for(let j=0 ; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                common.push(arr1[i])
            }
        }
    }
    return common;
}
console.log(difference(arr1,arr2));

//method 2
const diff = arr1.filter(val => arr2.includes(val));
console.log(diff);