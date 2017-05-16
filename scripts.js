function Telefon(marka, cena, kolor, akcesoria) {
    this.marka = marka;
    this.cena = cena;
    this.kolor = kolor;
    this.akcesoria = akcesoria;
}

Telefon.prototype.printInfo = function() {
    console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
}
Telefon.prototype.accesoriesInfo = function() {
    console.log("Istnieje możliwość dokupienia akcesoriów do telefonów marki " + this.marka + ".");
}

var iPhone6S = new Telefon("Apple", 2250, "srebrny", "akcesoria");

iPhone6S.printInfo();
iPhone6S.accesoriesInfo();