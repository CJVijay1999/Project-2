document.getElementById("healthForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    // Capture user input
    const age = document.getElementById("age").value;
    const cholesterol = document.getElementById("cholesterol").value;
    const bloodPressure = document.getElementById("bp").value;
    const heartRate = document.getElementById("heartRate").value;
    const ecg = document.getElementById("ecg").value;
    const exerciseAngina = document.getElementById("exerciseAngina").value;

    // Validate inputs
    if (!age || !cholesterol || !bloodPressure || !heartRate || !ecg) {
        alert("Please fill in all fields.");
        return;
    }

    // Dummy logic for prediction (Replace with actual ML API call)
    const riskScore = Math.random(); // Simulated risk score
    const prediction = riskScore > 0.5 ? "High Risk of Heart Disease" : "Low Risk (Healthy)";

    // Display prediction result
    document.getElementById("predictionResult").innerText = `Prediction: ${prediction}`;

    // Update the chart with new data
    updateChart(riskScore);
});

// Function to update the chart dynamically
function updateChart(riskScore) {
    const ctx = document.getElementById("predictionChart").getContext("2d");

    // Destroy the previous chart if it exists
    if (window.myChart) {
        window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Risk Score", "Remaining"],
            datasets: [{
                data: [riskScore * 100, (1 - riskScore) * 100],
                backgroundColor: ["#ff0000", "#00ff00"],
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}
