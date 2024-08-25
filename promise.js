const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      (profile = { name: "Momohjimoh Hashidu", age: 26, sex: "Male" }),
      (certificate = {
        primary: "First leaving school certificate",
        secondary: "West African Examination Council Certificate (WAEC)",
        tertiary: ["National Diploma", "Higher National Diploma"],
      }),
      (address = {
        nationality: "Nigeria",
        state: "Kogi State",
        LGA: "Okene",
        street: "Idoji",
        home_address: "No 24f Idoji Street Okene, Kogi State",
      }),
    ]);

    // Using the reject function.
    reject(new Error("Sorry the specify url of the API is not found..."));
  }, 2000);
});
p.then((result) => console.log("Result", result)).catch((err) =>
  console.log("Error:", err.message)
);
