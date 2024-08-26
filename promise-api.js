// Promises that are already Resolved.

const promise = Promise.resolve({
  username: "mjhashid",
  email: "hashibibat@gmail.com",
  id: 111,
});
promise.then((result) => console.log(result));

// Promises that are already Rejected.

const p = Promise.reject(new Error("The specified repo is Not found"));
p.catch((err) => console.log(err.message));
