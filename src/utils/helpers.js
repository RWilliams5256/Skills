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
                const peep = {
                    'firstName': data.firstName,
                    'lastName': data.lastName
                }
                console.log('peep:', peep.firstName)
                matchingPeople.push(peep)
            })
        })

        callback(matchingPeople)


        // var peopleRef = db.collection('people');
        // var data;
        // var query = peopleRef;
        // //console.log('req',req.body);
        // var college = ['Georgia State University'];
        // var firstName = 'Adam';
        // //console.log('skill',skill);
        // if (college.length > 0) {
        //     for (var i in college) {
        //         query = query.where('college.' + college[i], '==', true)
        //         console.log('i is',i)
        //     }
        // }
        // if (college !== null) {
        //     //for(i in college){
        //     query = query.where('firstName', "==", firstName)
        //     //  }
        // }
        // //  query = query.orderBy('skill.'+ skill[0])
        // //  console.log('query is', query);
        // query.get().then(snapshot => {
        //         if (snapshot.empty) {
        //             console.log('No documents found');
        //         } else {
        //             data = snapshot.docs.map(documentSnapshot => {
        //                 return documentSnapshot.data();
        //             })
        //             console.log('Doc is', data);
        //         }
        //         return (JSON.stringify(data));
        //     })
        //     .catch(err => {
        //         console.log('Oops! Something went wrong.');
        //         throw new Error(err);
        //     });
    },

};

export default helpers;