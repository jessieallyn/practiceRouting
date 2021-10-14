export class Hike {
  public location: string;
  public name: string;
  public year: number;
  public imagePath: string;

  constructor(location: string, name:string, year: number, imagePath: string) {
    this.location=location;
    this.name=name;
    this.year=year;
    this.imagePath=imagePath;
  }

}


