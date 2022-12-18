import { Observable } from 'rxjs';

export const showResult = (obs: Observable<string>, title?: string) => {
  const root = document.getElementById('root')!;
  if(title) {
      const h2 = document.createElement('h2');
      h2.innerText = title;
      root.appendChild(h2);
  }

  obs.subscribe((result) => {
    const span = document.createElement('span');
    span.textContent = result;
    span.style.display = 'block';
    root.appendChild(span);
  });
};
