const personOne ={
    AaName:"Wayne Barnett",
    role:"Founder & CEO",
    image:"wayne-barnett-founder-ceo.jpg"
};


const personTwo ={
    AaName:"Angela Caroll",
    role:"Chief Editor",
    image:"angela-caroll-chief-editor.jpg"
};

const personTree ={
    AaName:"Walter Gordon",
    role:"Office Manager",
    image:"walter-gordon-office-manager.jpg"
};

const personFour ={
    AaName:"Angela Lopez",
    role:"Social Media Manager",
    image:"angela-lopez-social-media-manager.jpg"
};

const personFive ={
    AaName:"Scott Estrada",
    role:"Developer",
    image:"scott-estrada-developer.jpg"
};

const personSix ={
    AaName:"Barbara Ramos",
    role:"Graphic Designer",
    image:"barbara-ramos-graphic-designer.jpg"
};


const team = [];
team.push(personOne);
team.push(personTwo);
team.push(personTree);
team.push(personFour);
team.push(personFive);
team.push(personSix);



let leo
for(let i = 0; i < team.length; i++){

    console.log(team[i].AaName,team[i].role,team[i].image,typeof team[i].image)

    const myMain = document.querySelector("ul");
    myMain.innerHTML +="<li>"+team[i].AaName + team[i].role + team[i].image+"</li>";

   for (let key in team[i]){

    const myMain = document.getElementById("myUl");
    myMain.innerHTML +="<li>"+ key+team[i][key] +"</li>";
   }
}   
 

