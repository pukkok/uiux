import Dahaejo from "./components/DaHaejo"

const dummy1 = [
  {
    preset: 'field',
    title: '로그인 정보',
    options: {
      separator: ":",
      labelPosition: 'forward'
    },
    groups: [
      { label: '아이디', placeholder: '8자까지 입력' },
      { label: '비밀번호', placeholder: 'xxxxxxxx'}
    ]
  },
  {
    preset: 'field',
    title: '배송 정보',
    options: {
      separator: "-",
      labelPosition: 'back'
    },
    groups: [
      { label: '수령인' },
      { label: '연락처' },
      { label: '주소' }
    ]
  },
]

const dummy3 = [
  {
    preset: 'radio',
    title: '배송 방법',
    options: {
      groupId: 'pickup',
      defaultValue: 'company'
    },
    groups: [
      { label:"문 앞 배송", value: 'door' },
      { label: '경비실 배송', value:"guard" },
      { label: '회사 배송', value:"company" },
    ]
  },
]

const dummy2 = [
  {
    preset: 'checkbox',
    title: '단건 선택 가능',
    options: {
      useMultiple: false,
      defaultValue: 'company',
    },
    groups: [
      { label:"문 앞 배송", value: 'door' },
      { label: '경비실 배송', value:"guard" },
      { label: '회사 배송', value:"company" },
    ]
  },
  {
    preset: 'checkbox',
    title: '복수 선택 가능',
    options: {
      useMultiple: true,
      // defaultValues: ['company'],
    },
    groups: [
      { label:"문 앞 배송", value: 'door' },
      { label: '경비실 배송', value:"guard" },
      { label: '회사 배송', value:"company" },
    ]
  },
]

const App = () => {

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <div className="w-xs">
        <Dahaejo works={dummy1}/>
      </div>
      <div className="w-2xs border-emerald-300 border p-2">
        <Dahaejo works={dummy2}/>
      </div>
      <div className="w-2xs mt-2 border-emerald-300 border p-2">
        <Dahaejo works={dummy3}/>
      </div>
    </div>
  )
}

export default App