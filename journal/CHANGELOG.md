# Journal des versions — FPLS

FPLS, anciennement TabSanté. Ce qui change dans FPLS, la plateforme des infirmières libérales à domicile, version par version : au poste fixe du cabinet, sur le terminal de tournée et dans la démo.

*Mis à jour le 13 novembre 2026.*

[Portail](https://valeriongg.github.io/tabsante-docs/) · [Démo](https://valeriongg.github.io/tabsante-docs/demo/) · [Vidéos](https://valeriongg.github.io/tabsante-docs/videos/) · [Design](https://valeriongg.github.io/tabsante-docs/design/) · [Questions](https://valeriongg.github.io/tabsante-docs/questions/) · [Donner mon avis](https://github.com/ValerionGG/tabsante-docs/issues/new?template=retour.yml&application=Journal&title=%5BRetour%5D%20Journal)

## Où en est FPLS

Couverture du cahier des charges : **571 éléments**, dont **418 faits et testés** (73 %), **139 simulés**, **10 partiels** et **4 bloqués**.

Ce qui est simulé, et pourquoi :

- **Agréments SESAM-Vitale et CNDA** — La lecture des cartes CPS et Vitale, les feuilles de soins électroniques et la télétransmission fonctionnent de bout en bout, mais avec un composant de démonstration. Rien n'est transmis à l'Assurance maladie tant que l'agrément n'est pas obtenu.
- **Cotation NGAP** — Le moteur de cotation est une démonstration, alignée sur le texte de la NGAP en vigueur et vérifiée sur des cas officiels. Il explique chaque ligne mais ne doit jamais servir à facturer.
- **Hébergement HDS** — Les données de santé devront être hébergées chez un hébergeur certifié HDS. Le dossier est préparé ; d'ici là, FPLS ne contient que des personnes fictives.
- **Raccordements nationaux** — INSi, DMP, messagerie sécurisée MSSanté, Pro Santé Connect et ordonnance numérique sont joués par des doublures fidèles, en attendant les conventions et les accès de production.

Les 4 éléments bloqués attendent un tiers : un hébergeur certifié HDS, un délégué à la protection des données, un essai d'autonomie de 10 heures sur le téléphone cible et une décision de phasage.

> **À savoir.** La cotation affichée est une démonstration et la télétransmission est simulée. FPLS ne contient aucune donnée réelle : tous les patients et soignants sont fictifs. Aucune date d'agrément n'est annoncée.

## À venir — en cours

*en cours au 13 novembre 2026* — Ce qui suit attend une décision ou un tiers. Les autres chantiers sont fusionnés.

### À trancher avec le cabinet testeur, en réunion

- Prescription : planifier à part plusieurs perfusions sur un même cathéter, préparer dès l'ordonnance le rythme des soins sur plaie ou dispositif, décaler un soin hebdomadaire tombant un dimanche ou un jour férié, tenir compte des renouvellements dans la date de fin.

### Données publiques à charger

- Liste officielle des communes en zone de montagne et base des codes postaux (data.gouv.fr, Licence Ouverte) : l'importeur est prêt, le chargement attend l'accord du cabinet.

### Raccordements réels

- Agent de poste et télétransmission réels : attendent l'agrément SESAM-Vitale.

## [0.33] — 14 novembre 2026 — Les parcours rejoués pour de vrai sur un téléphone, les fiches de soin reprises une par une

Après la mise au format téléphone, chaque parcours a été rejoué de bout en bout sur un petit écran, au poste comme sur le téléphone de tournée : créer un patient, prescrire, facturer, signer un passage, travailler sans réseau. Ce qui gênait en chemin est corrigé, et les boutons des fiches de soin disent leur geste en trois mots.

### Amélioré

- **Poste fixe ·** Sur un téléphone, le champ que l'on remplit ne passe plus sous le bouton collé en bas ; « Enregistrer » et « Annuler » tiennent sur une seule rangée.
- **Poste fixe ·** Quand on valide un formulaire et qu'un champ est refusé plus haut, l'écran revient sur ce champ, avec son message.
- **Poste fixe ·** Les listes de propositions (collègue à mentionner avec @, prescripteur) viennent à l'écran en s'ouvrant, au lieu de rester sous les boutons.
- **Poste fixe ·** Après « Enregistrer la prescription » ou l'acceptation d'une demande de soins, l'écran revient sur ce qui vient d'être fait.
- **Poste fixe ·** Sur un téléphone, le bouton bleu flottant se réduit à son icône dès qu'il recouvrirait un bouton ou un titre, et s'efface quand un formulaire a son propre bouton.
- **Poste fixe ·** Paramètres du cabinet : « Enregistrer » reste inactif tant que rien n'a changé.
- **Poste fixe ·** Facturation : la feuille de soins montre d'abord ce qu'il reste à faire (lire la carte, signer, envoyer) ; quand une correction contredit la carte Vitale, le message le dit et mène à « Choisir la bonne valeur ».
- **Poste fixe ·** Sur un téléphone, le dossier de preuve se lit en deux rangées par soin ; les plaies, les dispositifs, les fréquences prescrites, le suivi des patients et les téléphones du cabinet se lisent sans défiler de côté.
- **Terminal ·** Les boutons des fiches de soin disent un verbe et son objet en trois mots : « Créer les soins », « Envoyer la réponse », « Ajouter une pompe », « Lancer le minuteur », « Fait en entier ».
- **Terminal ·** Fiche du patient : « Soin » en pilule compacte à côté de « Commencer le passage », qui tient sur une ligne même sur un petit téléphone.
- **Terminal ·** Un bouton principal grisé n'est jamais muet : il dit ce qui manque.
- **Terminal ·** En texte « Très grand » sur un petit téléphone, plus rien n'est coupé sur les écrans du quotidien (prochain passage, menu « Autres actions », itinéraire, reçu).
- **Terminal ·** Plus de numéro de fiche ni de code à l'écran ; « Vigilance orages » s'écrit en entier sur la carte du trajet ; la dernière transmission d'un patient s'affiche avec sa date et son auteur.

### Corrigé

- **Poste fixe ·** Démonstration : le numéro de sécurité sociale proposé à la saisie (« Générer un NIR de démonstration ») est accepté à la facturation. L'ancien numéro proposé laissait le patient bloqué.
- **Poste fixe ·** Demandes de soins : refuser pour « Autre motif » demande la précision sur place, au lieu d'un refus sans explication.
- **Poste fixe ·** À la création d'un patient, l'étape « une identité ressemblante existe déjà » se lit depuis son début.
- **Terminal ·** Pendant un soin pas à pas, une étape n'est plus dite « complète » quand une réponse vient de faire paraître des champs à remplir.

## [0.32] — 13 novembre 2026 — Le téléphone d'abord : menu sous le pouce, boutons, mots, taille du texte et sons

Le poste ouvert sur un téléphone devient confortable : menu en bas, onglets sur une ligne, texte plus gros, listes au lieu de tableaux. Partout, une seule couleur pour l'action et des boutons aux mots plus courts. Chacun règle la taille du texte et les sons, au poste comme sur le téléphone de tournée.

### Nouveau

- **Poste fixe et terminal ·** « Affichage et sons » : chacun choisit la taille du texte (Standard, Grand, Très grand) et coupe ou garde les sons. Au poste, sous votre nom en bas du menu ; sur le téléphone, dans « Moi ». Le réglage reste sur l'appareil.
- **Poste fixe ·** Un son discret confirme la signature d'une feuille de soins, d'un bilan ou d'une consultation, l'envoi à la caisse et l'acceptation d'une demande ; un son grave signale un échec ; un carillon annonce une notification critique qui arrive.
- **Terminal ·** Un son court confirme une signature, un autre signale un rappel ou un retard, un troisième une action refusée. Les vibrations se coupent aussi.
- **Poste fixe ·** Sur un téléphone, le menu est en bas, sous le pouce : Aujourd'hui, Patients, Tournées, Transmissions, et « Plus » pour le reste. Chacun n'y voit que ce à quoi il a droit.
- **Poste fixe ·** En tête de la synthèse d'un patient, « L'essentiel » en deux lignes : les soins en cours et l'alerte, puis le dernier passage et le prochain.
- **Terminal ·** La fiche du patient dit d'abord l'essentiel, juste sous l'allergie : l'âge, les soins à faire à ce passage, le dernier passage.

### Amélioré

- **Poste fixe ·** Sur un téléphone, le texte est plus gros (15 px pour le texte courant, 13 au minimum), la barre du haut tient sur une ligne et le bandeau d'astuce ne prend plus de place.
- **Poste fixe ·** Sur un téléphone, les onglets et les filtres tiennent sur une seule ligne qui défile au doigt : plus de menu sur deux ou trois lignes.
- **Poste fixe ·** Sur un téléphone, les chiffres vont à deux par rangée : sur Aujourd'hui, la première ligne « À traiter » se voit sans défiler.
- **Poste fixe ·** Sur un téléphone, les patients, les soins effectués, les bilans et courriers, les soins signés et ce qui reste dû sont des listes : plus de tableau coupé ou à faire défiler de côté.
- **Poste fixe ·** Sur un téléphone, la carte du patient est trois fois moins haute, l'allergie toujours visible ; le planning montre un jour à la fois ; la recherche et les notifications prennent tout l'écran.
- **Poste fixe ·** Sur un téléphone, l'action principale d'un écran est un bouton bleu en bas à droite, qui se réduit à un rond dès que la page défile.
- **Poste fixe ·** Une seule couleur pour l'action, le bleu vif, et un seul bouton plein par écran ; les boutons d'une même rangée ont la même hauteur ; le choix fait dans un filtre se voit nettement.
- **Poste fixe ·** Des mots plus courts : « Tout facturer », « Créer la feuille », « Ajouter un patient », « Nouvelle transmission », « Ajouter plusieurs soins ». Dans les transmissions, « Intra-cabinet » devient « Équipe » et une « interpellation » devient une « question ».
- **Poste fixe ·** « Domicile non placé » dit maintenant quoi faire : « Adresse à saisir » dans le dossier, « Adresse à situer sur la carte » sur la tournée.
- **Terminal ·** En bas de l'écran, les quatre onglets ont la même taille, en entier, même sur un petit téléphone.
- **Terminal ·** Le prochain passage se lit en deux lignes : le patient et l'heure d'arrivée, puis le soin et la distance. Un seul bouton bleu, celui qui fait avancer la tournée.
- **Terminal ·** Les boutons n'ont plus que deux hauteurs et parlent plus court (« Voir la tournée », « Finir la journée », « Signer l'ouverture ») ; aucun ne finit par « … ». Une réponse choisie est en bleu nuit, le bleu vif reste à l'action principale.
- **Terminal ·** La liste des soins d'un arrêt ou d'un passage s'écrit en entier.

### Corrigé

- **Poste fixe ·** Le panneau des notifications se referme quand on change de page.
- **Poste fixe ·** Une photo de plaie illisible le dit en français et indique quoi faire.
- **Poste fixe ·** En texte « Très grand », plus rien n'est coupé sur Aujourd'hui ; le menu de gauche s'élargit pour garder ses libellés entiers.

## [0.31] — 13 novembre 2026 — Un nouveau visage, au cabinet comme sur le téléphone

Troisième partie de la refonte : le dessin. Menu bleu nuit, cartes blanches arrondies, bleu vif pour l'action, chiffres en cartes. Tous les écrans du poste et du téléphone ont été repris, et chaque écran montre d'abord ce qu'on vient y faire.

### Nouveau

- **Poste fixe et terminal ·** Nouvelle identité partout : page gris-bleu, cartes blanches très arrondies, un seul bouton bleu par écran, états en pastilles de couleur (corail critique, ambre à surveiller, vert fait, violet contexte), une couleur d'avatar par personne.
- **Poste fixe ·** Aujourd'hui accueille par « Bonjour » et le prénom, puis quatre cartes de chiffres : passages signés, à traiter, cotations à vérifier, prêt à facturer. Chaque carte ouvre son écran. L'aide-soignante n'y voit ni cotation ni montant.
- **Poste fixe ·** Aujourd'hui : un anneau dit où en sont les tournées, « Soins à surveiller » réunit plaies et dispositifs en alerte, « Passages de la semaine » montre en barres le prévu et le signé.
- **Poste fixe ·** Dossier du patient : une carte d'identité en tête (âge, adresse, allergies, contexte, médecin traitant) avec « Transmission » et « Nouvelle prescription », puis les dernières constantes avec leur courbe, les derniers passages en frise, les soins en cours et « À savoir avant le soin ».
- **Poste fixe ·** Tableau de bord : chiffres en cartes, passages en barres, objectifs de la semaine, carte heure par heure, cicatrisation plaie par plaie.
- **Poste fixe ·** Tournées : la semaine est une grille de tuiles avec l'avatar du soignant ; quatre chiffres en tête (passages, cases non attribuées, journées chargées, échanges proposés).
- **Poste fixe ·** Demandes de soins : une carte par demande, le téléphone en bouton « Appeler le … », puis Rappelé, Refuser ou Accepter.
- **Poste fixe ·** Équipe : une carte par membre ; « Relier un téléphone » affiche le code en très grand et trois étapes numérotées.
- **Terminal ·** La tournée s'ouvre sur « Bonjour » et une carte bleue : passages faits, fin estimée, état du réseau et des envois. La barre d'onglets flotte en bas.
- **Terminal ·** Le téléphone prend la police du poste fixe (Geist) : les deux écrans se lisent de la même façon. Le zéro n'y est jamais barré, pour ne pas le confondre avec un 8.
- **Terminal ·** Le reçu dit d'abord, en grand, où en est l'envoi, puis résume ce qui a été signé, pour qui, quand et par qui.

### Amélioré

- **Poste fixe ·** Dossier du patient : la synthèse tient en un écran et demi sur une tablette, au lieu de trois. Les vues d'un onglet se lisent juste dessous : un appui pour en changer, au lieu de deux.
- **Poste fixe ·** « À traiter » : des tuiles colorées selon la gravité, un seul bouton par ligne ; toucher une ligne déplie son détail dessous.
- **Poste fixe ·** Facturation : trois cartes de chiffres par onglet, une ligne par patient avec un seul bouton ; ce qui bloque est écrit dessous, avec « Corriger ».
- **Poste fixe ·** Carte du jour : la carte et l'ordre de passage côte à côte ; chaque domicile tient en trois lignes. Au-delà de trois heures, un passage en retard est dit « toujours pas fait ».
- **Poste fixe ·** Transmissions : chaque message montre l'auteur, l'heure, le patient puis le texte ; un seul bouton par message, « Requalifier » sous « ⋯ ».
- **Poste fixe ·** Nouvelle prescription : trois sections numérotées, la fréquence de chaque acte dite en une phrase, « Enregistrer » toujours visible en bas.
- **Poste fixe ·** Connexion : on choisit d'abord son profil ; la carte CPS et le code sont sous « Autres façons de se connecter ».
- **Poste fixe ·** Toute boîte de dialogue a une croix en haut à droite et son bouton principal en bas à droite.
- **Poste fixe ·** Sur tablette, tout se touche : aucune commande sous 44 px au doigt sur les écrans vérifiés, aucun débordement de 390 à 1440 px de large.
- **Terminal ·** « Y aller » et « Commencer le passage » sont dans la carte du prochain passage, avec l'heure d'arrivée, les soins et ce qu'il faut savoir.
- **Terminal ·** Fiche du patient : l'allergie en bloc corail, les soins du passage en lignes, le reste du dossier replié en cartes.
- **Terminal ·** Pendant un soin, les choix sont de grandes pilules et les étapes une barre de segments.
- **Terminal ·** Les affichages « Nuit » et « Soleil » suivent les mêmes formes.
- **Terminal ·** L'aide intégrée décrit les écrans tels qu'ils sont, et plus aucun texte n'est sous 14.
- **Terminal ·** « Mode visite » s'appelle « Étape par étape » ; dans « Faite par », « L'entourage » devient « Un proche ».

### Corrigé

- **Poste fixe ·** « Annuler » après un enregistrement (cabinet, coordonnées d'un membre, rayon d'intervention) remet bien les valeurs d'avant.
- **Poste fixe ·** Une tournée créée paraît aussitôt dans le planning, sans recharger la page.
- **Poste fixe ·** Tableau de bord : la carte heure par heure compte tous les passages dus de la semaine, comme « Passages de la semaine » (elle oubliait les jours pas encore ouverts).
- **Terminal ·** Sur un petit téléphone, la première réponse de la fiche Médicaments ne reste plus cachée sous la barre du bas.
- **Poste fixe ·** Rédiger une prescription infirmière depuis une consultation récente n'affiche plus d'erreur ; les diagnostics posés ce jour-là y sont rappelés.
- **Poste fixe ·** L'aide intégrée renvoie au bon endroit du dossier pour le partage et la télésanté (onglet « Plus »).

## [0.30] — 12 novembre 2026 — Sur le téléphone, la fiche va droit au soin

Deuxième partie de la refonte : le téléphone. La tournée montre le prochain patient et la suite sans défiler, la fiche du patient commence par les soins du jour, et une injection se trace en cinq touchers au lieu de neuf.

### Nouveau

- **Terminal ·** Avec du réseau, la recherche trouve tous les patients du cabinet : on lit la fiche d'un patient hors tournée (allergies, dernières transmissions, coordonnées) sans le recréer.
- **Terminal ·** La fiche du patient a une ligne « Transmissions » : la dernière en clair, toutes d'un appui.
- **Terminal ·** Fin du passage : ce qui a été fait, ce qui reste, la note pour la relève, puis « Signer » d'un seul appui.
- **Terminal ·** « Rien à signaler » répond d'un geste aux questions de surveillance encore vides (anticoagulant, pansement), sans remplacer une réponse déjà donnée.

### Amélioré

- **Terminal ·** La tournée s'ouvre sur le prochain patient (heure d'arrivée, soins, ce qu'il faut savoir) et, juste dessous, la liste « Ensuite », sans défiler. « Y aller » et « Commencer le passage » restent sous le pouce.
- **Terminal ·** La fiche du patient montre d'abord l'allergie, en une ligne, puis les soins du jour. Le reste se déplie d'un appui. Elle fait deux écrans au lieu de six.
- **Terminal ·** La fiche de soin s'ouvre sur la première question. Le contexte (dernier passage, nouveautés, ordonnance) tient en une ligne « À savoir avant le soin ».
- **Terminal ·** Une seule barre en bas, un seul bouton : « Valider », puis « Soin suivant » ou « Terminer le passage ». « Soin » ajoute un soin non prévu, « Plus » range la photo, la note pour la relève, le soin non réalisé et l'événement critique.
- **Terminal ·** Injection : « Faite » remplit « Faite par » et propose le site selon la rotation, avec « Changer » à côté. Vérifiez-le avant de valider.
- **Terminal ·** Une étape n'est « faite » que complète : ce qui manque est écrit au-dessus du bouton, et un appui y mène.
- **Terminal ·** Le reçu dit d'abord « Enregistré sur ce téléphone » ou « Envoyé au cabinet ». Les détails techniques sont repliés.
- **Terminal ·** Première ouverture : « Relier ce téléphone au cabinet », un seul champ. Ouvert par le QR code du cabinet, le code est déjà saisi.
- **Terminal ·** Au retour du guidage ouvert par « Y aller », le code n'est plus redemandé, sauf après cinq minutes sans toucher l'écran.
- **Terminal ·** Le message de notification est plus petit et ne cache plus « Retour ».
- **Terminal ·** Les textes secondaires sont plus grands, et le réglage « Affichage » (Soleil) est en tête de « Moi ».
- **Terminal ·** Mêmes mots qu'au cabinet : « Transmissions », « 1 pansement », « le cabinet » à la place de « serveur ».

## [0.29] — 12 novembre 2026 — Le poste se simplifie : huit entrées au menu, et l'essentiel d'abord

Refonte de l'ordinateur et de la tablette du cabinet après un audit complet et les retours du cabinet testeur. Le menu passe de vingt entrées à huit, chaque écran montre d'abord ce qu'on vient y faire, et tout se touche au doigt sur tablette. Cette version apporte aussi le rôle de secrétaire, l'acceptation d'une demande de soins en une fois et les règles de fréquence demandées.

### Nouveau

- **Poste fixe ·** Rôle « Secrétaire » : demandes de soins, planning, facturation et statistiques, sans aucun dossier de soins. Le titulaire peut lui accorder un accès aux soins en lecture seule, entre deux dates.
- **Poste fixe ·** « Accepter » une demande de soins cherche d'abord le patient dans le cabinet (nom, date de naissance, numéro de sécurité sociale, téléphone) : « C'est lui » rattache la demande à son dossier, « Nouveau patient » ouvre le dossier avec tout ce que la demande contient.
- **Poste fixe ·** Une demande acceptée peut être annulée tant qu'aucun soin n'a été prescrit ni signé depuis. Un onglet « Traitées » garde l'historique.
- **Poste fixe ·** Le lien de demande de soins se donne en QR code, à afficher ou à imprimer : dix cartes de visite sur une feuille A4, ou une affiche A5.
- **Poste fixe ·** Le formulaire public demande la civilité, l'adresse complète et, en option, le numéro de sécurité sociale.
- **Poste fixe ·** « Facturer tout ce qui est prêt » : tous les soins signés, aujourd'hui, cette semaine ou tout, avec un récapitulatif avant de valider et un seul code de carte CPS pour toute la série.
- **Poste fixe ·** « Dossier de preuve » : qui a fait quoi, à qui et quand, à filtrer par patient, soignant, soin et période, avec le total de chaque soignant.
- **Poste fixe ·** Le dossier du patient a un bouton « Contacts » : médecin traitant, pharmacie, laboratoire, personne de confiance et proches, chaque numéro prêt à appeler.
- **Poste fixe ·** Ce qu'il faut prévoir avant un soin se règle patient par patient, dans le dossier, onglet Tournée.
- **Poste fixe ·** Soin « sous condition » (par exemple un lavement s'il n'y a pas de selles à J3) : aucun passage n'est prévu, et le plan de soins dit « pas encore fait », puis « fait le … par … ».
- **Poste fixe ·** Depuis le planning, « Mettre un patient dans une tournée » range un patient sans ouvrir son dossier.

### Amélioré

- **Poste fixe ·** Le menu tient en huit lignes : Aujourd'hui, Patients, Demandes de soins, Dossiers de soins, Tournées, Transmissions, Facturation, Paramètres du cabinet. « Paramètres du cabinet » est toujours à l'écran.
- **Poste fixe ·** Sur tablette, boutons, onglets, champs et lignes de menu font au moins 44 pixels : on les touche sans viser. Le plus petit texte fait 12 pixels.
- **Poste fixe ·** « Aujourd'hui » s'ouvre sur la liste « À traiter ». Son total est le même dans le menu, en tête de liste et au tableau de bord. La page fait moins de deux écrans au lieu de six.
- **Poste fixe ·** Le tableau de bord tient en un écran : six chiffres au plus, chacun avec ce qu'il couvre, puis le détail replié.
- **Poste fixe ·** Le dossier du patient s'ouvre sur « Derniers passages » : qui est passé, quand, pour quels soins. Une seule rangée d'onglets, et un en-tête qui garde en vue le nom, l'âge, les allergies et les alertes.
- **Poste fixe ·** « Dossier de soins » porte toute la traçabilité : soins en cours, soins effectués, bilans, consultations infirmières, résultats, traitement et alertes.
- **Poste fixe ·** Dans la liste des patients, « Plaies actives » devient « Soins suivis » : pansements, dispositifs et soins en cours.
- **Poste fixe ·** Tournées s'ouvre sur le planning pour qui attribue les tournées. Quatre onglets : Planning, Carte du jour, Préparer demain, Plus.
- **Poste fixe ·** La facturation tient en trois onglets : « À facturer », « Envois et retours », « Paiements ». Un patient bloqué dit pourquoi sur sa ligne, et « Corriger » ouvre la couverture sociale sans quitter la page.
- **Poste fixe ·** Les Paramètres du cabinet tiennent en quatre onglets : Cabinet, Équipe et téléphones, Règles, Données et sécurité. Les règles se lisent sans défiler de côté.
- **Poste fixe ·** « Enrôler un terminal » devient « Relier un téléphone », depuis la ligne de chaque soignant : le code s'affiche en grand, avec un carré à viser. Un téléphone perdu se bloque d'un geste.
- **Poste fixe ·** Un seul bouton pour faire entrer quelqu'un : « Ajouter un membre ». Son lien d'invitation s'envoie depuis votre messagerie ou se copie.
- **Poste fixe ·** La fiche de chaque membre dit en phrases ce qu'il peut faire et ce qu'il ne voit pas.
- **Poste fixe ·** Nouvelle prescription : un acte par ligne, sa fréquence déjà remplie et lisible en une phrase. Les mentions rares sont repliées, et « Enregistrer » reste visible en bas.
- **Poste fixe ·** Quand l'ordonnance dit non aux dimanches et jours fériés : « tous les jours » devient « 6 jours sur 7 », le dimanche ne se coche plus, et un jour férié décale le passage au lendemain, ou au vendredi s'il tombe un samedi.
- **Poste fixe ·** Perfusion : on parle d'« épisode de perfusion ». Une ligne par perfusion, avec produit, volume, débit et horaires prescrits ; aucune durée à saisir.
- **Poste fixe ·** Reculer la fin d'un soin prolonge la même fréquence. Changer le rythme sans nouvelle ordonnance demande un motif.
- **Poste fixe ·** La couverture sociale demande d'abord l'essentiel ; le reste est sous « Autres informations », et un seul bouton enregistre tout.
- **Poste fixe ·** La recherche trouve les pages par leurs mots courants : « téléphone », « équipe », « règles », « données ».
- **Poste fixe ·** Les mots changent : feuille de soins, envoi à la caisse, cotations à vérifier, soins saisis après coup, connexions en cours, dossier de preuve.

### Corrigé

- **Poste fixe ·** Une demande de soins ne s'accepte plus qu'une fois, même si deux personnes cliquent au même instant, et ne crée plus de patient en double.
- **Poste fixe ·** Deux infirmiers (ou deux aides-soignants) ne peuvent plus être prévus au même moment chez un patient.
- **Poste fixe ·** Une prescription ne s'enregistre plus sans acte.
- **Poste fixe ·** Un patient bloqué pour la facturation ne propose plus « Créer la feuille de soins ».
- **Poste fixe ·** Le « 0 » isolé sous certaines cartes de la planification a disparu.

### Sécurité et conformité

- **Poste fixe ·** Annuler le rattachement d'une demande à un patient retire de son dossier ce que la demande y avait ajouté : l'ordonnance, l'adresse, le téléphone, le proche. Rien d'un autre patient n'y reste visible.
- **Poste fixe ·** Les totaux par soignant du dossier de preuve ne sont lus en entier que par ceux qui gèrent le cabinet ; les autres ne voient que le leur.
- **Poste fixe ·** L'aide-soignant ne voit toujours ni cotation ni montant, y compris sur les nouveaux écrans.

## [0.28] — 8 novembre 2026 — Le dossier patient respire sur tablette, et tout le portail passe à FPLS

Sur une tablette tenue à l'horizontale, le bandeau du patient prend moins de place. La démo publique, le site et le portail documentaire portent désormais le nom FPLS.

### Amélioré

- **Poste fixe ·** Sur une tablette à l'horizontale, le bandeau du patient tient sur une ligne : le dossier gagne environ 60 pixels de hauteur.
- **Poste fixe et terminal ·** La démo publique a été réenregistrée avec les dernières versions, sous le nom FPLS.
- **Poste fixe et terminal ·** Le site de présentation et le portail documentaire portent le nom FPLS.

## [0.27] — 8 novembre 2026 — La prescription saisie dit le rythme des soins

Réponse au retour du cabinet testeur sur l'écran « Nouvelle prescription » : chaque acte peut porter son rythme, les dimanches et jours fériés se tranchent par oui ou non, et le produit n'est demandé que pour les soins qui en administrent un. La veille du 8 novembre corrige aussi plusieurs suggestions et ajoute deux rappels de calendrier.

### Nouveau

- **Poste fixe ·** Rythme par acte dans « Nouvelle prescription » : tous les jours, tous les 2 jours, un jour par semaine ou autre, avec les moments de la journée, les heures écrites, et un début et une fin propres à l'acte. À l'enregistrement, les passages sont prévus comme pour une ordonnance photographiée.
- **Poste fixe ·** Rappel de retrait au 31 décembre 2026 pour Levemir, NovoMix 50 FlexPen, Fiasp PumpCart et Victoza : à voir avec le prescripteur. Il disparaît une fois la date passée.
- **Poste fixe ·** Rappel de commande Comirnaty en décembre, avant la fermeture du portail du 21 décembre au 3 janvier.
- **Poste fixe ·** Horaires de la pharmacie sur la fiche contacts du patient.

### Amélioré

- **Poste fixe ·** « Dimanches et jours fériés » se répond par oui ou non dans la saisie d'une prescription. La lecture d'une ordonnance photographiée peut rester sans réponse quand le papier ne dit rien.
- **Poste fixe ·** Le champ produit n'apparaît que pour les soins qui administrent un produit (injections, perfusions, insuline, aérosol, pousse-seringue), et son exemple change selon le soin.
- **Poste fixe ·** Le formulaire indique où saisir un traitement à distribuer pour qu'il rejoigne la fiche Distribution.
- **Poste fixe ·** Le fil de preuve d'un acte mène à la ligne de son ordonnance et à la pièce jointe quand elle existe.
- **Terminal ·** « Nouveautés depuis votre dernier passage » compte à partir de votre propre passage, même entre patients homonymes.

### Corrigé

- **Poste fixe ·** Deux perfusions d'une même ordonnance ne se signalent plus à tort comme un changement de prescription.
- **Poste fixe ·** Suggestion de vaccin antigrippal : la règle « 65 ans ou ALD » était fausse. Le logiciel propose le vaccin à partir de 65 ans ou en hébergement médico-social, et pose la question aux autres patients à partir de 11 ans, car le dossier ne permet pas d'établir les autres groupes.

### Sécurité et conformité

- Quand une suggestion a été revérifiée sur sa source, l'écran donne la date de cette vérification.

## [0.26] — 8 novembre 2026 — Une tournée qui survit au pouce, à l'interruption et à la zone blanche

Première série d'améliorations tirées de la veille du 8 novembre, qui a recueilli les avis et témoignages d'infirmiers libéraux sur leurs logiciels : clôturer sa journée, retrouver où l'on en était et savoir ce qui est réellement envoyé.

### Nouveau

- **Terminal ·** Fin de tournée : la liste des visites qui restent à clôturer se vide jusqu'à « Tournée terminée ».
- **Poste fixe ·** Panneau de fin de journée dans « Sur le terrain », qui se vide jusqu'à « Journée close ».
- **Terminal ·** En tête du patient, ce qui est nouveau depuis votre dernier passage.
- **Poste fixe ·** État de chaque ordonnance d'un coup d'œil : éléments manquants, échéance, renouvellement.
- **Poste fixe ·** Fil d'un acte, de l'ordonnance à la facturation, et ancienneté des impayés (« Impayée depuis 9 mois »).

### Amélioré

- **Terminal ·** Trois états clairs pour chaque dossier : enregistré sur l'appareil, en cours d'envoi, envoyé.
- **Terminal ·** Après une interruption, retour à l'étape laissée, avec le nom et la date de naissance du patient.
- **Terminal ·** Signature : plus d'appui long, un appui ouvre une seule confirmation sous le pouce.
- **Terminal ·** La tournée s'ouvre sur la liste, la carte reste à un appui.
- **Terminal ·** Écrans principaux lisibles avec le texte agrandi à 200 %.
- **Poste fixe ·** Médecin, pharmacie et laboratoire accessibles depuis tous les onglets du dossier, avec appel direct.
- **Poste fixe ·** Les suggestions se ferment en un choix parmi quatre issues et montrent leur source.

## [0.25] — 8 novembre 2026 — TabSanté devient FPLS

La plateforme change de nom. Vos adresses de connexion, vos comptes et vos saisies ne changent pas.

### Amélioré

- **Poste fixe et terminal ·** Le nom FPLS remplace TabSanté dans le poste fixe, le terminal, l'écran de connexion et les documents.

### Sécurité et conformité

- Composants de la plateforme mis à jour : le routeur, le serveur du site, la carte et les outils de construction reçoivent les correctifs de sécurité publiés.
- L'installation des dépendances n'exécute plus de scripts tiers, pour se protéger des attaques par paquets piégés signalées en 2026.

## [0.24] — 7 novembre 2026 — Ce que nous avions proposé au cabinet testeur

Les propositions faites le 6 novembre en réponse aux retours du cabinet testeur sont livrées : le titulaire d'une entreprise individuelle a son statut, le statut règle les droits, la fiche du patient sur le téléphone sépare coordonnées et dossier de soins, et le planning gagne la répétition sans fin et la prise de rendez-vous IPA.

### Nouveau

- **Poste fixe ·** Statut « titulaire » : donné d'office à l'infirmier qui exerce en entreprise individuelle, un seul par cabinet. Un cabinet qui change de forme juridique voit le statut suivre.
- **Poste fixe ·** Le statut règle les droits : titulaire et associés gèrent l'équipe, les paramètres du cabinet, les tournées et le planning ; collaborateurs et salariés gardent leurs tournées, leurs soins, les transmissions et leur propre facturation, sans gérer le cabinet ; les remplaçants ne changent pas.
- **Poste fixe ·** « Lui confier le planning » : le titulaire ou un associé peut confier la gestion des tournées et du planning à un collaborateur ou un salarié précis.
- **Poste fixe ·** Planning IPA au mois, comme celui des tournées, et bouton « Prendre un rendez-vous » : on choisit le patient, l'IPA, la date et l'heure, sans passer par le dossier du patient.

### Amélioré

- **Poste fixe ·** « Tous les lundis » sans date de fin : la tournée est confiée chaque lundi jusqu'à ce qu'on la confie à quelqu'un d'autre ; le planning l'indique sur chaque case.
- **Terminal ·** La carte « Dossier » de la fiche du patient devient « Coordonnées et contacts » (téléphone, adresse, contacts) ; le groupe sanguin et les traitements de fond rejoignent le « Dossier de soins », à côté des dispositifs et des plaies.
- **Poste fixe ·** Un écran que le statut ne permet pas de gérer le dit en clair, au lieu de cacher les boutons sans explication.

### Sécurité et conformité

- Les droits liés au statut sont vérifiés par le serveur : une demande hors statut reçoit un refus explicite, quel que soit l'écran d'où elle vient.
- Une prise de rendez-vous IPA vérifie que l'infirmier choisi est bien IPA du cabinet et la trace au journal des accès.

## [0.23] — 6 novembre 2026 — Les retours du cabinet testeur : statuts, dossier de soins, tournées et planning

Cinq retours d'un infirmier libéral qui teste son propre cabinet d'essai, traités ensemble : le cabinet et son équipe se déclarent comme dans la vie, la plaie rejoint le dossier de soins, le patient est mis dans une tournée et le planning se lit sur un calendrier.

### Nouveau

- **Poste fixe ·** Forme juridique du cabinet (entreprise individuelle, SCM, SELARL, SELAS), choisie aussi à l'ouverture d'un cabinet d'essai ; pour une SELARL ou une SELAS, l'écran précise que les honoraires vont à la société.
- **Poste fixe ·** Statut de chaque intervenant : un infirmier est associé, collaborateur, salarié ou remplaçant ; une aide-soignante est toujours salariée.
- **Poste fixe ·** Infirmier déclaré IPA : lui seul ouvre et signe les bilans et consultations IPA de la fiche 24 et facture en tant qu'IPA.
- **Poste fixe ·** Aides-soignants et IPA deviennent des options du cabinet, désactivées au départ ; l'option aides-soignants n'est proposée qu'à une SELAS. Sans option, l'application n'en parle nulle part.
- **Poste fixe ·** Onglet « Tournée » du dossier patient : le patient est mis dans une tournée pour toute la journée ou selon le moment, dès qu'il existe une tournée ; ses passages suivent d'eux-mêmes.
- **Poste fixe ·** Planning sur un calendrier, à la semaine ou au mois : chaque case se clique pour confier la tournée à un infirmier, pour un jour, une semaine, tous les lundis ou sans fin ; une absence déclarée est respectée.
- **Poste fixe ·** Un planning par métier : infirmiers, aides-soignantes (avec l'option), IPA (avec l'option, les rendez-vous de la semaine).

### Amélioré

- **Poste fixe ·** « Dossiers de soins » remplace « Plaies » dans le menu, avec trois vues : patients, plaies, dispositifs. Les anciens liens mènent à la vue « Plaies ».
- **Poste fixe et terminal ·** Un seul « Dossier de soins » dans la fiche du patient, et le soin d'une plaie s'appelle « Pansement » (« Pansement · Escarre stade 3 »).
- **Terminal ·** L'infirmier voit sa tournée du jour dès qu'elle lui est confiée ; la personne qui reçoit ou perd une tournée est prévenue.

### Corrigé

- **Poste fixe ·** Avec plusieurs tournées créées, rien ne permettait d'y mettre un patient, et le planning restait vide tant que personne n'y était attribué.
- **Poste fixe ·** Le planning des aides-soignantes montrait aussi les infirmiers.

### Sécurité et conformité

- Un aide-soignant ne peut être enregistré que dans un cabinet qui a l'option, et toujours comme salarié.
- Planning IPA réservé à qui lit le dossier clinique ; ses lectures sont déclarées au journal des accès.
- Rien n'est effacé lors du passage aux options : un cabinet qui avait déjà des aides-soignantes garde leurs comptes, et un message l'invite à corriger sa forme.

### Démo et documentation

- La démonstration devient une SELAS avec les deux options ; le cabinet d'essai du testeur est rangé en SCM, sans option.
- Réponses publiées sur chaque retour, avec nos propositions pour la suite ; portail d'aide mis à jour avec le nouveau vocabulaire.

## [0.22] — 4 et 5 novembre 2026 — Une journée réelle au poste, au terminal, en essai et en aide-soignante

Quatre parcours joués de bout en bout, comme une infirmière, une infirmière seule qui découvre l'essai et une aide-soignante les vivraient ; chaque friction relevée est corrigée. Un doublon de traitement dangereux est désormais signalé.

### Nouveau

- **Poste fixe ·** Ordonnance validée : la même molécule déjà en cours est signalée (« Lovenox » et « Énoxaparine »), et il faut choisir de remplacer, d'ajouter volontairement ou de corriger avant de valider.

### Amélioré

- **Poste fixe et terminal ·** Nom puis prénom du patient partout, y compris dans les suggestions, l'encaissement et les demandes de soins.
- **Terminal ·** Soins courts en moins de pages ; les examens d'un prélèvement sont pris de tout ce qui est prescrit ; photo sous le pouce ; une transmission faite hors connexion part au retour du réseau.
- **Terminal ·** Retard : l'affichage dit « en retard » dès 5 minutes, l'infirmière n'est notifiée qu'à partir de 10.
- **Poste fixe ·** Astuces sur une ligne en tête de page, jamais par-dessus le contenu, et montrées une seule fois.
- **Poste fixe ·** Facturation : le contenu des sous-pages commence bien plus haut, en 1280 comme en 390 px ; bandeau de démonstration réduit à une phrase sur téléphone.
- **Poste fixe ·** Un seul compte pour « À traiter » ; la page Renouvellements lit la même liste que les suggestions.
- **Poste fixe ·** Essai : le cabinet garde le nom donné par l'infirmière, l'équipe est facultative pour une infirmière seule, la fréquence part de la fin de l'ordonnance et une fiche sans soin mène à l'ordonnance.
- **Poste fixe ·** Heures écrites partout de la même façon (« 8 h 00 »).

### Corrigé

- **Poste fixe ·** Dans un état vide, la phrase et son lien passaient sur deux lignes.
- **Poste fixe ·** Le médecin fictif de la démo avait quatre noms ; il s'appelle partout « Dr Jean Marchand ».

### Sécurité et conformité

- L'aide-soignante ne voit plus ni le niveau ni le forfait du BSI, ni un tarif LPP, ni les règles de non-cumul ou d'éligibilité à la séance hebdomadaire.
- **Poste fixe ·** Au poste, l'aide-soignante suit son signalement au lieu de « Décider » ; le signalement dit ce qu'elle a constaté avant son texte libre.

### Démo et documentation

- Domiciles fictifs stables d'un chargement à l'autre de la démo ; le passage hebdomadaire de Mme Robin est remis au jour chaque semaine.
- Comptes rendus des quatre parcours, avec les frictions corrigées et celles qui restent.

## [0.21] — 2 et 3 novembre 2026 — Avenant 11, ordonnance numérique et prélèvements

Les tarifs de l'avenant 11 datés, l'ordonnance numérique consultée par identifiant, la dictée des constantes et une surveillance des plaquettes revue de bout en bout. La démo se remet au jour chaque matin.

### Nouveau

- Avenant 11 : revalorisation datée au 6 novembre 2026, bandeau et écran des changements, levée de doute et compteur MIR, « votre mois avec l'avenant 11 » selon la zone du cabinet (cotation de démonstration).
- **Poste fixe et terminal ·** Ordonnance numérique consultée par son identifiant, rattachée au patient sans toucher à l'INS, marquée exécutée (service simulé).
- **Terminal ·** La dictée remplit les constantes, avec relecture obligatoire ; le micro gagne les champs libres de la fiche.
- **Poste fixe ·** Historique des encaissements filtrable (dont « encaissé par »), export CSV journalisé ; part patient facturée et encaissée dans les recettes.
- Suggestions : renouvellement « jusqu'à cicatrisation », dépistage colorectal, documents à verser au DMP, vaccination de saison préremplie, résultats de laboratoire lus hors visite.
- Demandes de soins en ligne : le moment demandé guide le placement du patient.

### Amélioré

- Surveillance des plaquettes sous héparine : un seul seuil, celui du cabinet, pour la fiche et la suggestion ; chute mesurée depuis le pic ; J+n du traitement ; une notification par prélèvement, retirée si le résultat corrigé n'est plus en chute.
- **Poste fixe et terminal ·** Tubes suggérés pré-cochés, tube fluorure accepté, glycémie capillaire sans tube ; un « bilan à jeun » reste à jeun.
- **Poste fixe ·** Écran étroit : impayés qui défilent, prérequis qui passent à la ligne, apostrophes typographiques.

### Corrigé

- Le DMP revient bien dans les suggestions quand l'INS est écartée.

### Démo et documentation

- Démo hébergée : la journée est rejouée chaque matin à 8 h 25 et les exemples sont remis au jour, sauf ce qu'un visiteur a déjà traité.
- Veille IDEL du 2 novembre 2026 (réglementation, numérique en santé, marché) et 15 améliorations priorisées.

## [0.20] — 31 octobre 2026 — Une seule liste à traiter, encaissements et demandes de soins en ligne

Tout ce qui demande une action tient dans une liste sur Aujourd'hui ; la part patient s'encaisse ; un patient peut demander des soins en ligne ; allergies et prélèvements sont mieux gardés.

### Nouveau

- **Poste fixe ·** Une seule liste « À traiter » sur Aujourd'hui (suggestions, préparations, rappels), sans doublon, avec « Annuler » après chaque action ; prérequis regroupés par jour et suggestions de même règle regroupées.
- **Poste fixe ·** Encaissements : part patient encaissée (partielle, annulée, reçu PDF), contrats de rétrocession par remplaçant avec historique.
- **Poste fixe ·** Pilotage : récapitulatif mensuel des IK, impayés par payeur, rétrocession par remplaçant, recettes au tableau de bord (montants de démonstration).
- **Poste fixe ·** Demandes de soins en ligne : un lien public par cabinet, contrôle de zone, « Accepter » crée le patient prérempli et lit l'ordonnance.
- **Poste fixe et terminal ·** Allergie face à un produit prescrit (substance BDPM, classes évidentes) : alerte à acquitter.
- **Poste fixe et terminal ·** Aide au prélèvement sanguin : tubes, ordre de prélèvement, à jeun, précautions ; le laboratoire fait foi.
- **Terminal ·** Micro de dictée pour les champs libres de la visite, la note de relève et la transmission ; contrôle de netteté et de luminosité de la photo d'ordonnance.
- Suggestions : identité à qualifier avant un passage, constante hors seuil plusieurs fois de suite, surcharge du lendemain, droits et ALD à renouveler, consentements qui expirent, écart de poids.

### Amélioré

- **Terminal ·** Photo conseillée sur une plaie qui ne progresse pas, réponse du passage précédent en indice, appeler le patient suivant, puces d'attention cliquables.
- **Poste fixe et terminal ·** Couleurs d'état et tailles de texte en jetons du design, contrastes d'au moins 4,5:1.

### Corrigé

- **Poste fixe ·** Une action annulée puis l'onglet fermé aussitôt pouvait ne jamais être enregistrée.

### Sécurité et conformité

- L'acquittement d'une alerte allergie est journalisé.

### Démo et documentation

- Démo prête à facturer : 7 patients sur 11, chaque motif de blocage illustré, une occurrence de chaque suggestion.
- Site public et page de connexion aux couleurs de l'application.

## [0.19] — 30 octobre 2026 (soir) — Chacun son cabinet d'essai, et une visite au terminal à pleine vitesse

N'importe qui ouvre son propre cabinet d'essai en ligne ; le terminal enchaîne les soins sans détour ; la facturation dit avant la feuille de soins si elle passera.

### Nouveau

- Essai libre : chacun crée son cabinet d'essai et ses comptes depuis la page « Essayer TabSanté », ou rejoint un cabinet par invitation.
- **Poste fixe ·** État « prêt / risque de rejet / bloqué » avant la feuille de soins, avec ce qui bloque, et « Facturer ma journée ».
- **Poste fixe ·** Premiers pas d'un cabinet neuf : parcours guidé, états vides utiles, suggestions de démarrage.
- **Poste fixe ·** Placer un nouveau patient dans les tournées, échange de passages chiffré entre infirmiers.
- **Poste fixe ·** Page « Règles du cabinet » : seuils des suggestions réglables (plaie sans progrès, horizon de renouvellement).
- **Poste fixe ·** Référentiels officiels embarqués (médicaments BDPM, LPP, FINESS) proposés à la saisie, sans appel à un tiers.

### Amélioré

- **Terminal ·** Visite à pleine vitesse : avance automatique, une signature par patient, « Signer » mène au champ manquant, arrivée directe au patient suivant ; lisible de nuit comme en plein soleil, état du réseau dans chaque en-tête.
- **Poste fixe ·** Couverture sociale (retour #1) : contrôles du NIR complets, qualité du bénéficiaire, organismes C2S, n° de complémentaire et tiers payant, caisse proposée par le code postal, alertes de droits.
- **Poste fixe ·** Transmissions : « Tout marquer lu » et compteurs des filtres.
- **Poste fixe ·** Les calculs du tableau de bord deviennent des suggestions.

### Sécurité et conformité

- Essai libre : plafonds contre les abus, purge des cabinets d'essai inactifs, rappel de ne saisir que des données fictives.

## [0.18] — 30 octobre 2026 — Couverture sociale juste, facturation prête pour son moteur

Retour du premier cabinet testeur corrigé, préparation de l'intégration du moteur de facturation, DataMatrix INS et relevé kilométrique. Essai en direct désormais hébergé à une adresse stable.

### Nouveau

- **Poste fixe ·** Couverture sociale : régime et caisse choisis dans la liste des organismes d'assurance maladie (695), justification d'exonération et nature d'assurance en listes, taux, AT/MP/maternité, boutons AME, C2S, ALD et Exo Ø.
- **Poste fixe et terminal ·** Scan du DataMatrix INS : l'identité se pré-remplit depuis le code d'un document de santé ; elle reste provisoire jusqu'à la vérification INSi, et les écarts avec un dossier existant sont signalés sans rien écraser.
- **Poste fixe ·** Relevé kilométrique annuel : kilomètres des passages réalisés, IK facturées en regard, estimation au barème fiscal, export CSV et PDF ; **Terminal ·** « km ce mois-ci » dans Moi.
- **Poste fixe ·** Facturation préparée puis signée : le cabinet prépare les factures sans carte, chaque infirmier les signe avec sa CPS, au lot ou à la télétransmission (simulé).
- Situations d'exercice d'un même infirmier (IDEL, IPA) avec leurs paramètres de facturation.

### Amélioré

- Facturation simulée au plus près du futur moteur : reprise après une coupure sans doublon, empreinte de carte Vitale relue au-delà d'un an, vérification des droits abandonnée après 30 s sans réseau, retour de caisse manquant malgré un accusé positif signalé avec une demande de renvoi, remplacement porté sur la feuille de soins.
- Repère « écran du moteur » sur les étapes de sécurisation, de signature et d'envoi, pour préparer le choix entre les modes d'intégration.
- Numéros d'attente (NIA) acceptés à côté du NIR.

### Corrigé

- **Poste fixe ·** Un NIR de 15 caractères (avec clé) était toujours refusé à la saisie de la couverture ; la clé est désormais contrôlée et proposée.
- Une signature groupée avec un code porteur faux pouvait bloquer la carte dès le troisième envoi : le code n'est plus vérifié qu'une fois par lot.

### Sécurité et conformité

- Le code porteur n'est jamais gardé ni journalisé (test de garde).
- Une feuille de soins d'un autre infirmier n'est jamais signée avec votre carte.
- Démonstration : rappel de ne jamais saisir un vrai NIR, et un bouton qui génère un NIR fictif.

### Démo et documentation

- Essai en direct hébergé sur un serveur, à une adresse stable, saisies conservées et sauvegardées chaque nuit : valeriongg.github.io/tabsante-docs/essai/.
- Cabinet d'essai vide : le testeur crée son équipe, ses patients fictifs et ses soins.
- Plan d'intégration du moteur de facturation et sept nouvelles questions à trancher.

## [0.17] — 27 octobre 2026 — NGAP, facturation et organisation : ce qui manquait

Règles NGAP complémentaires, garde BSI, complémentaire détaillée, unités urbaines complètes, organisation du cabinet et tournée réordonnable hors connexion.

### Nouveau

- Cotation (démonstration) : non-cumuls de l'article 6 dans le bon sens, séance hebdomadaire de l'insulino-traité (une par semaine, jamais sous BSI), dialyse plafonnée à quatre par jour, RDI, postopératoire et périnerveux non cumulables, varices, analgésie topique, pansements lourds et TPN, perfusion (changement de flacon, forfait d'organisation), mucoviscidose, actes à distance (TLS, TLD, TLL, TMI, RQD), IK à pied ou à ski.
- Unités urbaines complètes (34 875 communes) pour les indemnités kilométriques ; une commune inconnue n'est jamais classée « plaine » par défaut.
- **Poste fixe ·** Saisie d'adresse avec suggestions, servie par le cabinet : aucune adresse de patient ne part vers un service public.
- **Poste fixe ·** Lieu du passage prévu (domicile, cabinet, autre lieu de soin du patient) et lieux de soin alternatifs ; seul le lieu déclaré à la signature compte pour la cotation.
- **Poste fixe ·** Jours de fermeture du cabinet avec permanence, passages à couvrir ou reporter ; pauses dans une journée ; créneau libre proposé à la création d'une fréquence ; rayon d'intervention par intervenant.
- **Poste fixe ·** Invitation d'un membre : lien de 7 jours à usage unique, RPPS contrôlé, sans mot de passe.
- **Terminal ·** Réordonner sa tournée hors connexion ; corriger téléphone, adresse, médecin traitant et personne de confiance d'un patient ; recherches récentes et derniers patients ouverts, gardés chiffrés sur le téléphone et effacés à la déconnexion.
- **Poste fixe et terminal ·** Puces « BSI requis » et « Ordonnance à joindre » sur la carte de passage, jamais pour l'aide-soignante.

### Amélioré

- Garde BSI : forfait, AMX et IFI ne sont cotés que si un BSI déposé couvre la date ; « BSI non déposé » le dit au poste comme au terminal.
- Complémentaire santé détaillée (n° d'adhérent, type de contrat, fin des droits) ; droits échus à la date des soins : la part revient au patient.
- Facturation simulée : SESAM sans Vitale, rythme et canal de télétransmission (direct ou concentrateur), accusé de réception distinct du remboursement, annulation d'une FSE qui annule sa DRE, pièces jointes trop volumineuses signalées.
- Règlement arrondi au demi supérieur (1,58 € et non 1,57 €).
- **Poste fixe ·** Tableau de bord : les lots à télétransmettre remontent quand le rythme du cabinet est dépassé.
- **Poste fixe ·** Patient précédent / suivant, menu contextuel d'un passage, squelettes de chargement dans Tournées.

### Corrigé

- Un acte à 50 % repartait à taux plein lorsqu'il passait par l'agent de poste.
- **Terminal ·** « J+n » et « il y a n jours » perdaient un jour la semaine d'un changement d'heure.

### Sécurité et conformité

- Une FSE est refusée tant que le dossier porte un NIR fictif.
- Une modification faite hors connexion n'écrase jamais une version plus récente saisie au cabinet ; une opération refusée reste dans la file avec son motif, jamais effacée.

### Démo et documentation

- Banc de cotation : 195 cas conformes sur 230, aucun écart ; 40 nouveaux cas.
- La démo dépose le BSI de ses patients sous forfait.

## [0.16] — 26 octobre 2026 — Lisible d'un coup d'œil, et le jour qui vient

Les indicateurs deviennent des questions simples, la météo dit ce qu'elle change pour la tournée, la carte se lit sans légende. Reprise des dossiers et intégrations nationales.

### Nouveau

- **Poste fixe ·** « Le jour à Nantes » : la météo matin, midi et soir de la commune du cabinet, puis ce qu'elle change (« prévoir 30 min de marge sur la tournée Centre », « 12 patients fragiles à hydrater »).
- **Terminal ·** Bandeau du jour sur la carte : vigilance, pluie et marge à prévoir, férié, vacances, le temps en quatre heures. Calculé au départ du cabinet, jamais au domicile d'un patient.
- **Terminal ·** « Vous êtes ici » estimé d'après la tournée, sans GPS ; heure fixe épinglée sur la carte ; légende « Lire la carte ».
- **Terminal ·** Accès au domicile : l'infirmier note digicode, interphone, étage et clés, hors connexion ; le code reste masqué par défaut.
- Reprise des dossiers tenus dans un autre logiciel : modèles CSV, assistant avec aperçu avant de valider, lettre type au patient, jeu d'exemple.
- Annuaire Santé v2 pour retrouver un prescripteur ; noms des médicaments issus de la base publique (BDPM) ; export complet du cabinet en FHIR et en CSV.

### Amélioré

- **Poste fixe ·** Aujourd'hui : quatre questions (ce qui attend une décision, ce qui reste à faire, les plaies à surveiller, les cotations à contrôler), chacune un chiffre, une phrase et une action.
- **Poste fixe ·** Tableau de bord : de 5 500 px de chiffres à trois questions ; le détail est replié.
- **Poste fixe ·** Facturation : « Ce qui bloque la facturation » en une phrase ; le circuit n'est plus coupé sur mobile.
- **Poste fixe ·** Carte des tournées dessinée sur le poste, sans service extérieur : arrêts groupés, état en forme et en mot, retard affiché là où il apparaît.
- **Terminal ·** Fin de journée et « Moi » : « Ce qu'il me reste », « Ce qui est en attente d'envoi ».
- **Terminal ·** Fiches longues en étapes : paramètres vitaux en six étapes, un médicament par étape.

### Sécurité et conformité

- Droits de l'assuré (ADRi) conformes au contrat d'échange (date et rang de naissance) ; l'interrogation reste simulée jusqu'à l'agrément.
- Aucune carte ni météo n'interroge un tiers à la position d'un domicile.
- L'aide-soignante ne voit aucune cotation dans les nouveaux écrans.

### Démo et documentation

- Tests rendus indépendants de la date et du changement d'heure : la suite se rejoue à n'importe quel jour.
- Galerie design : passes « Poste lisible » et « Terminal lisible », avant et après, jour et nuit.

## [0.15] — 23 octobre 2026 — Bilans et consultation : la fiche du 18 octobre

La fiche Bilans/Consultation suit sa nouvelle version : diagnostic infirmier codé et sourcé, hypothèse écartée tracée, révisions suivies, volet IPA.

### Nouveau

- Le diagnostic infirmier se choisit par son code dans le référentiel NANDA-I (de démonstration), jamais en texte libre ; chaque élément qui le fonde se coche avec sa preuve.
- L'hypothèse écartée se trace avec son motif. Elle reste interne au cabinet et revient à la consultation suivante.
- **Poste fixe ·** Nouvelle vue « Diagnostics infirmiers » ; les révisions échues remontent au tableau de bord.
- Sous-fiches réservées à l'infirmier en pratique avancée (IPA), avec le rang de la consultation dans le semestre.
- Motif clinique « Prévention des chutes » (démonstration) et son volet paramétré.

### Amélioré

- Chaque diagnostic actif reçoit une réponse à la consultation suivante : maintenu, résolu, abandonné ou corrigé.
- Les données reprises d'une autre fiche gardent leur source, leur heure, leur auteur et la version signée ; **Poste fixe ·** une correction faite ensuite est signalée.
- La cotation attendue s'affiche en clair avant la signature. Rien du diagnostic ne part au moteur de cotation.
- Le bilan de plaie se lit depuis la plaie. La recherche trouve la fiche par « consultation », « bilan », « prévention », « diagnostic », « IPA » ou « RAAC ».

### Sécurité et conformité

- Le volet IPA n'est ouvert qu'à l'infirmier titulaire de la mention ; l'aide-soignante n'a aucun accès à la fiche.

### Démo et documentation

- Démo réenregistrée avec le design final et la fiche du 18 octobre : chute et consultation de Mme Leroux, suivi IPA de M. Bernard, bilan de prévention de M. Vasseur. Tous fictifs.
- Dans la démo : recherche, simulateur de cotation, contrôle CPAM et accès d'un professionnel par QR code, simulés.
- Le volet IPA est en place (rôles, écrans) ; son contenu détaillé attend la prochaine version du référentiel.
- État des lieux des raccordements aux services nationaux, pour préparer les intégrations.
- Couverture du cahier des charges recomptée : 571 éléments, 418 faits, 139 simulés, 10 partiels, 4 bloqués.

## [0.14] — 23 octobre 2026 — Les directions de design retenues

Après comparaison de plusieurs variantes, trois directions sont appliquées : « Précision calme » au poste fixe, « Carte d'abord » et « Contraste terrain » au terminal, « Produit en direct » sur le site.

### Nouveau

- **Poste fixe ·** Mode focus : un cas à la fois, trois options numérotées dont une suggérée ; 1, 2 ou 3 puis Entrée, et le cas suivant arrive seul. C'est l'affichage par défaut de la file de contrôle de la facturation.
- **Poste fixe ·** « Aujourd'hui » groupé par urgence : Maintenant, Aujourd'hui, En série, Facturation ; le détail s'ouvre à droite.
- **Terminal ·** La tournée sur une carte plein écran, avec une feuille du bas à deux crans et « Y aller » d'un appui.
- **Terminal ·** Le passage pas à pas : une étape à la fois, de très gros chiffres et de grandes cibles, la signature par appui maintenu.
- **Terminal ·** Mode Soleil (Moi › Affichage) : noir sur blanc, pour lire en plein soleil.

### Amélioré

- **Poste fixe ·** Une surface calme, une seule couleur pleine pour l'action, des chiffres alignés qui se comparent d'un coup d'œil.
- **Poste fixe ·** Au clavier : J et K pour se déplacer, E pour marquer traité, Z pour annuler. Plusieurs passages non réalisés tiennent sur une ligne « En série ».
- **Poste fixe ·** File de contrôle : la cotation signée et celle du moteur se comparent champ par champ (« 4 sur 5 champs concordent »), l'écart est dit en une phrase.
- **Terminal ·** Menu d'actions en tuiles, sans défilement ; abandonner une saisie demande un appui maintenu.
- Site public : le produit dès le premier écran, de la signature au reçu dont chaque ligne montre sa règle NGAP.

### Corrigé

- **Poste fixe ·** Les touches J et K ne s'écrivent plus dans le champ de motif ; à 390 px, ce champ ne passe plus sous le pied de page.

### Sécurité et conformité

- **Terminal ·** Le fond de carte est dessiné sur le téléphone, sans service extérieur : aucune position de patient ne quitte l'appareil.
- Les animations s'effacent quand l'appareil demande moins de mouvement.
- L'aide-soignante ne voit toujours aucune cotation.

### Démo et documentation

- Page Design : avant/après écran par écran et toutes les variantes proposées, avec leurs références.

## [0.13] — 23 octobre 2026 — Nouveau design et finitions pour les testeurs

Les deux applications sont refondues dans leur navigation, puis finies pour que des testeurs puissent les essayer de bout en bout, en données fictives.

### Nouveau

- **Poste fixe ·** Barre du haut toujours visible : où vous êtes (« Soins › Patients › … »), recherche Ctrl K, aide F1 et notifications.
- **Poste fixe ·** Barre latérale réductible aux icônes (touche « [ ») ; sur téléphone, elle devient un tiroir.
- **Poste fixe ·** Raccourcis : G puis une lettre pour aller à une page (A Aujourd'hui, P Patients, T Tournées…).
- **Poste fixe et terminal ·** « Donner mon avis » : un formulaire de retour, ouvert depuis l'écran où l'on se trouve.
- **Terminal ·** Gabarit photo : cadre, cible et réglette graduée, pour des photos de plaie comparables d'une fois sur l'autre.
- **Terminal ·** La transmission dictée se range aussi hors connexion.
- **Terminal ·** Un envoi en conflit est marqué « à revoir » au lieu d'échouer en silence.

### Amélioré

- **Poste fixe ·** Un menu « ⋯ » sur toutes les listes : plaies, bilans, transmissions, signalements, renouvellements.
- **Poste fixe ·** Preuves et cotations : tableau pleine largeur, 25 actes par page puis « Afficher 25 actes de plus ».
- **Poste fixe ·** Panneaux et tableaux unifiés, en-têtes de tableau qui restent visibles, plus aucun défilement de côté jusqu'à 390 px.
- **Terminal ·** Menus groupés sous le pouce, feuilles du bas d'une seule forme, dates et heures en français ; texte lisible jusqu'à 130 %.
- **Terminal ·** Blocs repliables unifiés dans les fiches longues (consultation, soins respiratoires).
- **Poste fixe ·** Facturation : récapitulatif avant de créer une feuille de soins, arbitrage sans choix par défaut, écart expliqué en une phrase.
- **Poste fixe et terminal ·** Chaque « En savoir plus » de l'aide ouvre le portail public.

### Corrigé

- **Poste fixe et terminal ·** Une intervenante repartie d'un domicile sans avoir signé ses soins n'est plus affichée « Passage fait » : elle apparaît « Reparti · soins à signer ».
- **Poste fixe ·** Les liens vers un bilan programmé ne mènent plus à une page vide.
- **Poste fixe ·** Le dossier de preuve ne déborde plus sur téléphone.

### Sécurité et conformité

- **Poste fixe et terminal ·** « Donner mon avis » ne transmet que le nom de l'application, de l'écran et du profil : aucune donnée de patient.

### Démo et documentation

- Notes de design avec captures avant/après, à 1 440 et 390 px, publiées sur la page Design.

## [0.12] — 22 et 23 octobre 2026 — La démo en ligne

TabSanté s'essaie dans le navigateur, sans installation, avec des profils et des patients fictifs.

### Nouveau

- Démo en ligne : le poste fixe et le terminal rejoués dans le navigateur, sans serveur, avec des profils et des patients fictifs.
- Démonstration hébergée préparée : connexion par des comptes fictifs indiqués à l'écran, sans code de service ni carte CPS.
- Page « Démos, vidéos et design » au portail.
- Page publique « Questions » : 112 questions encore à trancher, auxquelles chacun peut répondre.
- « Donner mon avis » depuis la démo et le portail, et liste publique des retours.

### Amélioré

- Portail d'aide et de documentation : rubriques Facturation et NGAP, Questions ouvertes, Documents et Nouveautés.
- Page d'accueil du site centrée sur la facturation et la NGAP.

### Corrigé

- Deux plantages du dossier de preuve, dont celui d'un patient suivi en neuropsychiatrie.

### Sécurité et conformité

- La démo ne contient aucune donnée réelle et n'envoie rien à l'Assurance maladie.

### Démo et documentation

- Procédure de démonstration hébergée écrite, pour une présentation à la demande.

## [0.11] — 22 octobre 2026 — Facturation refondue, terminal retravaillé, propositions de terrain

La facturation explique chaque ligne, le terminal gagne en confort, et plusieurs propositions de la feuille de route deviennent réelles.

### Nouveau

- **Poste fixe ·** Mesure de plaie sur photo, à l'échelle de la réglette photographiée avec elle : contour tracé ou proposé, puis ajusté ; la première et la dernière mesure se superposent.
- **Poste fixe ·** Dossier de preuve en « PDF scellé » pour une période ; un exemplaire remis se vérifie par son empreinte.
- **Poste fixe ·** Planning de la semaine en glisser-déposer : confier un moment à une personne de l'équipe, formation à vérifier et charge de la semaine annoncées avant l'envoi.
- **Poste fixe et terminal ·** Fin de journée : « Tournée terminée · n passages signés · 0 en attente », et pour l'infirmier les cotations du jour, sans montant.
- **Poste fixe et terminal ·** Transmission dictée : dictée au micro du clavier, rangée en cible, données, actions et résultat, relue avant l'envoi.
- **Poste fixe ·** Mode contrôle CPAM (simulé) : accès en lecture seule remis au contrôleur, limité à un patient et une période, révocable.

### Amélioré

- **Poste fixe ·** Facturation en cinq étapes : Vérifier, Facturer, Sécuriser, Télétransmettre, Retours, avec ce qui attend à chaque étape et son montant de démonstration.
- **Poste fixe ·** Chaque ligne dit sa règle NGAP en clair (article 11 B, majorations, IFD et IK, BSI, avenant 11) et mène à la preuve de l'acte.
- **Poste fixe ·** Rejets regroupés par motif, avec l'action à mener ; arbitrage groupé dans la file de contrôle.
- **Poste fixe ·** Une ordonnance versée est lue d'office ; l'alerte d'un dispositif apparaît dans « À savoir avant le soin ».
- **Terminal ·** Cartes plus lisibles au soleil, barres d'action sous le pouce, mouvements doux (supprimés si le téléphone le demande).
- **Terminal ·** Signature : légère vibration pendant l'appui maintenu, puis « Signé » en vert ; chaque liste vide dit quoi faire.
- **Terminal ·** Une prescription modifiée reste visible sur la fiche du patient jusqu'au premier soin sous la nouvelle valeur.

### Sécurité et conformité

- Photos enregistrées sans position GPS ni métadonnées.
- **Poste fixe ·** Session fermée après 15 minutes sans activité.
- **Poste fixe ·** Chaque lecture du contrôleur CPAM est tracée.
- **Poste fixe ·** Un lot dont la chaîne d'intégrité est rompue reste refusé ; seul le responsable du cabinet peut le forcer, avec un motif, et le lot le porte.
- Vidéos chargées depuis YouTube au clic seulement.

### Démo et documentation

- Facturation entièrement simulée : aucune feuille de soins n'est transmise à l'Assurance maladie.

## [0.10] — 22 octobre 2026 — Connexion unifiée, finitions et aide sur chaque écran

Une seule connexion au poste fixe et au terminal, ce qui restait partiel est terminé, et chaque écran a son aide.

### Nouveau

- **Poste fixe et terminal ·** « Se connecter avec TabSanté » (Keycloak) : identifiant et mot de passe, ou carte CPS par Pro Santé Connect, simulé en attendant la convention avec l'ANS. Page de connexion en français.
- **Poste fixe et terminal ·** Un bouton « ? » sur chaque écran et sur les blocs délicats : 197 aides et 61 astuces au poste fixe, 92 aides et 23 astuces au terminal, selon le rôle.
- **Poste fixe ·** Panneau d'aide (touche ? ou F1) avec recherche.
- **Terminal ·** Une ordonnance versée en PDF se lit hors connexion.
- **Poste fixe et terminal ·** Écran du code de service, en secours de la connexion.

### Amélioré

- **Poste fixe et terminal ·** Le bloc AVK s'ouvre dès qu'une surveillance de l'INR est en cours.
- **Poste fixe ·** Plus aucun défilement de côté entre 1 440 et 800 px ; hiérarchie et densité revues ; plus aucun code technique à l'écran.
- **Terminal ·** Zéro pointé : « 0 » ne se confond plus avec « 8 » ; le premier champ d'une fiche est visible sans défiler ; « Prochain passage » en tête de la tournée.
- **Terminal ·** Zones tactiles d'au moins 48 points, libellés pour le lecteur d'écran, contrastes vérifiés automatiquement.

### Sécurité et conformité

- La session TabSanté reste la sienne : l'enrôlement du téléphone et le code à 6 chiffres ne changent pas.
- **Poste fixe ·** Boutons et liens n'apparaissent qu'à qui a le droit de s'en servir : l'aide-soignante ne voit ni la cotation ni le dossier de preuve.
- **Terminal ·** Un patient créé au domicile hors tournée n'est gardé sur le téléphone que le jour de sa création, sauf envoi en attente.
- La liste des événements tracés au journal d'audit est vérifiée automatiquement.

### Démo et documentation

- Portail : chaque « En savoir plus » de l'aide ouvre sa rubrique « Aide écran par écran ».
- Couverture recomptée : 561 éléments, 411 faits, 137 simulés, 9 partiels, 4 bloqués.

## [0.9] — 21 et 22 octobre 2026 — Les lots de correction d'octobre

Une relecture complète du cahier des charges, le 16 octobre, a ouvert des lots de correction ; ils complètent les fiches, le tableau de bord, les transmissions et les formulaires.

### Nouveau

- **Poste fixe ·** Déclarer le décès d'un patient : ce qui devait venir s'arrête au jour du décès, les soignants de ses tournées sont prévenus, le dossier demeure ; **Terminal ·** le terminal affiche « Décédé le … ».
- **Poste fixe et terminal ·** L'aide-soignante écrit une transmission ciblée de ce qu'elle constate ; **Terminal ·** interpellations et notifications proposées se traitent au terminal.
- **Poste fixe et terminal ·** Bloc AVK complet : posologie de la semaine et de la précédente, INR cible, signal de changement de posologie.
- **Terminal ·** Épreuve de lever : minuteur, trois mesures à leur heure réelle ; **Poste fixe ·** les écarts se lisent au poste fixe.
- **Poste fixe ·** Tableau de bord : « Soins à compléter », « Résultats attendus », « Pièces manquantes », BSI à renouveler, filtre par tournée et export CSV.
- Nouveaux bilans pré-rédigés (perfusions, stomies, nutrition, trachéotomie, CPAP) ; prescription infirmière envoyée en extraits au laboratoire et à la pharmacie.
- **Poste fixe ·** Une fréquence se modifie en cours de route (« Modifier », à côté d'« Arrêter ce soin ») ; l'historique reste intact.
- **Terminal ·** Un acte fait en partie se déclare sur toutes les fiches ; sa cotation passe toujours en file de contrôle.
- Lot et péremption lus sur le code produit (DataMatrix ou EAN-13), jamais saisis à la main.
- **Terminal ·** Le plan de soins entier se consulte hors connexion ; chaque case, ligne ou constante peut porter son commentaire.

### Amélioré

- L'écart à l'heure prescrite est calculé à la signature : « Réalisé à 19 h 50, 10 min avant l'heure prescrite (20 h) ».
- La séance de perfusion se place dans la tournée du moment fixé, une par patient et par jour.
- Suivi diabétique : historique « à faire » de chaque passage dû, patient devenu éligible à la séance hebdomadaire signalé ; diurèse ramenée à 24 heures.
- Prélèvements : site distinct pour chaque paire d'hémocultures, heure du contrôle d'identité exigée, remise au laboratoire tracée.
- **Terminal ·** Les listes des fiches viennent d'un référentiel daté, embarqué sur le téléphone pour le hors connexion.
- **Poste fixe et terminal ·** Carte, météo et trafic : arrivée prévue avec une fourchette, départ conseillé, calques radar.
- **Poste fixe et terminal ·** 116 formulaires du poste fixe et 30 écrans du terminal revus : champs obligatoires saisissables, erreur affichée au bon champ, refus expliqués en français.
- **Poste fixe ·** « À traiter » trié par gravité, avec des compteurs cohérents.

### Corrigé

- Une ligne sous-cutanée laissée posée ne déclenche plus de notification à tort ; retirer un site dépose ses lignes.
- Plus de majoration de nuit sans horaire prescrit ; une seule plage de nuit, 20 h à 6 h, pour la planification.
- Ce que les fiches disent « tracé, pas transmis » (dose, site, glycémie) ne part plus au moteur de cotation.
- Une fréquence échue ne bloque plus celle de l'ordonnance suivante sur le même dispositif.
- Une ordonnance au nom d'un autre patient est refusée.

### Sécurité et conformité

- Durcissement des droits : la portée d'une remplaçante s'applique à toutes les lectures, l'administrateur n'ouvre aucun dossier clinique, une intervenante sortie du cabinet perd ses accès.
- Lectures nominatives tracées patient par patient ; journal d'audit sans copie des données cliniques.
- Durcissement de la mise en service : outils de démonstration fermés hors démonstration, code à usage unique.
- INS qualifiée seulement après contrôle de la pièce d'identité ; un courrier non relu ne part jamais d'un clic.

### Démo et documentation

- Chaque lot livré avec ses tests, écrits pour échouer avant la correction et passer après.
- Couverture recomptée automatiquement : 561 éléments, 407 faits, 136 simulés, 14 partiels, 4 bloqués, aucun absent.

## [0.8] — 15 et 16 octobre 2026 — La facturation et la NGAP

Un moteur de cotation de démonstration, aligné sur le texte de la NGAP en vigueur, qui explique chaque ligne et se compare aux cas officiels.

### Nouveau

- **Poste fixe ·** Cotation par passage, ligne par ligne, avec règles datées, jours fériés, zones et déplacements.
- **Poste fixe ·** « Simuler une cotation » : essayer un passage sans rien enregistrer ; « Pourquoi ? » sur chaque ligne (règle, article, version).
- **Poste fixe ·** Reçu de cotation du passage entier, avec « Et si… » (heure, dimanche, férié, horaire prescrit) comparé au réel, et impression.
- Agent de poste pour les lecteurs de cartes et SESAM-Vitale : préparé et simulé, en attendant le composant agréé.

### Amélioré

- Cotation alignée sur la NGAP en vigueur (titre XVI) : 113 cas sur 120 conformes, aucun écart, les autres expliqués.
- Comparaison au cahier de tests CNDA : 44 cas, 19 conformes au centime, aucun écart, 25 en attente d'éléments de l'agrément.
- Avenant 11 suivi à sa date d'effet, grâce à un référentiel daté.
- **Poste fixe ·** Confirmation des cotations ramenée de 14 à 21 secondes à 1 seconde.

### Sécurité et conformité

- La cotation reste une démonstration : jamais facturable, signalée comme telle à l'écran et sur les documents.
- La télétransmission est simulée ; l'agrément CNDA et le composant SESAM-Vitale restent à obtenir.

### Démo et documentation

- Banc de cotation consultable dans les paramètres ; 120 cas tirés du texte officiel de la NGAP publiés comme liste de travail.

## [0.7] — 15 et 16 octobre 2026 — Tournée, planning et confort au quotidien

La tournée s'organise mieux, le planning se règle à la souris ou au doigt, et l'application propose sans jamais imposer.

### Nouveau

- **Poste fixe ·** Absences et réattribution, services répétés, heures fixes et fenêtres, ordre de passage proposé, zone d'intervention.
- **Poste fixe ·** Planification du jour en colonnes, une par intervenant avec sa charge ; un passage se déplace à la souris, au doigt ou au clavier.
- **Poste fixe ·** Alerte « terminal non synchronisé » pendant une tournée en cours (2 heures par défaut, réglable), avec « Appeler » et « Marquer comme vu ».
- **Terminal ·** Mode visite : étapes du soin en liste, photo comparée à J0 par curseur, note de relève hors connexion.
- Demandes de renouvellement d'ordonnance ; aperçu des passages avant validation.
- Préparation des passages : prérequis par soin, « À préparer », motif « non à jeun ».
- Suggestions tirées du contexte (jours fériés, vacances scolaires, vigilance météo, qualité de l'air, trafic estimé, changement d'heure), expliquées et jamais exécutées sans vous.
- Recherche Ctrl K, mention @collègue, notifications locales au terminal, photo de l'entrée du domicile.
- **Terminal ·** Tournée géolocalisée hors connexion, navigation Waze ou Maps par coordonnées, « Prévenir le patient ».
- Premier outil de reprise de dossiers : lecture seule, aperçu, reprise rejouable et tracée.

### Amélioré

- **Poste fixe ·** Nouvelle apparence « Clinique calme » ; aperçu du patient sans quitter la liste.
- **Terminal ·** Affichage jour et nuit, police très lisible (Atkinson Hyperlegible), statuts dits par une forme et un mot, signature au maintien accessible.
- **Poste fixe ·** Tournées avec carte et frise de la journée ; dossier patient à en-tête fixe et frise des soins.
- **Poste fixe ·** Tableau de bord qui raconte la semaine : phrase de synthèse, carte de chaleur heure par jour, cicatrisation plaie par plaie, objectifs sans classement.
- Les 23 sortes de PDF relues page par page : pagination, identité avec INS et RPPS, formats français, bandeau de démonstration.

### Corrigé

- **Terminal ·** Un envoi rejoué pendant le premier reçoit la même réponse, sans erreur ni doublon.
- **Poste fixe ·** L'aperçu des passages signale l'absence de l'intervenant, une heure fixe déjà prise et un domicile hors zone.

### Sécurité et conformité

- Chaque enregistrement est protégé contre les doublons, et le débit des appels est limité.
- **Terminal ·** Photos rangées en fichiers chiffrés sur le téléphone.
- Vérification complète et automatique avant chaque livraison.

### Démo et documentation

- Premier site public.
- Couverture recomptée : 533 éléments, 333 faits, 188 simulés, 8 partiels, 4 bloqués.
- Quatre relectures internes (cahier des charges, parcours des utilisatrices, tests, sécurité et conformité) ouvrent les lots de correction livrés en 0.9.

## [0.6] — 9 et 10 octobre 2026 — Échanges de santé en démonstration, tournée sur la carte

Cartes CPS et Vitale, feuilles de soins, messagerie sécurisée et DMP fonctionnent de bout en bout en simulation, et la tournée passe sur la carte.

### Nouveau

- Cartes CPS et Vitale simulées : connexion et signature par carte, création du patient depuis sa carte Vitale.
- Feuilles de soins électroniques sécurisées, en ligne et hors connexion, retours NOEMIE et tiers payant : simulés.
- Messagerie sécurisée MSSanté avec résultats rattachés au prélèvement, DMP et ordonnance numérique : simulés.
- Référentiel des médicaments et diagnostics infirmiers de démonstration ; téléconsultation simulée.
- Tournée géolocalisée : ordre de passage, carte, trajets et arrivées estimées, météo et trafic simulés, « Avant d'arriver ».
- **Poste fixe ·** Courriers libres, comptes rendus d'accès direct, rendez-vous hors fiche.

### Amélioré

- Restitution clinique : HbA1c, doses d'anticoagulant face à la biologie, schéma des sites d'injection, comparaison photo des dispositifs.
- **Terminal ·** Cotation provisoire hors connexion, compteurs à trois échelles, écart expliqué.
- **Terminal ·** Schéma des sites hors connexion ; courbes de saignée.
- Rotation des sites : une zone n'est signalée que si elle porte au moins la moitié des injections de la semaine.

### Sécurité et conformité

- Photos et PDF chiffrés au repos, journal des accès chaîné, purges selon les durées de conservation.
- **Terminal ·** Une session révoquée ne fait perdre aucune saisie en attente.
- Export FHIR : ce que le patient garde pour lui au dossier ne sort plus.
- Dossier d'hébergement HDS, registre du délégué à la protection des données et analyse d'impact (AIPD) préparés.

### Démo et documentation

- Documentation technique, glossaire et FAQ en pages autonomes ; page des ajouts au-delà du cahier des charges, avec leurs raisons.

## [0.5] — 7 au 9 octobre 2026 — Bilans et consultations, avenant 11

Le cahier des charges intègre la fiche Bilans/Consultation : consultation infirmière, bilan de prévention et séances de parcours se tiennent au domicile comme au cabinet.

### Nouveau

- Fiche Bilans/Consultation : sous-fiches de consultation et de bilan, tronc commun, compétences du patient, compte rendu à trois destinations.
- **Terminal ·** Sous-fiche au domicile, hors connexion, depuis la tournée ; séances de parcours (art. 5 ter, RAAC) préparées et complètes avant signature.
- Mesures de l'avenant 11 : score SEGA, dépistage colorectal, ALD, plaie en accès direct.
- Courbes de croissance de l'enfant : poids, taille, périmètre crânien (référence OMS de démonstration).
- **Terminal ·** Injections chez l'enfant, sérum, allergènes, tuberculine, vaccination, implant, voie rectale, pulvérisation.
- **Terminal ·** Pompes PCA et PSE (voie, arrêt, tubulure, protocole) ; analgésie locorégionale prise en charge au domicile.
- **Terminal ·** Plusieurs plaies et récidive ; nursing (douche, escarre) ; hémocultures.

### Amélioré

- **Terminal ·** Quatre onglets, « Il manque » sur deux lignes, catalogue des soins par famille, moins d'appuis.
- **Poste fixe ·** Graphiques à grammaire commune, tableau de bord « soins d'abord », 40 nouvelles pages harmonisées.
- **Poste fixe ·** Tableau de bord affiché en moins de 2 secondes.
- **Terminal ·** Libellés jamais coupés en plein mot ; conflit de brouillon lisible sur petit écran ; envoi refusé marqué « à corriger ».
- Statut « aucune allergie connue », heures en français, confirmations avant les gestes importants.

### Corrigé

- Corrections issues de la relecture du 7 octobre : fiche Bilans/Consultation, portail externe, droits de lecture, synchronisation, facturation, dispositifs, biologie.

### Sécurité et conformité

- Remplaçante limitée à sa période, sessions révocables, lectures du dossier journalisées ; contenu des consultations caché à l'aide-soignante.

### Démo et documentation

- Cahier des charges V2 et calendrier de l'avenant 11 (2026-2029) intégrés.
- Couverture : plus aucune exigence absente du cahier des charges.

## [0.4] — 4 octobre 2026 — Soins techniques, partage et exploitation

Les soins les plus techniques rejoignent le terminal hors connexion, le dossier se partage avec le consentement du patient, et l'exploitation se prépare.

### Nouveau

- Parcours encadrés : séances, plafonds, livrables, séance diabète hebdomadaire.
- Soins respiratoires (trachéotomie, aspirations, PPC, aérosols), surveillance neuropsychiatrique, drain de Redon.
- PCA morphine et benzodiazépine, pousse-seringue électrique, dialyse péritonéale, analgésie locorégionale ; **Terminal ·** écran critique utilisable hors connexion.
- **Terminal ·** Consultation infirmière à domicile et prescription infirmière hors connexion.
- Consentement du patient, accès d'un professionnel par QR code (Pro Santé Connect simulé), dépôt externe, actes à distance, export FHIR.
- Portail du professionnel extérieur.
- **Terminal ·** Enrôlement du téléphone par code ; **Poste fixe ·** gestion des terminaux du cabinet.
- Règles ajoutées : IMC, résultats de biologie, saignée, voies centrales, recherche par lot.

### Amélioré

- **Poste fixe ·** Dossier en 6 onglets, barre latérale groupée, mise en page adaptée dès 1 024 px.
- Tableau de bord 60 fois plus rapide à volume ; synchronisation groupée (83 requêtes au lieu de 321 pour 12 actes).
- **Terminal ·** « Appeler le 15 » et l'astreinte composent vraiment le numéro, mode kiosque compris.

### Corrigé

- Cotation masquée à l'aide-soignante, une seule feuille de soins par acte, régularisation lisible.
- Volumes de nutrition toujours décimaux.

### Sécurité et conformité

- **Terminal ·** Aucune perte d'acte signé (mise en quarantaine), cache photo purgé, verrouillage de l'application.
- Durcissement du serveur : privilèges réduits, journal des accès, scellement planifié du journal d'audit.
- Sauvegardes chiffrées et restauration, durées de conservation, droits des patients, mode kiosque.

### Démo et documentation

- Couverture : 237 faits sur 485 éléments.

## [0.3] — 3 octobre 2026 — Dossier patient, cabinet et coordination

Le dossier patient, l'organisation du cabinet et la coordination entre soignants prennent forme autour des fiches.

### Nouveau

- **Poste fixe ·** Dossier patient en un écran : identité et INS, création avec détection des doublons, versions, rectification.
- Organisation du cabinet et habilitations : planning par rôle, équipe, échanges de tournée, saisies différées.
- Transmissions, interpellations, notifications, signalements et rappels ; tableau de bord du cabinet.
- Savoir-faire : questions du réseau, gestes, vidéos sourcées, relecture par un référent ; **Terminal ·** « Comment faire ? » hors connexion.
- Lecture d'ordonnance : photo, proposition de soins validée par l'infirmière.
- Bilans pré-rédigés et sourcés, signature, PDF, registre des documents.
- Consultation et prescription infirmières, avec compte rendu PDF au registre.
- Facturation préparée : compteurs, file de contrôle, HAD, feuilles de soins simulées.
- **Terminal ·** Passage imprévu, soin non réalisé, création de patient, alerte allergie.

### Corrigé

- Corrections relues par la fiche, courbes corrigées, dose d'anticoagulant, forfait nursing verrouillé.

### Sécurité et conformité

- **Terminal ·** Base locale chiffrée sur le téléphone, terminal révocable.
- Sessions courtes et révocables ; journal d'audit scellé.
- L'aide-soignante ne lit aucune cotation ; chaque destinataire d'une transmission ne voit que ce qui le concerne.

### Démo et documentation

- Première matrice de couverture du cahier des charges : 122 faits sur 485 éléments.

## [0.2] — 3 octobre 2026 — Les premières fiches de soin, la charte « Clinique premium »

Les soins les plus fréquents à domicile ont leur fiche, dans une charte commune aux deux applications.

### Nouveau

- Fiches Injections, Suivi diabétique, Paramètres vitaux et Prélèvements, sur un moteur commun.
- Fiches Anticoagulant injectable, Médicaments et Nursing (avec l'aide-soignante) ; fréquences et arrêt d'un soin.
- Perfusions IV (dont nutrition parentérale) et sous-cutanées, stomies digestive et urinaire, pose et clôture de dispositif.
- Nutrition entérale et soins uro-génito-digestifs.
- **Terminal ·** « Ajouter un soin » ; **Poste fixe et terminal ·** pictogrammes des actes.

### Amélioré

- **Poste fixe et terminal ·** Charte « Clinique premium » sur les deux applications.
- **Terminal ·** Passage de routine en un écran ; brouillons enregistrés en continu.
- **Poste fixe ·** Plaies regroupées et courbes de cicatrisation.
- **Terminal ·** Empreinte du passage sur le reçu.

### Corrigé

- La série des sites sous-cutanés ne dépend plus de l'ordre de relecture des passages.

### Démo et documentation

- Spécifications des 20 fiches de soin, feuille de route produit, photos de démonstration.

## [0.1] — 2 octobre 2026 — Le socle et les pansements

Les trois briques de TabSanté (serveur, poste fixe, terminal) et la première fiche de soin : les pansements.

### Nouveau

- Le serveur, le poste fixe dans le navigateur et le terminal sur téléphone.
- Fiche Pansements : plaie, mesures, photos, protocole.
- **Terminal ·** Terminal hors connexion : la saisie se fait au domicile, l'envoi au retour du réseau.
- **Terminal ·** Saisie allégée du pansement quand rien n'a changé.
- Une preuve pour chaque passage signé.

### Amélioré

- **Poste fixe et terminal ·** Premières refontes du design et système de design commun.

### Corrigé

- **Poste fixe ·** Colonne Preuve fixée à droite du tableau des passages à 1 024 px.

### Démo et documentation

- Base de démonstration réinitialisable, identité du produit et système de design écrits.

## Comment ce journal est construit

- Chaque version regroupe les livraisons fusionnées sur la branche principale autour d'une grande étape, dans l'ordre où elles sont arrivées. La date est celle de la dernière fusion de l'étape.
- Les numéros commencent à 0 : FPLS est en préparation, sans agrément ni hébergement de santé, et n'est pas utilisé avec de vrais patients. La version 1.0 sera la première utilisée en conditions réelles ; aucune date n'est annoncée.
- Le contenu vient des messages de fusion, des notes de chaque chantier, de la feuille de route, des nouveautés du portail et des recomptes successifs de la couverture du cahier des charges.
- Les rubriques suivent l'usage « Keep a Changelog » : Nouveau, Amélioré, Corrigé, Sécurité et conformité, Démo et documentation. Une rubrique sans objet est omise.
