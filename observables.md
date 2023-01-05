### Observables

Observable rodzaj kolekcji "lazy push", które emitują wiele wartości. Observable to ten, KTÓRY JEST OBSEROWANY, BO EMITUJE WARTOSCI. Według dokumentacji uzupełniają lukę w tej tabeli: 

<img width="400" alt="image" src="https://user-images.githubusercontent.com/47832176/210900325-be29d9f5-ae66-4057-b43f-f3c7497a5e60.png">


<details>
<summary>Kiedy observable mogą być synchroniczne? Czy mogą być?</summary>
Observable mogą być synchroniczne i asynchroniczne. Synchronicznych observabli się raczej nie używa (ja nie widzę przypadku) ale można takie stworzyć. Pisząc w RxJs skupiamy się częściej albo tylko na asynchronicznych przxypadkach.

Demo: https://stackblitz.com/edit/rxjs-m1yw5b?devtoolsheight=60&file=index.ts 
  
</details>










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





<details>
<summary>Jakie znasz przykłady observabli?</summary>
  <img width="665" alt="image" src="https://user-images.githubusercontent.com/47832176/210899816-01fca7b2-bf37-4262-9ed9-f42974d094d1.png">
  <img width="673" alt="image" src="https://user-images.githubusercontent.com/47832176/210899777-c70adf0f-4cf3-45e4-bda3-32a7bb67488f.png">
  <img width="669" alt="image" src="https://user-images.githubusercontent.com/47832176/210899829-a0073b48-cc00-466c-bfa4-e24b74e947b7.png">
  <img width="703" alt="image" src="https://user-images.githubusercontent.com/47832176/210899853-41ae9bf4-735d-4a2b-9f99-9ddce9030b88.png"> <br>
  <br>
  
  To są przykłady jak można stworzyć observabla, jest ich o wiele więcej :) 

</details>


