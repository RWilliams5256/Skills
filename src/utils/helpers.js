import { db } from '../firebase/firebase';

const helpers = {

    dbCallforLists: function(){
        var categories = [];
        // var allRoles = [];
        // var allLevels =[];

        db.collection('lists').onSnapshot(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                const data = doc.data();
                // console.log(doc.id,data)
                if(data.listName !== undefined) {

                    const categoryName = data.listName.toLowerCase()

                    if(!categories.includes(categoryName)){
                        categories.push(categoryName)
                    }
                }
            });
            sessionStorage.setItem('categories', categories)
        });
    },

};

export default helpers;