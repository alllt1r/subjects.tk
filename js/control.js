var arrLang = {
    'en' : {
        'language': 'En',
        'subjects' : 'Subjects',
        'choose_subject' : 'Choose subjects',
        'search' : 'Search',
        'main' : 'Main',
        'download' : 'Download',
        'history' : 'History',
        'first_name_D' : 'Danil Kazakov',
        'first_name_N' : 'Nikita Timoshenko',
    },
    'ru' : {
        'language': 'Ru',
        'subjects' : 'Предметы',
        'choose_subject' : 'Выбрать предмет',
        'search' : 'Поиск',
        'main' : 'Главная',
        'download' : 'Скачать',
        'history' : 'История',
        'first_name_D' : 'Данил Казаков',
        'first_name_N' : 'Никита Тимошенко',
    }
};
//var btn = jQuery(".theme-button");

var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

let lightThemeMain = "main_light.css";
let darkThemeMain = "main_dark.css";
let lightThemeSubjects = "../../../subject_page_light.css";
let darkThemeSubjects = "../../../subject_page_dark.css";

getTheme();
function setDarkDropdown()
{
    $(function() {
        dropdown = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdown.length; i++) {
            dropdown.item(i).classList.remove('dropdown-menu-dark');
            dropdown.item(i).classList.add('dropdown-menu');
            dropdown.item(i).classList.add('dropdown-menu-dark');
        };
    });
};
function setLightDropdown()
{
    $(function() {
        dropdown = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdown.length; i++) {
            dropdown.item(i).classList.remove('dropdown-menu-dark');
            dropdown.item(i).classList.add('dropdown-menu');
        };
    });
};

function ChangeTheme()
{

    myStorage = window.localStorage;
    var currTheme = link.getAttribute("href");

    if(currTheme == lightThemeMain)
    {
        currTheme = darkThemeMain;
        localStorage.setItem('Theme', 'dark');
    }
    else if (currTheme == darkThemeMain)
    {
        currTheme = lightThemeMain;
        localStorage.setItem('Theme', 'light');
    }
    else if(currTheme == lightThemeSubjects)
    {
        currTheme = darkThemeSubjects;
        localStorage.setItem('Theme', 'dark');
    }
    else if (currTheme == darkThemeSubjects)
    {
        currTheme = lightThemeSubjects;
        localStorage.setItem('Theme', 'light');
    };
    if (localStorage.getItem('Theme') == 'light') {
        setLightDropdown();
    }
    else if (localStorage.getItem('Theme') == 'dark') {
        setDarkDropdown();
    };
    link.setAttribute("href", currTheme);
};

function getTheme()
{
    var currTheme = link.getAttribute("href");
    myStorage = window.localStorage;
    var theme = localStorage.getItem('Theme');
    if (theme == 'dark') {
        if (currTheme == lightThemeMain)
        {
            $(function() {
                document.getElementById("theme-button").checked = true;
            });
            currTheme = darkThemeMain;
            localStorage.setItem('Theme', 'dark');
        }
        else if (currTheme == lightThemeSubjects)
        {
            $(function() {
                document.getElementById("theme-button").checked = true;
            });
            currTheme = darkThemeSubjects;
            localStorage.setItem('Theme', 'dark');
        };
    };

    if (localStorage.getItem('Theme') == 'light') {
        setLightDropdown();
    }
    else if (localStorage.getItem('Theme') == 'dark') {
        setDarkDropdown();
    };


    link.setAttribute("href", currTheme);
};


/*
$(function() {
    var lang = getLanguage()
    console.log(lang)
    if (lang != 'en' && lang != 'ru') {
        lang = 'en'
    };
    $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
    });
});

$(function() {
    $('.dropdown-item').click(function() {
        var lang = getLanguage()

        $('.lang').each(function(index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});

function setLanguageRu() {
    myStorage = window.localStorage;
    localStorage.setItem('Language', 'ru');
}
function setLanguageEn() {
    myStorage = window.localStorage;
    localStorage.setItem('Language', 'en');
}
function getLanguage() {
    myStorage = window.localStorage;
    var lang = localStorage.getItem('Language');
    return lang;
}*/








