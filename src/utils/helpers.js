import { db } from '../firebase/firebase';

const helpers = {

    dbCallforLists: function(callback){
        let categories = []
        let allCategories = [];
        const listRef =  db.collection('lists')

        listRef.onSnapshot(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = doc.data();
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

            querySnapshot.forEach(doc => {
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

        query.onSnapshot(people => {
            people.forEach(doc => {
                const data = doc.data()
                matchingPeople.push(data)
            })
            console.log('matches:',matchingPeople)
            callback(matchingPeople)
        })


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
    dbCalltoAddPerson: function(personalInfo, callback){
    var person = personalInfo.body;
    var data;
    data ={
      firstName: person.firstName,
      lastName: person.lastName,
      address:person.address,
      colleges:  person.colleges,
      referredBy: person.referredBy,
      skills: person.skills,
      role: person.role,
      phone: person.phone,
      socialMedia: person.socialMedia,
      status: person.status,
      experienceLevel: person.experienceLevel,
      paymentType: person.paymentType,
      resumes: person.resumes,
      notes: person.notes,
      email: person.email,
      currentProject: person.currentProject
  }
   console.log("data is ", data);
   db.collection('people').add(data);
   console.log("Upload was success");
   callback();
 }
    


};

export default helpers;