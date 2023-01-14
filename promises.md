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
- Promise nie ma żadnych operatorów (może poza then, który chainuje promisy i  response.json(), który konwertuje response z promisa do jsona), natomiast 
observable ma pełno operacji, takich jak: map, retry, filter and more
