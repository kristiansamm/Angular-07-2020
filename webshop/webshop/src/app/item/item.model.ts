export class Item {
  constructor(
    public imgSrc: string,
    public title: string,
    public price: string,
    public category: string,
    public firebaseId?: string
  ) {}
}