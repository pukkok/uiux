import LabelMolecule from "@/components/LabelMolecule"

const FieldPreset = ({groupTitle, groups=[], options={}}) => {

  return (
    <fieldset className="border border-gray-300 p-3 rounded-md mb-4">
      <legend className="font-semibold text-sm px-1">{groupTitle}</legend>

      {groups.map((item, idx) => {
        return (
          <LabelMolecule 
            key={item.id || idx} 
            item={item}
            separator={options?.separator || ""}
            labelPosition={options?.labelPosition || 'forward'}
          />
        )
      })}
    </fieldset>
  )
}

export default FieldPreset