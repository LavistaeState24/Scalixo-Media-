document.addEventListener("DOMContentLoaded", function () {
    const footerContainer = document.getElementById("footer-container");

    if (!footerContainer) {
        console.error("Footer container not found.");
        return;
    }

    fetch("./footer.html")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Footer could not be loaded: ${response.status}`);
            }

            return response.text();
        })
        .then((html) => {
            footerContainer.innerHTML = html;
        })
        .catch((error) => {
            console.error("Error loading footer:", error);
        });
});