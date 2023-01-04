# REST
REST jest akronimem od **RE**presentational **S**tate **T**ransfer

### 1. Co ma wspólnego HTTP/HTTPS z REST?
REST nie jest synonimem HTTP. REST jest rozwiązaniem architektonicznym, które z owego protokołu korzysta.

### 2. Jakie są reguły RESTful? // todo kto to wymysil
Nie ma oficjalnego standardu REST, a jedynie zbiór reguł, z których można korzystać lub nie.

#### 3. Jednolity interfejs komunikacyjny 
Serwer powinien udostępiać API, które będzie rozumiane przez wiele aplikacji - czyli np. serwer obsługuje zapytania HTTP dla aplikacji mobilnych, aplikacji desktopowych, stron www itd.

#### 4. Podział na aplikacje klient-serwer
Rozdzielenie aplikacji pozwala na ich niezależny rozwój i działanie. Taki podział zwiększa możliwości skalowania i rozszerzalności.

#### 5. Bezstanowość (Stateless)
Oznacza to, że po stronie serwera nie powinno być mechanizmów przetrzymujących dane klienta, które byłby by potrzebne do poprawnego działania systemu. API nie powinno trzymać stanu aplikacji, a jedynie interpretować informacje przesłane przez klienta.
Klient powinien wysyłać tylko komplet informacji potrzebnych do poprawnego wykonania żądania (request)

Reguła ta jest mocno powiązana z sesją użytkownika, która często jest realizowana po stronie serwera. W przypadku RESTful API, każdy request, który trafia do serwera powinien zawierać w nagłówku token, np. JWT. To na jego podstawie API
decyduje, czy request zostanie przyjęty czy odrzucony.

#### 6. CDN. Cacheability

