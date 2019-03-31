const citizen = [
    "privacy",
    "incorrect information",
    "information hard to find",
    "Recognition of diplomas (to take up work)",
    "Healthcare",
    "other"
];

const consumer = [
    "personal infos not accepted",
    "Unemployment benefits",
    "Discriminatory fees (tourism)",
    "other"
];

const business = [
    "Equal access for doing business",
    "Access to single market to sell products",
    "other"an other things like that
];

chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    const url = tabs[0].url;
    document.getElementById("url").value = url;
});

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

const saveData = (function() {
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function(data, fileName) {
        var json = JSON.stringify(data),
            blob = new Blob([json], { type: "octet/stream" }),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
})();

document.getElementById("buttonSend").addEventListener("click", e => {
    const data = {
        url: document.getElementById("url").value,
        userType: document.getElementById("userType").selectedIndex.innerHTML,
        issue: document.getElementById("issueType").selectedIndex.innerHTML,
        description: document.getElementById("description").value
    };

    const fileName = "data.json";
    console.log(data);

    saveData(data, fileName);
});
