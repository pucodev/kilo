import MainModel from './main.model'

export interface ZoneNode {
  zone_id: number
  name: string
}

export default class ZoneModel extends MainModel<ZoneNode> {
  get imageSrc() {
    return '/park1.jpg'
  }

  get description() {
    return 'Corned beef chislic burgdoggen frankfurter tail tenderloin t-bone cupim pork belly porchetta.  Bresaola strip steak chuck sausage ground round.  Beef shoulder alcatra jerky pastrami, meatball filet mignon spare ribs landjaeger biltong andouille sirloin. '
  }

  get name() {
    return this.node.name
  }

  get id() {
    return this.node.zone_id
  }
}
