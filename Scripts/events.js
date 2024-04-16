outputTextarea.oninput = () => {
    switchInputs();
}
document.addEventListener('keydown', e => {
    if (e.key == "Enter") {
        if (document.activeElement === inputTextarea) e.preventDefault(), switchInputs();
        if (document.activeElement === outputTextarea) {
            const text = outputTextarea.value
            var activity = new MozActivity({
                name: "share",
                data: {
                    type: "text/plain",
                    number: 1,
                    blobs: [new Blob([textToShare], { type: "text/plain" })]
                }
            });

            // Handling success or failure
            activity.onsuccess = function () {
                console.log("Text shared successfully!");
            };

            activity.onerror = function (e) {
                console.error("Failed to share text." + e);
                alert(e)
                alert(e.name)
                alert(e.message)
            };

        }
    }
})