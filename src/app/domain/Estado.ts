export class Estado {

    constructor(
		public estaId: number,
        public estado: string,
		public fechaCreacion: Date,
		public fechaModificacion: Date,
		public nombre: string,
		public usuCreador: string,
		public usuModificador: string
    ){}

}