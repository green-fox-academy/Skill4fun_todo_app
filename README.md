Gergő's TODO application.


Parancssori Todo applikáció
=============================
Indítás: 'node app.js'

## Alap funkciók kiiratása

    Parancssori argumentumok:
    -l   Kilistázza a feladatokat
    -a   Új feladatot ad hozzá 
    -r   Eltávolít egy feladatot
    -c   Teljesít egy feladatot


##  Második 'number' argumentum használata:
    -x   A parancs alkalmazása a megadott számnak megfelelő todo-listán.

         > Amennyiben nem adunk meg értéket, az alapértelmezett az 1-es Todo-lista.
    
Például: node app.js -l -2 

         > Kilistázza a második Todo-listát <


##  -a   Új feladatot ad hozzá 

Harmadik 'string' argumentum használata:
        Új feladat hozzáadásakor harmadik argumentumként 
        
        " "-között adjuk meg rögzítendő feladatot.

         > Amennyiben második argumentumként adjuk meg a rögzítendő feladatot, 
            alapértelmezetten az első Todo-listára fog rögzülni!

Például: node app.js -a -2 "Ez az új feladat"

         > "Ez az új feladat" tartalmú bejegyzés hozzáadása a második számú Todo-listához <


##  -r   Eltávolít egy feladatot 

Harmadik 'number' argumentum használata:
        Feladat eltávolításakor harmadik argumentumként adjuk meg törlendő feladatot.

         > Amennyiben második argumentumként adjuk meg törlendő feladatot, 
            alapértelmezetten az első Todo-listáról fog törölni!

Például: node app.js -r -2 -5

         > Az ötödik sorszámú feladat törlése a második számú Todo-listáról <