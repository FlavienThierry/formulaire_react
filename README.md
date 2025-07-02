### SIMPLE VALIDATION D'UN FORMULAIRE AVEC ReactJs

#### champ à remplir par l'utilisateur:

- Nom 
- Adresse Email 
- Numéro téléphone 
- Mot de passe
- confirmation de mot de passe

#### Condition pour que les infos saisies soient valides:

 - __Nom :__ ne doit contenir que des lettres.
 - __Adresse Email:__ 
    
    - la partie avant "@" ne doit pas contenir des caractères spéciaux.

    - "@" est obligatoire.

    - Le nom de domaine ne doit pas contenir des caractères spéciaux et des espaces blanches.

    - "." est obligatoire pour separer le domaine et l'extension (fr, com, org, etc). 

- __Téléphone:__
ne peut contenir que des 10 chiffres et seulemnt des chiffres.

- __Mot de passe:__ doit au moins contenir 8 caracères et il doit y avoir des caractères spéciaux pour être fort. Le mot de passe et sa confirmation doivent être correspondants.

#### Module à installer via npm:

- Boostrap 
    
        npm install bootstrap