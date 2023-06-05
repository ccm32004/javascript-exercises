const repeatString = function(string, number) {
    if (number < 0){
        return 'ERROR';
    }
    else {
        let totalString =""; //don't forget to DECLARE ur Variables!
        for (let i = 0; i < number; i++){
            totalString += string;
        }
        return totalString;
    }

};

// Do not edit below this line
module.exports = repeatString;
