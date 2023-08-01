// Sample data - replace this with actual job listings
const jobs = [
  {
    profile: "Web Developer",
    company: "ABC Tech",
    location: "New York",
    image: "../img/com-logo-1.jpg",
    Jobs: "2 Jobs Openings",

    Jobopenings:"2 Jobs Available",
    Jobdetail: "Software Engineer Java (1-2 yr)",
    Jobdetail2: "Data Analyst Python (1-3 yr)"
  },


  {
    profile: "Web Developer",
    company: "ABC Tech",
    location: "New York",
    image: "../img/com-logo-2.jpg",
    Jobs: "2 Jobs Openings",

    Jobopenings:"2 Jobs Available",
    Jobdetail: "Software Engineer Java (1-2 yr)",
    Jobdetail2: "Data Analyst Python (1-3 yr)"
  },


  {
    profile: "Web Developer",
    company: "ABC Tech",
    location: "New York",
    image: "../img/com-logo-3.jpg",
    Jobs: "2 Jobs Openings",

    Jobopenings:"2 Jobs Available",
    Jobdetail: "Software Engineer Java (1-2 yr)",
    Jobdetail2: "Data Analyst Python (1-3 yr)"
  },



  {
    profile: "Web Developer",
    company: "ABC Tech",
    location: "New York",
    image: "../img/com-logo-4.jpg",
    Jobs: "2 Jobs Openings",

    Jobopenings:"2 Jobs Available",
    Jobdetail: "Software Engineer Java (1-2 yr)",
    Jobdetail2: "Data Analyst Python (1-3 yr)"
  },



  {
    profile: "Web Developer",
    company: "ABC Tech",
    location: "New York",
    image: "../img/com-logo-5.jpg",
    Jobs: "2 Jobs Openings",

    Jobopenings:"2 Jobs Available",
    Jobdetail: "Software Engineer Java (1-2 yr)",
    Jobdetail2: "Data Analyst Python (1-3 yr)"
  },



  {
    profile: "Web Developer",
    company: "ABC Tech",
    location: "New York",
    image: "../img/com-logo-1.jpg",
    Jobs: "2 Jobs Openings",

    Jobopenings:"2 Jobs Available",
    Jobdetail: "Software Engineer Java (1-2 yr)",
    Jobdetail2: "Data Analyst Python (1-3 yr)"
  },

  {
    profile: "Data Scientist",
    company: "XYZ Analytics",
    location: "San Francisco",
    image: "../img/com-logo-2.jpg",

    Jobs: "2 Jobs Openings",

    Jobopenings:"2 Jobs Available",
    Jobdetail: "Software Engineer Java (1-2 yr)",
    Jobdetail2: "Data Analyst Python (1-3 yr)"
  },
  {
    profile: "UX Designer",
    company: "Design Co.",
    location: "London",
    image: "../img/com-logo-3.jpg",

    Jobs: "2 Jobs Openings",

    Jobopenings:"2 Jobs Available",
    Jobdetail: "Software Engineer Java (1-2 yr)",
    Jobdetail2: "Data Analyst Python (1-3 yr)"
  },
  {
    profile: "Software Engineer",
    company: "Tech Solutions",
    location: "Seattle",
    image: "../img/com-logo-4.jpg",

    Jobs: "2 Jobs Openings",

    Jobopenings:"2 Jobs Available",
    Jobdetail: "Software Engineer Java (1-2 yr)",
    Jobdetail2: "Data Analyst Python (1-3 yr)"
  },
  // Add more job listings
];

const cardContainer = document.getElementById("card-container");

function displayJobs(jobs) {
  cardContainer.innerHTML = ""; // Clear previous cards
  jobs.forEach((job) => {
    const card = document.createElement("div");
    card.classList.add("job-card");
    card.innerHTML = `
      <div class="flex">
        <div class="image-div">
          <img src="${job.image}" >
        </div>
        <div class="job-profile">
          <h3>${job.profile}</h3>
          <p>Company: ${job.company}</p>
          <p><i class="fa fa-map-marker-alt primary-btn"></i> ${job.location}</p>
        </div>
      </div>
      <div class="para-div">
        <p class="Job-opening">Jobs Openings:${" "+job.Jobopenings}</p>
        <p><i class="fa fa-angle-right right-arrow"></i><a href="./jobDetail.html">${job.Jobdetail}</a></p>
        <p><i class="fa fa-angle-right right-arrow"></i><a href="./jobDetail.html">${job.Jobdetail2}</a></p>
        <button onclick="window.location.href='./findJob.html'"><a href="./findJob.html">See More Jobs</a></button>
      </div>
    `;
    cardContainer.appendChild(card);
  });
}

function filterJobs() {
  const profileFilter = document.getElementById("profile-filter").value.toLowerCase();
  const companyFilter = document.getElementById("company-filter").value.toLowerCase();
  const locationFilter = document.getElementById("location-filter").value.toLowerCase();

  const filteredJobs = jobs.filter((job) => {
    const matchesProfile = job.profile.toLowerCase().includes(profileFilter);
    const matchesCompany = job.company.toLowerCase().includes(companyFilter);
    const matchesLocation = job.location.toLowerCase().includes(locationFilter);
    return matchesProfile && matchesCompany && matchesLocation;
  });

  displayJobs(filteredJobs);
}

// Add event listener to the search button
document.getElementById("search-button").addEventListener("click", filterJobs);

// Initial display of all jobs
displayJobs(jobs);
