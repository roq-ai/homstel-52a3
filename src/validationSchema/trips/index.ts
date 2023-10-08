import * as yup from 'yup';

export const tripValidationSchema = yup.object().shape({
  destination: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  user_id: yup.string().nullable().required(),
});
