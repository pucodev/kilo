import type ZoneModel from '@models/zone.model'
import { Card, CardBody, CardContent, CardImage, CardTitle } from '@pucoui/Card'

export default function ZoneCard({
  zone,
  children,
}: {
  zone: ZoneModel
  children: React.ReactNode
}) {
  return (
    <Card key={zone.id}>
      <CardImage src={zone.imageSrc} className="is-3by1" />
      <CardBody>
        <CardTitle>{zone.name}</CardTitle>
        <CardContent>{zone.description}</CardContent>
      </CardBody>

      {children}
    </Card>
  )
}
