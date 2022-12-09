function getdataToday(){
    fetch("https://worldcupjson.net/matches/today")
    .then((data) => data.json())
    .then((details) => {
        console.log(details);
            // get info about today's matches
            let today_id = [0, 1]

            today_id.forEach((id) => {

                if(details.length != 0) {

                    const year = details[id].datetime.slice(0, 4);
                    const month = details[id].datetime.slice(5, 7);
                    const day = details[id].datetime.slice(8, 10);

                    const dateTimeHours = details[id].datetime.slice(11, 13);
                    const dateTimeMinutes = details[id].datetime.slice(13, 16);
                    const newDate = dateTimeHours - 3 + dateTimeMinutes
        
                    const match = {
                        homeTeam: details[id].home_team.country,
                        homeGoals: details[id].home_team.goals,
                        awayTeam: details[id].away_team.country,
                        awayGoals: details[id].away_team.goals,
                        venue: details[id].venue,
                        stage: details[id].stage_name,
                        time: details[id].time,
                        id: details[id].id,
                        home_penalties: details[id].home_team.penalties,
                        away_penalties: details[id].away_team.penalties,
                        date: day + "-" + month + "-" + year,
                        dateTime: newDate,
                        winner: details[id].winner_code,
                        flag_home: "./img/" + details[id].home_team.name + ".svg.webp",
                        flag_away: "./img/" + details[id].away_team.name + ".svg.webp"
                    }

                    if(match.winner === null) {
                        if(match.homeGoals > match.awayGoals) {
                            match.winner = match.homeTeam;
                        } else if(match.homeGoals < match.awayGoals) {
                            match.winner = match.awayTeam;
                        } else if (match.homeGoals == match.awayGoals) {
                            if(match.home_penalties > match.away_penalties) {
                                match.winner = match.homeTeam
                            } else if(match.home_penalties < match.away_penalties) {
                                match.winner = match.awayTeam
                            }
                        }
                    }

                    if(match.time === "full-time") {
                        match.time = "Full-time"
                    }
                    

                    let nav = document.getElementById('today');
                    let newDiv = nav.appendChild(document.createElement('div'));
                    newDiv.setAttribute('class', 'p-2 text-xl bg-gray-800 text-center my-4 mx-[400px] shadow-lg shadow-[#00000059]');
                    newDiv.setAttribute('id', '_today');

                    let stage = newDiv.appendChild(document.createElement('p'));
                    stage.innerText = match.stage;
                    stage.setAttribute('class', 'stage');
                    
                    let teamsDiv = newDiv.appendChild(document.createElement('div'));
                    teamsDiv.setAttribute('class', 'flex justify-center py-3')

                    let homeTeam = teamsDiv.appendChild(document.createElement('p'));
                    homeTeam.innerText = match.homeTeam;
                    homeTeam.setAttribute('class', 'px-2');
                    
                    let homeFlag = teamsDiv.appendChild(document.createElement('img'));
                    homeFlag.setAttribute('src', match.flag_home);
                    homeFlag.setAttribute('class', 'w-[28px] h-[20px] mr-8 mt-[3px]');
                    
                    if(match.time === "Full-time" && match.homeGoals === match.awayGoals) {
                        let home_penalties = teamsDiv.appendChild(document.createElement('p'));
                        home_penalties.innerText = "(" + match.home_penalties + ")";
                    }
                    
                    let homeGoals = teamsDiv.appendChild(document.createElement('p'));
                    homeGoals.innerText = match.homeGoals;
                    homeGoals.setAttribute('class', 'px-6');

                    let newSpan = teamsDiv.appendChild(document.createElement('p'));
                    newSpan.innerText = "-"
                    newSpan.setAttribute('class', 'span');
                    
                    let awayGoals = teamsDiv.appendChild(document.createElement('p'));
                    awayGoals.innerText = match.awayGoals;
                    awayGoals.setAttribute('class', 'px-6');

                    if(match.time === "Full-time" && match.homeGoals === match.awayGoals) {
                        let away_penalties = teamsDiv.appendChild(document.createElement('p'));
                        away_penalties.innerText = "(" + match.away_penalties + ")";
                    }

                    let awayFlag = teamsDiv.appendChild(document.createElement('img'));
                    awayFlag.setAttribute('src', match.flag_away);
                    awayFlag.setAttribute('class', 'w-[28px] h-[20px] ml-8 mt-[3px]');

                    let awayTeam = teamsDiv.appendChild(document.createElement('p'));
                    awayTeam.innerText = match.awayTeam;
                    awayTeam.setAttribute('class', 'px-2');

                    let dateTime = newDiv.appendChild(document.createElement('p'));
                    dateTime.innerText = match.dateTime;
                    dateTime.setAttribute('class', 'date');

                    let venue = newDiv.appendChild(document.createElement('p'));
                    venue.innerText = match.venue;
                    venue.setAttribute('class', 'font-[25px]');

                    let time = newDiv.appendChild(document.createElement('p'));
                    time.innerText = match.time;
                    time.setAttribute('class', 'text-[#FEC310] font-bold');

                    if(match.winner === match.homeTeam) {
                        homeTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                    }

                    if(match.winner === match.awayTeam) {
                        awayTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                    }

                    console.log(match)
                    console.log(details.length)
                }

                
            })

            if(details.length === 0) {
                let nav = document.getElementById('today');
                let newDiv = nav.appendChild(document.createElement('div'));
                newDiv.setAttribute('class', 'flex justify-center');
                newDiv.setAttribute('id', 'error');

                let errorMsg = newDiv.appendChild(document.createElement('p'));
                errorMsg.innerText = "Sorry! An error has ocurred or there are no matches to show.";
                errorMsg.setAttribute('class', 'm-[75px] text-5xl font-bold text-zinc-200 w-[350px]');

                let img = newDiv.appendChild(document.createElement('img'));
                img.setAttribute('src', './img/Soccer-bro.svg');
                img.setAttribute('class', 'h-[400px]');
            } 
    })
}

function getdataTomorrow(){
    fetch("https://worldcupjson.net/matches/tomorrow")
    .then((data) => data.json())
    .then((details) => {
        console.log(details);
            // get info about tomorrow's matches
            let tomorrow_id = [0, 1]

            tomorrow_id.forEach((id) => {

                if(details.length != 0) {

                const year = details[id].datetime.slice(0, 4);
                const month = details[id].datetime.slice(5, 7);
                const day = details[id].datetime.slice(8, 10);

                const dateTimeHours = details[id].datetime.slice(11, 13);
                const dateTimeMinutes = details[id].datetime.slice(13, 16);
                const newDate = dateTimeHours - 3 + dateTimeMinutes
    
                const match = {
                    homeTeam: details[id].home_team.country,
                    homeGoals: details[id].home_team.goals,
                    awayTeam: details[id].away_team.country,
                    awayGoals: details[id].away_team.goals,
                    venue: details[id].venue,
                    stage: details[id].stage_name,
                    time: details[id].time,
                    id: details[id].id,
                    home_penalties: details[id].home_team.penalties,
                    away_penalties: details[id].away_team.penalties,
                    date: day + "-" + month + "-" + year,
                    dateTime: newDate,
                    winner: details[id].winner_code,
                    flag_home: "./img/" + details[id].home_team.name + ".svg.webp",
                    flag_away: "./img/" + details[id].away_team.name + ".svg.webp"
                }

                if(match.winner === null) {
                    if(match.homeGoals > match.awayGoals) {
                        match.winner = match.homeTeam;
                    } else if(match.homeGoals < match.awayGoals) {
                        match.winner = match.awayTeam;
                    } else if (match.homeGoals == match.awayGoals) {
                        if(match.home_penalties > match.away_penalties) {
                            match.winner = match.homeTeam
                        } else if(match.home_penalties < match.away_penalties) {
                            match.winner = match.awayTeam
                        }
                    }
                }

                if(match.time === "full-time") {
                    match.time = "Full-time"
                }
                

                let nav = document.getElementById('tomorrow');
                let newDiv = nav.appendChild(document.createElement('div'));
                newDiv.setAttribute('class', 'p-2 text-xl bg-gray-800 text-center my-4 mx-[400px] shadow-lg shadow-[#00000059]');

                let stage = newDiv.appendChild(document.createElement('p'));
                stage.innerText = match.stage;
                stage.setAttribute('class', 'stage');
                
                let teamsDiv = newDiv.appendChild(document.createElement('div'));
                teamsDiv.setAttribute('class', 'flex justify-center py-3')

                let homeTeam = teamsDiv.appendChild(document.createElement('p'));
                homeTeam.innerText = match.homeTeam;
                homeTeam.setAttribute('class', 'px-2');

                let homeFlag = teamsDiv.appendChild(document.createElement('img'));
                homeFlag.setAttribute('src', match.flag_home);
                homeFlag.setAttribute('class', 'w-[28px] h-[20px] mr-14 mt-[3px]');

                let newSpan = teamsDiv.appendChild(document.createElement('p'));
                newSpan.innerText = "-"
                newSpan.setAttribute('class', 'span');

                let awayFlag = teamsDiv.appendChild(document.createElement('img'));
                awayFlag.setAttribute('src', match.flag_away);
                awayFlag.setAttribute('class', 'w-[28px] h-[20px] ml-14 mt-[3px] ');

                let awayTeam = teamsDiv.appendChild(document.createElement('p'));
                awayTeam.innerText = match.awayTeam;
                awayTeam.setAttribute('class', 'px-2');

                let dateTime = newDiv.appendChild(document.createElement('p'));
                dateTime.innerText = match.dateTime;
                dateTime.setAttribute('class', 'date');

                let venue = newDiv.appendChild(document.createElement('p'));
                venue.innerText = match.venue;
                venue.setAttribute('class', 'font-[25px]');

                let time = newDiv.appendChild(document.createElement('p'));
                time.innerText = match.time;
                time.setAttribute('class', 'text-[#FEC310] font-bold');

                if(match.winner === match.homeTeam) {
                    homeTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                }

                if(match.winner === match.awayTeam) {
                    awayTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                }
            }

            if(details.length === 0) {
                let nav_t = document.getElementById('tomorrow');
                let newDiv_t = nav_t.appendChild(document.createElement('div'));
                newDiv_t.setAttribute('class', 'flex justify-center');
                newDiv_t.setAttribute('id', 'error');

                let errorMsg_t = newDiv_t.appendChild(document.createElement('p'));
                errorMsg_t.innerText = "Sorry! An error has ocurred or there are no matches to show.";
                errorMsg_t.setAttribute('class', 'm-[75px] text-5xl font-bold text-zinc-200 w-[350px]');

                let img_t = newDiv_t.appendChild(document.createElement('img'));
                img_t.setAttribute('src', './img/Soccer-bro.svg');
                img_t.setAttribute('class', 'h-[400px]');
            } 
            })
    })
}

getdataToday();
getdataTomorrow();