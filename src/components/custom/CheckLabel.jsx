import InputAtom from "../InputAtom"
import CheckIcon from "./CheckIcon"

const CheckLabel = ({ value, onChange, label, picks = new Set() }) => {
  const isChecked = picks.has(value)

  return (
    <label className="flex items-center gap-2.5 cursor-pointer select-none my-2">
      <span
        className={`
          w-4 h-4 rounded-sm border-2
          flex items-center justify-center
          ${isChecked ? "bg-emerald-400 border-emerald-400" : "border-gray-400"}
        `}
      >
        {isChecked && <CheckIcon />}
      </span>
      <span className="text-base text-gray-800">{label}</span>
      <InputAtom hidden type="checkbox" onChange={onChange} value={value} />
    </label>
  )
}

export default CheckLabel
