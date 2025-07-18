import { ConfirmEmailProps } from './emails/confirm-email'
import { WelcomeEmailProps } from './emails/welcome'

export type EmailTemplate =
  | {
      name: 'welcome'
      args: WelcomeEmailProps
    }
  | {
      name: 'confirm-email'
      args: ConfirmEmailProps
    }
  | {
      name: 'waitlist'
      args: {}
    }
