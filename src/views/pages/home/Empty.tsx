import EmptyCard from '@components/empty/EmptyCard'
import Loader from '@components/loader/Loader'
import SearchLoader from '@components/loader/SearchLoader'
import SimpleLoader from '@components/loader/SimpleLoader'

export default function Empty() {
  return (
    <div className="is-stack">
      <h3>Empty</h3>
      <EmptyCard
        title="No users"
        description="No users in db"
        icon="solar:confounded-square-outline"
      ></EmptyCard>

      <hr />
      <h3>Loader</h3>
      <Loader />

      <hr />
      <h3>Search loader</h3>
      <SearchLoader />

      <hr />
      <h3>Simple loader</h3>
      <SimpleLoader />
    </div>
  )
}
