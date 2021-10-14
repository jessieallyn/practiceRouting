import { EventEmitter, Injectable } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Hike } from "./hike.model";

@Injectable({
  providedIn: 'root'
})

export class HikingService {
  location: string= "";
  name: string="";
  year: number= null;
  image: string="url";
  hikeSelected = new EventEmitter<Hike>();

  private futureHikes: Hike[] = [
    new Hike('Idaho', 'Teton Mountains', null, "https://upload.wikimedia.org/wikipedia/commons/6/6b/Oxbow_Bend_outlook_in_the_Grand_Teton_National_Park.jpg"),
    new Hike('West Virginia', 'Blackwater Falls', null, "https://upload.wikimedia.org/wikipedia/commons/8/84/Blackwater_Falls_of_Blackwater_Falls_State_Park_19.jpg"),
    new Hike('Missouri', 'Katy Trail', null, "https://upload.wikimedia.org/wikipedia/commons/f/f4/Missouri_River_along_the_KATY_trail_at_the_Portland%2CMO_park_and_boat_ramp..JPG")
  ]

  private pastHikes: Hike[] = [
    new Hike('Idaho', 'Civil Defense Cave', 2012, "assets/woods.civildefense.2012.jpg"),
    new Hike('Idaho', 'Mesa Falls', 2012, "assets/woods.mesafalls.2012.jpg"),
    new Hike('Idaho', 'Mesa Falls', 2013, "assets/woods.mesafalls.2013.jpg"),
    new Hike('Idaho', 'Menan Butte', 2014, "assets/woods.menanbutte.2014.jpg"),
    new Hike('Idaho', 'Menan Butte', 2015, "assets/woods.menanbutte.2015.jpg"),
    new Hike('Kansas', 'Horsethief Canyon', 2018, "assets/woods.horsethiefcanyon.2018.jpg"),
    new Hike('Idaho', 'Menan Butte', 2019, "assets/woods.menanbutte.2019.jpg"),
    new Hike('Missouri', 'Wallace State Park', 2019, "assets/woods.wallace.2019.jpg"),
    new Hike('Idaho', 'Civil Defense Cave', 2019, "assets/woods.civildefense.2019.jpg"),
    new Hike('Utah', 'Slate Canyon', 2019, "assets/woods.slatecanyon.2019.jpg"),
    new Hike('Missouri', 'Pickle Springs', 2020, "assets/woods.picklesprings.2020.jpg"),
    new Hike('Missouri', 'Johnson Shutins', 2021, "assets/woods.johnson.2021.jpg")
  ]

  getPastHikes() {
    return this.pastHikes.slice();
  }

  getFutureHikes() {
    return this.futureHikes.slice();
  }


}
