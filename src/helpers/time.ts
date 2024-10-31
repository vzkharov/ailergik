const wait = async (time: number) =>
  new Promise(resolve => {
    setTimeout(resolve, time)
  })

export { wait }
