import { showResult } from './utils';
import { map, take } from 'rxjs/operators';
import { concat, interval } from 'rxjs';

const source1$ = interval(500).pipe(
  map((i) => 'a' + i),
  take(3)
);
const source2$ = interval(100).pipe(
  map((i) => 'b' + i),
  take(3)
);
const concat$ = concat(source1$, source2$);

export function concatExample() {
  showResult(concat$, '----Concat----');
}
