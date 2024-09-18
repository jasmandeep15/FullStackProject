let str = "abc"
let str2 ="123456"

let str3 = "abcdef"
let str4 = "123"


let mix = (string1 , string2)=>{
  let length1 = string1.length
  let length2 = string2.length
  let stringFinal = ''
  let x = 0
   if( length1 > length2){
      for(let i = 0; i < length2; i++){
        stringFinal += (string1[i] + string2[i])
        x++
      }
      for(let j = x; j < length1; j++){
        stringFinal += string1[j]
      }
   }else if( length1 < length2){
      for(let i = 0; i < length1; i++){
        stringFinal += (string1[i] + string2[i])
        x++
      }
      for(let j = x; j < length2; j++){
        stringFinal += string2[j]
      }
   }
   return stringFinal
}

console.log(mix(str,str2));

console.log(mix(str3,str4));

