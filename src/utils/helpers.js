import { db } from '../firebase/firebase';

const helpers = {

    dbCallforLists: function(){
        var allLists = [];
        // var allRoles = [];
        // var allLevels =[];

        db.collection('lists').onSnapshot(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                const data = doc.data();
                // console.log(doc.id,data)
                if(!allLists.includes(data.listName)){
                    allLists.push(data.listName)
                }
            });
            console.log(allLists);
            console.log(allLists.length)
            sessionStorage.setItem('allLists', JSON.stringify(allLists))
        });
    },

};

export default helpers;