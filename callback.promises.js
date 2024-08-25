console.log("Before");
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     console.log("Repos:", repos);
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     });
//   });
// });
getUser(1)
  .then((user) => getRepositories(user.gitHubUsername))
  .then((repos) => getCommits(repos[0]))
  .then((commits) => console.log("Commits:", commits))
  .catch((err) => console.log("Error:", err.message));
console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading user from a database...");
      resolve({ id: id, gitHubUsername: "mjhashid" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repos) {
  return new Promises((resolve, reject) => {
    setTimeout(() => {
      resolve(["Two commits are made in repo1"]);
    }, 2000);
  });
}
