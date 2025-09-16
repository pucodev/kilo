import Loader from '@components/loader/Loader'
import ZoneCard from '@components/zone/ZoneCard'
import type ZoneModel from '@models/zone.model'
import { Button } from '@pucoui/Button'
import {
  Card,
  CardActions,
  CardBody,
  CardContent,
  CardImage,
  CardTitle,
} from '@pucoui/Card'
import ZoneService from '@services/zone.service'
import applog from '@utils/logger'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

export default function HomeKilo() {
  const [isLoading, setIsLoading] = useState(true)
  const [zones, setZones] = useState<ZoneModel[]>([])

  const [searchParams] = useSearchParams()
  const page = Number(searchParams.get('page') || '1')

  async function init() {
    setIsLoading(true)
    const zones = await ZoneService.fetchZones()
    applog.debug('Zones = ', zones)
    setZones(zones)
    setIsLoading(false)
  }
  useEffect(() => {
    init()
    applog.debug('RENDER LIST WITH PAGE ', page)
  }, [page])

  return (
    <div>
      <h3 className="mb-4">Zones</h3>
      {isLoading ? (
        <Card>
          <Loader />
        </Card>
      ) : (
        <div className="is-stack is-gap-5">
          {zones.map(zone => (
            <ZoneCard zone={zone} key={zone.id}>
              <CardActions>
                <Button outlined>View</Button>
                <Link className="btn" to={`/apply/?zone=${zone.id}`}>
                  Apply
                </Link>
              </CardActions>
            </ZoneCard>
          ))}
        </div>
      )}
    </div>
  )
}
