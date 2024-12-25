function addMessage() {
    const content = document.getElementById("content").value.trim();
    const status = document.getElementById("status").value;
    const messages = document.getElementById("messages");
    const errorMessage = document.getElementById("error-message");

    if (content === "") {
        errorMessage.textContent = "Please Enter Your Content";
        return;
    }
    errorMessage.textContent = "";
    const container = document.createElement("div");
    container.className = `status-container`;
    container.innerHTML = `
        <div class="status-message ${status === "success" ? "green" : "red"}">${content} <button class="close-btn">X</button></div>
                    
        <div class="progress-bar"><div class="progress-fill"></div></div>`;
  const closeButton = container.querySelector(".close-btn");
    closeButton.addEventListener("click", () => {
        clearInterval(interval); 
        container.remove(); 
    });
    messages.appendChild(container);
    const progressFill = container.querySelector(".progress-fill");
    let progress = 0, isPaused = false;

   function updateProgress() {
        progressFill.style.width = `${progress}%`;
        if (progress >= 100) {
            clearInterval(interval);
            container.remove();
        }
    }
     container.addEventListener("mouseenter", () => { isPaused = true; });
    container.addEventListener("mouseleave", () => { isPaused = false; });
      const interval = setInterval(() => {
        if (!isPaused) {
            progress += 1;
            updateProgress();
        }
    }, 50);
}