document.addEventListener("DOMContentLoaded", function () {
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
                updateValues("Error fetching data", "Error fetching data", "Error fetching data");
            });
    }

    function displayData(item) {
        updateValues(item.voltage, item.current, item.power);
    }

    function updateValues(voltage, current, power) {
        document.getElementById("voltage-value").textContent = voltage;
        document.getElementById("current-value").textContent = current;
        document.getElementById("power-value").textContent = power;
    }

    // Fetch data initially
    fetchData();

    // Fetch data every 5 seconds (adjust the interval as needed)
    setInterval(fetchData, 5000);
});
