document.addEventListener("DOMContentLoaded", function () {
    const dataList = document.getElementById("data-list");

    function fetchData() {
        fetch("https://api.apispreadsheets.com/data/7Y6D3v9jettdEyYJ/")
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch data');
                }
            })
            .then(data => {
                const lastData = data["data"][data["data"].length - 1];
                displayData(lastData);
            })
            .catch(error => {
                console.error('Error:', error);
                dataList.innerHTML = '<li>Error fetching data</li>';
            });
    }

    function displayData(item) {
        dataList.innerHTML = "";
        const listItem = document.createElement("li");
        listItem.textContent = `Voltage: ${item.voltage}, Current: ${item.current}, Power: ${item.power}`;
        dataList.appendChild(listItem);
    }

    // Fetch data initially
    fetchData();

    // Fetch data every 5 seconds (adjust the interval as needed)
    setInterval(fetchData, 5000);
});
