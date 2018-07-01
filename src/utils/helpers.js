import { db } from '../firebase/firebase';

const helpers = {

    dbCallforLists: function(callback){
        let categories = [];
        let everything = [];
        // let allRoles = [];
        // let allLevels =[];

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

            console.log('query', querySnapshot.length)
            // for(var i=0; i< categories.length;i++){
            //     var choices = [];
            //     querySnapshot.forEach(function(doc) {
            //         const data = doc.data();
            //         if( data.listName === categories[i]){
            //             choices.push(data.name);
            //         }
            //     });
            // }

            // console.log('Everything', everything)
            sessionStorage.setItem('categories', categories)
            callback(categories);
        });
    },

};

export default helpers;