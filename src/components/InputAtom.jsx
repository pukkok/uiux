const InputAtom = ({type='text', name, placeholder, onChange, value, ref, ...props}) => {

  return (
    <input
      ref={ref}
      className="border-b border-b-gray-300 focus:outline-none focus:border-b-gray-400"
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...props}
    />
  )
}

export default InputAtom