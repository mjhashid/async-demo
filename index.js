console.log("Before");
getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos, status) => {
    console.log("Repos", repos);
    console.log("Status", status);
    getCommits(user.gitHubUsername, (details) => {
      console.log("Profile", details[0].email, details[1]);
    });
  });
});
console.log("After");

// Three patterns of dealing with asynchronous

// Callback.
// Promises.
// Async/await.

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database...");
    callback({ id: id, gitHubUsername: "hashidmj" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Calling GitHub API...");
    // Applying two arguments to the callback function...
    callback(["repo1", "repo2", "repo3"], {
      name: "Momohjimoh Hashidu",
      level: "Junior Developer",
    });
  }, 2000);
}

function getCommits(commit, callback) {
  setTimeout(() => {
    console.log("Loading Details...!");
    callback([
      (profile = {
        name: "Momohimoh Hashidu",
        email: "hashibibat@gmail.com",
        institution: "Ahmadu Bello University Zaria",
      }),
      (address = {
        country: "Nigeria",
        state: "Kogi",
        LGA: "Okene",
        homeAddress: "No 24f Idoji Street Okene, Kogi State.",
      }),
    ]);
  }, 2000);
}
