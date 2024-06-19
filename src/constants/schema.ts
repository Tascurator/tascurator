import { CONSTRAINTS } from '@/constants/constraints';
import { ERROR_MESSAGES } from '@/constants/error-messages';
import { z } from 'zod';

const {
  TASK_TITLE_MIN_LENGTH,
  TASK_TITLE_MAX_LENGTH,
  TASK_DESCRIPTION_MIN_LENGTH,
  TASK_DESCRIPTION_MAX_LENGTH,
  CATEGORY_NAME_MIN_LENGTH,
  CATEGORY_NAME_MAX_LENGTH,
} = CONSTRAINTS;

const { minLength, maxLength } = ERROR_MESSAGES;

/**
 * The schema for the task creation or update form
 */
export const taskCreationSchema = z.object({
  category: z
    .string()
    .min(
      CATEGORY_NAME_MIN_LENGTH,
      minLength('Category', CATEGORY_NAME_MIN_LENGTH),
    )
    .max(
      CATEGORY_NAME_MAX_LENGTH,
      maxLength('Category', CATEGORY_NAME_MAX_LENGTH),
    ),
  title: z
    .string()
    .min(TASK_TITLE_MIN_LENGTH, minLength('Title', TASK_TITLE_MIN_LENGTH))
    .max(TASK_TITLE_MAX_LENGTH, maxLength('Title', TASK_TITLE_MAX_LENGTH)),
  description: z
    .string()
    .min(
      TASK_DESCRIPTION_MIN_LENGTH,
      minLength('Description', TASK_DESCRIPTION_MIN_LENGTH),
    )
    .max(
      TASK_DESCRIPTION_MAX_LENGTH,
      maxLength('Description', TASK_DESCRIPTION_MAX_LENGTH),
    ),
});

export type TTaskCreationSchema = z.infer<typeof taskCreationSchema>;