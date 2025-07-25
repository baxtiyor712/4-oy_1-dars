// 1-masala

// const promise1 = new Promise((resolve) => setTimeout(() => resolve("Birinchi natija"), 300))
// const promise2 = new Promise((resolve) => setTimeout(() => resolve("Ikkinchi natija"), 200))
// const promise3 = new Promise((resolve) => setTimeout(() => resolve("Uchinchi natija"), 400))

// Promise.race([promise1, promise2, promise3])
//   .then((natija) => {
//     console.log("Eng tez bajargan promise natijasi:", natija);
//   });



// 2-masala


// class Animal {
//     constructor(nom) {
//       if (new.target === Animal) {
//         throw new Error("Animal abstract classidan obyekt yasab bo'lmaydi")
//       }
//       this.nom = nom
//     }
//     ovoz() {
//       throw new Error("Ovoz metodi majburiy override qilinsin")
//     }
//   }
  
//   class It extends Animal {
//     ovoz() {
//       return "Vov-vov"
//     }
//   }
  
//   class Mushuk extends Animal {
//     ovoz() {
//       return "Miyov"
//     }
//   }
  
//   class Qush extends Animal {
//     ovoz() {
//       return "Chir-chir"
//     }
//   }
  
//   const it = new It("Bobik")
//   const mushuk = new Mushuk("Masha")
//   const qush = new Qush("Chumchuq")
  
//   console.log(it.nom, it.ovoz());
//   console.log(mushuk.nom, mushuk.ovoz());
//   console.log(qush.nom, qush.ovoz());


// 3-masala


// class MathAmallar {
//     static kvadrat(x) {
//       return x * x
//     }
//     static kub(x) {
//       return x * x * x
//     }
//     static yigindi(a, b) {
//       return a + b
//     }
//   }
  
//   console.log(MathAmallar.kvadrat(4)); 
//   console.log(MathAmallar.kub(3));     
//   console.log(MathAmallar.yigindi(7, 8));



// 4-masala


// class BankHisob {
//     #balans = 0; // private property
  
//     constructor(ism) {
//       this.ism = ism
//     }
  
//     balansOlish() {
//       return this.#balans
//     }
  
//     balansQoshish(miqdor) {
//       if (miqdor > 0) {
//         this.#balans += miqdor
//       }
//     }
//   }
  
//   const hisob = new BankHisob("Sardor");
//   hisob.balansQoshish(1000);
//   console.log(hisob.balansOlish());
  