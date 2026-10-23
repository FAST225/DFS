const budget = 20000;        
const prixCahier = 1500;       
const quantiteCahiers = 4;     
const prixStylo = 500;         
const quantiteStylos = 3;      
const montantCahiers = prixCahier * quantiteCahiers;
const montantStylos = prixStylo * quantiteStylos;
const total = montantCahiers + montantStylos;
let resultatBudget;
if (total <= budget) {
  resultatBudget = "Budget suffisant";
} else {
  resultatBudget = "Budget insuffisant";
}
console.log("===== CAISSE =====");
console.log("Cahiers : " + montantCahiers + " FCFA");
console.log("Stylos : " + montantStylos + " FCFA");
console.log("Total : " + total + " FCFA");
console.log("Budget : " + budget + " FCFA");
console.log(resultatBudget);
for (let i = 1; i <= 5; i++) {
  console.log("Achat numéro " + i);
}
