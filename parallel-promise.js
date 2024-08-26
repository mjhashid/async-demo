// Holding two parallel Promises.

// Api of my Facebook details...
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 1...");
    resolve({
      account: "Facebook",
      userName: "Hashid Adinoyi",
    });
  }, 2000);
});

// Api of my Whatsapp details...

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 2...");
    resolve({
      account: "Whatsapp",
      userName: "Mr.Hashid",
      phone: "08107652774",
    });
  }, 2000);
});

// Using Promise.all and it return an array..
Promise.all([p1, p2]).then((result) => console.log(result));

// Using promise.race to return a single promise..
Promise.race([p1, p2]).then((result) => console.log(result));
