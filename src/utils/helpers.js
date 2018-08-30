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

        var getUserByMultipleSkill = "https://us-central1-shomsi-test.cloudfunctions.net/getUserByMultipleSkill";
        var proxyurl = "https://cors-anywhere.herokuapp.com/";
        var data = JSON.stringify(listOfCriteria)

        fetch(proxyurl + getUserByMultipleSkill, {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json',
        }
        }).then(response => {
            return response.json();
        })
        .then(myJson => {
            console.log(JSON.stringify(myJson))
            callback(myJson)
        })
        .catch(err => {
            console.log("Error:", err)
        });
    },

    dbCalltoAddPerson: function(personalInfo, callback){
    var person = personalInfo;
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
   db.collection('people').add(data);
   console.log("Added Person" );

 },

 dbCallttoAddnewSkill: function(newlist,callback){
    var data;
    var time = new Date();
    var i;
    //time = time.getMilliseconds();
    //time = time/1000;
    for(i in newlist.list){
      if(newlist.list[i].hasOwnProperty('subGroup')){
       data = {
      name: newlist.list[i].name,
      listName: newlist.list[i].listName,
      subGroup:newlist.list[i].subGroup,
      dateAdded: time
      };
    db.collection('lists').add(data);
    }
    else{
      data = {
        name: newlist.list[i].name,
        listName: newlist.list[i].listName,
        dateAdded:time
        };
      db.collection('lists').add(data);
    }
  }

    console.log("Upload was a sucess");

   // return admin.firestore().doc('users/'+user.uid).set(userObject);

 },
};

export default helpers;