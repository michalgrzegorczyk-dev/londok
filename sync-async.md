# Pytania o synchronicznosc i asynchronicznosc

<details>
<summary>1. Javascript jest synchroniczny czy asynchroniczny?</summary>
Javascript może być synchroniczny oraz asynchroniczny.<br><br>

<details>
<summary>1.1 Czym jest synchroniczność w Javascript?</summary>
Synchroniczność oznacza, że kod wykonuje się określonej sekwencji instrukcji podanych w programie. Każda poprzednia instrukcja czeka na 
wykonanie poprzedniej instrukcji. Np.

console.log('Hello');<br>
console.log('World');
</details>
  
<details>
<summary>1.2 Czym jest asynchroniczność w Javascript?</summary>
Asynchroniczność oznacza, że kod wykonuje się nie czekając na wykonanie poprzednich instrukcji. Np.

console.log('Pierwszy');<br>
setTimeout(() => console.log('Drugi'), 2000);<br>
console.log('Trzeci');<br>
  
W tym wypadku kolejność wykonania będzie różna. Wyświetli się 'Pierwszy', 'Trzeci', 'Drugi'.
</details>
  
<details>
<summary>1.3 Jaka jest róznica pomiędzy synchronicznym i asynchronicznym Javascriptem?</summary>
1. Synchroniczne instrukcje wykonują się w podanej sekwencji. Instrukcje w asynchronicznym JS nie wykonują się jedna po drugiej.<br>
2. Synchroniczne Instrukcje czekają na wykonanie się poprzedniej instrukcji. Asynchroniczne instrukcje nie czekają na wykonanie się poprzedniej
  instrukcji tylko trafiają do event loopa.<br>
3. Większość czasu Javascript używa synchronicznego kodu. Natomiast asynchroniczny Javacript jest preferowany w sytuacjach kiedy wykonanie kodu zostaje
  zablokowane w sposób nieokreslony.
</details>
  
<details>
<summary>1.4 Jak wywołać kilka wątków w Javascript?</summary>
Javascript nie wspiera wielowątkowości - nic się nie da z tym zrobić w czystym Javascript, ponieważ we wszystkich przeglądarkach Javascript wywołuje
się w jednym wątku.
</details>
  
</details>


