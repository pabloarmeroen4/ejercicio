class Prestamo {
    constructor(documento, nombre, valorprestamo, valorpinteres, valordelinteres, num_cuotas, fechap) {
        this.documento = documento;
        this.nombreUsuario = nombre;
        this.valorPrestamo = valorprestamo;
        this.valorpresinteres = valorpinteres;
        this.tasaInteres = valordelinteres;
        this.numeroCuotas = num_cuotas;
        this.fechaPrestamo = fechap;
        this.totalPagado = 0;  // Nuevo atributo para rastrear pagos
    }

    calcularvalortotal() {
        return this.valorPrestamo * this.valorpresinteres * this.numeroCuotas;
    }

    valorcuotasinteres() {
        const valorTotalConIntereses = this.calcularvalortotal();
        const valorCuota = valorTotalConIntereses / this.numeroCuotas;
        return valorCuota;
    }

    valorcuotas() {
        const valorTotalConIntereses = this.calcularvalortotal();
        const valorTotalSinIntereses = this.valorPrestamo * this.numeroCuotas;
        return valorTotalSinIntereses / this.numeroCuotas;
    }

    pagarcuotas(valorpagado) {
        this.totalPagado += valorpagado;
    }

    refinanciar(numcuotas) {
        this.numeroCuotas = numcuotas;
    }

    tostring() {
        return `Préstamo de ${this.valorPrestamo} a nombre de ${this.nombreUsuario} con ${this.numeroCuotas} cuotas. Total pagado: ${this.totalPagado}.`;
    }
}

let prestamo = new Prestamo("12345678", "Juan Perez", 100000, 2.25, 50, 12, "2023-07-09");

console.log(prestamo.calcularvalortotal());
console.log(prestamo.valorcuotasinteres());
console.log(prestamo.valorcuotas());
prestamo.pagarcuotas(5000);
console.log(prestamo.tostring());
prestamo.pagarcuotas(5000);
console.log(prestamo.tostring());
