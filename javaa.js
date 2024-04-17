const colors=['green', 'blue', 'yellow','orange ']
const result=colors.join(',')

console.log(result)
console.log('============================')

colors.splice(1,2,'purple','pink')
console.log(colors)
console.log('============================')

colors.copyWithin(0,1,4)
console.log(colors)
console.log('============================')

const upper = colors.map(color => color.toUpperCase());
console.log(upper);
console.log('============================')

const findb = colors.find(color => color.startsWith('o'));
console.log(findb)
console.log('============================')
const slice1=colors.slice(1,4);
console.log(slice1)
console.log('============================')




