import CheckboxPreset from './preset/CheckboxPreset'
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
              groupTitle={work.title}
              groups={work.groups}
              options={work.options}
            />
          )
        }
        if(work.preset === 'checkbox') {
          return (
            <CheckboxPreset 
              key={idx}
              groupTitle={work.title}
              groups={work.groups}
              options={work.options}
            />
          )
        }
        return <div key={idx}></div>
      })}
    </form>
  )
}

export default Dahaejo