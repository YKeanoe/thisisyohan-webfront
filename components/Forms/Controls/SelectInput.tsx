import { useField } from 'formik'
import styled from '@/styled/index'
import Select from 'react-select'
import { FormErrorMessage } from '@/styled/shared'

const Container = styled.div`
  .SelectInput__control {
    background: none;
    border: none;
    border-bottom: 1px solid white;
    border-radius: 0;
    box-shadow: none;

    &:hover {
      .SelectInput__dropdown-indicator {
        color: white;
      }

      .SelectInput__placeholder {
        color: white;
      }
    }
  }

  .SelectInput__dropdown-indicator {
    color: hsl(0, 0%, 60%);
  }

  .SelectInput__indicator-separator {
    display: none;
  }

  .SelectInput__clear-indicator {
    color: hsl(0, 0%, 80%);
    cursor: pointer;

    &:hover,
    &:active,
    &:focus {
      color: white;
    }
  }

  .SelectInput__placeholder {
    transition: color 150ms;
    color: hsl(0, 0%, 60%);
  }

  .SelectInput__single-value {
    color: white;
    font-weight: bold;
  }

  .SelectInput__input {
    color: white !important;
  }
`

interface Props {
  name: string
  placeholder?: string
  options: { value: string; label: string }[]
  isClearable: boolean
  isDisabled: boolean
  customError?: string
  isMulti?: boolean
  onChange?: (value: any) => void
}

const SelectInput = ({
  name,
  placeholder,
  options = [],
  isClearable = false,
  isDisabled = false,
  customError,
  isMulti,
  onChange,
}: Props) => {
  const [field, meta, helpers] = useField(name)

  const handleOnChange = (value) => {
    if (onChange) onChange(value)

    helpers.setTouched(true)
    helpers.setValue(value)
  }

  const hasError = () =>
    (meta.touched && meta.error && meta.error.length > 0) || !!customError

  return (
    <Container>
      <Select
        options={options}
        value={field.value}
        classNamePrefix={'SelectInput'}
        placeholder={placeholder}
        isDisabled={isDisabled}
        onChange={handleOnChange}
        isClearable={isClearable}
        isMulti={isMulti}
        onBlur={() => helpers.setTouched(true)}
      />
      <FormErrorMessage
        style={{
          display: hasError() && ' block',
        }}
      >
        {hasError() && (meta.error || customError)}
      </FormErrorMessage>
    </Container>
  )
}

export default SelectInput
