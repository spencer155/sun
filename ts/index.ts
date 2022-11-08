// // tsconfig
// const person1:string = '1234'

// console.log(person1)

enum PolicyStatus {
  ACCEPTED = 1,
  UNDERWRITE,
  POLICY_HESITATION_REVOKE
}
const PolicyStatusDesc: Record<PolicyStatus, string> = {
  [PolicyStatus.ACCEPTED]: '受理',
  [PolicyStatus.UNDERWRITE]: '承保',
  [PolicyStatus.POLICY_HESITATION_REVOKE]: '犹豫期退保',
}
type NumberKey<T = string> = { [key: number]: T }

const getOptions = (statusDesc:NumberKey) => {
  return Object.entries(statusDesc).map(([value, label]) => ({
    value: Number(value),
    label
  }))
}
const PolicyStatusDescAsOptions = getOptions(PolicyStatusDesc)

console.log(PolicyStatusDesc)
console.log(PolicyStatusDescAsOptions)