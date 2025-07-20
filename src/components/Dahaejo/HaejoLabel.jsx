import InputAtom from "./InputAtom"

const HaejoLabel = ({group, separator, labelPosition='forward'}) => {

  return (
    <label className="flex mb-1">
      {labelPosition === 'forward' && 
        <p className="flex flex-1">
          {group.label} 
          {separator && <span className="px-2 ml-auto">{separator}</span>}
        </p>
      }
      <InputAtom type={group.type} {...group} />
      {labelPosition === 'back' && 
        <p className="flex flex-1">
          {separator && <span className="px-2 mr-auto">{separator}</span>}
          {group.label}
        </p>
      }
    </label>
  )
}

export default HaejoLabel