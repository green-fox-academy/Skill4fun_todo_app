console.log(`$ todo

Parancssori Todo applikáció
=============================

Parancssori argumentumok:
-l   Kilistázza a feladatokat
-a   Új feladatot ad hozzá
-r   Eltávolít egy feladatot
-c   Teljesít egy feladatot
`)


const args = process.argv.slice(2);

if (args.includes("-l")) {
    console.log("Kilistázza a feladatokat");
}