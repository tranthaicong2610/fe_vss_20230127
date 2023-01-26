export interface Order {
  id: string;
  user_id:string;
  is_pay: boolean;
  payment_method:string;
  pImg: string;
  pName:string;
  pQty: number;
  pCategory: string;
  pPrice: number;
  createdAt: Date;
  updatedAt: Date;
  pStatus: string;
}
