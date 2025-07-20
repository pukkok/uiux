import CheckboxPreset from './preset/CheckboxPreset'
import FieldPreset from './preset/FieldPreset'
import RadioPreset from './preset/RadioPreset'


/**
 * Dahaejo 유틸리티 폼 preset(field, radio, checkbox) 컨테이너
 *
 * ---
 * ## Preset 종류 및 옵션
 *
 * | preset      | 옵션 (options)                                                       |
 * |-------------|----------------------------------------------------------------------|
 * | `field`     | `separator` (string), `labelPosition` ('forward' \| 'back')           |
 * | `radio`     | `groupId` (string, **required**), `defaultValue` (string)             |
 * | `checkbox`  | `useMultiple` (boolean), `defaultValues` (array), `defaultValue` (string) |
 *
 * ---
 *
 * @param {Object[]} works - 각 preset 구성 정보
 * @param {'field'|'radio'|'checkbox'} works[].preset - 사용할 preset 종류
 * @param {string} works[].title - 그룹 제목
 * @param {Object[]} works[].groups - 입력 필드 리스트
 * @param {Object} [works[].options] - preset마다 다른 옵션 객체
 *
 * @returns {JSX.Element}
 */

const Dahaejo = ({ works }) => {

  const PRESET_MAP = {
    field: FieldPreset,
    radio: RadioPreset,
    checkbox: CheckboxPreset,
  }

  return (
    <form className="">
      {works.map((work, idx) => {
        const Preset = PRESET_MAP[work.preset]
        return Preset ? (
          <Preset
            key={idx}
            groupTitle={work.title}
            groups={work.groups}
            options={work.options}
          />
        ) : null
      })}
    </form>
  )
}

export default Dahaejo