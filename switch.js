function getsesion(month) {
    switch(month) {
        case 3:
        case 4:
        case 5:
            console.log("This is spring season");
            break;
        case 6:
        case 7:
        case 8:
            console.log("This is summer season");
            break;
        case 9:
        case 10:
        case 11:
            console.log("This is autumn season");
            break;
        case 12:
        case 1:
        case 2:
            console.log("This is winter season");
            break;
        default:
            console.log("Wrong input");
    }
}

getsesion(3); // This will print "This is spring season"
