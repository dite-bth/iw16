# Workshop om Caddy web server

- hämta Caddy från https://caddyserver.com/
- lägg till sökvägen till caddy.exe (i den uppackade .zip-filen som du precis laddade ner) i din Path-variabel (miljövarabel).
- skapa en mapp med html-filer (och annat om du vill) och navigera in i den mappen med terminalen/kommandotolken
- kör caddy med kommandot <code>caddy</code>
- surfa in på localhost:2015


För att göra din site publik (för omvärlden);
- skape en fil i mappen med filer som heter <code>Caddyfile</code> med följande innehåll;
- 0.0.0.0:8080
- - ta reda på ditt IP och surfa in på: DITT-IP:8080
