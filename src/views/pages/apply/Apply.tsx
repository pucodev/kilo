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
import { useSearchParams } from 'react-router-dom'

export default function Apply() {
  const [searchParams] = useSearchParams()
  const selectedZone = Number(searchParams.get('zone') || 0)
  applog.debug('Selected Zone = ', selectedZone)

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
            {/* <Card style={{ maxWidth: '320px' }}> */}
            {/*   <CardImage className="is-16by9" /> */}
            {/*   <CardBody> */}
            {/*     <CardTitle>Name</CardTitle> */}
            {/*     <CardContent>Description</CardContent> */}
            {/*   </CardBody> */}
            {/**/}
            {/*   <CardActions> */}
            {/*     <Button outlined>Remove</Button> */}
            {/*   </CardActions> */}
            {/* </Card> */}
            {/**/}
            <Button
              outlined
              style={{
                borderStyle: 'dashed',
                borderWidth: '2px',
                width: '100%',
                maxWidth: '320px',
              }}
            >
              Add zone
            </Button>
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
    </div>
  )
}
