import { db } from '../firebase/firebase';

const helpers = {

    dbCallforLists: function(callback){
        let categories = []
        let allCategories = [];

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
            callback();
        });
    },

    dbCallforPeople: function(listOfCriteria, callback) {
        console.log('listOfCriteria:', listOfCriteria)

        let matchingPeople = [];
        const peopleRef = db.collection('people');

        // let queryStr = peopleRef;

        // for(let i =0;i<listOfCriteria.length;i++){
        //     queryStr.concat()
        // }


        const query = peopleRef.where('college', '==', 'Georgia State University')
        //.where('firstName','==','Adam')

        query.get().then(people => {
            people.forEach(doc => {
                const data = doc.data()
                // const peep = {
                //     'firstName': data.firstName,
                //     'lastName': data.lastName
                // }
                // console.log('peep:', peep)
                matchingPeople.push(data)
            })
        })

        console.log('matchingPeople:',matchingPeople)
        callback(matchingPeople)
    },

};

export default helpers;