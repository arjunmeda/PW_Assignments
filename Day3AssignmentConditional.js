function launchBrowser(browser) {
    if (browser === "Chrome") {
        console.log("Launching Chrome...");
    } else if (browser === "Firefox") {
        console.log("Launching Firefox...");
    } else if (browser === "Safari") {
        console.log("Launching Safari...");
    } else {
        console.log("Browser not supported.");
    }
}

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Running smoke tests...");
            break;
        case "regression":
            console.log("Running regression tests...");
            break;
        case "sanity":
            console.log("Running sanity tests...");
            break;
        default:
            console.log("Running smoke tests by default...");
    }
}


launchBrowser("Chrome"); // logs "Launching Chrome..."
runTests("regression"); // logs "Running regression tests..."