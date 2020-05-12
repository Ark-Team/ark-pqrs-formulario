export class proceso {

    constructor(
        public estado: string,
        public fechaCreacion: Date,
        public fechaModificacion: Date,
        public nombre: string,
        public prosId: number,
        public usuCreador: string,
        public usuModificador: string,
        public areaId_Area: number
    ) { }

}