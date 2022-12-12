function groups(){
    fetch("https://worldcupjson.net/teams")
    .then((data) => data.json())
    .then((details) => {
        console.log(details);

        let groups_id = [0, 1, 2, 3, 4, 5, 6, 7];

        groups_id.forEach((id) => {
            const groups = {
                group_name: details.groups[id].letter,
                team_1: details.groups[id].teams[0].name,
                team_2: details.groups[id].teams[1].name,
                team_3: details.groups[id].teams[2].name,
                team_4: details.groups[id].teams[3].name,
            }

            let nav = document.getElementById("groups");
            let newDiv = nav.appendChild(document.createElement("div"));
            newDiv.setAttribute("id", `group_${groups.group_name}`);
            newDiv.setAttribute("class", "flex lg:justify-center")
            newDiv.setAttribute("style", "overflow-x:auto;")
            
            let group_name = newDiv.appendChild(document.createElement("p"));
            group_name.innerText = "Group " + groups.group_name;
            group_name.setAttribute("class", "absolute text-2xl text-zinc-200 translate-y-[50px] max-lg:translate-x-[15px]");
            
            let table = newDiv.appendChild(document.createElement("table"));
            table.setAttribute("class", "border-separate border border-slate-700 bg-[#330815] text-md mt-[100px] rounded-[4px] w-[1000px]");
            table.setAttribute("id", "table");
            

            // thead
            let thead = table.appendChild(document.createElement("thead"));
            
            let tr_h = thead.appendChild(document.createElement("tr"));
            tr_h.setAttribute("class", "")

            let thh = tr_h.appendChild(document.createElement("th"));
            thh.innerText = "Team"
            thh.setAttribute("class", "text-left")

            let thh_1 = tr_h.appendChild(document.createElement("th"));
            thh_1.innerText = "PTS"
            
            let thh_2 = tr_h.appendChild(document.createElement("th"));
            thh_2.innerText = "G"

            let thh_3 = tr_h.appendChild(document.createElement("th"));
            thh_3.innerText = "W"

            let thh_4 = tr_h.appendChild(document.createElement("th"));
            thh_4.innerText = "D"

            let thh_5 = tr_h.appendChild(document.createElement("th"));
            thh_5.innerText = "L"

            let thh_6 = tr_h.appendChild(document.createElement("th"));
            thh_6.innerText = "GD"


            //tbody

            
            position = [1, 2, 3, 4]

            switch(id) {
                case 0:
                    teams_b = [1, 2, 3, 0];
                    break;
                case 1:
                    teams_b = [0, 3, 2, 1];
                    break;
                case 2:
                    teams_b = [2, 1, 0, 3];
                    break;
                case 3:
                    teams_b = [3, 1, 0, 2];
                    break;
                case 4:
                    teams_b = [1, 0, 3, 2];
                    break;
                case 5:
                    teams_b = [2, 0, 1, 3];
                    break;
                case 6:
                    teams_b = [0, 3, 2, 1];
                    break;
                case 7:
                    teams_b = [2, 3, 1, 0];
                    break;
            }

            let tbody = table.appendChild(document.createElement("tbody"));
            
            teams_b.forEach((team) => {
                let tr_b = tbody.appendChild(document.createElement("tr"));
                let newDiv = tr_b.appendChild(document.createElement("div"));
                newDiv.setAttribute("class", "flex");

                let flag = newDiv.appendChild(document.createElement("img"));
                flag.setAttribute('src', "./img/" +  details.groups[id].teams[team].name + ".svg.webp");
                flag.setAttribute('class', 'w-[28px] h-[20px] mr-5');
    
                let thb = newDiv.appendChild(document.createElement("td"));
                thb.innerText = details.groups[id].teams[team].name
                thb.setAttribute("class", "text-left")

                let tdb_1 = tr_b.appendChild(document.createElement("td"));
                tdb_1.innerText = details.groups[id].teams[team].group_points;

                let tdb_2 = tr_b.appendChild(document.createElement("td"));
                tdb_2.innerText = details.groups[id].teams[team].games_played;

                let tdb_3 = tr_b.appendChild(document.createElement("td"));
                tdb_3.innerText = details.groups[id].teams[team].wins;

                let tdb_4 = tr_b.appendChild(document.createElement("td"));
                tdb_4.innerText = details.groups[id].teams[team].draws;

                let tdb_5 = tr_b.appendChild(document.createElement("td"));
                tdb_5.innerText = details.groups[id].teams[team].losses;

                let tdb_6 = tr_b.appendChild(document.createElement("td"));
                tdb_6.innerText = details.groups[id].teams[team].goal_differential;
            })

            

        })

})}

groups();