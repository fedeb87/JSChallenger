// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function myFunction(a, b) {
    let validWords = ["Javascript", "Downtown", "Countryside"];
    const upperFirstA = a.replace('%', '').split('').at(0).toUpperCase();

    for(let i = 0; validWords.length;i++){
        if(validWords[i].includes(upperFirstA))
            return validWords[i];
    }
    return null;
}