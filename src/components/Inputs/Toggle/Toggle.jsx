import { useState } from 'react'
import { Switch } from '@headlessui/react'

function Toggle() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`outline-none ${
        enabled ? 'bg-indigo-600' : 'bg-gray-200'
      } relative inline-flex items-center h-6 rounded-full w-11`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`transform transition ease-in-out duration-200 ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </Switch>
  )
}
 export default Toggle  