import { db } from '../firebase/firebase';

const helpers = {

    dbCallforLists: function(callback){
        let categories = []
        let allCategories = [];
        // let allRoles = [];
        // let allLevels =[];

        db.collection('lists').onSnapshot(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                const data = doc.data();
                // console.log('data',data)

                if(data.listName !== undefined) {

                    const categoryName = data.listName.toLowerCase()

                    if(!categories.includes(categoryName)){
                        categories.push(categoryName)
                        const cat = {
                            listName: categoryName,
                            listItem: []
                        };
                        allCategories.push(cat)
                    }
                }
            });

            querySnapshot.forEach(function(doc) {
                const data = doc.data();
                if(data.listName !== undefined) {
                    const categoryName = data.listName.toLowerCase()
                    for(var i=0;i<allCategories.length;i++){
                        if(allCategories[i].listName===categoryName){
                            allCategories[i].listItem.push(data.name)
                        }
                    }
                }
            });

            sessionStorage.setItem('allCategories', JSON.stringify(allCategories))
            callback(allCategories);
        });
    },

    dbCallforPeople: function(listOfPeople) {
        console.log('listOfPeople:', listOfPeople)

        db.collection('people').onSnapshot(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                console.log(doc.data())
            })
        })
    },

};

export default helpers;