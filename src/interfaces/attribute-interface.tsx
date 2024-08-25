import { ImageInterface } from "./image-interface";

export interface AttributeInterface {
  label: string;
  value?: string;
  href?: string;
  images?: ImageInterface[];
}
