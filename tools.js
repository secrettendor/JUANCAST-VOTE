
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function formatDateString(dateString)
{
    var date = new Date(Date.parse(dateString));
    var dateString = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    return dateString;

}


function formatInt(number)
{
    return parseInt(number).toLocaleString();
}

function productCodeToName(productCode)
{
    switch(productCode)
    {
        case "apolaki":
            return "Apolaki"
        case "agimat_ni_juan":
            return "Agimat Ni Juan"
        case "nunu_sa_punso":
            return "Nunu sa Punso";
    }
}

function timeout(millis)
{
    return new Promise(resolve=>setTimeout(resolve,millis))
}

function stringTime24to12(time24) {

    var timeStringSplit = time24.split(":")
    var dateString = `${2}/${2}/${1998} ${timeStringSplit[0]}:${timeStringSplit[1]}:00`;
    var time = new Date(dateString).toLocaleTimeString('en-US');
    var timeSplit = time.split(" ");
    var colonSplit = time.split(":")
    return `${colonSplit[0]}:${colonSplit[1]} ${timeSplit[1].toLocaleLowerCase()}`

}

function getTimeString12FromDateObject(date) {

    var hours = date.getHours() < 9 ? `0${date.getHours()}` : date.getHours();
    var minutes = date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes();
    return stringTime24to12(`${hours}:${minutes}`);
}

function getTimeString12FromDateObject(date) {

    var hours = date.getHours() < 9 ? `0${date.getHours()}` : date.getHours();
    var minutes = date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes();
    return stringTime24to12(`${hours}:${minutes}`);
}


const timeZoneOption = { timeZone: 'Asia/Manila' }
function dateToPHTimezone(date) {
    return new Date(new Date(date).toLocaleString("en-PH", timeZoneOption))
}

function addMinutesToDate(date, mins) {
    var returnDate = new Date(date);
    returnDate.setMinutes((date.getMinutes() + mins))
    return returnDate;
