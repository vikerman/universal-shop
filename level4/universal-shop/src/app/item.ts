/**
 * Interface for the JSON returned for each sellabe item.
 */
export interface Item {
  name: string;
  title: string;
  price: number;
  image: string;
  category?: string;
  description?: string;
  largeImage?: string;
}
