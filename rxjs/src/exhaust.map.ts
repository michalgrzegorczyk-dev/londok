import { map } from 'rxjs/operators';
import { showResult } from './utils';
// exhaustMap - kombinacja dwóch operatorów - exhaust i map
// Zasada działania:
// Mapuje wartości z zewnętrznego observabla (high-order source observable) do wewnętrznego obserwabla (inner observable).
// exhaustMap może mieć tylko jedną subskrybcje w danym momencie. Jeżeli zewnętrzny obserwable wyemitował nową wartość
// a wewnętrzny obserwable jeszcze nie został skończony, to nie jest tworzony nowy obserwable.
// Dopiero gdy wewnętrzny obserwable jest skończony to kolejna emisja wartości przez zewnętrzny obserwable spowoduje
// stowrzenie nowego obserwabla
import { fromEvent, exhaustMap, interval, take } from 'rxjs';

// Przykład 1.
// Klikniecie powoduje uruchomienie strumienia (fromEvent), a następnie mapowanie na wewnętrznego obserwabla (interval)
// Dopóki wewnętrzny obserwable nie wyemituje 5 wartości (take(5)) i nie zakończy się,
// kliknięcie nie spowoduje stworznia nowego strumienia
export function exhaustMapClickExample() {
  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(exhaustMap(() => interval(1000).pipe(take(5))));
  result.subscribe((x) => console.log(x));
  showResult(result.pipe(map((x) => '' + x)));
}

// Zastosowanie
// exhaustMap jest przydatne kiedy mamy jakieś zdarzenie które może długo trwać,
// może być triggerowane z wielu miejsc ale zależy nam żeby nie zostało przerwane.
// Takim zdarzeniem może być jakiś request POST/PATCH/DELETE np. proces logowania albo jakiś submit.
// Fajnie to działa na przykład gdy mamy button z którego tworzymy stream i wtedy mapujemy to na HTTP request
//  fromEvent(submitBtn, 'click').pipe(
//      exhaustMap(() => this.http.post(form.value))
//  ).subscribe()
// Wtedy nawet jak użytkownik kliknie 100 razy w przycisk a request się nie skończy to żaden inny request nie poleci
