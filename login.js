let score = getSavedScores();

document.querySelector('#join').addEventListener("submit", function(a) {
    a.preventDefault()
    const timestamp = moment().format('MMMM Do YYYY, h:mm:ss a')
    console.log(a.target.elements.text.value)
    if(!score.some(score => score.user === a.target.text.value)){
        score.push ({
            user: a.target.elements.text.value,
            pass: a.target.elements.pass.value,
            playerScore: 0,
            ud: uuidv4(),
            time: timestamp
        })
    } else {
        location.assign('tetris.html')
    }
    location.assign('tetris.html')
    a.target.elements.text.value = ''
    
    saveScore(score);
    console.log(score);
})
document.querySelector('#delete').addEventListener('click', function(a) {
    location.assign('delete.html')
    console.log("am pressed!")
})