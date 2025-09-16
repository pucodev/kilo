// FIXME: Delete this file is for test purpose
import Api from '@api/index'
import { urls } from '@api/urls'
import type { ZoneNode } from '@models/zone.model'
import ZoneModel from '@models/zone.model'

import MainService from './main.service'

export default class ZoneService extends MainService {
  public static async fetchZones() {
    const response = await Api.request<{ data: Record<number, ZoneNode>[] }>(
      'get',
      urls.ZONES.ROOT,
    )

    return response.data.data.map(v => new ZoneModel(Object.values(v)[0]))
  }
}
