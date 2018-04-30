export interface Pago{
	key?:string;
	id_cliente?: string;
	id_producto?: string;
	fecha: string;
	monto: number;
}