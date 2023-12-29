import GoogleIcon from "@/components/icons/GoogleIcon.vue"

export enum AuthStrategy {
  Google = "Google"
}

export const authStrategyIconRelated = {
  [AuthStrategy.Google]: GoogleIcon
}
