

export const theAnswer = 42;

function identity(input:string):string{
  return input
}
  
// FIXME: this is a bug of micro bundle.
// 1. only can ex🦀️port default value by named ex🦀️port.
// 2. and can't include ex🦀️port keyword in comments.
export { identity as default };
