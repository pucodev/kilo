import EmptyCard from '@components/empty/EmptyCard'
import Loader from '@components/loader/Loader'
import ZoneCard from '@components/zone/ZoneCard'
import type ZoneModel from '@models/zone.model'
import { Button } from '@pucoui/Button'
import { CardActions } from '@pucoui/Card'
import { Dialog, DialogBody, DialogContent, DialogHeader } from '@pucoui/Dialog'
import { FieldLabel } from '@pucoui/Field'
import { Input } from '@pucoui/Input'
import ZoneService from '@services/zone.service'
import applog from '@utils/logger'
import debounce from 'lodash/debounce'
import { useCallback, useEffect, useState } from 'react'

export default function SelectZoneDialog({
  onSelect,
}: {
  onSelect: (zone: ZoneModel) => void
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [zones, setZones] = useState<ZoneModel[]>([])

  async function searchZone(search: string) {
    setIsLoading(true)
    let zones = await ZoneService.searchZones(search)
    applog.debug('Zones = ', zones)

    // Implement search from frontend
    if (search) {
      zones = zones.filter(zone =>
        zone.name.toLowerCase().includes(search.toLowerCase()),
      )
    }

    // Get only the 3 first, only for test purpose
    setZones(zones.slice(0, 3))
    setIsLoading(false)
  }
  const handleSearch = useCallback(
    debounce((value: string) => {
      searchZone(value)
    }, 500),
    [],
  )

  function addZone(zone: ZoneModel) {
    if (typeof onSelect === 'function') {
      onSelect(zone)
    }
  }

  useEffect(() => {
    searchZone('')
  }, [])

  useEffect(() => {
    return () => {
      handleSearch.cancel()
    }
  }, [handleSearch])

  return (
    <Dialog isActive>
      <DialogContent>
        <DialogHeader>Add Zone</DialogHeader>
        <DialogBody>
          <div className="is-hstack mb-4">
            <FieldLabel>Search</FieldLabel>
            <Input
              type="text"
              onChange={e => handleSearch(e.target.value)}
              placeholder="Search by zone name"
            ></Input>
          </div>

          {isLoading ? (
            <Loader />
          ) : (
            <>
              {zones.length === 0 ? (
                <EmptyCard
                  title="No zones"
                  icon="solar:confounded-square-outline"
                  description="Try to another search value"
                ></EmptyCard>
              ) : (
                <></>
              )}
              <div className="is-stack">
                {zones.map(zone => (
                  <ZoneCard zone={zone} key={zone.id}>
                    <CardActions>
                      <Button onClick={() => addZone(zone)}>Add</Button>
                    </CardActions>
                  </ZoneCard>
                ))}
              </div>
            </>
          )}
        </DialogBody>
      </DialogContent>
    </Dialog>
  )
}
