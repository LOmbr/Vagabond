var arsay = new Array();

exports.say = function say() {
	
	if(arsay.length == 0){
		genSay()
		shuffle();
	}	
	i = getRandomInt(arsay.length);
	return arsay[i];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function shuffle() {
    var j, x, i;
    for (i = arsay.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arsay[i];
        arsay[i] = arsay[j];
        arsay[j] = x;
    }
}

function genSay() {
	arsay.push('Que dirais-tu d\'une nouvelle maison? -- James');
	arsay.push('Cherches-tu à investir? -- James')
	arsay.push('Je me demande pourquoi cette maison est si bon marché. -- James')
	arsay.push('Les frais de guilde pour ce mois sont de... -- Dony')
	arsay.push('Tu... Tu désires fonder une guilde? -- Dony')
	arsay.push('Je peux t\'aider? -- Sofia')
	arsay.push('Tu dois d\'abord prendre un numéro - Sofia')
	arsay.push('Waa! Regarde-toi! Tu grandis à vue d\'œil! - Amy')
	arsay.push('Youhou! Que dirais-tu d\'un petit familier? - Amy')
	arsay.push('Si ça concerne les familiers, je te répondrai volontiers -- Amy')
	arsay.push('Que dirais-tu de jeter un coup d\'œil à mes marchandises? - Crispin')
	arsay.push('Bienvenue! Content de te voir -- Crispin')
	arsay.push('Déjà entendu parler d\'une armure en écaille de Dragon? - Davy')
	arsay.push('Hé! Salut! Alors, combien de dragons as-tu déjà tué? - Davy')
	arsay.push('Si tu as soif, pourquoi ne pas en profiter pour goûter une de mes nouvelles potions? - Daisy')
	arsay.push('Eeh... Ça ne nous rajeunit pas tout ça... -- Jérémy')
	arsay.push('Ouais! T\'es génial(e)! - Léo')
	arsay.push('T\'as qu\'à demander: t\'es trop génial(e)! - Léo')
	arsay.push('J\'aimerais être aussi génial que toi quand j\'serai grand - Léo')
	arsay.push('Tout va bien pour l\'instant: j\'ouvre l\'œil, et le bon! - Victor')
	arsay.push('Bien le bonjour; que puis-je faire pour toi? - Victor')
	arsay.push('Quelque chose te tracasse? - Colin')
	arsay.push('Ce manteau ne te servira à rien par ce temps! - Steven Jr')
	arsay.push('Avons-nous à faire? - Colin')
	arsay.push('Qu\'est-ce qui t\'a amené(e) à venir me trouver ici? - Steven Jr')
	arsay.push('En quoi puis-je t\'être utile? - Vincent')
	arsay.push('Bien le bonjour! - Vincent')
	arsay.push('Wow! Quel temps magnifique! - Cindy')
	arsay.push('Qu\'est-ce qui t\'amène auprès de moi? - Cindy')
	arsay.push('N\'aurais-tu pas croisé des jeunes et arrogants fils à papa sur ta route? - Cindy')
	arsay.push('soupir... Je suppose qu\'il me reste encore beaucoup à apprendre - Edeline')
	arsay.push('Et si tu commençais par arrêter de me regarder comme ça? - Cindy')
	arsay.push('As... As-tu besoin de me parler? - Edeline')
	arsay.push('Que... Que puis-je faire pour toi? - Edeline')
	arsay.push('Rien de tel qu\'une jeunesse active! - Evan')
	arsay.push('Cette armure s\'alourdit d\'année en année... - Evan')
	arsay.push('Salut! Alors, quoi de neuf? - Rony')
	arsay.push('La magie n\'est pas une chose aisée! - Edeline')
	arsay.push('Il n\'y a personne pour venir boire un thé? - Rony')
	arsay.push('Tel maître, tel épée. À quoi ressemble la tienne? - Evan')
	arsay.push('Tu dois être parfaitement préparé si tu veux servir dignement quelqu\'un! - Evan')
	arsay.push('Rien de tel qu\'une bonne blonde bien fraîche - Rudolph')
	arsay.push('Viens te détendre autour d\'un p\'ti verre! - Rudolph')
	arsay.push('J\'espère que le ciel va rester dégagé! - Florane')
	arsay.push('Il faut prendre le temps de bien se reposer avant de repartir à l\'aventure - Florane')
	arsay.push('Bienvenue! Nous proposons les meilleures chambres de la ville! - Florane')
	arsay.push('tchling tchling - Chef Brutus')
/*

*/
}