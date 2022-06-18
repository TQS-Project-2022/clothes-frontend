import {Rider} from "./Rider";

export interface ProductOrder {
  id: number;
  productId: number;
  rider: Rider;
  delivered: boolean;
}
