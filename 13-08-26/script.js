// ==========================================
// Visitor Count
// ==========================================

let visitorCount = 0;

window.addEventListener("load", function () {

    visitorCount++;

    const visitorElement = document.getElementById("visitorCount");

    if (visitorElement) {
        visitorElement.textContent = visitorCount;
    }

});


// ==========================================
// Dynamic Content Display
// ==========================================

function displayType(type) {

    const displayArea = document.getElementById("displayArea");

    if (type === "Text") {

        displayArea.innerHTML = `
            <h3>Dynamic Text</h3>
            <p>This text is displayed dynamically using JavaScript.</p>
        `;

    }

    else if (type === "Image") {

        displayArea.innerHTML = `
            <div class="faculty-images">

                <img 
                    src="https://www.kluniversity.in/fphotos/actual/7633.jpg"
                    alt="Faculty 1"
                    width="200"
                >

                <img 
                    src="https://www.kluniversity.in/fphotos/actual/7257.jpg"
                    alt="Faculty 2"
                    width="200"
                >

                <img 
                    src="https://www.kluniversity.in/fphotos/actual/9085.jpg"
                    alt="Faculty 3"
                    width="200"
                >

            </div>
        `;

    }

    else if (type === "Animation") {

        displayArea.innerHTML = `
            <div class="animation-box">
                🚀 Animation Running
            </div>
        `;

    }

}
// ==========================================
// Image Toggle
// ==========================================

const toggleImage = document.getElementById("toggleImage");
const toggleImageButton = document.getElementById("toggleImageButton");

const image1 ="https://www.kluniversity.in/fphotos/actual/7633.jpg";
const image2 ="https://www.kluniversity.in/fphotos/actual/7257.jpg";
const image3 ="https://www.kluniversity.in/fphotos/actual/9085.jpg";

let imageChanged = false;

toggleImageButton.addEventListener("click", function () {

    if (imageChanged === false) {
        toggleImage.src = image2;
        imageChanged = true;
    } else {
        toggleImage.src = image1;
        imageChanged = false;
    }

});