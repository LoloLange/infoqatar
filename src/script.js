const gs = document.getElementById('gs');
const r8 = document.getElementById('r8');
const r4 = document.getElementById('r4');
const sf = document.getElementById('sf');
const p3 = document.getElementById('3p');
const fi = document.getElementById('fi');

const group_stage = document.getElementById('group-stage');
const round_8 = document.getElementById('round-8');
const round_4 = document.getElementById('round-4');
const third_place = document.getElementById('third-place');
const semifinal = document.getElementById('semifinal');
const final = document.getElementById('final');


let fases = [gs, r8, r4, sf, p3, fi];

let fases_nav = [group_stage, round_8, round_4, semifinal, third_place, final];


// fases.forEach((fase) => {
//     fase.addEventListener('click', () => {
//         fases.forEach((fase) => {
//             fase.setAttribute('aria-selected', 'false');
//             fase.setAttribute('aria-hidden', 'true');
//         })
//         fase.setAttribute('aria-selected', 'true');
//         fase.setAttribute('aria-hidden', 'false');

//         fases_nav.forEach((fase) => {
//             fase.setAttribute('aria-current', 'false');
//             fase.setAttribute('aria-hidden', 'true');
//         })
//         fase.setAttribute('aria-current', 'true');
//         fase.setAttribute('aria-hidden', 'false');

//     })
// })

const groupStage = () => {
    gs.addEventListener('click', () => {
        fases_nav.forEach((fase) => {
            fase.setAttribute('aria-hidden', 'true');
            fase.setAttribute('aria-selected', 'false');
            fase.setAttribute('aria-current', 'false');
        })
        group_stage.setAttribute('aria-hidden', 'false');
        group_stage.setAttribute('aria-selected', 'true');
        group_stage.setAttribute('aria-current', 'true');

    })
}

const round8 = () => {
    r8.addEventListener('click', () => {
        fases_nav.forEach((fase) => {
            fase.setAttribute('aria-hidden', 'true');
            fase.setAttribute('aria-selected', 'false');
            fase.setAttribute('aria-current', 'false');
        })
        round_8.setAttribute('aria-hidden', 'false');
        round_8.setAttribute('aria-selected', 'true');
        round_8.setAttribute('aria-current', 'true');
    })
}

const round4 = () => {
    r4.addEventListener('click', () => {
        fases_nav.forEach((fase) => {
            fase.setAttribute('aria-hidden', 'true');
            fase.setAttribute('aria-selected', 'false');
            fase.setAttribute('aria-current', 'false');
        })
        round_4.setAttribute('aria-hidden', 'false');
        round_4.setAttribute('aria-selected', 'true');
        round_4.setAttribute('aria-current', 'true');
    })
}

const semifinals = () => {
    sf.addEventListener('click', () => {
        fases_nav.forEach((fase) => {
            fase.setAttribute('aria-hidden', 'true');
            fase.setAttribute('aria-selected', 'false');
            fase.setAttribute('aria-current', 'false');
        })
        semifinal.setAttribute('aria-hidden', 'false');
        semifinal.setAttribute('aria-selected', 'true');
        semifinal.setAttribute('aria-current', 'true');
    })
}

const thirdplace = () => {
    p3.addEventListener('click', () => {
        fases_nav.forEach((fase) => {
            fase.setAttribute('aria-hidden', 'true');
            fase.setAttribute('aria-selected', 'false');
            fase.setAttribute('aria-current', 'false');
        })
        third_place.setAttribute('aria-hidden', 'false');
        third_place.setAttribute('aria-selected', 'true');
        third_place.setAttribute('aria-current', 'true');
    })
}

const final1 = () => {
    fi.addEventListener('click', () => {
        fases_nav.forEach((fase) => {
            fase.setAttribute('aria-hidden', 'true');
            fase.setAttribute('aria-selected', 'false');
            fase.setAttribute('aria-current', 'false');
        })
        final.setAttribute('aria-hidden', 'false');
        final.setAttribute('aria-selected', 'true');
        final.setAttribute('aria-current', 'true');
    })
}

groupStage();
round8();
round4();
semifinals();
thirdplace();
final1();