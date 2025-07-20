import InputAtom from "../InputAtom"

const RadioLabel = ({ label, groupId, pick, onChange, value }) => {

  return (
    <label className="flex items-center gap-2.5 cursor-pointer select-none my-2">
      <span
        className={`
          w-4 h-4 rounded-full border-2
          flex items-center justify-center
          ${value === pick ? 'border-emerald-400' : 'border-gray-400'}
        `}
      >
        {value === pick && ( <span className="w-2 h-2 bg-emerald-400 rounded-full" /> )}
      </span>
      <span className="text-base text-gray-800">{label}</span>
      <InputAtom hidden type="radio" name={groupId} onChange={onChange} value={value}/>
    </label>
  )
}

export default RadioLabel