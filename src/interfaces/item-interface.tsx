import { ImageInterface } from "./image-interface";

export interface ItemInterface {
  label: string;
  value?: string;
  href?: string;
  images?: ImageInterface[];
}
