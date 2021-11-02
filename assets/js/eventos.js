window.onload = () => {
    let nameEvent = document.querySelector(".event .nameEvent");
    let dateEvent = document.querySelector(".event #timer .date");
    let statusEvent = document.querySelector(".event .status");
    let dates = {
        year: 2021,
        month: 11,
        day: 1,
        hour: 20
    }


    let dateToday = new Date(dates.year, dates.month, dates.day, dates.hour);
    let showDate = `
    ${dateToday.getDay()} / 
    ${dateToday.getMonth()} / 
    ${dateToday.getFullYear()} | 
    ${dateToday.getHours()}:${dateToday.getMinutes()}0:${dateToday.getSeconds()}0
    `;

    let evento = {
        name: 'Haloween',
        date: showDate,
        status: 0
    };

    nameEvent.innerHTML = `${evento.name}`;
    dateEvent.innerHTML = `${evento.date}`;
    statusEvent.innerHTML = `${(evento.status == 1) ? "Activo" : "Inactivo"}`;

}