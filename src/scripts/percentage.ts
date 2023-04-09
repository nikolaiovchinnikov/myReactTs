export const getPercentageNumbers = (argListString:string[]) => {
    const setString = new Set()
    argListString.forEach(element => {
        setString.add(element)
    });
    const listUniqueString = [...argListString]
    const listAmountNumbers:number[] = []
    listUniqueString.forEach((element, idx) => {
        listAmountNumbers.push
        (
            listUniqueString.reduce(function(accumulator, currentValue) {
            if (currentValue === listUniqueString[idx] ){
                return accumulator + 1 ;
            }return accumulator ;
          }, 0)
        )
    });
}