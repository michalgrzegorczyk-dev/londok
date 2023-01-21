### Promises

Promise - Obiekt, który reprezentuje ewentualne zakończenie (lub niepowodzenie) asynchronicznej operacji - zwracając wartość.

Promis ma 3 stany:
- pending - odpalenie promisa
- fulfilled - operacja zakonczona powodzeniem
- rejected - operacja zakokończona porażką 


## Jakie są różnice pomiędzy promisem, a observablem?
- Promisy emitują tylko jedną wartość w czasie, natomiast observable mogą emitować ich wiele
- Promisy nie są leniwe - odpalają się od razu po stworzeniu, natomiast observable nie emitują nic dopóki ich nie zasubskrybujesz.

Emitują jak są hot :) 

- Promisów nie można anulować, natomiast observable mają subskrybcje, które można anulować, żeby przestał emitować dalsze wartości
- Promise nie ma żadnych operatorów (poza funcjami all, allSettled, any, reace, może poza then, który chainuje promisy i  response.json(), który konwertuje response z promisa do jsona), natomiast 
observable ma pełno operacji, takich jak: map, retry, filter i więcej

![image](https://user-images.githubusercontent.com/47832176/212471194-b703991f-4d9c-429e-afe5-58084007547e.png)

<br> 
pull - my pobieramy wartosc
push - ktos nam ja wpycha :) 
