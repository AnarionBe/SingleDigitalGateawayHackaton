const citizen = [
    "privacy",
    "incorrect information",
    "information hard to find",
    "other"
];

const consumer = [
    "personal infos not accepted",
    "things",
    "an other things like that",
    "other"
];

chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    const url = tabs[0].url;
    document.getElementById("url").value = url;
});

const business = ["stuff", "other"];

document.getElementById("userType").addEventListener("change", e => {
    const issueSelect = document.getElementById("issueType");
    while (document.getElementById("issueType").firstChild) {
        document
            .getElementById("issueType")
            .removeChild(document.getElementById("issueType").firstChild);
    }
    switch (e.target[e.target.selectedIndex].innerHTML) {
        case "Citizen":
            citizen.forEach(elem => {
                const option = document.createElement("option");
                option.appendChild(document.createTextNode(elem));
                issueSelect.appendChild(option);
            });
            break;

        case "Consumer":
            consumer.forEach(elem => {
                const option = document.createElement("option");
                option.appendChild(document.createTextNode(elem));
                issueSelect.appendChild(option);
            });
            break;

        case "Business":
            business.forEach(elem => {
                const option = document.createElement("option");
                option.appendChild(document.createTextNode(elem));
                issueSelect.appendChild(option);
            });
            break;
    }
});
