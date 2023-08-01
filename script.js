let buttons = document.querySelectorAll(".button-value");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    // button.classList.toggle("active");
  });
});


// Sample student data
const students = [
  {
    name: "John Doe",
    jobProfile: "Software Engineer",
    experience: "3 years",
    salary: "$70,000",
    location: "New York, USA",
    image: "../img/photo.jpeg",
  },
  {
    name: "Loki ",
    jobProfile: "Software Engineer",
    experience: "5 years",
    salary: "$50,000",
    location: "India",
    image: "../img/photo.jpeg",
  },
  {
    name: "John Doe",
    jobProfile: "Software Engineer",
    experience: "3 years",
    salary: "$70,000",
    location: "New York, USA",
    image: "../img/photo.jpeg",
  },
  {
    name: "Loki ",
    jobProfile: "Software Engineer",
    experience: "5 years",
    salary: "$50,000",
    location: "India",
    image: "../img/photo.jpeg",
  },
  {
    name: "John Doe",
    jobProfile: "Software Engineer",
    experience: "3 years",
    salary: "$70,000",
    location: "New York, USA",
    image: "../img/photo.jpeg",
  },
  {
    name: "Loki ",
    jobProfile: "Software Engineer",
    experience: "5 years",
    salary: "$50,000",
    location: "India",
    image: "../img/photo.jpeg",
  },
  // Add more student profiles here
];

// Function to display student profiles
function displayStudents(filteredData) {
  const profileCards = document.getElementById("profile-cards");
  profileCards.innerHTML = "";

  const dataToShow = filteredData || students;

  dataToShow.forEach((student) => {
    const card = document.createElement("div");
    card.classList.add("profile-card");
    card.innerHTML = `
      <img src="${student.image}" alt="${student.name}">
      <h3>${student.name}</h3>
      <p>Job Profile: ${student.jobProfile}</p>
      <p>Experience: ${student.experience}</p>
      <p>Salary: ${student.salary}</p>
      <p>Location: ${student.location}</p>
      <button class="know-more-button" onclick=window.location.href="../html/studentProfile.html">Know More</button>
    `;
    profileCards.appendChild(card);
  });
}

// Function to filter students
function filterStudents() {
  const jobProfileFilter = document.getElementById("jobProfile").value.toLowerCase();
  const experienceFilter = document.getElementById("experience").value.toLowerCase();
  const salaryFilter = document.getElementById("salary").value.toLowerCase();
  const locationFilter = document.getElementById("location").value.toLowerCase();

  const filteredStudents = students.filter((student) => {
    const jobProfileMatch = student.jobProfile.toLowerCase().includes(jobProfileFilter);
    const experienceMatch = student.experience.toLowerCase().includes(experienceFilter);
    const salaryMatch = student.salary.toLowerCase().includes(salaryFilter);
    const locationMatch = student.location.toLowerCase().includes(locationFilter);

    return jobProfileMatch && experienceMatch && salaryMatch && locationMatch;
  });

  // Update the displayed student profiles
  displayStudents(filteredStudents);
}

// Initial display of student profiles
displayStudents();


document.getElementById("resumeInput").addEventListener("change", function (event) {
  const file = event.target.files[0];
  const statusElement = document.getElementById("status");

  statusElement.innerText = "Uploading...";

  // Simulate an upload process with a setTimeout for demonstration purposes
  setTimeout(() => {
      if (file) {
          statusElement.innerText = "Upload successful!";
          statusElement.classList.add("success");
      } else {
          statusElement.innerText = "Upload failed!";
          statusElement.classList.add("error");
      }
  }, 2000);
});











const modal = document.getElementById("modal");
const uploadBtn = document.getElementById("uploadBtn");
const closeBtn = document.getElementById("closeBtn");

// Show the modal when the upload button is clicked
uploadBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Hide the modal when the close button is clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Hide the modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
      modal.style.display = "none";
  }
});

// Code for handling the resume upload process (similar to previous example)
document.getElementById("resumeInput").addEventListener("change", function (event) {
  // ...
  // Resume upload handling code goes here
  // ...
});