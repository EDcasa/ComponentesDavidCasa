import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public listLanguageProgramming = [
    { "id": "Python", "description": "Python es un lenguaje de alto nivel de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código, se utiliza para desarrollar aplicaciones de todo tipo, ejemplos: Instagram, Netflix, Spotify, Panda 3D, entre otros.", "img": "https://anthoncode.com/wp-content/uploads/2019/01/python-logo-png.png", "url":"https://www.python.org/" },
    { "id": "C#", "description": "C# es un lenguaje de programación multiparadigma desarrollado y estandarizado por la empresa Microsoft como parte de su plataforma .NET, que después fue aprobado como un estándar por la ECMA e ISO. C# es uno de los lenguajes...", "img": "https://www.fixedbuffer.com/wp-content/uploads/2019/06/reflexion.png", "url":"https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/" },
    { "id": "C++", "description": "C++ es un lenguaje de programación diseñado en 1979 por Bjarne Stroustrup. La intención de su creación fue extender al lenguaje de programación C mecanismos que permiten la manipulación de objetos. En ese sentido, desde el punto de vista de los lenguajes orientados a objetos, C++ es un lenguaje híbrido", "img": "https://pbs.twimg.com/media/EfDyTwnXsAo7bG0.png" },
    { "id": "Java", "description": "Java es un lenguaje de programación y una plataforma informática que fue comercializada por primera vez en 1995 por Sun Microsystems. Hay muchas aplicaciones y sitios web que no funcionarán, probablemente, a menos que tengan Java instalado, y cada día se crean más. Java es rápido, seguro y fiable. ", "img": "https://okhosting.com/resources/uploads/2019/01/java.jpg" , "url":"https://www.java.com/es/download/ie_manual.jsp"},
    { "id": "PHP", "description": "PHP es un lenguaje de programación de uso general que se adapta especialmente al desarrollo web.​ Fue creado inicialmente por el programador danés-canadiense Rasmus Lerdorf en 1994.​ En la actualidad, la implementación de referencia de PHP es producida por The PHP Group.", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png", "url":"https://www.php.net/manual/es/intro-whatis.php" },
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
