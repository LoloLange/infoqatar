function groupstage(){
    fetch("https://worldcupjson.net/matches")
    .then((data) => data.json())
    .then((details) => {
        console.log(details);

            // get info about matches
            let stage_id = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]

            
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
                        stage: "Group stage",
                        time: details[id].time,
                        id: details[id].id,
                        home_penalties: details[id].home_team.penalties,
                        away_penalties: details[id].away_team.penalties,
                        date: day + "-" + month + "-" + year,
                        dateTime: newDate,
                        winner: details[id].winner_code
                    }
    
                    if(match.time === undefined) {
                        match.time = details[id].status
                    }
    
                    if(match.time === "completed") {
                        match.time = "Completed";
                    }
                    
                    
    
                        let nav = document.getElementById('group-stage');
                        let newDiv = nav.appendChild(document.createElement('div'));
                        newDiv.setAttribute('class', 'p-2 text-xl bg-gray-800 text-center my-4 mx-[400px] shadow-lg shadow-[#00000059]');
                        newDiv.setAttribute('id', 'group-stage')
        
                        let stage = newDiv.appendChild(document.createElement('p'));
                        stage.innerText = match.stage;
                        stage.setAttribute('class', 'stage');
                        
                        let teamsDiv = newDiv.appendChild(document.createElement('div'));
                        teamsDiv.setAttribute('class', 'flex justify-center py-3 text-2xl')
        
                        let homeTeam = teamsDiv.appendChild(document.createElement('p'));
                        homeTeam.innerText = match.homeTeam;
                        homeTeam.setAttribute('class', 'px-10');
                        
                        let homeGoals = teamsDiv.appendChild(document.createElement('p'));
                        homeGoals.innerText = match.homeGoals;
                        homeGoals.setAttribute('class', 'px-6');
        
                        let newSpan = teamsDiv.appendChild(document.createElement('p'));
                        newSpan.innerText = "-"
                        newSpan.setAttribute('class', 'span');
                        
                        let awayGoals = teamsDiv.appendChild(document.createElement('p'));
                        awayGoals.innerText = match.awayGoals;
                        awayGoals.setAttribute('class', 'px-6');
        
                        let awayTeam = teamsDiv.appendChild(document.createElement('p'));
                        awayTeam.innerText = match.awayTeam;
                        awayTeam.setAttribute('class', 'px-10');
        
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
                            homeTeam.setAttribute('class', 'text-[#1077C3] px-10 font-bold');
                        }
        
                        if(match.winner === match.awayTeam) {
                            awayTeam.setAttribute('class', 'text-[#1077C3] px-10 font-bold');
                        }
        
                        if(match.winner === "Draw") {
                            homeTeam.setAttribute('class', 'text-[#1077C3] px-10 font-bold');
                            awayTeam.setAttribute('class', 'text-[#1077C3] px-10 font-bold');
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
                        winner: details[id].winner_code
                    }
    
                    if(match.time === undefined) {
                        match.time = details[id].status
                    }
    
                    if(match.time === "completed") {
                        match.time = "Completed";
                    }
                    
                    
    
                        let nav = document.getElementById('round-8');
                        let newDiv = nav.appendChild(document.createElement('div'));
                        newDiv.setAttribute('class', 'p-2 text-xl bg-gray-800 text-center my-4 mx-[400px] shadow-lg shadow-[#00000059]');
                        newDiv.setAttribute('id', 'round-8')
        
                        let stage = newDiv.appendChild(document.createElement('p'));
                        stage.innerText = match.stage;
                        stage.setAttribute('class', 'stage');
                        
                        let teamsDiv = newDiv.appendChild(document.createElement('div'));
                        teamsDiv.setAttribute('class', 'flex justify-center py-3 text-2xl')
        
                        let homeTeam = teamsDiv.appendChild(document.createElement('p'));
                        homeTeam.innerText = match.homeTeam;
                        homeTeam.setAttribute('class', 'px-10');
                        
                        let homeGoals = teamsDiv.appendChild(document.createElement('p'));
                        homeGoals.innerText = match.homeGoals;
                        homeGoals.setAttribute('class', 'px-6');
        
                        let newSpan = teamsDiv.appendChild(document.createElement('p'));
                        newSpan.innerText = "-"
                        newSpan.setAttribute('class', 'span');
                        
                        let awayGoals = teamsDiv.appendChild(document.createElement('p'));
                        awayGoals.innerText = match.awayGoals;
                        awayGoals.setAttribute('class', 'px-6');
        
                        let awayTeam = teamsDiv.appendChild(document.createElement('p'));
                        awayTeam.innerText = match.awayTeam;
                        awayTeam.setAttribute('class', 'px-10');
        
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
                            homeTeam.setAttribute('class', 'text-[#1077C3] px-10 font-bold');
                        }
        
                        if(match.winner === match.awayTeam) {
                            awayTeam.setAttribute('class', 'text-[#1077C3] px-10 font-bold');
                        }
        
                        if(match.winner === "Draw") {
                            homeTeam.setAttribute('class', 'text-[#1077C3] px-10 font-bold');
                            awayTeam.setAttribute('class', 'text-[#1077C3] px-10 font-bold');
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
                        winner: details[id].winner_code
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
                    
    
                        let nav = document.getElementById('round-4');
                        let newDiv = nav.appendChild(document.createElement('div'));
                        newDiv.setAttribute('class', 'p-2 text-xl bg-gray-800 text-center my-4 mx-[400px] shadow-lg shadow-[#00000059]');
                        newDiv.setAttribute('id', 'round-4')
        
                        let stage = newDiv.appendChild(document.createElement('p'));
                        stage.innerText = match.stage;
                        stage.setAttribute('class', 'stage');
                        
                        let teamsDiv = newDiv.appendChild(document.createElement('div'));
                        teamsDiv.setAttribute('class', 'flex justify-center py-3 text-2xl')
        
                        let homeTeam = teamsDiv.appendChild(document.createElement('p'));
                        homeTeam.innerText = match.homeTeam;
                        homeTeam.setAttribute('class', 'px-10');
                        
                        let homeGoals = teamsDiv.appendChild(document.createElement('p'));
                        homeGoals.innerText = match.homeGoals;
                        homeGoals.setAttribute('class', 'px-6');
        
                        let newSpan = teamsDiv.appendChild(document.createElement('p'));
                        newSpan.innerText = "-"
                        newSpan.setAttribute('class', 'span');
                        
                        let awayGoals = teamsDiv.appendChild(document.createElement('p'));
                        awayGoals.innerText = match.awayGoals;
                        awayGoals.setAttribute('class', 'px-6');
        
                        let awayTeam = teamsDiv.appendChild(document.createElement('p'));
                        awayTeam.innerText = match.awayTeam;
                        awayTeam.setAttribute('class', 'px-10');
        
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
                            homeTeam.setAttribute('class', 'text-[#1077C3] px-10 font-bold');
                        }
        
                        if(match.winner === match.awayTeam) {
                            awayTeam.setAttribute('class', 'text-[#1077C3] px-10 font-bold');
                        }
        
                        if(match.winner === "Draw") {
                            homeTeam.setAttribute('class', 'text-[#1077C3] px-10 font-bold');
                            awayTeam.setAttribute('class', 'text-[#1077C3] px-10 font-bold');
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
                        winner: details[id].winner_code
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

                    if(match.homeGoals || match.awayGoals === undefined) {
                        match.homeGoals = null;
                        match.awayGoals = null;
                    }
                    
    
                        let nav = document.getElementById('semifinal');
                        let newDiv = nav.appendChild(document.createElement('div'));
                        newDiv.setAttribute('class', 'p-2 text-xl bg-gray-800 text-center my-4 mx-[400px] shadow-lg shadow-[#00000059]');
                        newDiv.setAttribute('id', 'semifinal')
        
                        let stage = newDiv.appendChild(document.createElement('p'));
                        stage.innerText = match.stage;
                        stage.setAttribute('class', 'stage');
                        
                        let teamsDiv = newDiv.appendChild(document.createElement('div'));
                        teamsDiv.setAttribute('class', 'flex justify-center py-3 text-2xl')
        
                        let homeTeam = teamsDiv.appendChild(document.createElement('p'));
                        homeTeam.innerText = match.homeTeam;
                        homeTeam.setAttribute('class', 'px-10');
                        
                        let homeGoals = teamsDiv.appendChild(document.createElement('p'));
                        homeGoals.innerText = match.homeGoals;
                        homeGoals.setAttribute('class', 'px-6');
        
                        let newSpan = teamsDiv.appendChild(document.createElement('p'));
                        newSpan.innerText = "-"
                        newSpan.setAttribute('class', 'span');
                        
                        let awayGoals = teamsDiv.appendChild(document.createElement('p'));
                        awayGoals.innerText = match.awayGoals;
                        awayGoals.setAttribute('class', 'px-6');
        
                        let awayTeam = teamsDiv.appendChild(document.createElement('p'));
                        awayTeam.innerText = match.awayTeam;
                        awayTeam.setAttribute('class', 'px-10');
        
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
                            homeTeam.setAttribute('class', 'text-[#1077C3] px-10 font-bold');
                        }
        
                        if(match.winner === match.awayTeam) {
                            awayTeam.setAttribute('class', 'text-[#1077C3] px-10 font-bold');
                        }
        
                        if(match.winner === "Draw") {
                            homeTeam.setAttribute('class', 'text-[#1077C3] px-10 font-bold');
                            awayTeam.setAttribute('class', 'text-[#1077C3] px-10 font-bold');
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
                        winner: details[id].winner_code
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

                    if(match.homeGoals || match.awayGoals === undefined) {
                        match.homeGoals = null;
                        match.awayGoals = null;
                    }
                    
    
                        let nav = document.getElementById('third-place');
                        let newDiv = nav.appendChild(document.createElement('div'));
                        newDiv.setAttribute('class', 'p-2 text-xl bg-gray-800 text-center my-4 mx-[400px] shadow-lg shadow-[#00000059]');
                        newDiv.setAttribute('id', 'third-place')
        
                        let stage = newDiv.appendChild(document.createElement('p'));
                        stage.innerText = match.stage;
                        stage.setAttribute('class', 'stage');
                        
                        let teamsDiv = newDiv.appendChild(document.createElement('div'));
                        teamsDiv.setAttribute('class', 'flex justify-center py-3 text-2xl')
        
                        let homeTeam = teamsDiv.appendChild(document.createElement('p'));
                        homeTeam.innerText = match.homeTeam;
                        homeTeam.setAttribute('class', 'px-10');
                        
                        let homeGoals = teamsDiv.appendChild(document.createElement('p'));
                        homeGoals.innerText = match.homeGoals;
                        homeGoals.setAttribute('class', 'px-6');
        
                        let newSpan = teamsDiv.appendChild(document.createElement('p'));
                        newSpan.innerText = "-"
                        newSpan.setAttribute('class', 'span');
                        
                        let awayGoals = teamsDiv.appendChild(document.createElement('p'));
                        awayGoals.innerText = match.awayGoals;
                        awayGoals.setAttribute('class', 'px-6');
        
                        let awayTeam = teamsDiv.appendChild(document.createElement('p'));
                        awayTeam.innerText = match.awayTeam;
                        awayTeam.setAttribute('class', 'px-10');
        
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
                            homeTeam.setAttribute('class', 'text-[#1077C3] px-10 font-bold');
                        }
        
                        if(match.winner === match.awayTeam) {
                            awayTeam.setAttribute('class', 'text-[#1077C3] px-10 font-bold');
                        }
        
                        if(match.winner === "Draw") {
                            homeTeam.setAttribute('class', 'text-[#1077C3] px-10 font-bold');
                            awayTeam.setAttribute('class', 'text-[#1077C3] px-10 font-bold');
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
                        winner: details[id].winner_code
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

                    if(match.homeGoals || match.awayGoals === undefined) {
                        match.homeGoals = null;
                        match.awayGoals = null;
                    }
                    
    
                        let nav = document.getElementById('final');
                        let newDiv = nav.appendChild(document.createElement('div'));
                        newDiv.setAttribute('class', 'p-2 text-xl bg-gray-800 text-center my-4 mx-[400px] shadow-lg shadow-[#00000059]');
                        newDiv.setAttribute('id', 'final')
        
                        let stage = newDiv.appendChild(document.createElement('p'));
                        stage.innerText = match.stage;
                        stage.setAttribute('class', 'stage');
                        
                        let teamsDiv = newDiv.appendChild(document.createElement('div'));
                        teamsDiv.setAttribute('class', 'flex justify-center py-3 text-2xl')
        
                        let homeTeam = teamsDiv.appendChild(document.createElement('p'));
                        homeTeam.innerText = match.homeTeam;
                        homeTeam.setAttribute('class', 'px-10');
                        
                        let homeGoals = teamsDiv.appendChild(document.createElement('p'));
                        homeGoals.innerText = match.homeGoals;
                        homeGoals.setAttribute('class', 'px-6');
        
                        let newSpan = teamsDiv.appendChild(document.createElement('p'));
                        newSpan.innerText = "-"
                        newSpan.setAttribute('class', 'span');
                        
                        let awayGoals = teamsDiv.appendChild(document.createElement('p'));
                        awayGoals.innerText = match.awayGoals;
                        awayGoals.setAttribute('class', 'px-6');
        
                        let awayTeam = teamsDiv.appendChild(document.createElement('p'));
                        awayTeam.innerText = match.awayTeam;
                        awayTeam.setAttribute('class', 'px-10');
        
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
                            homeTeam.setAttribute('class', 'text-[#1077C3] px-10 font-bold');
                        }
        
                        if(match.winner === match.awayTeam) {
                            awayTeam.setAttribute('class', 'text-[#1077C3] px-10 font-bold');
                        }
        
                        if(match.winner === "Draw") {
                            homeTeam.setAttribute('class', 'text-[#1077C3] px-10 font-bold');
                            awayTeam.setAttribute('class', 'text-[#1077C3] px-10 font-bold');
                        }
                    
                })
            

    })
}

groupstage();
roundof16();
quarterFinals();
semiFinal();
thirdPlace();
finale();