export class TipoPqrs {

    constructor(
        public estado: string,
	    public fechaCreacion: Date,
	    public fechaModificacion: Date,
	    public nombre: string,
	    public tpqrsId: number,
	    public usuCreador: string,
	    public usuModificador: string
    ){}

}