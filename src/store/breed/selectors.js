export function selectBreed(reduxState) {
  console.log(reduxState, "state in selector");

  return reduxState.breed;
}
