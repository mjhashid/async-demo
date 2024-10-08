console.log("Before");
getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos) => {
    console.log("Repos:", repos);
    getCommits(repos[0], (commits) => {
      console.log(commits);
    });
  });
});

// Using promises with then and catch clause...
getUser(1)
  .then((user) => getRepositories(user.gitHubUsername))
  .then((repos) => getCommits(repos[0]))
  .then((commits) => console.log("Commits:", commits))
  .catch((err) => console.log("Error:", err.message));

// Async and Await approach..
async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log("Error:", err.message);
  }
}
displayCommits();

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
      // resolve(["repo1", "repo2", "repo3"]);
      reject(new Error("Could not get the Repos."));
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["Making 2 commits in repo1"]);
    }, 2000);
  });
}
