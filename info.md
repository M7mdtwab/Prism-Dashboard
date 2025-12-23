# Prism Dashboard

💎 Ein modernes, glassmorphism-inspiriertes Dashboard für Home Assistant.

## Custom Cards

Dieses Repository enthält folgende Custom Cards:

- **prism-heat** - Thermostat-Knob-Karte mit Glassmorphism-Design
- **prism-heat-small** - Kompakte Heizungs-Karte mit Inlet-Styling
- **prism-button** - Entity-Button-Karte mit Neumorphismus-Effekten
- **prism-media** - Media-Player-Karte mit Glassmorphism-Design
- **prism-calendar** - Kalender-Karte zur Anzeige kommender Termine
- **prism-shutter** - Horizontale Jalousien-Karte mit Inlet-Slider
- **prism-shutter-vertical** - Vertikale Jalousien-Karte mit kompaktem Design

## Installation

Nach der Installation über HACS:

1. Gehe zu **Einstellungen → Geräte & Dienste → Lovelace Dashboards → Ressourcen**
2. Klicke auf **"Ressource hinzufügen"**
3. Füge alle Custom Cards hinzu:
   - `/local/custom-components/prism-heat.js`
   - `/local/custom-components/prism-heat-small.js`
   - `/local/custom-components/prism-button.js`
   - `/local/custom-components/prism-media.js`
   - `/local/custom-components/prism-calendar.js`
   - `/local/custom-components/prism-shutter.js`
   - `/local/custom-components/prism-shutter-vertical.js`
4. Wähle für alle den Typ **"JavaScript-Modul"**
5. Starte Home Assistant neu

## Verwendung

Alle Karten können im visuellen Dashboard-Editor verwendet werden. Suche einfach nach "prism" im Karten-Browser.

Weitere Informationen findest du in der [README.md](README.md).

