class Joueur{
  constructor(nom, niveau, vie, force) {
        this.nom = nom;
        this.niveau = niveau;
        this.vie = vie;
        this.force = force;
    }
}
class Goblin{
      constructor(nom, niveau, vie, force) {
        this.nom = nom;
        this.vie = vie;
        this.force = force;
    }
}
let nom = prompt("quel  est votre nom : ");
    console.log("Bienvenue " + nom);
let Niveau = 1;
let Vie = 100;
let Force  = 20;
let inventaire = [];


let nom_GO = "Goblin";
let Vie_GO = 30;
let Force_GO  = 15;


let Joueur1 = new Joueur(nom, + Niveau, + Vie, + Force);
    console.log(Joueur1)

    inventaire.push('potion de vie', 'Posion de force', 'potion de bouclier');
    
    
for (let i = 0; i < inventaire.length; i++) 
        console.log("inventaire:", "[", [i], "]");

let goblin1 = new Goblin(nom_GO, + Vie_GO, + Force_GO);
    console.log(goblin1)

    















// let choisir = prompt("Que voulez-vous faire : Attaquer / Speciale / Fuir / Utiliser");
// let joueur1 = new joueur1()


