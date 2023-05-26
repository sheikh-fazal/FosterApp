import { OngoingEvent } from './ongoing-event'
import { FutureEvents } from './future-events'
import { EventHistory } from './event-history'
export const data = [
    {
      title: "Ongoing Event",
      component: <OngoingEvent />
    },
    {
      title: "Future Events",
      component: <FutureEvents />
    },
    {
      title: "Event History",
      component: <EventHistory />
    },
  ]

export {default as TrainingSessionsHome} from './TrainingSessionsHome'