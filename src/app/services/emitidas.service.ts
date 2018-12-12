import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
const httpOptionsUrl = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }), withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class EmitidasService {
  prueba: any;
  emitidas: any;
  emitidas_detalle: any;

  constructor(private http: HttpClient, private router: Router) {

  }

  getBaja(): Observable<any> {
   
    this.emitidas="";
    this.emitidas_detalle="";
    
    this.emitidas = [
      {
        "amountARS": {
          "amount": "50000.0",
          "count": "100"
        },
        "amountUSD": {
          "amount": "700.0",
          "count": "80"
        },
        "errorMessage": null
      }
    ];

    this.emitidas_detalle = {
      "amountARS": [
        {
          "amount": "3200.0",
          "count": "123",
          "detail": "Sucursales"
        }
      ],
      "amountUSD": [
        {
          "amount": "15000.0",
          "count": "3",
          "detail": "Sucursales"
        }
      ],
      "errorMessage": null
    }

    // asi es como va desde el endpoint
    //this.emitidas_detalle=this.http.get('http://jsonplaceholder.typicode.com/users');

    //console.log("En el servicio",this.prueba);

    //Cuando viene de un json interno se debe agregar 
    //of para hacerlo un observable ya que el json en si 
    //no es un observable esto es a partir de angular 7

    return of(this.emitidas);

  }


  getIngresado(): Observable<any> {
    this.emitidas="";
    this.emitidas_detalle="";

    this.emitidas = [
      {
        "amountARS": {
          "amount": "15000.0",
          "count": "150"
        },
        "amountUSD": {
          "amount": "450000.0",
          "count": "130"
        },
        "errorMessage": null
      }
    ];

    this.emitidas_detalle = {
      "amountARS": [
        {
          "amount": "34000.0",
          "count": "31",
          "detail": "Sucursales"
        }
      ],
      "amountUSD": [
        {
          "amount": "1378.0",
          "count": "3",
          "detail": "Sucursales"
        }
      ],
      "errorMessage": null
    }
     // asi es como va desde el endpoint
    //this.emitidas_detalle=this.http.get('http://jsonplaceholder.typicode.com/users');

    //console.log("En el servicio",this.prueba);

    // Cuando viene de un json interno se debe agregar 
    // of para hacerlo un observable ya que el json en si 
    // no es un observable esto es a partir de angular 7
    return of(this.emitidas);

  }

  getDdif(): Observable<any> {
    this.emitidas="";
    this.emitidas_detalle="";

    this.emitidas = [
      {
        "amountARS": {
          "amount": "35000.0",
          "count": "10"
        },
        "amountUSD": {
          "amount": "57400.0",
          "count": "10"
        },
        "errorMessage": null
      }
    ];

    this.emitidas_detalle = {
      "amountARS": [
        {
          "amount": "53000.0",
          "count": "12",
          "detail": "Sucursales"
        }
      ],
      "amountUSD": [
        {
          "amount": "125000.0",
          "count": "32",
          "detail": "Sucursales"
        }
      ],
      "errorMessage": null
    }
     // asi es como va desde el endpoint
    //this.emitidas_detalle=this.http.get('http://jsonplaceholder.typicode.com/users');

    //console.log("En el servicio",this.prueba);

    // Cuando viene de un json interno se debe agregar 
    // of para hacerlo un observable ya que el json en si 
    // no es un observable esto es a partir de angular 7
    return of(this.emitidas);

  }

  getPendiente(): Observable<any> {
    this.emitidas="";
    this.emitidas_detalle="";

    this.emitidas = [
      {
        "amountARS": {
          "amount": "23400.0",
          "count": "10"
        },
        "amountUSD": {
          "amount": "87600.0",
          "count": "130"
        },
        "errorMessage": null
      }
    ];

    this.emitidas_detalle = {
      "amountARS": [
        {
          "amount": "7500.0",
          "count": "1",
          "detail": "Sucursales"
        }
      ],
      "amountUSD": [
        {
          "amount": "34000.0",
          "count": "83",
          "detail": "Sucursales"
        }
      ],
      "errorMessage": null
    }
     // asi es como va desde el endpoint
    //this.emitidas_detalle=this.http.get('http://jsonplaceholder.typicode.com/users');

    //console.log("En el servicio",this.prueba);

    // Cuando viene de un json interno se debe agregar 
    // of para hacerlo un observable ya que el json en si 
    // no es un observable esto es a partir de angular 7
    return of(this.emitidas);

  }

  getRechazado(): Observable<any> {
    this.emitidas="";
    this.emitidas_detalle="";

    this.emitidas = [
      {
        "amountARS": {
          "amount": "23600.0",
          "count": "160"
        },
        "amountUSD": {
          "amount": "50000.0",
          "count": "140"
        },
        "errorMessage": null
      }
    ];

    this.emitidas_detalle = {
      "amountARS": [
        {
          "amount": "66500.0",
          "count": "145",
          "detail": "Sucursales"
        }
      ],
      "amountUSD": [
        {
          "amount": "79300.0",
          "count": "93",
          "detail": "Sucursales"
        }
      ],
      "errorMessage": null
    }
     // asi es como va desde el endpoint
    //this.emitidas_detalle=this.http.get('http://jsonplaceholder.typicode.com/users');

    //console.log("En el servicio",this.prueba);

    // Cuando viene de un json interno se debe agregar 
    // of para hacerlo un observable ya que el json en si 
    // no es un observable esto es a partir de angular 7
    return of(this.emitidas);

  }

  getProcesado(): Observable<any> {
    this.emitidas="";
    this.emitidas_detalle="";

    this.emitidas = [
      {
        "amountARS": {
          "amount": "23400.0",
          "count": "10"
        },
        "amountUSD": {
          "amount": "44400.0",
          "count": "450"
        },
        "errorMessage": null
      }
    ];

    this.emitidas_detalle = {
      "amountARS": [
        {
          "amount": "5000.0",
          "count": "1",
          "detail": "Sucursales"
        }
      ],
      "amountUSD": [
        {
          "amount": "13600.0",
          "count": "143",
          "detail": "Sucursales"
        }
      ],
      "errorMessage": null
    }
     // asi es como va desde el endpoint
    //this.emitidas_detalle=this.http.get('http://jsonplaceholder.typicode.com/users');

    //console.log("En el servicio",this.prueba);

    // Cuando viene de un json interno se debe agregar 
    // of para hacerlo un observable ya que el json en si 
    // no es un observable esto es a partir de angular 7
    return of(this.emitidas);

  }

  getPendEmisionPago(): Observable<any> {
    this.emitidas="";
    this.emitidas_detalle="";

    this.emitidas = [
      {
        "amountARS": {
          "amount": "34000.0",
          "count": "10"
        },
        "amountUSD": {
          "amount": "65000.0",
          "count": "410"
        },
        "errorMessage": null
      }
    ];

    this.emitidas_detalle = {
      "amountARS": [
        {
          "amount": "3200.0",
          "count": "34",
          "detail": "Sucursales"
        }
      ],
      "amountUSD": [
        {
          "amount": "15000.0",
          "count": "35",
          "detail": "Sucursales"
        }
      ],
      "errorMessage": null
    }
     // asi es como va desde el endpoint
    //this.emitidas_detalle=this.http.get('http://jsonplaceholder.typicode.com/users');

    //console.log("En el servicio",this.prueba);

    // Cuando viene de un json interno se debe agregar 
    // of para hacerlo un observable ya que el json en si 
    // no es un observable esto es a partir de angular 7
    return of(this.emitidas);

  }

  get7x24(): Observable<any> {
    this.emitidas="";
    this.emitidas_detalle="";

    this.emitidas = [
      {
        "amountARS": {
          "amount": "4500.0",
          "count": "130"
        },
        "amountUSD": {
          "amount": "45000.0",
          "count": "110"
        },
        "errorMessage": null
      }
    ];

    this.emitidas_detalle = {
      "amountARS": [
        {
          "amount": "3200.0",
          "count": "21",
          "detail": "Sucursales"
        }
      ],
      "amountUSD": [
        {
          "amount": "32000.0",
          "count": "33",
          "detail": "Sucursales"
        }
      ],
      "errorMessage": null
    }
     // asi es como va desde el endpoint
    //this.emitidas_detalle=this.http.get('http://jsonplaceholder.typicode.com/users');

    //console.log("En el servicio",this.prueba);

    // Cuando viene de un json interno se debe agregar 
    // of para hacerlo un observable ya que el json en si 
    // no es un observable esto es a partir de angular 7
    return of(this.emitidas);

  }

}


