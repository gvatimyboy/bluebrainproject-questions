async function incrementalTimeout() {
  const range = [...Array(100).keys()].map((i) => i + 1);
  for (const number of range) {
    const timeout = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(number);
      }, number * 1000);
    });
    console.log(timeout);
  }
}
incrementalTimeout();
