export const shufleArray =(array:any[]) => {
    [...array].sort(()=> Math.random() - .5)
}