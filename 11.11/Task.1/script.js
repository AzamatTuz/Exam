var seasons = prompt("1-ден 12-ге дейінгі сан енгізіңіз");

if (seasons == '12' || seasons == '1' || seasons == '2') {
    alert('Қыс');
} else if (seasons == '3' || seasons == '4' || seasons == '5') {
    alert('Көктем');
} else if (seasons == '6' || seasons == '7' || seasons == '8') {
    alert('Жаз');
} else if (seasons == '9' || seasons == '10' || seasons == '11') {
    alert('Күз');
} else {
    alert("1-ден 12-ге дейінгі сан енгізіңіз");
}