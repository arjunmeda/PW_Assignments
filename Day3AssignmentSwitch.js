let alertType="simple";


switch(alertType){
    case "simple":
        console.log("This is a simple alert");
        break;
    
    case "confirmation":
        console.log("This is a confirmation alert");
        break;

    case "prompt":
        console.log("This is a prompt alert");
        break;

    default:
        console.log("This is a default alert");
        break;
}