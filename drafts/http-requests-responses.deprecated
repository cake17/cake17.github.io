Responses
=========

Les requêtes de Réponses sont de la forme suivante:

HTTP/VERSION <status>[ <reason>]

La VERSION correspond à 1.0 ou 1.1 pour les navigateurs modernes.
Le STATUS est compris entre 100 et 599 inclus. La liste est disponible sur le site de [w3.org](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)

Quelques valeurs essentielles:
    Commencent par 1 : Continue
    Commencent par 2 : Succès (200 OK)
    Commencent par 3 : Redirections (301 Moved Permanently, 304 Not Modified)
    Commencent par 4 : Mauvaises Requêtes (401 Unauthorized, 403 Forbidden, 404 Not Found, 405 Method Not Allowed)
    Commencent par 5 : Erreurs du serveur (500 Internal Server Error)

La REASON Message en général standard à retourner. Exemple pour le code 301, la reason sera ``Moved Permanently``.
