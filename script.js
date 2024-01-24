document.addEventListener("DOMContentLoaded", function () {
    const dataList = document.getElementById("data-list");

    fetch("https://api.apispreadsheets.com/data/igpKfuFRoU3Gwew5/")
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch data');
            }
        })
        .then(data => {
            displayData(data["data"]);
        })
        .catch(error => {
            console.error('Error:', error);
            dataList.innerHTML = '<li>Error fetching data</li>';
        });

    function displayData(data) {
        dataList.innerHTML = "";
        data.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name}: ${item.value}`;
            dataList.appendChild(listItem);
        });
    }
});
