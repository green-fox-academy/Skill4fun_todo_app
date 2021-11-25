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


### Második 'number' argumentum használata:
===========================================
    -x   A parancs alkalmazása a megadott számnak megfelelő todo listán.
         >> Amennyiben nem adunk meg értéket, alapértelmezett az 1-es lista.
    
Például: node app.js -l -2 
         > Kilistázza a második Todo listát <


### Harmadik 'string' argumentum használata:
===========================================
    -a   Új feladat hozzáadásakor harmadik argumentumként " "-között adjuk meg rögzítendő feladatot.
         >> Amennyiben második argumentumként adjuk meg a rögzítendő feladatot, 
            alapértelmezetten az első Todo listára fog rögzülni!

Például: node app.js -a -2 "Ez az új feladat"
         > Új feladat hozzáadása a második számú Todo listához <