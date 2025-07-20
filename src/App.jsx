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
      separator: ":",
    },
    groups: [
      { label: '수령인' },
      { label: '연락처' },
      { label: '주소' }
    ]
  },
  {
    preset: 'radio',
    title: '배송 방법',
    groupId: 'pickup',
    defaultValue: 'company',
    groups: [
      { label:"문 앞 배송", value: 'door' },
      { label: '경비실 배송', value:"guard" },
      { label: '회사 배송', value:"company" },
    ]
  }
]

const App = () => {

  return (
    <div className=" flex w-full h-screen items-center justify-center">
      <Dahaejo works={dummy1}/>
    </div>
  )
}

export default App