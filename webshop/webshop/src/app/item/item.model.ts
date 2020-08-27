export class Item {
  constructor(
    public imgSrc: string,
    public title: string,
    public price: number,
    public category: string,
    public visible: boolean,
    public firebaseId?: string
  ) {}
}