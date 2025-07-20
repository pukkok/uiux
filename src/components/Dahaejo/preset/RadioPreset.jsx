import { useState } from "react"
import RadioLabel from "@/components/custom/RadioLabel"

const RadioPreset = ({groupTitle, groups, options={}}) => {

  const [pick, setPick] = useState(options?.defaultValue)
  const handleChange = (e) => {
    setPick(e.target.value)
  }

  if (!options?.groupId) {
    throw new Error("RadioPreset 필수 옵션 'groupId'가 누락되었습니다.")
  }

  return (
    <fieldset>
      <legend>{groupTitle}</legend>

      {groups.map((item, idx) => {
        return (
          <RadioLabel 
            key={item.id || idx}
            label={item.label}
            groupId={options?.groupId}
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