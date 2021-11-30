
Array.isEqual =  function(array1, array2) {
    if (!array1 || !array2)
        return false

    if (array1.length !== array2.length)
        return false

    for (i = 0, l = array1.length; i < l; i++){

        if (array1[i] instanceof Array && array2[i] instanceof Array) {
            if (Array.isEqual(array1[i], array2[i]))
                return false  
        }           
        else if (array1[i] !== array2[i]) { 
            return false
        }           
    }       
    return true;
}
const _ = {
  filter: function (num) {
    const filteredArr = num.filter(num => { return num < 2 })
    return filteredArr
  },
  map: function (num) {
      const mappedArr = num.map(num => { return num + 3})
      return mappedArr
  },
  reduce: function (num) {
      const reducer = (acc, num) => {
         return acc + num
      } 
      const reduceArr = num.reduce(reducer,0)
      return reduceArr
  },
  head: function (num) {
      const head = (num) => {
          if(num.length !== 0){
              for(let index = 0; index < num.length; index++){
                if(num[index] === 1) return num[index]
                else return num[index]
              }          
          }else return num
      }
      const headArr = head(num)
      return headArr
  },
  tail: function (num) {
      const tail = (num) => {
          if(num.length) return num.slice(-1)[0];
          else return num
      };
      const tailArr = tail(num)
      return tailArr
  },
  join: function (num) {
      const joinWord = (num) => {
          if(num.length) return num.join("-")
          else return num
      }
      const joinArr = joinWord(num)
      return joinArr
  }
};
    