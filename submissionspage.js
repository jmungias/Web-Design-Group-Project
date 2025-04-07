function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
      dropdownContent.style.display = "block";
    } else {
      dropdownContent.style.display = "none";
    }
  }
  
  
  const dropZone = document.getElementById("drop-zone");
  const fileInput = document.getElementById("fileInput");
  const fileSizeMessage = document.getElementById("fileSizeMessage");
  
  
  const fileDetails = document.createElement("ul");
  fileDetails.style.fontSize = "0.35em";
  fileDetails.style.fontWeight = "bold";
  fileDetails.style.paddingTop = "10px";
  fileDetails.style.width= "300px";
  dropZone.appendChild(fileDetails);
  
  
  dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropZone.style.backgroundColor = "#e0e0e0";
  });
  
  
  dropZone.addEventListener("dragleave", () => {
    dropZone.style.backgroundColor = "#f9f9f9";
  });
  
  
  dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    dropZone.style.backgroundColor = "#f9f9f9";
    const files = event.dataTransfer.files;
    handleFiles(files);
  });
  
  
  dropZone.addEventListener("click", () => {
    fileInput.click();
  });
  
  
  fileInput.addEventListener("change", (event) => {
    const files = event.target.files;
    handleFiles(files);
  });
  
  
  function handleFiles(files) {
    const maxFileSize = 50 * 1024 * 1024; // 50 MB
    let isFileTooLarge = false;
  
    // Clear previous details
    fileDetails.innerHTML = "";
  
    for (const file of files) {
      if (file.size > maxFileSize) {
        isFileTooLarge = true;
      } else {
        // Add file detail to list
        const listItem = document.createElement("li");
        listItem.textContent = `Name: ${file.name}, Size: ${(file.size / 1024)} KB, Type: ${file.type || "Unknown"}`;
        fileDetails.appendChild(listItem);
      }
    }
  
    if (isFileTooLarge) {
      fileSizeMessage.textContent = "Maximum file size is 50 MB. Please remove large files.";
      fileSizeMessage.style.display = "block";
    } else {
      fileSizeMessage.textContent = "";
      fileSizeMessage.style.display = "none";
    }
  }
  