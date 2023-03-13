let listRandom:number[] = []
export const getRandomArbitrary = (min:number, max:number) => {
    return Math.floor(Math.random() * (max - min) + min);
  }
export const random = (e:React.MouseEvent<HTMLButtonElement>) => {
    listRandom = listRandom.map(() => {
        return getRandomArbitrary(3,100)
    })
    console.log(listRandom)
}
export default listRandom
