const set1 = [3, 1, 7, 9]
const set2 = [2, 4, 1, 9, 3]
const distinct = [...set1]

function getSumDistinct(arr1, arr2){
    for (let i = 0; i < arr2.length; i++){
        if(distinct.includes(arr2[i])){
            distinct.splice(distinct.indexOf(arr2[i]), 1)
        } else {
            distinct.push(arr2[i])
        }
        console.log (distinct)
     } 

return distinct.reduce((a, b) => a+b, 0)

}
console.log(getSumDistinct(set1, set2))
