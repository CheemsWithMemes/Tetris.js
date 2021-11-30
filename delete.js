let score = getSavedScores();

document.querySelector('#delete').addEventListener("submit", function(a) {
    a.preventDefault()
    if(score.some(score => score.user === a.target.text.value)){
        if(score.some(score => score.pass === a.target.pass.value)){
            var result = score.find(score => {
                return score.user === a.target.text.value
              })
            console.log(result.ud)
            removeScore(result.ud)
            let t = document.createTextNode("Acccount Deleted");
            document.body.appendChild(t)
            saveScore(score)
            console.log(score)
        }
    } else{
    a.target.elements.text.value = ''
    let t = document.createTextNode("No account exists with that username or password")
    document.body.appendChild(t)
    saveScore(score)
    console.log(score)
    }
})