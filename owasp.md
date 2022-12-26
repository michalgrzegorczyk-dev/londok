The Open Web Application Security Project® (OWASP) is a nonprofit foundation that works to improve the security of software. 

Zapewnia:
- Narzędzia i zasoby (wszystko open source)
- Duże community, każdy ma wstęp, każdy może coś dać od siebie
- Edukacyjne blogi, filmiki, kursy i treningi
- Nowa lista błędów i niebezpieczeństw co kilka lat

OWASP TOP10 pod kątem Angulara:
- Używanie blibliotek z vulnerabilities (brak aktualizacji paczek)
- Zła autoryzacja użytkowników (robiona od zera, jeśli jest tyle dobrych providerów)
- Cross-site script (XSS) np. {{ trustedData }} (domyślnie angular zapobiega temu)
- Zepsute kontrolowanie dostępów do aplikacji
- Źle zrobiona konfiguracja (np. hasła przetrzymywane w kodzie)
- Brak monitoringu i logowania
