function groupstage(){
    fetch("https://worldcupjson.net/matches")
    .then((data) => data.json())
    .then((details) => {
            // get info about matches of the group stage
            // group stage matches number
            let stage_id = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]

                // creating every group stage game
                stage_id.forEach((id) => {
                    
                    // creating a date from 2022-11-21T13:00:00Z to 21-11-2022
                    const year = details[id].datetime.slice(0, 4);
                    const month = details[id].datetime.slice(5, 7);
                    const day = details[id].datetime.slice(8, 10);
    
                    const dateTimeHours = details[id].datetime.slice(11, 13);
                    const dateTimeMinutes = details[id].datetime.slice(13, 16);
                    const newDate = dateTimeHours - 3 + dateTimeMinutes
                    // match object for more accessibility
                    const match = {
                        homeTeam: details[id].home_team.country,
                        homeGoals: details[id].home_team.goals,
                        awayTeam: details[id].away_team.country,
                        awayGoals: details[id].away_team.goals,
                        venue: details[id].venue,
                        stage: "Group stage",
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

                    // changing some status values
                    if(match.time === undefined) {
                        match.time = details[id].status
                    }
    
                    if(match.time === "completed") {
                        match.time = "Completed";
                    }
                    
                    if(match.status === "in_progress") {
                        match.time = "In progress. See live minute in today's matches"
                    }
    
                        let nav = document.getElementById('group-stage');
                        // adding dates without repeating them
                        // i used if the id is not equal to 0 because there is no previous value to 0
                        if(id != 0) {
                            const prevMonth = details[id - 1].datetime.slice(5, 7);
                            const prevDay = details[id - 1].datetime.slice(8, 10);
                            let previousDate = prevDay + "-" + prevMonth + "-" + year
                            // check if the actual date is not equal to the previous date
                            if(previousDate != match.date) {
                                let date = nav.appendChild(document.createElement('p'));
                                date.innerText = match.date;
                                date.setAttribute('class', 'md:mx-[100px] xl:mx-[300px] p-2 text-xl bg-[#8A1538] rounded-md font-bold text-center my-4 2xl:mx-[400px] shadow-lg shadow-[#00000059]')
                            }
                        } else { // if the id is 0 (first value)
                            let date = nav.appendChild(document.createElement('p'));
                            date.innerText = match.date;
                            date.setAttribute('class', 'md:mx-[100px] xl:mx-[300px] p-2 text-xl bg-[#8A1538] rounded-md font-bold text-center my-4 2xl:mx-[400px] shadow-lg shadow-[#00000059]')
                        }
                    
                        // creating the match event
                        let newDiv = nav.appendChild(document.createElement('div'));
                        newDiv.setAttribute('class', 'md:mx-[100px] xl:mx-[300px] p-2 text-xl bg-gray-800 text-center my-4 2xl:mx-[400px] shadow-lg shadow-[#00000059]');
                        newDiv.setAttribute('id', 'group-stage')
        
                        let stage = newDiv.appendChild(document.createElement('p'));
                        stage.innerText = match.stage;
                        stage.setAttribute('class', 'stage');
                        
                        let teamsDiv = newDiv.appendChild(document.createElement('div'));
                        teamsDiv.setAttribute('class', 'flex justify-center py-3 text-2xl')
        
                        let homeTeam = teamsDiv.appendChild(document.createElement('p'));
                        homeTeam.innerText = match.homeTeam;
                        homeTeam.setAttribute('class', 'px-2');
                        
                        if(match.flag_home != "./img/To Be Determined.svg.webp") { // if the flag is not from a team who has not been defined
                            let homeFlag = teamsDiv.appendChild(document.createElement('img')); // enter the flag of the current team
                            homeFlag.setAttribute('src', match.flag_home);
                            homeFlag.setAttribute('class', 'w-[28px] h-[20px] sm:mr-8 mt-[5px]');
                        }
                        
                        let homeGoals = teamsDiv.appendChild(document.createElement('p'));
                        homeGoals.innerText = match.homeGoals;
                        homeGoals.setAttribute('class', 'px-3 sm:px-6');
        
                        let newSpan = teamsDiv.appendChild(document.createElement('p'));
                        newSpan.innerText = "-"
                        newSpan.setAttribute('class', 'span');
                        
                        let awayGoals = teamsDiv.appendChild(document.createElement('p'));
                        awayGoals.innerText = match.awayGoals;
                        awayGoals.setAttribute('class', 'px-3 sm:px-6');
        
                        if(match.flag_away != "./img/To Be Determined.svg.webp") { // if the flag is not from a team who has not been defined
                            let awayFlag = teamsDiv.appendChild(document.createElement('img')); // enter the flag of the current team
                            awayFlag.setAttribute('src', match.flag_away);
                            awayFlag.setAttribute('class', 'w-[28px] h-[20px] sm:ml-8 mt-[5px]');

                        }

                        let awayTeam = teamsDiv.appendChild(document.createElement('p'));
                        awayTeam.innerText = match.awayTeam;
                        awayTeam.setAttribute('class', 'px-2');
        
                        let dateTime = newDiv.appendChild(document.createElement('p'));
                        dateTime.innerText = match.dateTime;
                        dateTime.setAttribute('class', 'date');
        
                        let venue = newDiv.appendChild(document.createElement('p'));
                        venue.innerText = match.venue;
                        venue.setAttribute('class', 'text-[20px]');
        
                        let time = newDiv.appendChild(document.createElement('p'));
                        time.innerText = match.time;
                        time.setAttribute('class', 'text-[#FEC310] font-bold');
                        // change the color of the match winner if draw change both
                        if(match.winner === match.homeTeam) {
                            homeTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                        }
        
                        if(match.winner === match.awayTeam) {
                            awayTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                        }
        
                        if(match.winner === "Draw") {
                            homeTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                            awayTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                        }
                })

    })
}

function roundof16(){
    fetch("https://worldcupjson.net/matches")
    .then((data) => data.json())
    .then((details) => {

            // get info about matches
            let stage_id = [48, 49, 50, 51, 52, 53, 54, 55]

                stage_id.forEach((id) => {
    
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
    
                    if(match.time === undefined) {
                        match.time = details[id].status
                    }
    
                    if(match.time === "completed") {
                        match.time = "Completed";
                    }

                    if(match.status === "in_progress") {
                        match.time = "In progress. See live minute in today's matches"
                    }
    
                        let nav = document.getElementById('round-8');

                        if(id != 0) {
                            const prevMonth = details[id - 1].datetime.slice(5, 7);
                            const prevDay = details[id - 1].datetime.slice(8, 10);
                            let previousDate = prevDay + "-" + prevMonth + "-" + year

                            if(previousDate != match.date) {
                                let date = nav.appendChild(document.createElement('p'));
                                date.innerText = match.date;
                                date.setAttribute('class', 'md:mx-[100px] xl:mx-[300px] p-2 text-xl bg-[#8A1538] rounded-md font-bold text-center my-4 2xl:mx-[400px] shadow-lg shadow-[#00000059]')
                            }
                        } else {
                            let date = nav.appendChild(document.createElement('p'));
                            date.innerText = match.date;
                            date.setAttribute('class', 'text-center text-xl font-black text-zinc-300 rounded-md bg-[#8A1538] py-2 mx-[400px] shadow-lg shadow-[#00000059]')
                        }

                        let newDiv = nav.appendChild(document.createElement('div'));
                        newDiv.setAttribute('class', 'md:mx-[100px] xl:mx-[300px] p-2 text-xl bg-gray-800 text-center my-4 2xl:mx-[400px] shadow-lg shadow-[#00000059]');
                        newDiv.setAttribute('id', 'round-8')
        
                        let stage = newDiv.appendChild(document.createElement('p'));
                        stage.innerText = match.stage;
                        stage.setAttribute('class', 'stage');
                        
                        let teamsDiv = newDiv.appendChild(document.createElement('div'));
                        teamsDiv.setAttribute('class', 'flex justify-center py-3 text-2xl');
        
                        let homeTeam = teamsDiv.appendChild(document.createElement('p'));
                        homeTeam.innerText = match.homeTeam;
                        homeTeam.setAttribute('class', 'px-2');

                        if(match.flag_home != "./img/To Be Determined.svg.webp") {
                            let homeFlag = teamsDiv.appendChild(document.createElement('img'));
                            homeFlag.setAttribute('src', match.flag_home);
                            homeFlag.setAttribute('class', 'w-[28px] h-[20px] sm:mr-8 mt-[5px]');
                        }


                        if(match.time === "Completed" && match.homeGoals === match.awayGoals) {
                            let home_penalties = teamsDiv.appendChild(document.createElement('p'));
                            home_penalties.innerText = "(" + match.home_penalties + ")";
                        }
                        
                        let homeGoals = teamsDiv.appendChild(document.createElement('p'));
                        homeGoals.innerText = match.homeGoals;
                        homeGoals.setAttribute('class', 'px-3 sm:px-6');
        
                        let newSpan = teamsDiv.appendChild(document.createElement('p'));
                        newSpan.innerText = "-"
                        newSpan.setAttribute('class', 'span');
                        
                        let awayGoals = teamsDiv.appendChild(document.createElement('p'));
                        awayGoals.innerText = match.awayGoals;
                        awayGoals.setAttribute('class', 'px-3 sm:px-6');

                        if(match.time === "Completed" && match.homeGoals === match.awayGoals) {
                            let away_penalties = teamsDiv.appendChild(document.createElement('p'));
                            away_penalties.innerText = "(" + match.away_penalties + ")";
                        }
        
                        if(match.flag_away != "./img/To Be Determined.svg.webp") {
                            let awayFlag = teamsDiv.appendChild(document.createElement('img'));
                            awayFlag.setAttribute('src', match.flag_away);
                            awayFlag.setAttribute('class', 'w-[28px] h-[20px] sm:ml-8 mt-[5px]');
                        }

                        let awayTeam = teamsDiv.appendChild(document.createElement('p'));
                        awayTeam.innerText = match.awayTeam;
                        awayTeam.setAttribute('class', 'px-2');
        
                        let dateTime = newDiv.appendChild(document.createElement('p'));
                        dateTime.innerText = match.dateTime;
                        dateTime.setAttribute('class', 'date');
        
                        let venue = newDiv.appendChild(document.createElement('p'));
                        venue.innerText = match.venue;
                        venue.setAttribute('class', 'text-[20px]');
        
                        let time = newDiv.appendChild(document.createElement('p'));
                        time.innerText = match.time;
                        time.setAttribute('class', 'text-[#FEC310] font-bold');
        
                        if(match.winner === match.homeTeam) {
                            homeTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                        }
        
                        if(match.winner === match.awayTeam) {
                            awayTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                        }
        
                        if(match.winner === "Draw") {
                            homeTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                            awayTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                        }
                    
                })
            

    })
}

function quarterFinals(){
    fetch("https://worldcupjson.net/matches")
    .then((data) => data.json())
    .then((details) => {

            // get info about matches
            let stage_id = [56, 57, 58, 59]

                stage_id.forEach((id) => {
                    
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
    
                    if(match.time === undefined) {
                        match.time = details[id].status
                    }
    
                    if(match.time === "completed") {
                        match.time = "Completed";
                    }

                    if(match.time === "future_scheduled") {
                        match.time = "Upcoming"
                    }

                    if(match.time === "in_progress") {
                        match.time = "In progress. See live minute in today's matches"
                    }
    
                        let nav = document.getElementById('round-4');

                        if(id != 0) {
                            const prevMonth = details[id - 1].datetime.slice(5, 7);
                            const prevDay = details[id - 1].datetime.slice(8, 10);
                            let previousDate = prevDay + "-" + prevMonth + "-" + year

                            if(previousDate != match.date) {
                                let date = nav.appendChild(document.createElement('p'));
                                date.innerText = match.date;
                                date.setAttribute('class', 'md:mx-[100px] xl:mx-[300px] p-2 text-xl bg-[#8A1538] rounded-md font-bold text-center my-4 2xl:mx-[400px] shadow-lg shadow-[#00000059]')
                            }
                        } else {
                            let date = nav.appendChild(document.createElement('p'));
                            date.innerText = match.date;
                            date.setAttribute('class', 'md:mx-[100px] xl:mx-[300px] p-2 text-xl bg-[#8A1538] rounded-md font-bold text-center my-4 2xl:mx-[400px] shadow-lg shadow-[#00000059]')
                        }

                        let newDiv = nav.appendChild(document.createElement('div'));
                        newDiv.setAttribute('class', 'md:mx-[100px] xl:mx-[300px] p-2 text-xl bg-gray-800 text-center my-4 2xl:mx-[400px] shadow-lg shadow-[#00000059]');
                        newDiv.setAttribute('id', 'round-4')
        
                        let stage = newDiv.appendChild(document.createElement('p'));
                        stage.innerText = match.stage;
                        stage.setAttribute('class', 'stage');
                        
                        let teamsDiv = newDiv.appendChild(document.createElement('div'));
                        teamsDiv.setAttribute('class', 'flex justify-center py-3 text-2xl')
        
                        let homeTeam = teamsDiv.appendChild(document.createElement('p'));
                        homeTeam.innerText = match.homeTeam;
                        homeTeam.setAttribute('class', 'px-2');

                        if(match.flag_home != "./img/To Be Determined.svg.webp") {
                            let homeFlag = teamsDiv.appendChild(document.createElement('img'));
                            homeFlag.setAttribute('src', match.flag_home);
                            homeFlag.setAttribute('class', 'w-[28px] h-[20px] sm:mr-8 mt-[5px]');
                        }

                        if(match.time === "Completed" && match.homeGoals === match.awayGoals) {
                            let home_penalties = teamsDiv.appendChild(document.createElement('p'));
                            home_penalties.innerText = "(" + match.home_penalties + ")";
                        }
                        
                        let homeGoals = teamsDiv.appendChild(document.createElement('p'));
                        homeGoals.innerText = match.homeGoals;
                        homeGoals.setAttribute('class', 'px-3 sm:px-6');
        
                        let newSpan = teamsDiv.appendChild(document.createElement('p'));
                        newSpan.innerText = "-"
                        newSpan.setAttribute('class', 'span');
                        
                        let awayGoals = teamsDiv.appendChild(document.createElement('p'));
                        awayGoals.innerText = match.awayGoals;
                        awayGoals.setAttribute('class', 'px-3 sm:px-6');

                        if(match.time === "Completed" && match.homeGoals === match.awayGoals) {
                            let away_penalties = teamsDiv.appendChild(document.createElement('p'));
                            away_penalties.innerText = "(" + match.away_penalties + ")";
                        }
        
                        if(match.flag_away != "./img/To Be Determined.svg.webp") {
                            let awayFlag = teamsDiv.appendChild(document.createElement('img'));
                            awayFlag.setAttribute('src', match.flag_away);
                            awayFlag.setAttribute('class', 'w-[28px] h-[20px] sm:ml-8 mt-[5px]');
                        }

                        let awayTeam = teamsDiv.appendChild(document.createElement('p'));
                        awayTeam.innerText = match.awayTeam;
                        awayTeam.setAttribute('class', 'px-2');
        
                        let dateTime = newDiv.appendChild(document.createElement('p'));
                        dateTime.innerText = match.dateTime;
                        dateTime.setAttribute('class', 'date');
        
                        let venue = newDiv.appendChild(document.createElement('p'));
                        venue.innerText = match.venue;
                        venue.setAttribute('class', 'text-[20px]');
        
                        let time = newDiv.appendChild(document.createElement('p'));
                        time.innerText = match.time;
                        time.setAttribute('class', 'text-[#FEC310] font-bold');
        
                        if(match.winner === match.homeTeam) {
                            homeTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                        }
        
                        if(match.winner === match.awayTeam) {
                            awayTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                        }
        
                        if(match.winner === "Draw") {
                            homeTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                            awayTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                        }
                    
                })
            

    })
}

function semiFinal(){
    fetch("https://worldcupjson.net/matches")
    .then((data) => data.json())
    .then((details) => {
            // get info about matches
            let stage_id = [60, 61]

            
                stage_id.forEach((id) => {
    
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
    
                    if(match.time === undefined) {
                        match.time = details[id].status
                    }
    
                    if(match.time === "completed") {
                        match.time = "Completed";
                    }

                    if(match.time === "future_scheduled") {
                        match.time = "Upcoming"
                    } else if(match.time === "future_unscheduled") {
                        match.time = "Upcoming"
                    }

                    if(match.homeGoals === undefined || match.awayGoals === undefined) {
                        match.homeGoals = null;
                        match.awayGoals = null;
                        match.away_penalties = null;
                        match.home_penalties = null;
                    }

                    if(match.status === "in_progress" || match.time === "in_progress") {
                        match.time = "In progress. See live minute in today's matches"
                    }
    
                        let nav = document.getElementById('semifinal');

                        if(id != 0) {
                            const prevMonth = details[id - 1].datetime.slice(5, 7);
                            const prevDay = details[id - 1].datetime.slice(8, 10);
                            let previousDate = prevDay + "-" + prevMonth + "-" + year

                            if(previousDate != match.date) {
                                let date = nav.appendChild(document.createElement('p'));
                                date.innerText = match.date;
                                date.setAttribute('class', 'md:mx-[100px] xl:mx-[300px] p-2 text-xl bg-[#8A1538] rounded-md font-bold text-center my-4 2xl:mx-[400px] shadow-lg shadow-[#00000059]')
                            }
                        } else {
                            let date = nav.appendChild(document.createElement('p'));
                            date.innerText = match.date;
                            date.setAttribute('class', 'md:mx-[100px] xl:mx-[300px] p-2 text-xl bg-[#8A1538] rounded-md font-bold text-center my-4 2xl:mx-[400px] shadow-lg shadow-[#00000059]')
                        }

                        let newDiv = nav.appendChild(document.createElement('div'));
                        newDiv.setAttribute('class', 'md:mx-[100px] xl:mx-[300px] p-2 text-xl bg-gray-800 text-center my-4 2xl:mx-[400px] shadow-lg shadow-[#00000059]');
                        newDiv.setAttribute('id', 'semifinal')
        
                        let stage = newDiv.appendChild(document.createElement('p'));
                        stage.innerText = match.stage;
                        stage.setAttribute('class', 'stage');
                        
                        let teamsDiv = newDiv.appendChild(document.createElement('div'));
                        teamsDiv.setAttribute('class', 'flex justify-center py-3 text-2xl')
        
                        let homeTeam = teamsDiv.appendChild(document.createElement('p'));
                        homeTeam.innerText = match.homeTeam;
                        homeTeam.setAttribute('class', 'px-2');

                        if(match.flag_home != "./img/To Be Determined.svg.webp") {
                            let homeFlag = teamsDiv.appendChild(document.createElement('img'));
                            homeFlag.setAttribute('src', match.flag_home);
                            homeFlag.setAttribute('class', 'w-[28px] h-[20px] sm:mr-8 mt-[5px]');
                        }

                        if(match.homeGoals === match.awayGoals) {
                            if(match.time === "Completed") {
                                let away_penalties = teamsDiv.appendChild(document.createElement('p'));
                                away_penalties.innerText = "(" + match.away_penalties + ")";
                            }
                        }
                        
                        let homeGoals = teamsDiv.appendChild(document.createElement('p'));
                        homeGoals.innerText = match.homeGoals;
                        homeGoals.setAttribute('class', 'px-3 sm:px-6');
        
                        let newSpan = teamsDiv.appendChild(document.createElement('p'));
                        newSpan.innerText = "-"
                        newSpan.setAttribute('class', 'span');
                        
                        let awayGoals = teamsDiv.appendChild(document.createElement('p'));
                        awayGoals.innerText = match.awayGoals;
                        awayGoals.setAttribute('class', 'px-3 sm:px-6');

                        if(match.time === "Completed" && match.homeGoals === match.awayGoals) {
                            let away_penalties = teamsDiv.appendChild(document.createElement('p'));
                            away_penalties.innerText = "(" + match.away_penalties + ")";
                        }
        
                        if(match.flag_away != "./img/To Be Determined.svg.webp") {
                            let awayFlag = teamsDiv.appendChild(document.createElement('img'));
                            awayFlag.setAttribute('src', match.flag_away);
                            awayFlag.setAttribute('class', 'w-[28px] h-[20px] sm:ml-8 mt-[5px]');
                        }

                        let awayTeam = teamsDiv.appendChild(document.createElement('p'));
                        awayTeam.innerText = match.awayTeam;
                        awayTeam.setAttribute('class', 'px-2');
        
                        let dateTime = newDiv.appendChild(document.createElement('p'));
                        dateTime.innerText = match.dateTime;
                        dateTime.setAttribute('class', 'date');
        
                        let venue = newDiv.appendChild(document.createElement('p'));
                        venue.innerText = match.venue;
                        venue.setAttribute('class', 'text-[20px]');
        
                        let time = newDiv.appendChild(document.createElement('p'));
                        time.innerText = match.time;
                        time.setAttribute('class', 'text-[#FEC310] font-bold');
        
                        if(match.winner === match.homeTeam) {
                            homeTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                        }
        
                        if(match.winner === match.awayTeam) {
                            awayTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                        }
        
                        if(match.winner === "Draw") {
                            homeTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                            awayTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                        }
                    
                })
            

    })
}

function thirdPlace(){
    fetch("https://worldcupjson.net/matches")
    .then((data) => data.json())
    .then((details) => {
            
            // get info about matches
            let stage_id = [62]

            
                stage_id.forEach((id) => {
    
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
    
                    if(match.time === undefined) {
                        match.time = details[id].status
                    }
    
                    if(match.time === "completed") {
                        match.time = "Completed";
                    }

                    if(match.time === "future_scheduled") {
                        match.time = "Upcoming"
                    } else if(match.time === "future_unscheduled") {
                        match.time = "Upcoming"
                    }

                    if(match.homeGoals === undefined || match.awayGoals === undefined) {
                        match.homeGoals = null;
                        match.awayGoals = null;
                    }

                    if(match.status || match.time === "in_progress") {
                        match.time = "In progress. See live minute in today's matches"
                    }
                    
    
                        let nav = document.getElementById('third-place');

                        if(id != 0) {
                            const prevMonth = details[id - 1].datetime.slice(5, 7);
                            const prevDay = details[id - 1].datetime.slice(8, 10);
                            let previousDate = prevDay + "-" + prevMonth + "-" + year

                            if(previousDate != match.date) {
                                let date = nav.appendChild(document.createElement('p'));
                                date.innerText = match.date;
                                date.setAttribute('class', 'md:mx-[100px] xl:mx-[300px] p-2 text-xl bg-[#8A1538] rounded-md font-bold text-center my-4 2xl:mx-[400px] shadow-lg shadow-[#00000059]')
                            }
                        } else {
                            let date = nav.appendChild(document.createElement('p'));
                            date.innerText = match.date;
                            date.setAttribute('class', 'md:mx-[100px] xl:mx-[300px] p-2 text-xl bg-[#8A1538] rounded-md font-bold text-center my-4 2xl:mx-[400px] shadow-lg shadow-[#00000059]')
                        }

                        let newDiv = nav.appendChild(document.createElement('div'));
                        newDiv.setAttribute('class', 'md:mx-[100px] xl:mx-[300px] p-2 text-xl bg-gray-800 text-center my-4 2xl:mx-[400px] shadow-lg shadow-[#00000059]');
                        newDiv.setAttribute('id', 'third-place')
        
                        let stage = newDiv.appendChild(document.createElement('p'));
                        stage.innerText = match.stage;
                        stage.setAttribute('class', 'stage');
                        
                        let teamsDiv = newDiv.appendChild(document.createElement('div'));
                        teamsDiv.setAttribute('class', 'flex justify-center py-3 text-2xl')
                        
                        if(details[id].home_team.name === "To Be Determined") {
                            let homeTeam = teamsDiv.appendChild(document.createElement('p'));
                            homeTeam.innerText = match.homeTeam;
                            homeTeam.setAttribute('class', 'pr-[28px] sm:pr-[33px]');
                        } else {
                            let homeTeam = teamsDiv.appendChild(document.createElement('p'));
                            homeTeam.innerText = match.homeTeam;
                            homeTeam.setAttribute('class', 'px-2');
                        }

                        if(match.flag_home != "./img/To Be Determined.svg.webp") {
                            let homeFlag = teamsDiv.appendChild(document.createElement('img'));
                            homeFlag.setAttribute('src', match.flag_home);
                            homeFlag.setAttribute('class', 'w-[28px] h-[20px] sm:mr-8 mt-[5px]');
                        }

                        if(match.time === "Completed" && match.homeGoals === match.awayGoals) {
                            let away_penalties = teamsDiv.appendChild(document.createElement('p'));
                            away_penalties.innerText = "(" + match.away_penalties + ")";
                        }
                        
                        let homeGoals = teamsDiv.appendChild(document.createElement('p'));
                        homeGoals.innerText = match.homeGoals;
                        homeGoals.setAttribute('class', 'px-3 sm:px-6');
        
                        let newSpan = teamsDiv.appendChild(document.createElement('p'));
                        newSpan.innerText = "-"
                        newSpan.setAttribute('class', 'span');
                        
                        let awayGoals = teamsDiv.appendChild(document.createElement('p'));
                        awayGoals.innerText = match.awayGoals;
                        awayGoals.setAttribute('class', 'px-3 sm:px-6');

                        if(match.time === "Completed" && match.homeGoals === match.awayGoals) {
                            let away_penalties = teamsDiv.appendChild(document.createElement('p'));
                            away_penalties.innerText = "(" + match.away_penalties + ")";
                        }
        
                        if(match.flag_away != "./img/To Be Determined.svg.webp") {
                            let awayFlag = teamsDiv.appendChild(document.createElement('img'));
                            awayFlag.setAttribute('src', match.flag_away);
                            awayFlag.setAttribute('class', 'w-[28px] h-[20px] sm:ml-8 mt-[5px]');
                        }

                        if(details[id].away_team.name === "To Be Determined") {
                            let awayTeam = teamsDiv.appendChild(document.createElement('p'));
                            awayTeam.innerText = match.awayTeam;
                            awayTeam.setAttribute('class', 'pl-[28px] sm:pl-[60px]');
                        } else {
                            let awayTeam = teamsDiv.appendChild(document.createElement('p'));
                            awayTeam.innerText = match.awayTeam;
                            awayTeam.setAttribute('class', 'px-2');
                        }
        
                        let dateTime = newDiv.appendChild(document.createElement('p'));
                        dateTime.innerText = match.dateTime;
                        dateTime.setAttribute('class', 'date');
        
                        let venue = newDiv.appendChild(document.createElement('p'));
                        venue.innerText = match.venue;
                        venue.setAttribute('class', 'text-[20px]');
        
                        let time = newDiv.appendChild(document.createElement('p'));
                        time.innerText = match.time;
                        time.setAttribute('class', 'text-[#FEC310] font-bold');
        
                        if(match.winner === match.homeTeam) {
                            homeTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                        }
        
                        if(match.winner === match.awayTeam) {
                            awayTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                        }
        
                        if(match.winner === "Draw") {
                            homeTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                            awayTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                        }
                    
                })
            

    })
}

function finale(){
    fetch("https://worldcupjson.net/matches")
    .then((data) => data.json())
    .then((details) => {

            // get info about matches
            let stage_id = [63]

            
                stage_id.forEach((id) => {
    
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
    
                    if(match.time === undefined) {
                        match.time = details[id].status
                    }
    
                    if(match.time === "completed") {
                        match.time = "Completed";
                    }

                    if(match.time === "future_scheduled") {
                        match.time = "Upcoming"
                    } else if(match.time === "future_unscheduled") {
                        match.time = "Upcoming"
                    }

                    if(match.homeGoals === undefined || match.awayGoals === undefined) {
                        match.homeGoals = null;
                        match.awayGoals = null;
                    }
                    
                    if(match.status || match.time === "in_progress") {
                        match.time = "In progress. See live minute in today's matches"
                    }
    
                        let nav = document.getElementById('final');

                        if(id != 0) {
                            const prevMonth = details[id - 1].datetime.slice(5, 7);
                            const prevDay = details[id - 1].datetime.slice(8, 10);
                            let previousDate = prevDay + "-" + prevMonth + "-" + year


                            if(previousDate != match.date) {
                                let date = nav.appendChild(document.createElement('p'));
                                date.innerText = match.date;
                                date.setAttribute('class', 'md:mx-[100px] xl:mx-[300px] p-2 text-xl bg-[#8A1538] rounded-md font-bold text-center my-4 2xl:mx-[400px] shadow-lg shadow-[#00000059]')
                            }
                        } else {
                            let date = nav.appendChild(document.createElement('p'));
                            date.innerText = match.date;
                            date.setAttribute('class', 'md:mx-[100px] xl:mx-[300px] p-2 text-xl bg-[#8A1538] rounded-md font-bold text-center my-4 2xl:mx-[400px] shadow-lg shadow-[#00000059]')
                        }

                        let newDiv = nav.appendChild(document.createElement('div'));
                        newDiv.setAttribute('class', 'md:mx-[100px] xl:mx-[300px] p-2 text-xl bg-gray-800 text-center my-4 2xl:mx-[400px] shadow-lg shadow-[#00000059]');
                        newDiv.setAttribute('id', 'final')
        
                        let stage = newDiv.appendChild(document.createElement('p'));
                        stage.innerText = match.stage;
                        stage.setAttribute('class', 'stage text-[#8A1538] font-bold');
                        
                        let teamsDiv = newDiv.appendChild(document.createElement('div'));
                        teamsDiv.setAttribute('class', 'flex justify-center py-3 text-2xl')
        
                        if(details[id].home_team.name === "To Be Determined") {
                            let homeTeam = teamsDiv.appendChild(document.createElement('p'));
                            homeTeam.innerText = match.homeTeam;
                            homeTeam.setAttribute('class', 'pr-[28px] sm:pr-[70px]');
                        } else {
                            let homeTeam = teamsDiv.appendChild(document.createElement('p'));
                            homeTeam.innerText = match.homeTeam;
                            homeTeam.setAttribute('class', 'px-2');
                        }

                        if(match.flag_home != "./img/To Be Determined.svg.webp") {
                            let homeFlag = teamsDiv.appendChild(document.createElement('img'));
                            homeFlag.setAttribute('src', match.flag_home);
                            homeFlag.setAttribute('class', 'w-[28px] h-[20px] sm:mr-8 mt-[5px]');
                        }

                        if(match.time === "Completed" && match.homeGoals === match.awayGoals) {
                            let away_penalties = teamsDiv.appendChild(document.createElement('p'));
                            away_penalties.innerText = "(" + match.away_penalties + ")";
                        }
                        
                        let homeGoals = teamsDiv.appendChild(document.createElement('p'));
                        homeGoals.innerText = match.homeGoals;
                        homeGoals.setAttribute('class', 'px-3 sm:px-6');
        
                        let newSpan = teamsDiv.appendChild(document.createElement('p'));
                        newSpan.innerText = "-"
                        newSpan.setAttribute('class', 'span');
                        
                        let awayGoals = teamsDiv.appendChild(document.createElement('p'));
                        awayGoals.innerText = match.awayGoals;
                        awayGoals.setAttribute('class', 'px-3 sm:px-6');

                        if(match.time === "Completed" && match.homeGoals === match.awayGoals) {
                            let away_penalties = teamsDiv.appendChild(document.createElement('p'));
                            away_penalties.innerText = "(" + match.away_penalties + ")";
                        }
        
                        if(match.flag_away != "./img/To Be Determined.svg.webp") {
                            let awayFlag = teamsDiv.appendChild(document.createElement('img'));
                            awayFlag.setAttribute('src', match.flag_away);
                            awayFlag.setAttribute('class', 'w-[28px] h-[20px] sm:ml-8 mt-[5px]');
                        }

                        if(details[id].away_team.name === "To Be Determined") {
                            let awayTeam = teamsDiv.appendChild(document.createElement('p'));
                            awayTeam.innerText = match.awayTeam;
                            awayTeam.setAttribute('class', 'pl-[28px] sm:pl-[70px]');
                        } else {
                            let awayTeam = teamsDiv.appendChild(document.createElement('p'));
                            awayTeam.innerText = match.awayTeam;
                            awayTeam.setAttribute('class', 'px-2');
                        }
        
                        let dateTime = newDiv.appendChild(document.createElement('p'));
                        dateTime.innerText = match.dateTime;
                        dateTime.setAttribute('class', 'date');
        
                        let venue = newDiv.appendChild(document.createElement('p'));
                        venue.innerText = match.venue;
                        venue.setAttribute('class', 'text-[20px]');
        
                        let time = newDiv.appendChild(document.createElement('p'));
                        time.innerText = match.time;
                        time.setAttribute('class', 'text-[#FEC310] font-bold');
        
                        if(match.winner === match.homeTeam) {
                            homeTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                        }
        
                        if(match.winner === match.awayTeam) {
                            awayTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                        }
        
                        if(match.winner === "Draw") {
                            homeTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                            awayTeam.setAttribute('class', 'text-[#1077C3] px-2 font-bold');
                        }
                    
                })
            

    })
}
// calling all functions
groupstage();
roundof16();
quarterFinals();
semiFinal();
thirdPlace();
finale();