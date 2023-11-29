



function animatePercentage(elementId, progressId, duration) {
    let element = document.getElementById(elementId);
    let progressBar = document.getElementById(progressId);
    let startValue = 0;
    let targetValue = Number(element.innerHTML);
    let interval = duration / targetValue;
    progressBar.setAttribute('min', targetValue);
    function updateValue() {
        startValue++;
        element.textContent = startValue + "%";
        progressBar.value = startValue;

        if (startValue === targetValue) {
            clearInterval(animation);
        }
    }

    let animation = setInterval(updateValue, interval);
}

// Call the function for each skill
animatePercentage("htmlPercentage", "htmlProgress", 2000);
animatePercentage("cssPercentage", "cssProgress", 2000);
animatePercentage("JSpercentage", "JSprogress", 2000);
animatePercentage("cplusPercentage", "cplusProgress", 2000);
animatePercentage("pythonPercentage", "pythonProgress", 2000);
animatePercentage("apPercentage", "apProgress", 2000);
animatePercentage("aiIllustrator", "aiProgress", 2000);

let date = new Date();


let copyRight = document.getElementById("copyright");
copyRight.innerHTML = `&copy; ${date.getFullYear()} Mamoon Akhter. All rights reserved.`






setInterval(() => {
    let textarea_length = document.getElementById("textarea_length");
    let message = document.getElementById("message").value;
    let wordCount = message.length;
    textarea_length.innerHTML = `${wordCount}/5000`
}, 100);