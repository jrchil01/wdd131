const charCard = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 1,
    health: 100,
    attackCard: function(){
        if(this.health > 0){
            this.health = this.health - 20;
        }else if(this.health === 0){
            alert("Your character has died!");
        }
    },
    levelCard: function(){
        if(this.health === 0){
            alert("Your character has died!");
        }else{
            this.level++;
        }
    }
};

document.querySelector('.name').textContent =  charCard.name;
document.querySelector('.stats').innerHTML = statCard();

function statCard(){
    return `
    <p>Class: ${charCard.class}</p>
    <p>Level: ${charCard.level}</p>
    <p>Health: ${charCard.health}</p>
    `
}

document.querySelector('#attack').addEventListener("click", function(){
    charCard.attackCard();
    document.querySelector('.stats').innerHTML = statCard();
});

document.querySelector('#levelUp').addEventListener("click", function(){
    charCard.levelCard();
    document.querySelector('.stats').innerHTML = statCard();
});


// document.querySelector("#enrollStudent").addEventListener("click", function () {
//     const sectionNum = document.querySelector("#sectionNumber").value;
//     aCourse.enrollStudent(sectionNum);
// });