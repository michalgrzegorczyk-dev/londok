### Observables

Observable rodzaj kolekcji "lazy push", które emitują wiele wartości. Według dokumentacji uzupełniają lukę w tej tabeli: 

<img width="283" alt="image" src="https://user-images.githubusercontent.com/47832176/210890455-118598dc-a221-478b-8714-91b27f62cff0.png">


## Observable mogą być synchroniczne. Kiedy?

Observable mogą być synchroniczne i asynchroniczne. Synchronicznych observabli się raczej nie używa (ja nie widzę przypadku) ale można takie stworzyć. Pisząc w RxJs skupiamy się częściej albo tylko na asynchronicznych przxypadkach.

Demo: https://stackblitz.com/edit/rxjs-m1yw5b?devtoolsheight=60&file=index.ts 



<details>
<summary>Co powoduje, że observable są asynchroniczne?</summary>
Observable z natury są asynchroniczne i mogą emitować wiele wartości w czasie. Kiedy subskrybujesz się do observabla, wartość nie musi od razu się wyemitować. Natomiast observable wyśle wartość do observera/subscribera w przyszlości np. z jakimś opóźnieniem. W odróżnieniu od promisa, który przesyła tylko jedną wartość i następnie się kończy. 
  
  
  <br><br>
  
  Asynchroniczność pozwala działać w scenariuszu gdzie wartosć nie jest znana "od razu" np. przy requestach http lub nasłuchiwania eventu np. inputu użytkownika.
  
</details>

<details>
<summary>Jaka jest różnica pomiędzy funkcją, a observablem?</summary>
  Observable mogą 'zwrócic' (return) wiele rożnych wartości w czasie, funkcje tego nie mogą. <br>
  https://user-images.githubusercontent.com/47832176/210897847-115f39b2-b822-4ad7-ab1b-2cad8986c81a.png <br>
  https://user-images.githubusercontent.com/47832176/210897886-d96e503b-7bcd-438c-b6ff-1b12df66fbe7.png <br>
</details>
