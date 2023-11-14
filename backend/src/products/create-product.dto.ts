export class CreateProductDto {
  readonly title: string;
  readonly shortDescription: string;
  readonly longDescription: string;
  readonly category: string;
  readonly platform: string;
  readonly price: number;
  image?: string;
}
