var HesapA = {
  ad: "Abdullah Gündeşli",
  hesapNo: "123456789",
  bakiye: 2000,
  ekHesap: 1000,
};
var HesapB = {
  ad: "Yusuf Gündeşli",
  hesapNo: "0123456789",
  bakiye: 3000,
  ekHesap: 2000,
};

function paraCek(hesap, miktar) {
  console.log(`Merhaba ${hesap.ad}`);
  if (hesap.bakiye >= miktar) {
    hesap.bakiye = hesap.bakiye - miktar;
    console.log("Paranızı Alabilirsiniz");
  } else {
    var toplam = hesap.bakiye + hesap.ekHesap;
    if (toplam >= miktar) {
      if (confirm("Ek hesbabı kullanmak istermisiniz?")) {
        console.log("Paranızı Alabilirsiniz");
        var bakiye = hesap.bakiye;
        var ekhesap = miktar - bakiye;
        hesap.bakiye = 0;
        hesap.ekHesap = hesap.ekHesap - ekhesap;
      } else {
        console.log(
          `${hesap.hesapNo} nolu hesabınızda ${miktar} TL bulunumamaktadır`
        );
      }
    } else {
      console.log("Bakiyeniz Yetersiz");
    }
  }
}
paraCek(HesapB, 1000);
paraCek(HesapB, 3000);
paraCek(HesapB, 1000);
