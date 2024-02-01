const findTheOldest = function(people) {
    let oldest = [];
    let maxAge = 0;
    people.forEach(el => {
        if(el["yearOfDeath"])
        {
            let age = el["yearOfDeath"]-el["yearOfBirth"];
            if(age > maxAge)
            {
                maxAge = age;
                oldest = el;
            }
        }
        else
        {
            let date = new Date();
            let age = date.getFullYear() - el["yearOfBirth"];
            if(age > maxAge)
            {
                maxAge = age;
                oldest = el;
            }
        } 
    });
    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
