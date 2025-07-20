import { useState } from "react"
import CheckLabel from "@/components/custom/CheckLabel"

const CheckboxPreset = ({
  groupTitle,
  groups,
  options = {},
}) => {
  const initialSet = options?.useMultiple
    ? new Set(options?.defaultValues)
    : new Set([options?.defaultValue])

  const [picks, setPicks] = useState(initialSet)

  const handleChange = (e) => {
    const value = e.target.value

    if (options?.useMultiple) {
      const newPicks = new Set(picks)
      if (newPicks.has(value)) {
        newPicks.delete(value)
      } else {
        newPicks.add(value)
      }
      setPicks(newPicks)
    } else {
      // 단일 선택만 가능
      setPicks(new Set([value]))
    }
  }

  return (
    <fieldset>
      <legend>{groupTitle}</legend>

      {groups.map((item, idx) => (
        <CheckLabel
          key={item.id || idx}
          label={item.label}
          onChange={handleChange}
          value={item.value}
          picks={picks}
        />
      ))}
    </fieldset>
  )
}

export default CheckboxPreset
