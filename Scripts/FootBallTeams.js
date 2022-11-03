"use strict";

window.onload - init;

const teams = [
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs",
    plays:"Kansas City, MO"},
]

function init()
{
    console.log("FootBallTeams.js");
    fillDropdown();
    const selectBtn = document.getElementById("selectBtn");
    selectBtn.onclick = selectBtnOnClick;
//document.getElementaryById("selectBtn") - selectBtnOnClick;

}

function fillDropdown(){
    const teamSelect = document.getElementById(teamSelect);
    let teamsLength = teams.length;
    for(let i = 0 ; i <teamsLength ; i++){
        let newOption = document.createElement("option");
        newOption.value = teams[i].code;
        newOption.textContent = teams[i].name;

        teamSelect.appendChild(newOption)
    }
}

function selectBtnOnClick() {
    const teamSelect = document.getElementById("teamSelect");
    let selectedTeamCode = teamSelect.value;
    let selectedTeam = getTeamFromCode(teams, selectedTeamCode);

    let message ="You selected the ${selectedTeam.name}, (${selectedTeam.code}) who play in ${selectedTeam.plays}
    const teamInfo = document.getElementById(teamInfo);
    teamInfo.innerHTML = message;
}












