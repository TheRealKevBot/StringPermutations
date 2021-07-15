// In this kata you have to create all permutations of an input string and remove duplicates, 
// if present. This means, you have to shuffle all letters from the input 
// in all possible orders.


function permutations(string) {
    let answer = []
    if (string.length === 1) {
        answer.push(string)
    } else {
        for (let i = 0; i < string.length; i++) {
            let x = string.slice(0, i) + string.slice(i + 1)
            let y = permutations(x)
            for (let n = 0; n < y.length; n++) {
                !answer.includes(string[i] + y[n]) ? answer.push(string[i] + y[n]) : null
            }
        }
    }
    return answer
}

console.log(permutations('a'), ['a'])
console.log(permutations('ab'), ['ab', 'ba'])
console.log(permutations('aabb'), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']) 

