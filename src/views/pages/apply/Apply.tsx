import SelectZoneDialog from '@components/apply/SelectZoneDialog'
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
import { Field, FieldLabel } from '@pucoui/Field'
import { Input } from '@pucoui/Input'
import applog from '@utils/logger'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Apply() {
  const [searchParams] = useSearchParams()
  const selectedZone = Number(searchParams.get('zone') || 0)
  const [zones, setZones] = useState<ZoneModel[]>([])
  const [isShowDialog, setIsShowDialog] = useState(false)
  applog.debug('Selected Zone = ', selectedZone)

  function onAddZone(zone: ZoneModel) {
    // Do not add zone if is already on list
    if (!zones.some(item => item.id === zone.id)) {
      setZones(prev => [...prev, zone])
    }

    setIsShowDialog(false)
  }

  function removeZone(id: number) {
    setZones(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div>
      <h3 className="mb-4">Apply</h3>

      <div className="is-stack">
        <Field>
          <FieldLabel htmlFor="names">Names</FieldLabel>
          <Input id="names" type="text" placeholder="Insert names" />
        </Field>
        <Field>
          <FieldLabel>Zones</FieldLabel>
          <div className="is-hstack">
            {zones.map(zone => (
              <Card key={zone.id} style={{ maxWidth: '320px' }}>
                <CardImage src={zone.imageSrc} className="is-16by9" />
                <CardBody>
                  <CardTitle>{zone.name}</CardTitle>
                  <CardContent>{zone.description}</CardContent>
                </CardBody>

                <CardActions>
                  <Button
                    outlined
                    color="error"
                    onClick={() => removeZone(zone.id)}
                  >
                    Remove
                  </Button>
                </CardActions>
              </Card>
            ))}

            {zones.length < 3 ? (
              <Button
                outlined
                style={{
                  borderStyle: 'dashed',
                  borderWidth: '2px',
                  width: '100%',
                  maxWidth: '320px',
                }}
                onClick={() => setIsShowDialog(true)}
              >
                Add zone
              </Button>
            ) : (
              <></>
            )}
          </div>
        </Field>
        <Field>
          <FieldLabel htmlFor="names">Date (YYYY-MM-DD)</FieldLabel>
          <Input
            id="names"
            type="text"
            placeholder="Insert date format(YYYY-MM-DD)"
          />
        </Field>
        <Button>Apply</Button>
      </div>

      {isShowDialog ? (
        <SelectZoneDialog onSelect={onAddZone}></SelectZoneDialog>
      ) : (
        <></>
      )}
    </div>
  )
}
