export const shufleArray =(array:any[]) => {
    return [...array].sort(()=> Math.random() - 0.5)
}