//display error message on php page
function printError(elemId, msg){
    document.getElementById(elemId).innerHTML = msg;
}

//this function will ensure that the form inputs are valid
function validateForm(){
    //these are the inputs from the html text/input elements
    var Fullname = document.appForm.Fullname.value;
    var Age = document.appForm.Age.value;
    var ID = document.appForm.ID.value;
    var Location = document.appForm.Location.value;
    var Experience = document.appForm.Experience.value;
    var WorkHere = document.appForm.WorkHere.value;
    var FavFood = document.appForm.FavFood.value;
    var LeastFavFood = document.appForm.LeastFavFood.value;
    var Holidays = document.appForm.Holidays.value;
    var Nights = document.appForm.Nights.value;

    //track whether or not the inputs are valid
    var nameValid = true;
    var AgeValid = true;
    var IDValid = true;
    var LocationValid = true;
    var ExperienceValid = true;
    var WorkHereValid = true;
    var FavFoodValid = true;
    var LeastFavFoodValid = true;
    var HolidaysValid = true;
    var NightsValid = true;

    //Clears out any errors when the form is resubmitted
    printError("fullnameErr", "");
    printError("ageErr", "");
    printError("IDErr", "");
    printError("locationErr", "");
    printError("experienceErr", "");
    printError("workhereErr", "");
    printError("favfoodErr", "");
    printError("LeastfavfoodErr", "");
    printError("HolidaysErr", "");
    printError("NightsErr", "");

    //check to see if the useer entered a valid name
    if (Fullname == ""){
        printError("fullnameErr", "Please enter your name.");
        nameValid = false;
    }

    //check to see if the useer entered a valid age
    if (Age == ""){
        printError("ageErr", "Please enter your age.");
        AgeValid = false;
    }

    //check to see if the useer entered a valid ID
    if (ID == ""){
        printError("IDErr", "Please enter your ID number.");
        IDValid = false;
    }

    //check to see if the useer entered a valid location
    if (Location == ""){
        printError("locationErr", "Please enter your location.");
        LocationValid = false;
    }

    //check to see if the useer entered a valid experience
    if (Experience == ""){
        printError("experienceErr", "Please enter your experience.");
        ExperienceValid = false;
    }

    //check to see if the useer entered a valid reason
    if (WorkHere == ""){
        printError("workhereErr", "Please enter your reason.");
        WorkHereValid = false;
    }

    //check to see if the useer entered a valid food
    if (FavFood == ""){
        printError("favfoodErr", "Please enter your favorite food.");
        FavFoodValid = false;
    }

    //check to see if the useer entered a valid food
    if (LeastFavFood == ""){
        printError("LeastfavfoodErr", "Please enter your least favorite food.");
        LeastFavFoodValid = false;
    }

    //check to see if the useer entered a valid option
    if (Holidays == ""){
        printError("HolidaysErr", "Please choose an option.");
        HolidaysValid = false;
    }

    //check to see if the useer entered a valid option
    if (Nights == ""){
        printError("NightsErr", "Please choose an option.");
        NightsValid = false;
    }

    if(!nameValid || !AgeValid || !IDValid || !LocationValid || !ExperienceValid || !WorkHereValid || !FavFoodValid || !LeastFavFoodValid || !HolidaysValid || !NightsValid){
        return false;
    }


}