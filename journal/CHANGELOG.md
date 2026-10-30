# Journal des versions — TabSanté V2

Ce qui change dans TabSanté, la plateforme des infirmières libérales à domicile, version par version : au poste fixe du cabinet, sur le terminal de tournée et dans la démo.

*Mis à jour le 30 octobre 2026.*

[Portail](https://valeriongg.github.io/tabsante-docs/) · [Démo](https://valeriongg.github.io/tabsante-docs/demo/) · [Vidéos](https://valeriongg.github.io/tabsante-docs/videos/) · [Design](https://valeriongg.github.io/tabsante-docs/design/) · [Questions](https://valeriongg.github.io/tabsante-docs/questions/) · [Donner mon avis](https://github.com/ValerionGG/tabsante-docs/issues/new?template=retour.yml&application=Journal&title=%5BRetour%5D%20Journal)

## Où en est TabSanté

Couverture du cahier des charges : **571 éléments**, dont **418 faits et testés** (73 %), **139 simulés**, **10 partiels** et **4 bloqués**.

Ce qui est simulé, et pourquoi :

- **Agréments SESAM-Vitale et CNDA** — La lecture des cartes CPS et Vitale, les feuilles de soins électroniques et la télétransmission fonctionnent de bout en bout, mais avec un composant de démonstration. Rien n'est transmis à l'Assurance maladie tant que l'agrément n'est pas obtenu.
- **Cotation NGAP** — Le moteur de cotation est une démonstration, alignée sur le texte de la NGAP en vigueur et vérifiée sur des cas officiels. Il explique chaque ligne mais ne doit jamais servir à facturer.
- **Hébergement HDS** — Les données de santé devront être hébergées chez un hébergeur certifié HDS. Le dossier est préparé ; d'ici là, TabSanté ne contient que des personnes fictives.
- **Raccordements nationaux** — INSi, DMP, messagerie sécurisée MSSanté, Pro Santé Connect et ordonnance numérique sont joués par des doublures fidèles, en attendant les conventions et les accès de production.

Les 4 éléments bloqués attendent un tiers : un hébergeur certifié HDS, un délégué à la protection des données, un essai d'autonomie de 10 heures sur le téléphone cible et une décision de phasage.

> **À savoir.** La cotation affichée est une démonstration et la télétransmission est simulée. TabSanté ne contient aucune donnée réelle : tous les patients et soignants sont fictifs. Aucune date d'agrément n'est annoncée.

## À venir — en cours

*en cours au 27 octobre 2026* — Ce qui suit attend une décision ou un tiers. Les autres chantiers sont fusionnés.

### Données publiques à charger

- Liste officielle des communes en zone de montagne et base des codes postaux (data.gouv.fr, Licence Ouverte) : l'importeur est prêt, le chargement attend l'accord du cabinet.

### Raccordements réels

- Agent de poste et télétransmission réels : attendent l'agrément SESAM-Vitale.

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
- Les numéros commencent à 0 : TabSanté est en préparation, sans agrément ni hébergement de santé, et n'est pas utilisé avec de vrais patients. La version 1.0 sera la première utilisée en conditions réelles ; aucune date n'est annoncée.
- Le contenu vient des messages de fusion, des notes de chaque chantier, de la feuille de route, des nouveautés du portail et des recomptes successifs de la couverture du cahier des charges.
- Les rubriques suivent l'usage « Keep a Changelog » : Nouveau, Amélioré, Corrigé, Sécurité et conformité, Démo et documentation. Une rubrique sans objet est omise.
