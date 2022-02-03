
function myFriends (friends){
    let largeName = friends[0] ;
    var friend = friends[i]
    /* for(let friend of friends){
        if(friend.length > largeName.length ){
            largeName = friend ;
        }
    }  */
    // console.log(friends)
    for(let i = 0 ; i <= friends.length ; i++){
        var friend = friends[i]
        // console.log(friend) 
        if(friend.length > largeName.length ){
            largeName = friend ;
        }
    }
    return largeName ; 
}
let friendsName = ['Emtiaz','Nobita','Doraemon','Sunio','Zian'] ;
console.log(myFriends(friendsName)) ;