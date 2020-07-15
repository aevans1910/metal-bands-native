import data from './metal.json'
import { Value } from 'react-native-reanimated';

let Count = 0
for (let i = 0; i < data.length; i++) {
  Count += 1
}

let Fans = 0
for (let i = 0; i < data.length; i++) {
    Fans += data[i].fans
}


const numCountries = data.map((item) => {
    return item.origin
})
const diffCountries = [...new Set(numCountries)]

const Countries = diffCountries.length

const Active = data.filter((item) => {
    return item.split === '-'
})



const activeBands = Active.length
const splitBands = Count - activeBands

export { Count, Fans, Countries, activeBands, splitBands }