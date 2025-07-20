import HaejoFieldset from './HaejoFieldset'

const Dahaejo = ({ works }) => {

  return (
    <form className="">
      {works.map((work, idx) => {
        if(work.preset === 'field') {
          return (
            <HaejoFieldset 
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