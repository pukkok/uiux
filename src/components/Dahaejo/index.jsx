import FieldPreset from './preset/FieldPreset'
import RadioPreset from './preset/RadioPreset'

const Dahaejo = ({ works }) => {

  return (
    <form className="">
      {works.map((work, idx) => {
        if(work.preset === 'field') {
          return (
            <FieldPreset 
              key={idx} 
              groupTitle={work.title}
              groups={work.groups}
              options={work.options}
            />
          )
        }
        if(work.preset === 'radio') {
          return (
            <RadioPreset 
              key={idx}
              groupId={work.groupId}
              groupTitle={work.title}
              groups={work.groups}
              defaultValue={work.defaultValue}
            />
          )
        }
        return <div key={idx}></div>
      })}
    </form>
  )
}

export default Dahaejo