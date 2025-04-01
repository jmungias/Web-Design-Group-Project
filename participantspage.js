document.addEventListener("DOMContentLoaded", () => {
    const participants = [
        { firstname: "Mohamed", lastname: "Abdelaziz" },
        { firstname: "Samip", lastname: "Adhikari" },
        { firstname: "Ariman", lastname: "Ahmed" },
        { firstname: "Qudus", lastname: "Akande" },
        { firstname: "Marie", lastname: "Akaya" },
        { firstname: "Obaid", lastname: "Alam Zeb" },
        { firstname: "Charika", lastname: "Arora" },
        { firstname: "Nidhi", lastname: "Asawla" },
        { firstname: "Favour", lastname: "Babalola" },
        { firstname: "Baltej", lastname: "Bajwa" },
        { firstname: "Graham", lastname: "Blanchard" },
        { firstname: "Ganesh", lastname: "Bohara" },
        { firstname: "Roman", lastname: "Boyko" },
        { firstname: "James Leenard", lastname: "Bulaklak" },
        { firstname: "Bhavya", lastname: "Chopra" },
        { firstname: "Hibaq", lastname: "Dahir" },
        { firstname: "Ece", lastname: "Dai" },
        { firstname: "Jay Anandkumar", lastname: "Darji" },
        { firstname: "Joy", lastname: "Debnath" },
        { firstname: "Madjiguene", lastname: "Dioum" },
        { firstname: "Marvelous", lastname: "Edem" },
        { firstname: "Jude", lastname: "Eraga" },
        { firstname: "Austin", lastname: "Gilmore" },
        { firstname: "Kaiden", lastname: "Gnadt" },
        { firstname: "Vanessa", lastname: "Gomez" },
        { firstname: "Parv", lastname: "Goyal" },
        { firstname: "Garanduwe Barage Ramindu Sanuj", lastname: "Jayaneth" },
        { firstname: "Christian", lastname: "Jovero" },
        { firstname: "Chandra Vamsi", lastname: "Karnati" },
        { firstname: "Daham", lastname: "Kiringoda Arachchige" },
        { firstname: "Amandeep", lastname: "LNU" },
        { firstname: "Aasma", lastname: "Makwana" },
        { firstname: "Julian", lastname: "Munguia-Scott" },
        { firstname: "Raveen", lastname: "Nanayakkara" },
        { firstname: "Aditya", lastname: "Odedara" },
        { firstname: "Muntaqim Taiwo", lastname: "Olawuyi" },
        { firstname: "Judith", lastname: "Oribhabor" },
        { firstname: "Devang Sunildatt", lastname: "Pandey" },
        { firstname: "Bhuvan", lastname: "Patel" },
        { firstname: "Het Dhwanikumar", lastname: "Patel" },
        { firstname: "Jay Piyushkumar", lastname: "Patel" },
        { firstname: "Mitra", lastname: "Patel" },
        { firstname: "Om Pradipkumar", lastname: "Patel" },
        { firstname: "Pratik Yogeshkumar", lastname: "Patel" },
        { firstname: "Vansh Malaykumar", lastname: "Patel" },
        { firstname: "Vedant Raju", lastname: "Patil" },
        { firstname: "Aishka", lastname: "Prajapati" },
        { firstname: "Pritkumar Vinodbhai", lastname: "Prajapati" },
        { firstname: "Mehran", lastname: "Rahmatinejad" },
        { firstname: "Mohammad", lastname: "Rahmatinejad" },
        { firstname: "Ekamveer Singh", lastname: "Rai" },
        { firstname: "Muhammad", lastname: "Rauf" },
        { firstname: "Vyom Divyesh", lastname: "Rawal" },
        { firstname: "Chirag", lastname: "Rawat" },
        { firstname: "Wasim", lastname: "Saliya Basha" },
        { firstname: "Nardos", lastname: "Sebhatu" },
        { firstname: "Deewanshu", lastname: "Sharma" },
        { firstname: "Krish Rajesh", lastname: "Sharma" },
        { firstname: "Mohammed Taha", lastname: "Siddiqui" },
        { firstname: "Jaskarandeep", lastname: "Singh" },
        { firstname: "Ali", lastname: "Soleimani Nazri" },
        { firstname: "Nayu", lastname: "Takuhiro" },
        { firstname: "Lulya", lastname: "Tewelde" },
        { firstname: "Kieran", lastname: "Tomalty" },
        { firstname: "Ephrata", lastname: "Tsige" },
        { firstname: "Benedict", lastname: "Umeri" },
        { firstname: "Ishika Sunil", lastname: "Vaswani" },
        { firstname: "Kawan Rahul", lastname: "Vyas" },
        { firstname: "Dhara", lastname: "Wagh" },
        { firstname: "Dewan Wasiul Islam", lastname: "Wasty" },
        { firstname: "Caden", lastname: "Wright" }
    ];

    const tableBody = document.querySelector(".participants-table tbody");
    const paginationContainer = document.querySelector(".pagination");
    const applyButton = document.querySelector(".my-courses-button");
    const clearButton = document.querySelector(".clear-filters-button");

    const studentsPerPage = 20;
    let currentPage = 1;
    let currentFilter = { type: null, letter: null };

    function renderTable(filtered) {
        const start = (currentPage - 1) * studentsPerPage;
        const paginated = filtered.slice(start, start + studentsPerPage);
        tableBody.innerHTML = "";

        paginated.forEach(p => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><input type="checkbox" /></td>
                <td>${p.firstname} ${p.lastname}</td>
                <td>Student</td>
            `;
            tableBody.appendChild(row);
        });
    }

    function renderPagination(totalItems) {
        const totalPages = Math.ceil(totalItems / studentsPerPage);
        paginationContainer.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.textContent = i;
            if (i === currentPage) btn.classList.add("active");
            btn.addEventListener("click", () => {
                currentPage = i;
                updateTable();
            });
            paginationContainer.appendChild(btn);
        }
    }

    function filterParticipants() {
        if (!currentFilter.type) return participants;

        return participants.filter(p => {
            const char = p[currentFilter.type].charAt(0).toUpperCase();
            return char === currentFilter.letter;
        });
    }

    function updateTable() {
        const filtered = filterParticipants();
        renderTable(filtered);
        renderPagination(filtered.length);
    }

    function setupAlphabetFilters() {
        document.querySelectorAll(".alphabet-filters").forEach(section => {
            const isFirst = section.querySelector("label").textContent.toLowerCase().includes("first");
            const filterType = isFirst ? "firstname" : "lastname";
            const links = section.querySelectorAll(".alphabet-links a");

            links.forEach(link => {
                link.addEventListener("click", e => {
                    e.preventDefault();
                    document.querySelectorAll(".alphabet-links a").forEach(a => a.classList.remove("active"));

                    const letter = link.textContent;
                    if (letter === "All") {
                        currentFilter = { type: null, letter: null };
                    } else {
                        currentFilter = { type: filterType, letter };
                        link.classList.add("active");
                    }
                });
            });
        });
    }

    applyButton?.addEventListener("click", () => {
        currentPage = 1;
        updateTable();
    });

    clearButton?.addEventListener("click", () => {
        currentFilter = { type: null, letter: null };
        currentPage = 1;
        document.querySelectorAll(".alphabet-links a").forEach(a => a.classList.remove("active"));
        updateTable();
    });

    setupAlphabetFilters();
    updateTable();
});
