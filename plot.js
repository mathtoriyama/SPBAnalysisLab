
// import { Update_Pisarenko, Update_Mobility, Update_zT } from './plot_utils.js';


const pisarenko_plot = document.getElementById("Pisarenko_Plot").getContext("2d");
const mobility_plot = document.getElementById("Mobility_Plot").getContext("2d");
const zT_plot = document.getElementById("zT_Plot").getContext("2d");
const SPB_plot = document.getElementById("SPB_Plot").getContext("2d");

const CC_plot_min = 1E15;
const CC_plot_max = 1E21;

Chart.defaults.font.family = 'Rubik';
Chart.defaults.font.size = 16;

// Pisarenko plot
var Pisarenko_Plot_Obj = new Chart(pisarenko_plot, {
	type: "line",
	data: {
		labels: null,
		datasets: [
			{
				// Imported Pisarenko data
				fill: false,
				lineTension: 0,
				backgroundColor: "rgba(0,0,255,1.0)",	// Color of points
				borderColor: "rgba(0,0,255,0.1)",		// Color of lines
				showLine: false,
				data: null,
			},
			{
				// Model Pisarenko
				fill: false,
				lineTension: 0,
				borderColor: "rgba(0,0,255,1.0)",		// Color of lines
				showLine: true,
				pointRadius: 0,
				data: null,
			}
		]
	},
	options: {
		responsive: false,
		aspectRatio: 1,
		maintainAspectRatio: true,
		plugins: {
			legend: {
				display: false,
				position: 'bottom',
			},
		},
		scales: {
			x: {
				title: {
					display: true,
					text: 'Hall Carrier Concentration (cm\u00B3)'
				},
				type: 'logarithmic',
				min: CC_plot_min,
				max: CC_plot_max,
				ticks: {
					stepSize: 100  // Doesn't do anything lol
				}
			},
			y: {
				title: {
					display: true,
					text: '|Seebeck Coefficient| (\u03BCV/K)'
				},
				min: 0,
				max: 600,
				ticks: {
					stepSize: 100
				}
			}
		},
		events: [], // No more hover
	}
});



// Mobility plot
var Mobility_Plot_Obj = new Chart(mobility_plot, {
	type: "line",
	data: {
		labels: null,
		datasets: [
			{
				// Imported Pisarenko data
				fill: false,
				lineTension: 0,
				backgroundColor: "rgba(0,0,255,1.0)",	// Color of points
				borderColor: "rgba(0,0,255,0.1)",		// Color of lines
				showLine: false,
				data: null,
			},
			{
				// Model Pisarenko
				fill: false,
				lineTension: 0,
				borderColor: "rgba(0,0,255,1.0)",		// Color of lines
				showLine: true,
				pointRadius: 0,
				data: null,
			}
		]
	},
	options: {
		responsive: false,
		aspectRatio: 1,
		maintainAspectRatio: true,
		plugins: {
			legend: {
				display: false,
				position: 'bottom',
			},
		},
		scales: {
			x: {
				title: {
					display: true,
					text: 'Hall Carrier Concentration (cm\u00B3)'
				},
				type: 'logarithmic',
				min: CC_plot_min,
				max: CC_plot_max,
				ticks: {
					stepSize: 100  // Doesn't do anything lol
				}
			},
			y: {
				title: {
					display: true,
					text: 'Mobility (cm\u00B2/Vs)'
				},
				type: 'logarithmic',
				min: 0,
				max: 600,
				ticks: {
					stepSize: 100
				}
			}
		},
		events: [], // No more hover
	}
});








// zT plot
var zT_Plot_Obj = new Chart(zT_plot, {
	type: "line",
	data: {
		labels: null,
		datasets: [
			{
				// Imported zT data
				fill: false,
				lineTension: 0,
				backgroundColor: "rgba(0,0,255,1.0)",	// Color of points
				borderColor: "rgba(0,0,255,0.1)",		// Color of lines
				showLine: false,
				data: null,
			},
			{
				// Model zT
				fill: false,
				lineTension: 0,
				borderColor: "rgba(0,0,255,1.0)",		// Color of lines
				showLine: true,
				pointRadius: 0,
				data: null,
			}
		]
	},
	options: {
		responsive: false,
		aspectRatio: 1,
		maintainAspectRatio: true,
		plugins: {
			legend: {
				display: false,
				position: 'bottom',
			},
		},
		scales: {
			x: {
				title: {
					display: true,
					text: 'Hall Carrier Concentration (cm\u00B3)'
				},
				type: 'logarithmic',
				min: CC_plot_min,
				max: CC_plot_max,
				ticks: {
					stepSize: 10 // Doesn't do anything lol
				},
			},
			y: {
				title: {
					display: true,
					text: 'zT'
				},
				min: 0,
				max: 3,
				ticks: {
					stepSize: 0.5
				}
			}
		},
		events: [], // No more hover
	}
});

var SPB_Plot_Obj = new Chart(SPB_plot, {
	type: "line",
	data: {
		labels: null,
		datasets: [
			{
				// Imported zT data
				fill: false,
				lineTension: 0,
				backgroundColor: "rgba(0,0,255,1.0)",	// Color of points
				borderColor: "rgba(0,0,255,0.1)",		// Color of lines
				showLine: false,
				data: null,
			},
			{
				// Model zT
				fill: false,
				lineTension: 0,
				borderColor: "rgba(0,0,255,1.0)",		// Color of lines
				showLine: true,
				pointRadius: 0,
				data: null,
			}
		]
	},
	options: {
		responsive: false,
		aspectRatio: 1,
		maintainAspectRatio: true,
		plugins: {
			legend: {
				display: false,
				position: 'bottom',
			},
		},
		scales: {

			x: {
				title: {
					display: false,
					text: 'Hall Carrier Concentration (cm\u00B3)'
				},
				type: 'linear',

				min: -1E10,
				max: 1E10,
				ticks: {

					display: false,
					stepSize: 1E10 // Doesn't do anything lol
				},
			},
			y: {

				title: {
					display: true,
					text: 'Energy (eV)'

				},

				min: 0,
				max: 3,
				ticks: {
					display: true,
					stepSize: 1
					
				}
			}
		},
		events: [], // No more hover
	}
});









var effective_mass_slider = document.querySelector("#EffMassSlider");
var effective_mass_slider_output = document.querySelector("#EffMassSliderValue");

var temperature_slider = document.querySelector("#TemperatureSlider");
var temperature_slider_output = document.querySelector("#TemperatureSliderValue");

var mobility_slider = document.querySelector("#MobilitySlider");
var mobility_slider_output = document.querySelector("#MobilitySliderValue");

var kappa_slider = document.querySelector("#KappaSlider");
var kappa_slider_output = document.querySelector("#KappaSliderValue");

effective_mass_slider_output.innerHTML = effective_mass_slider.value;
temperature_slider_output.innerHTML = temperature_slider.value;
mobility_slider_output.innerHTML = mobility_slider.value;
kappa_slider_output.innerHTML = kappa_slider.value;


function Update_Plots() {
	Update_Pisarenko(Pisarenko_Plot_Obj, effective_mass_slider.value, temperature_slider.value);
	Update_Mobility(Mobility_Plot_Obj, effective_mass_slider.value, temperature_slider.value, mobility_slider.value*1E-4);
	Update_zT(zT_Plot_Obj, effective_mass_slider.value, temperature_slider.value, mobility_slider.value*1E-4, kappa_slider.value);
	Update_SPB(SPB_Plot_Obj, effective_mass_slider.value);
}

effective_mass_slider.oninput = function() {
	effective_mass_slider_output.innerHTML = effective_mass_slider.value;
	Update_Plots();
}

temperature_slider.oninput = function() {
	temperature_slider_output.innerHTML = temperature_slider.value;
	Update_Plots();
}

mobility_slider.oninput = function() {
	mobility_slider_output.innerHTML = mobility_slider.value;
	Update_Plots();
}

kappa_slider.oninput = function() {
	kappa_slider_output.innerHTML = kappa_slider.value;
	Update_Plots();
}








