import { showResult } from './utils';
// switchMap - kombinacja dwóch operatorów - switchAll i map
// Operator posiada tylko jedną aktywną subskrybcję w danym momencie. Zasada dziłania jest taka
// że jeżeli zewnątrzny operator wyemituje nową wartość to następuje natychmistowe przełączenie
// z obecnego wewnętrznego obserwabla na nowego stworzonego z nowej wartości.
// Przełączenie wygląda tak że następuje odsubskrbowanie (unsubscribe) z bierzącego obserwabla
// i subskrybcja do nowego obserwabla

import { delay, map, tap } from 'rxjs/operators';
import { fromEvent, of, switchMap } from 'rxjs';

const source = fromEvent(document, 'keypress').pipe(
  map((value: Event) => ({
    code: +(value as KeyboardEvent).charCode,
    key: (value as KeyboardEvent).key,
  }))
);

const result = source.pipe(
  switchMap((val) =>
    of(val).pipe(
      tap((val) => {
        const span = document.createElement('span');
        span.textContent = `Nowa wartość: ${JSON.stringify(val)}`;
        span.style.display = 'block';
        document.getElementById('root')?.appendChild(span);
      }),
      delay(val.code * 10),
      map((obj) => 'SwitchMap: ' + obj.key)
    )
  )
);
export function switchMapExample() {
  showResult(result, '---SwitchMap---');
}

// Zastosowanie
// SwitchMap może zostać użyte w różnego rodzaju search-barach gdzie użytkownik wpisuje
// szukaną frazę.
