function experience(){
    return{
        jobs:[
            {id: 1, company_name:"Avit Group", function_name: "ServiceCounter Medewerker",specialty:"Stage", sector:"ICT", start_period: "Jan. 2022", end_period:"Jul. 2022", description:"Geholpen met het installeren en configureren van werkstations (MAC & Windows) binnen AVIT. Ook eindgebruikers geholpen met ICT gerelateerde problemen."},
            {id: 2, company_name:"Rotaform", function_name: "Junior system Administrator",specialty:"Stage", sector:"ICT", start_period: "Aug. 2022", end_period:"Jan. 2023", description:"Werkplekken geïnstalleerd bij verschillende afdelingen, Verschillende ICT gerelateerde issues binnen de afdelingen opgelost. Bijgedragen aan de opzetten van nieuwe vergaderruimtes en updaten van oude. Meegeholpen aan de verhuizing van afdelingen en interne registratie van apparatuur en voorraad bijgewerkt."},
            {id: 3, company_name:"MCM-Research", function_name: "Stagiair Software Developer", specialty:"Stage", sector:"ICT", start_period: "Sep. 2025", end_period:"Mrt. 2026", description:"Een Dashboard gemaakt met Vue.js (Vue3). Met WordPress een website gemaakt en een al bestaande website aangepast. Mee geholpen met herstructurering van werkplekmanagement uit domein."},
        ],
        education:[
            {id: 1 ,education_lvl:"MBO 4", name:"Expert IT systems and devices", location:"ROC Lelystad", start_period: "2020", end_period:"2023", description:"Hierbij heb ik geleerd systemen en netwerken te configureren en te beheren. Geleerd over cybersecurity en het implementeren daarvan, en over SQL en databases. Heb deze opleiding volledig afgerond."},
            {id: 2 ,education_lvl:"MBO 4", name:"Software Developer", location:"MBO College Almere Buiten", start_period: "2024", end_period:"2026", description:"Tijdens deze opleiding ervaring opgedaan met de volgende programmeertalen: JavaScript, PHP, MySQL, HTML & CSS. Ook heb ik hierbij ervaring opgedaan met frameworks zoals Laravel & JavaScript"}
        ]
    }

}

function projects(){
    return{
        projecten:[
            {id:1, project_name:"Vue3 Dashboard",link:null, img:"img/projects/Dashboard.png", used_languages:['Javascript','PHP', 'SQL'], used_frameworks:['Vue3', 'Tailwindcss'], description:"Dit was project die ik had gemaaktop stage. Een dashboard voor het controleren en aanpassen van onderzoeksgegevens en interviews op schiphol."},
            {id:2, project_name:"KanBanboard",link:'https://github.com/RobbeGT3/KanBanBoard', img:"img/projects/kanbanboard.png",  used_languages:['Javascript','HTML','CSS'], used_frameworks:[], description:"KanBan planning bord die ik zelf heb gemaakt met standaard HTML, CSS en JavaScript. Hierin kan je taken aanmaken, editen en deleten. Ook kan je de status van een taak veranderen doormiddel van een drag & drop functie."},
            {id:3, project_name:"Fullstack Project",link:'https://github.com/RobbeGT3/FullStack', img:"img/projects/fullstack.png", used_languages:['Javascript','CSS', 'PHP','HTML', 'SQL'], used_frameworks:[] , description:"Standaard informatie beheer applicatie. Hierin kunnen gebruikers worden aangepast, aangemaakt en verwijderd worden."},
            {id:4, project_name:"Voedselbank Examenproject",link:'https://github.com/RobbeGT3/Examenopdracht', img:"img/projects/voedselbank examenproject.png",  used_languages:['Javascript', 'PHP','HTML', 'SQL', 'CSS'], used_frameworks:[], description:"Een Multipurpose dashboard voor mijn eindexamen. Hierin kan voorraad, klantenen useraccounts beheerd worden, en kunnen voedselpakketten aangemaakt worden voor uitgave aan actieve klanten.",},
            {id:5, project_name:"ATC Website",link:null, img:"img/projects/ATCWebsiteDashboard.png", used_languages:['Javascript', 'PHP','HTML', 'CSS'], used_frameworks:['WordPress'], description:"Voor de Almeerse Tafeltennis club met WordPress een verenigings website opgezet voor nieuwe potentiële leden. Hierop konden mensen training schema's, bestuurs informatie, inschrijf informatie en toernooi informatie vinden. Ook kunnen mensen nieuws berichten lezen van de club zelf."}
        ]
    }

}

function skills(){
    return{
        hard:{
            framework:[
                {name:'Vue3',img:'img/logos/Vue.png', lvl:'Intermediate', start:'2025', type:'Framework'},
                {name:'Laravel',img:'img/logos/Laravel.jpeg', lvl:'Beginner', start:'2025', type:'Framework'},
                {name:'Tailwindcss',img:'img/logos/tailwind-css.png', lvl:'beginner', start:'2025', type:'Library'},
                {name:'AlpineJS',img:'img/logos/Alpine-Js.jpg', lvl:'Beginner', start:'2025', type:'Framework'},
                {name:'WordPress',img:'img/logos/wordpress-logo.jpg', lvl:'Intermediate', start:'2022', type:'CMS'},
            ],
            lan:[
                {name:'Javascript',img:'img/logos/JS.png', lvl:'Intermediate', start:'2024', type:'Programming Language'},
                {name:'C#',img:'img/logos/CS.png', lvl:'Beginner', start:'2025', type:'Programming Language'},
                {name:'PHP',img:'img/logos/PhP.png', lvl:'Intermediate', start:'2024', type:'Programming Language'},
                {name:'HTML 5',img:'img/logos/HTML-5.png', lvl:'Intermediate', start:'2023', type:'Framework'},
                {name:'CSS',img:'img/logos/CSS.png', lvl:'Intermediate', start:'2023', type:'Styling'},
                {name:'SQL',img:'img/logos/SQL.jpg', lvl:'Intermediate', start:'2022', type:'Structured Query'},
                {name:'Python',img:'img/logos/Python.png', lvl:'Beginner', start:'2023', type:'Programming Language'},
            ]
        },
        softs:[
            'Teamwork',
            'Hardwork',
            'Klant vriendelijk',
            'Behulpzaam',
            'Zelfstandig',
        ],
        tools:[
            'MySQL Workbench',
            'Postman',
            'WSL',
            'Visual studio code',
            'Git',
            'NPM',
            'Docker Desktop',
        ]
    }
}

function calculateAge() {
    const birthDate = '2002-08-21';
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();

    const month = today.getMonth() - birth.getMonth();

    if (
        month < 0 ||
        (month === 0 && today.getDate() < birth.getDate())
    ) {
        age--;
    }

    return age;
}