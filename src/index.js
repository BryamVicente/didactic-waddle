
document.addEventListener("DOMContentLoaded", (e) => {
const appointmentURL = "http://localhost:3000/appointments/"
const doctorURL = "http://localhost:3000/doctors/"
const patientURL = "http://localhost:3000/patients/"


const getDoctors = () => {
    fetch(doctorURL)
    .then(resp => resp.json())
    .then(doctors => renderDoctors(doctors))
}
  
const renderDoctors = (doctors) => {
    for(const doctor of doctors) {
        renderDoctor(doctor)
    }
}

const renderDoctor = (doctor) => {
    const doctorDiv = document.querySelector("span.doctorButton")
    

}

const getPatients = () => {
    fetch(patientURL)
    .then(resp => resp.json())
    .then(patients => renderPatients(patients))
}

    const renderPatients = (patients) => {
        for(let patient of patients)
        renderPatient(patient)
    }
    
    const renderPatient = (patient) => {
        const patientDiv = document.querySelector("span.patientButton")
        
    }

getDoctors();
getPatients();
})
