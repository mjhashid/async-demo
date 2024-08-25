console.log("Before");
getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos, status) => {
    console.log("Repos", repos);
    console.log("Status", status);
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
    callback(["repo1", "repo2", "repo3"], {
      name: "Momohjimoh Hashidu",
      level: "Junior Developer",
    });
  }, 2000);
}
