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
