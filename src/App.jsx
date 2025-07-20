import RadioButton from "./components/Custom/RadioGroup"
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
      { label: '비밀번호', }
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
  }
]

const useLabelDummys = [
  { label: '카드번호', placeholder: '000-0000-0000-000' },
  { label: '유효기간', type: 'date' },
  { label: 'CVC', type: 'number' },
  { label: '카드 소유자 이름' },
  { type: 'number', placeholder: '김치'},
  { label: '선택A', type: 'radio', name:'select'},
  { label: '선택B', type: 'radio', name:'select'},
  // { label: '선택A', type: 'checkbox'},
  // { label: '선택B', type: 'checkbox'},
]

const radioGroups = [
  { label: '여자', type: 'radio', name: 'gender'},
  { label: '남자', type: 'radio', name: 'gender'},
  { label: '중성', type: 'radio', name: 'gender'},
]

const App = () => {

  return (
    <div className=" flex w-full h-screen items-center justify-center">
      <Dahaejo works={dummy1}/>
    </div>
  )
}

export default App