let personProto = {
  calculateAge: function () {
    return 2018 - this.yearOfBirth;
  },
};
let kisi = Object.create(personProto);
kisi.name = "Abdullah";
kisi.yearOfBirth = 1994;
kişi.job = "Software";

console.log(kisi);
console.log(kişi.calculateAge());
