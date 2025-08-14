import { insertRowPromise, yetAnotherOperationPromise } from "./main2";

function doSomethingPromise(param, param2) {
  // Simulate some asynchronous operation
  console.log(`Processing ${param} and ${param2}...`);
  return new Promise((res) =>
    setTimeout(() => {
      // Simulate some processing and return a result
      const processedData = {
        original: [param, param2],
        processed: `${param}_${param2}_processed`,
        timestamp: new Date().toISOString(),
      };

      // Call the callback with no error and the processed data
      res(processedData);
    }, 1000)
  );
}

function doMorePromise(paramx) {
  console.log("Doing more processing with:", paramx);
  return new Promise((res) =>
    setTimeout(() => {
      // Simulate additional processing
      const moreProcessedData = {
        ...paramx,
        additionalField: "enhanced_data",
        processingLevel: 2,
      };

      // Call the callback with no error and enhanced data
      res(moreProcessedData);
    }, 800)
  );
}

// Alternative: Modern approach using Promises/async-await
async function callDoSomething() {
  try {
    const paramx = await doSomethingPromise("actualParam1", "actualParam2");
    const result = await doMorePromise(paramx);
    await insertRowPromise(result);
    const x = await yetAnotherOperationPromise("actualSomeParameter");
    console.log("this is x", x);
  } catch (err) {
    console.error("Error:", err);
  }
}

callDoSomething();
