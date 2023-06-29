window.onload = () => {
    function attachDropdownListener() {
        const dropdownItems = document.querySelectorAll('.dropdown-item');
        const dropdownBtn = document.getElementById("dropdown-btn");
        for (const item of dropdownItems) {
            item.addEventListener('click', () => {
                const selectedDropDownText = item.innerHTML;
                dropdownBtn.textContent = selectedDropDownText;
                const url = 'index.php?category=' + selectedDropDownText;
                window.location.href = url;
            });
        };
    }

    function fetchData(url) {
        return fetch(url)
            .then(response => response.json())
            .catch(error => {
                console.error("Error loading JSON data: ", error);
            });
    }

    function fillCategories(categories) {
        const dropdownMenu = document.querySelector('.dropdown-menu');
        dropdownMenu.innerHTML = "";

        categories.forEach(category => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.classList.add("dropdown-item");
            link.href = "#";
            link.textContent = category;
            link.setAttribute("category", category);
            listItem.appendChild(link);
            dropdownMenu.appendChild(listItem);
        });
    }

    fetchData("./bookInfo.json")
        .then(data => {
            const categories = Array.from(new Set(data.map(book => book.category)));
            fillCategories(categories);
            attachDropdownListener();
        });
}
