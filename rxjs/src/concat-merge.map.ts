import { showResult } from './utils';
import { concatMap, delay, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

// Różnica pomiędzy concatMap a mergeMap
const source = of(2000, 1000);

// concatMap - mapuje wartości zewnętrznego observabla na obserwabla wenątrz operatora przy czym
// zachowana jest kolejność która pochodzi od zewnętrznego observable'a
// czyli jeżeli pierwszy element w strumieniu to 2000 to dopiero gdy ta wartość zostanie przetworzona przez wewnetrzny observable
// do dopiero kolejny element strumienia (w tym wypadku 1000) będzie obsłużona
const concatMapExample = source.pipe(
  concatMap((val) => of(`ConcatMap: Delayed by ${val}ms`).pipe(delay(val)))
);

// mergeMap - także mapuje wartości zewnętrznego operatora na wewnętrznego operatora ale nie zachowuje
// kolejności tylko emituje najpierw tą wartość która wcześniej zostanie otrzymana z wewnętrznego observabla
const mergeMapExample = source.pipe(
  delay(4000),
  mergeMap((x) => of(`MergeMap Delayed by ${x}ms`).pipe(delay(x)))
);

export const concatMergeMapComparison = () => {
  showResult(concatMapExample);
  showResult(mergeMapExample);

  // concatMapExample.subscribe((val) => console.log(`Concat Map: ${val}`));
  // Wynik:
  //    Concat Map: Delayed by 2000ms
  //    Concat Map: Delayed by 1000ms
  // mergeMapExample.subscribe((val) => console.log(`Merge Map: ${val}`));
  // Wynik:
  //    Merge Map: Delayed by 1000ms
  //    Merge Map: Delayed by 2000ms
};
/**
 * Zastosowanie
 * Najcześciej stosujemy obydwa operatory gdy chcemy zrobić konwersje zwykłego tekstu/liczby na observable.
 * Przykładem jest lista adresów URL i chcemy zrobić z nich serie zapytań HTTP
 * const urls = [
 *   'https://api.mocki.io/v1/0350b5d5',
 *   'https://api.mocki.io/v1/ce5f60e2'
 * ];
 *
 * of(urls).pipe(
 *   mergeMap((url) => {
 *       return this.http.get(url);
 *   })
 * ).subscribe((response) => console.log(response.status));
 *
 *
 */
