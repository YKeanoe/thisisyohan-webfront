import styled from '@/styled/index'
import { FormRow } from '@/styled/shared'
import { ISkill } from 'database/skills'
import { Formik, FormikState } from 'formik'
import * as Yup from 'yup'
import SelectInput from '../Controls/SelectInput'

const FormContainer = styled.div`
  display: flex;
  max-width: 40ch;
  width: 100%;
  margin-bottom: 20px;
`
const Form = styled.form`
  width: 100%;
`

interface SkillSearchFormValues {
  skill: string
}

interface Props {
  skills: ISkill[]
  onChange?: (values: any) => void
  onSubmit?: (
    values: SkillSearchFormValues,
    resetForm: (
      nextState: Partial<FormikState<SkillSearchFormValues>>
    ) => void
  ) => void
}

const validationSchema = Yup.object().shape({
  skill: Yup.object().nullable(),
})

const SkillSearchForm = ({ onSubmit, skills, onChange }: Props) => {
  const initialValues: SkillSearchFormValues = {
    skill: '',
  }

  const handleOnChange = (value: any) => {
    onChange(value)
  }

  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values, resetForm)
        }}
      >
        {() => (
          <Form>
            <FormRow style={{ marginBottom: 12 }}>
              <SelectInput
                name="skill"
                placeholder="Find expertise . . ."
                options={skills.map((v) => ({
                  label: v.label,
                  value: v.key,
                }))}
                isClearable={true}
                isDisabled={false}
                onChange={handleOnChange}
              />
            </FormRow>
          </Form>
        )}
      </Formik>
    </FormContainer>
  )
}

export default SkillSearchForm
