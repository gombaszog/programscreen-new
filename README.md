# Gombaszög Események App

Egy Vue.js 2-ben megírt webalkalmazás, amit a *https://www.gombaszog.sk/api/* szolgál ki


## Funkciók

Az app csak olyan screeneket jelenít meg, amin található esemény. pl.: ha éppen nincs futó esemény, akkor az a screen nem jelenik meg
Defaultban 3 screen váltakozik:
  - összes esemény, mely a kezdés előtt van (30percen belül induló esemény villog)
  - éppen futó események
  - éppen futó hosszú (több, mint 3órás esemény)

Query paraméterekkel módosíthatjuk az alapnézet, valamint egyéb screeneket kapcsolhatunk be:
1. egyszerűsített paraméterek (ahol csak a paraméter neve kell a querybe)
  - **kocsma** - a beégetett 2db kocsma étel/itallapot jeleníti meg (KocsmaFirstScreen, KocsmaSecondScreen)
  - **noheader** - kikapcsolja a headert (logo, idő, dátum)
  - **nodescription** - kikapcsolja az eseményleírásokat (mobilon nincsenek leírások)
  - **noalert** - nem villognak a közelgő események

2. screen kapcsoló paraméterek
  - **location** - egy adott helyszín eseményeit jeleníti meg. pl.: location=Folkszöglet
  - **artisan** - az artisan mappában lévő html-t tudjuk megjeleníteni. pl.: artisan=test -> *artisan/test.html*-t tölti a screenbe

Például: URL/?kocsma&noheader&location=Folkszöglet&artisan=test
  - láthatók a kocsma screenek, nincs header, külön listázza a Folkszöglet eseményeit és berántja a test.html fájlt


## Fejlesztéshez / teszteléshez
Ha a kódba akarsz túrni, akkor az *src* mappában turkálj és legyen npm-ed (parancsok a doksi végén)
Képeket, stb. a *static* mappába tedd

CSS mókolás *.scss* fájlokban

Ha teszteléshez konkrét dátumot akarsz megadni:
 - nyisd meg *src/plugins/helpers.js*
 - *getCurrentTime()* functionben emulálj saját dátumot

Ha a screen váltakozás és a programlista lekérdezés sebésségén akarsz változtatni
 - nyisd meg *src/plugins/config.js*


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
**copy *dist* directory files to server root directory**

### Custom confighoz
See [Configuration Reference](https://cli.vuejs.org/config/).
