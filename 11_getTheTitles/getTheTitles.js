const getTheTitles = function(books) {
    let titles = [];
    books.forEach(el => { titles.push(el["title"])
    });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
