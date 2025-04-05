document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;

    const temperatureElement = document.getElementById('temperature');
    const conditionElement = document.getElementById('condition');
    const windSpeedElement = document.getElementById('wind-speed');
    const windChillElement = document.getElementById('wind-chill');

    if (!temperatureElement || !windSpeedElement || !windChillElement) {
        console.error("One or more required elements are missing.");
        return;
    }

    const temperatureText = temperatureElement.textContent;
    const windspeedText = windSpeedElement.textContent;

    const temperature = parseFloat(temperatureText);
    const windSpeed = parseFloat(windspeedText);

    const tempUnit = temperatureText.includes('C') ? 'C' : 'F';
    const speedUnit = windspeedText.includes('km/h') ? 'km/h' : 'mph';

    displayWindChill(temperature, windSpeed, tempUnit, speedUnit);

    function displayWindChill(temp, speed, tempUnit, speedUnit) {
        let shouldCalculate = (tempUnit === 'C' ? temp <= 10 && speed > 4.8 : temp <= 50 && speed > 3);

        windChillElement.textContent = shouldCalculate
            ? calculateWindChill(temp, speed, tempUnit).toFixed(1) + '°' + tempUnit
            : 'N/A';
    }

    function calculateWindChill(temp, speed, tempUnit) {
        return tempUnit === 'C'
            ? 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))
            : 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    }
});