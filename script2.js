
// Sample data - replace this with actual job listings
const jobs = [
    {
      profile: "Web Developer",
      company: "ABC Tech",
      location: "New York",
      image: "../img/google-logo.jpg",
      Jobs: "2 Jobs Openings",
  
      Jobopenings:"2 Jobs Available",
      Jobdetail: "Software Engineer Java (1-2 yr)",
      Jobdetail2: "Data Analyst Python (1-3 yr)"
    },
    {
      profile: "Data Scientist",
      company: "XYZ Analytics",
      location: "San Francisco",
      image: "../img/google-logo.jpg",
  
      Jobs: "2 Jobs Openings",
  
      Jobopenings:"2 Jobs Available",
      Jobdetail: "Software Engineer Java (1-2 yr)",
      Jobdetail2: "Data Analyst Python (1-3 yr)"
    },
    {
      profile: "UX Designer",
      company: "Design Co.",
      location: "London",
      image: "../img/google-logo.jpg",
  
      Jobs: "2 Jobs Openings",
  
      Jobopenings:"2 Jobs Available",
      Jobdetail: "Software Engineer Java (1-2 yr)",
      Jobdetail2: "Data Analyst Python (1-3 yr)"
    },
    {
      profile: "Software Engineer",
      company: "Tech Solutions",
      location: "Seattle",
      image: "../img/google-logo.jpg",
  
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
        <img src="${job.image}" >
        <h3>${job.profile}</h3>
    
        <p>Company: ${job.company}</p>
        <p>Location: ${job.location}</p>
        
        <p><strong>Jobs Openings:</strong> ${job.Jobopenings}</p>
        <p>Jobs Detail: &nbsp   ${job.Jobdetail}</p>
        <p>Jobs Detail: &nbsp ${job.Jobdetail2}</p>
  
  
  
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
  