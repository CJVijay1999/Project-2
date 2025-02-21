function predictHeartDisease() {
    let age = document.getElementById("age").value;
    let cholesterol = document.getElementById("cholesterol").value;
    let bp = document.getElementById("bp").value;

    if (!age || !cholesterol || !bp) {
        alert("Please fill all fields");
        return;
    }

    // Simulated prediction using a simple formula
    let probability = 1 / (1 + Math.exp(-0.05 * age - 0.03 * cholesterol - 0.04 * bp + 5));
    let prediction = probability > 0.5 ? "High Risk of Heart Disease" : "Low Risk of Heart Disease";
    document.getElementById("result").innerText = prediction;

    renderChart(probability);
}

function renderChart(probability) {
    let ctx = document.getElementById("predictionChart").getContext("2d");
    new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Risk", "No Risk"],
            datasets: [{
                data: [probability * 100, (1 - probability) * 100],
                backgroundColor: ["red", "green"]
            }]
        }
    });
}