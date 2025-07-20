import InputAtom from "./InputAtom"

const LabelMolecule = ({item, separator, labelPosition='forward'}) => {

  return (
    <label className="flex mb-1">
      {labelPosition === 'forward' && 
        <p className="flex flex-1">
          {item.label} 
          {separator && <span className="px-2 ml-auto">{separator}</span>}
        </p>}
      <InputAtom type={item.type} {...item} />
      {labelPosition === 'back' && 
        <p className="flex flex-1">
          {separator && <span className="px-2 mr-auto">{separator}</span>}
          {item.label}
        </p>}
    </label>
  )
}

export default LabelMolecule