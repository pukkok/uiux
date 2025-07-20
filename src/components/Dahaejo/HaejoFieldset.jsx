import HaejoLabel from "./HaejoLabel"

const HaejoFieldset = ({groupTitle, groups=[], options={}}) => {

  return (
    <fieldset className="border border-gray-300 p-3 rounded-md mb-4">
      <legend className="font-semibold text-sm px-1">{groupTitle}</legend>

      {groups.map((group, idx) => {
        return (
          <HaejoLabel 
            key={group.id || idx} 
            group={group}
            separator={options?.separator || ""}
            labelPosition={options?.labelPosition || 'forward'}
          />
        )
      })}
    </fieldset>
  )
}

export default HaejoFieldset