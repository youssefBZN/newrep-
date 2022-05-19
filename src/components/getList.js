let lists = []

export function getLists() {
    return lists
}
export function getList(id) {
    return lists.find((list) => list.id == id )
}
export function addLists(list) {
    list.id=lists.length + 1
    lists.push(list)
    return lists
    
}





export function removeList(id) {
    let indexOflist = lists.findIndex((list) => list.id == id)
    console.log( 'index of est: ' ,  indexOflist)
   lists.splice(indexOflist , 1)
   console.log('List' , lists)
   return lists

}
