import { useState } from "react"
import RadioLabel from "@/components/custom/RadioLabel"

const RadioPreset = ({groupTitle, groupId, groups, defaultValue=""}) => {

  const [pick, setPick] = useState(defaultValue)
  const handleChange = (e) => {
    setPick(e.target.value)
  }

  return (
    <fieldset>
      <legend>{groupTitle}</legend>

      {groups.map((item, idx) => {
        return (
          <RadioLabel 
            key={item.id || idx}
            label={item.label}
            groupId={groupId}
            onChange={handleChange}
            value={item.value}
            pick={pick}
          />
        )
      })}
    </fieldset>
  )
}

export default RadioPreset